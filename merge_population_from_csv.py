import csv
import json
from pathlib import Path


WORKSPACE = Path(__file__).resolve().parent
GEOJSON_PATH = WORKSPACE / 'communes.geojson'
CSV_PATH = Path(r'c:/Users/houss/Downloads/pop 2024.csv')
BACKUP_PATH = WORKSPACE / 'communes.geojson.backup.before_csv_merge'


def parse_number(value):
    text = str(value or '').strip()
    if not text:
        return None
    cleaned = (
        text.replace('\u00a0', '')
        .replace(' ', '')
        .replace(',', '.')
    )
    try:
        number = float(cleaned)
    except Exception:
        return None
    if not number.is_integer():
        return None
    return int(number)


def geo_iso_to_key(iso_value):
    parts = str(iso_value or '').strip().split('-')
    if len(parts) < 4:
        return ''
    region = parts[1].zfill(2)
    province = parts[2].zfill(3)
    commune = parts[3].zfill(4)
    return f'{region}{province}{commune}'


def csv_code_to_key(code_value):
    raw = str(code_value or '').strip().strip('.')
    if not raw:
        return ''
    segments = [segment.strip() for segment in raw.split('.') if segment.strip()]
    if len(segments) != 4:
        return ''
    if not all(segment.isdigit() for segment in segments):
        return ''

    region = segments[0].zfill(2)
    province = segments[1].zfill(3)
    district = segments[2].zfill(2)
    commune = segments[3].zfill(2)
    return f'{region}{province}{district}{commune}'


def load_csv_rows():
    rows = []
    with CSV_PATH.open('r', encoding='utf-8-sig', newline='') as file_obj:
        reader = csv.reader(file_obj, delimiter=';')
        all_rows = list(reader)

    if len(all_rows) < 3:
        return rows

    for row in all_rows[2:]:
        if len(row) < 7:
            continue
        label = str(row[0] or '').strip()
        label_lc = label.lower()
        is_commune_level = (
            label_lc.startswith('commune')
            or label_lc.startswith('arrondissement')
            or ('جماعة' in label)
            or ('مقاطعة' in label)
        )
        if not is_commune_level:
            continue

        key = csv_code_to_key(row[6])
        if not key:
            continue
        entry = {
            'key': key,
            'label': label,
            'moroccans': parse_number(row[1]),
            'foreigners': parse_number(row[2]),
            'population': parse_number(row[3]),
            'households': parse_number(row[4]),
            'raw_code': str(row[6] or '').strip(),
        }
        rows.append(entry)
    return rows


def main():
    if not CSV_PATH.exists():
        raise FileNotFoundError(f'CSV not found: {CSV_PATH}')

    with GEOJSON_PATH.open('r', encoding='utf-8') as file_obj:
        geojson = json.load(file_obj)

    if not BACKUP_PATH.exists():
        BACKUP_PATH.write_text(GEOJSON_PATH.read_text(encoding='utf-8'), encoding='utf-8')

    features = geojson.get('features', [])
    by_key = {}
    for feature in features:
        props = feature.get('properties', {})
        key = geo_iso_to_key(props.get('ISO'))
        if key:
            by_key[key] = props

    csv_rows = load_csv_rows()

    matched = 0
    updated_features = 0
    field_updates = {
        'Populati_1': 0,
        'Marocains_': 0,
        'Etrangers_': 0,
        'Menages_': 0,
    }

    for row in csv_rows:
        props = by_key.get(row['key'])
        if not props:
            continue

        matched += 1
        changed = False
        mapping = {
            'Populati_1': row['population'],
            'Marocains_': row['moroccans'],
            'Etrangers_': row['foreigners'],
            'Menages_': row['households'],
        }

        for field_name, new_value in mapping.items():
            if new_value is None:
                continue
            old_value = parse_number(props.get(field_name))
            if old_value != new_value:
                props[field_name] = float(new_value)
                field_updates[field_name] += 1
                changed = True

        if changed:
            updated_features += 1

    with GEOJSON_PATH.open('w', encoding='utf-8') as file_obj:
        json.dump(geojson, file_obj, ensure_ascii=False)

    # Optional sanity: Rabat prefecture code 421 coverage
    rabat_total = 0
    rabat_with_population = 0
    for feature in features:
        props = feature.get('properties', {})
        iso = str(props.get('ISO') or '')
        parts = iso.split('-')
        province = parts[2].zfill(3) if len(parts) >= 3 else ''
        if province != '421':
            continue
        rabat_total += 1
        if parse_number(props.get('Populati_1')) is not None:
            rabat_with_population += 1

    print('CSV commune-level rows:', len(csv_rows))
    print('GeoJSON features:', len(features))
    print('Matched by key:', matched)
    print('Updated features:', updated_features)
    print('Field updates:', field_updates)
    print('Rabat communes with population:', f'{rabat_with_population}/{rabat_total}')
    print('Backup:', BACKUP_PATH.name)


if __name__ == '__main__':
    main()
