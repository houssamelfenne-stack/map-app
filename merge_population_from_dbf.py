import json
from pathlib import Path

import shapefile


WORKSPACE = Path(__file__).resolve().parent
GEO_PATH = WORKSPACE / 'communes.geojson'
SHP_PATH = WORKSPACE / 'populaion_commune.shp'
BACKUP_PATH = WORKSPACE / 'communes.geojson.backup.before_dbf_merge'


def to_num(value):
    if value is None:
        return None
    if isinstance(value, (int, float)):
        return float(value)
    text = str(value).strip()
    if not text:
        return None
    try:
        return float(text)
    except Exception:
        return None


def normalize_iso_to_key(iso_value):
    parts = str(iso_value or '').strip().split('-')
    if len(parts) < 4:
        return ''
    return ''.join(parts[1:4]).strip()


def normalize_dbf_code_to_key(code_value):
    raw = str(code_value or '').strip().strip('.')
    if not raw:
        return ''
    segments = [segment for segment in raw.split('.') if segment]
    return ''.join(segments)


def main():
    reader = shapefile.Reader(str(SHP_PATH))
    fields = [field[0] for field in reader.fields[1:]]
    index = {name: i for i, name in enumerate(fields)}

    required = ['Code_Commu', 'Populati_1', 'Marocains_', 'Etrangers_', 'Menages_']
    for column in required:
        if column not in index:
            raise RuntimeError(f'Missing required DBF field: {column}')

    dbf_by_key = {}
    for record in reader.records():
        key = normalize_dbf_code_to_key(record[index['Code_Commu']])
        if not key:
            continue
        dbf_by_key.setdefault(
            key,
            {
                'Populati_1': to_num(record[index['Populati_1']]),
                'Marocains_': to_num(record[index['Marocains_']]),
                'Etrangers_': to_num(record[index['Etrangers_']]),
                'Menages_': to_num(record[index['Menages_']]),
            },
        )

    with GEO_PATH.open('r', encoding='utf-8') as file_obj:
        geojson = json.load(file_obj)

    if not BACKUP_PATH.exists():
        BACKUP_PATH.write_text(GEO_PATH.read_text(encoding='utf-8'), encoding='utf-8')

    features = geojson.get('features', [])
    matched = 0
    updated_features = 0
    field_updates = {'Populati_1': 0, 'Marocains_': 0, 'Etrangers_': 0, 'Menages_': 0}

    for feature in features:
        properties = feature.get('properties', {})
        key = normalize_iso_to_key(properties.get('ISO'))
        if not key:
            continue
        dbf_row = dbf_by_key.get(key)
        if not dbf_row:
            continue

        matched += 1
        feature_changed = False

        for field_name in ['Populati_1', 'Marocains_', 'Etrangers_', 'Menages_']:
            new_value = dbf_row.get(field_name)
            if new_value is None:
                continue
            old_value = to_num(properties.get(field_name))
            if old_value is None or abs(old_value - new_value) > 1e-9:
                properties[field_name] = new_value
                field_updates[field_name] += 1
                feature_changed = True

        if feature_changed:
            updated_features += 1

    with GEO_PATH.open('w', encoding='utf-8') as file_obj:
        json.dump(geojson, file_obj, ensure_ascii=False)

    print('DBF records:', len(reader))
    print('GeoJSON features:', len(features))
    print('Matched by code:', matched)
    print('Updated features:', updated_features)
    print('Field updates:', field_updates)
    print('Backup:', BACKUP_PATH.name)


if __name__ == '__main__':
    main()
