const path = require('path');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = Number(process.env.PORT) || 8000;

const AZURE_OPENAI_API_KEY = process.env.AZURE_OPENAI_API_KEY || '';
const AZURE_OPENAI_ENDPOINT = (process.env.AZURE_OPENAI_ENDPOINT || '').replace(/\/$/, '');
const AZURE_OPENAI_DEPLOYMENT = process.env.AZURE_OPENAI_DEPLOYMENT || '';
const AZURE_OPENAI_API_VERSION = process.env.AZURE_OPENAI_API_VERSION || '2024-10-21';

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.static(__dirname));

function hasAzureConfig() {
  return !!(AZURE_OPENAI_API_KEY && AZURE_OPENAI_ENDPOINT && AZURE_OPENAI_DEPLOYMENT);
}

function buildSystemPrompt() {
  return [
    'You are an expert public-health and demographic analyst specialized in Morocco.',
    'Always answer in Arabic or French depending on user language.',
    'Primary scope: RGPH and demographic indicators, offer of care in Morocco, and WHO/OMS public health programs.',
    'Provide scientific reasoning: define indicator, interpret value, note limitations, and propose evidence-based actions.',
    'When relevant, structure as: Summary, Key Indicators, Interpretation, Recommendations, Sources.',
    'Never invent data. If uncertain, clearly state uncertainty and ask for missing context (period, region, indicator).'
  ].join(' ');
}

function inferTopic(question = '') {
  const q = String(question).toLowerCase();
  if (/population|demograph|rgph|recensement|marocains|etrangers|menages|سكان|ساكنة|تعداد|احص/.test(q)) return 'demography';
  if (/offre|soins|reseau|etablissement|carte sanitaire|عرض|شبكة|مؤسسات|خريطة/.test(q)) return 'care-offer';
  if (/oms|who|programme|sante publique|prevention|epidemi|منظمة الصحة العالمية|وقاية|صحة عمومية/.test(q)) return 'oms';
  return 'general';
}

function buildSourcesForTopic(topic, language = 'ar') {
  const ministry = language === 'fr'
    ? 'Ministere de la Sante et de la Protection Sociale - Maroc'
    : 'وزارة الصحة والحماية الاجتماعية - المغرب';
  const sources = ['HCP - RGPH 2024', ministry, 'OMS/WHO'];
  if (topic === 'care-offer') sources.unshift(language === 'fr' ? 'Carte sanitaire / offre de soins - Maroc' : 'الخريطة الصحية / العرض الصحي - المغرب');
  return sources;
}

function buildLocalScientificAnswer(question, language, context = {}) {
  const langFr = language === 'fr';
  const rgph = context.rgph2024 || {};
  const totalPopulation = Number(rgph.totalPopulation || 36828330).toLocaleString('en-US');
  const moroccans = Number(rgph.moroccans || 36680178).toLocaleString('en-US');
  const foreigners = Number(rgph.foreigners || 148152).toLocaleString('en-US');
  const households = Number(rgph.households || 9275038).toLocaleString('en-US');
  const institutions = Number(context.totalInstitutions || 0).toLocaleString('en-US');

  if (langFr) {
    return [
      `Analyse scientifique de la question: ${question}`,
      '',
      `Indicateurs de base (RGPH 2024): population=${totalPopulation}, marocains=${moroccans}, etrangers=${foreigners}, menages=${households}.`,
      `Capacite observee dans la plateforme: etablissements=${institutions}.`,
      'Interpretation: precisez echelle geographique, periode et indicateur cible pour une analyse comparative plus robuste.',
      'Sources recommandees: HCP-RGPH, Ministere de la Sante, OMS.'
    ].join('\n');
  }

  return [
    `تحليل علمي للسؤال: ${question}`,
    '',
    `مؤشرات مرجعية (RGPH 2024): السكان=${totalPopulation}، المغاربة=${moroccans}، الأجانب=${foreigners}، الأسر=${households}.`,
    `القدرة المرصودة في المنصة: المؤسسات=${institutions}.`,
    'التفسير: حدّد النطاق الجغرافي، الفترة، والمؤشر المستهدف لإخراج مقارنة أكثر صرامة.',
    'المصادر المقترحة: HCP-RGPH، وزارة الصحة، OMS.'
  ].join('\n');
}

async function callAzureOpenAI({ question, language, context, expertMode }) {
  const url = `${AZURE_OPENAI_ENDPOINT}/openai/deployments/${AZURE_OPENAI_DEPLOYMENT}/chat/completions?api-version=${encodeURIComponent(AZURE_OPENAI_API_VERSION)}`;

  const body = {
    temperature: 0.2,
    max_tokens: 600,
    messages: [
      {
        role: 'system',
        content: buildSystemPrompt()
      },
      {
        role: 'user',
        content: [
          `Language: ${language === 'fr' ? 'francais' : 'arabe'}`,
          `Expert mode: ${expertMode ? 'on' : 'off'}`,
          expertMode ? 'Depth instruction: provide deeper analytical reasoning, assumptions, and practical policy recommendations.' : '',
          context ? `Context: ${JSON.stringify(context)}` : '',
          `Question: ${question}`
        ].filter(Boolean).join('\n')
      }
    ]
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'api-key': AZURE_OPENAI_API_KEY
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Azure OpenAI error (${response.status}): ${errorText}`);
  }

  const result = await response.json();
  return result?.choices?.[0]?.message?.content?.trim() || '';
}

app.post('/api/chat', async (req, res) => {
  try {
    const question = String(req.body?.question || '').trim();
    const language = req.body?.language === 'fr' ? 'fr' : 'ar';
    const expertMode = !!req.body?.expertMode;
    const context = req.body?.context && typeof req.body.context === 'object' ? req.body.context : null;
    const topic = inferTopic(question);
    const sources = buildSourcesForTopic(topic, language);

    if (!question) {
      return res.status(400).json({ ok: false, error: 'Question is required.' });
    }

    if (!hasAzureConfig()) {
      const answer = buildLocalScientificAnswer(question, language, context || {});
      return res.json({ ok: true, answer, source: 'local-server', sources });
    }

    try {
      const answer = await callAzureOpenAI({ question, language, context, expertMode });
      return res.json({ ok: true, answer, source: 'azure-openai', sources });
    } catch (azureError) {
      const fallbackAnswer = buildLocalScientificAnswer(question, language, context || {});
      return res.json({ ok: true, answer: fallbackAnswer, source: 'local-server-fallback', sources });
    }
  } catch (error) {
    console.error('POST /api/chat failed:', error);
    return res.status(500).json({ ok: false, error: 'Cloud chat request failed.' });
  }
});

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    chatAvailable: true,
    azureConfigured: hasAzureConfig()
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
