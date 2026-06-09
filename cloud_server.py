import json
import os
import re
import urllib.error
import urllib.request
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


def load_env_file(path=".env"):
    if not os.path.exists(path):
        return
    with open(path, "r", encoding="utf-8") as f:
        for raw_line in f:
            line = raw_line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if key and key not in os.environ:
                os.environ[key] = value


def normalize_text(value):
    return str(value or "").strip().lower()


def format_int(value):
    try:
        return f"{int(round(float(value))):,}".replace(",", " ")
    except Exception:
        return str(value)


def infer_topic(q):
    if re.search(r"population|demograph|rgph|recensement|marocains|etrangers|menages|سكان|ساكنة|تعداد|احص", q):
        return "demography"
    if re.search(r"offre|soins|reseau|etablissement|carte sanitaire|عرض|شبكة|مؤسسات|خريطة", q):
        return "care-offer"
    if re.search(r"oms|who|programme|sante publique|promotion|prevention|epidemi|منظمة الصحة العالمية|وقاية|صحة عمومية", q):
        return "oms"
    return "general"


def build_sources_for_topic(topic, language):
    ministry = "Ministere de la Sante et de la Protection Sociale - Maroc" if language == "fr" else "وزارة الصحة والحماية الاجتماعية - المغرب"
    sources = ["HCP - RGPH 2024", ministry, "OMS/WHO"]
    if topic == "care-offer":
        sources.insert(0, "Carte sanitaire / offre de soins - Maroc" if language == "fr" else "الخريطة الصحية / العرض الصحي - المغرب")
    return sources


def build_local_scientific_answer(question, language, context):
    lang_fr = language == "fr"
    topic = infer_topic(normalize_text(question))

    rgph = (context or {}).get("rgph2024", {})
    total_pop = format_int(rgph.get("totalPopulation", 36828330))
    mor = format_int(rgph.get("moroccans", 36680178))
    frg = format_int(rgph.get("foreigners", 148152))
    hhs = format_int(rgph.get("households", 9275038))
    total_est = format_int((context or {}).get("totalInstitutions", 0))

    if topic == "demography":
        return (
            f"Analyse scientifique de votre question:\n{question}\n\n"
            f"- Population totale (RGPH 2024): {total_pop}\n"
            f"- Marocains: {mor}\n- Etrangers: {frg}\n- Menages: {hhs}\n\n"
            "Interpretation: precisez l echelle (Maroc/region/province) et l indicateur cible "
            "(volume, taux, densite, tendance) pour une analyse plus robuste.\n"
            "Sources: HCP-RGPH, Ministere de la Sante, OMS."
        ) if lang_fr else (
            f"تحليل علمي لسؤالك:\n{question}\n\n"
            f"- إجمالي السكان (RGPH 2024): {total_pop}\n"
            f"- المغاربة: {mor}\n- الأجانب: {frg}\n- الأسر: {hhs}\n\n"
            "تفسير: حدّد النطاق (المغرب/الجهة/الإقليم) والمؤشر المطلوب "
            "(حجم، نسبة، كثافة، اتجاه زمني) لتحليل أدق.\n"
            "المصادر: HCP-RGPH، وزارة الصحة، OMS."
        )

    if topic == "care-offer":
        return (
            f"Lecture scientifique de l offre de soins:\n"
            f"- Etablissements recenses dans la plateforme: {total_est}\n\n"
            "Approche recommandee: relier l offre aux besoins (population, accessibilite, niveau de soins), "
            "puis calculer des indicateurs d equite territoriale et de couverture."
        ) if lang_fr else (
            f"قراءة علمية للعرض الصحي:\n"
            f"- المؤسسات المحصاة داخل المنصة: {total_est}\n\n"
            "المنهج الموصى به: ربط العرض الصحي بالاحتياج (السكان، الولوج، مستوى الخدمة)، "
            "ثم حساب مؤشرات الإنصاف المجالي والتغطية."
        )

    if topic == "oms":
        return (
            "Axes OMS prioritaires: CSU/UHC, sante maternelle et infantile, vaccination, MNT, sante mentale, "
            "surveillance epidemiologique.\n"
            "Pour une analyse operationnelle: fixer baseline, cibles annuelles, budget et indicateurs de suivi."
        ) if lang_fr else (
            "محاور OMS الأساسية: التغطية الصحية الشاملة، صحة الأم والطفل، التلقيح، الأمراض غير السارية، "
            "الصحة النفسية، والترصد الوبائي.\n"
            "للتحليل التنفيذي: تحديد خط أساس، أهداف سنوية، ميزانية، ومؤشرات تتبع."
        )

    return (
        "Je peux repondre de maniere scientifique en sante publique. Precisez: domaine, echelle geographique, "
        "periode et indicateur cible."
    ) if lang_fr else (
        "يمكنني الإجابة بشكل علمي في الصحة العمومية. حدّد المجال، النطاق الجغرافي، الفترة، والمؤشر المطلوب."
    )


def get_azure_config():
    endpoint = os.environ.get("AZURE_OPENAI_ENDPOINT", "").rstrip("/")
    deployment = os.environ.get("AZURE_OPENAI_DEPLOYMENT", "")
    api_key = os.environ.get("AZURE_OPENAI_API_KEY", "")
    api_version = os.environ.get("AZURE_OPENAI_API_VERSION", "2024-10-21")
    return endpoint, deployment, api_key, api_version


def has_azure_config():
    endpoint, deployment, api_key, _ = get_azure_config()
    return bool(endpoint and deployment and api_key)


def call_azure_chat(question, language, context, expert_mode):
    endpoint, deployment, api_key, api_version = get_azure_config()
    url = f"{endpoint}/openai/deployments/{deployment}/chat/completions?api-version={api_version}"

    system_prompt = (
        "You are an expert public-health and demographic analyst specialized in Morocco. "
        "Answer in Arabic or French only. Provide scientific reasoning, indicator interpretation, "
        "limits, and practical recommendations. Avoid fabrication."
    )

    payload = {
        "temperature": 0.2,
        "max_tokens": 700,
        "messages": [
            {"role": "system", "content": system_prompt},
            {
                "role": "user",
                "content": "\n".join([
                    f"Language: {'francais' if language == 'fr' else 'arabe'}",
                    f"Expert mode: {'on' if expert_mode else 'off'}",
                    f"Context: {json.dumps(context or {}, ensure_ascii=False)}",
                    f"Question: {question}",
                ])
            }
        ]
    }

    req = urllib.request.Request(
        url,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "Content-Type": "application/json",
            "api-key": api_key,
        },
        method="POST",
    )

    with urllib.request.urlopen(req, timeout=30) as response:
        body = response.read().decode("utf-8")
        data = json.loads(body)
        return ((data.get("choices") or [{}])[0].get("message") or {}).get("content", "").strip()


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def _send_json(self, status, payload):
        raw = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(raw)))
        self.end_headers()
        self.wfile.write(raw)

    def do_GET(self):
        if self.path == "/api/health":
            self._send_json(200, {
                "ok": True,
                "chatAvailable": True,
                "azureConfigured": has_azure_config(),
            })
            return
        return super().do_GET()

    def do_POST(self):
        if self.path != "/api/chat":
            self._send_json(404, {"ok": False, "error": "Not found"})
            return

        length = int(self.headers.get("Content-Length", "0") or 0)
        raw = self.rfile.read(length).decode("utf-8") if length > 0 else "{}"

        try:
            body = json.loads(raw or "{}")
        except json.JSONDecodeError:
            self._send_json(400, {"ok": False, "error": "Invalid JSON"})
            return

        question = str(body.get("question") or "").strip()
        language = "fr" if body.get("language") == "fr" else "ar"
        context = body.get("context") if isinstance(body.get("context"), dict) else {}
        expert_mode = bool(body.get("expertMode"))
        topic = infer_topic(normalize_text(question))
        sources = build_sources_for_topic(topic, language)

        if not question:
            self._send_json(400, {"ok": False, "error": "Question is required."})
            return

        if has_azure_config():
            try:
                answer = call_azure_chat(question, language, context, expert_mode)
                if answer:
                    self._send_json(200, {"ok": True, "answer": answer, "source": "azure-openai", "sources": sources})
                    return
            except (urllib.error.URLError, TimeoutError, ValueError):
                pass

        answer = build_local_scientific_answer(question, language, context)
        self._send_json(200, {"ok": True, "answer": answer, "source": "local-server", "sources": sources})


def main():
    load_env_file(".env")
    port = int(os.environ.get("PORT", "8000"))
    server = ThreadingHTTPServer(("0.0.0.0", port), Handler)
    print(f"Cloud-ready server running at http://localhost:{port}")
    server.serve_forever()


if __name__ == "__main__":
    main()
