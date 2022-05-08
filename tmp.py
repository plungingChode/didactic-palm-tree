import json

a = json.load(open('foursquare-places-result.json', 'r', encoding='utf-8'))
b = a['results']


transf = []
for res in b:
    transf.append({
        'name': res['name'],
        'tags': res['categories'],
        'lat': res['geocodes']['main']['latitude'],
        'lon': res['geocodes']['main']['longitude']
    })

with open('foursquare-filtered.json', 'w', encoding='utf-8') as f:
    f.write(json.dumps(transf, ensure_ascii=False))