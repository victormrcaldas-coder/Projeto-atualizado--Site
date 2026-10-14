"""Calcula os @font-face de fallback (size-adjust, ascent/descent/line-gap-override) das fontes do MeMotiva.

Uso:  pip install fonttools brotli
      python3 ferramentas/design/metricas-fallback.py && NODE_USE_ENV_PROXY=1 node ferramentas/design/baixar-fontes.mjs

Compara a largura média das letras num texto em português (frases reais do acervo) na nossa fonte e numa fonte
de sistema de métricas conhecidas. Liberation Serif e Liberation Sans têm as mesmas métricas de Times New Roman
e Arial, por isso servem de régua para os nomes locais declarados.
"""
import json, os, sys
from fontTools.ttLib import TTFont

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
FONTES = os.path.join(RAIZ, 'assets', 'fonts')
SISTEMA = '/usr/share/fonts/truetype/liberation/'
AMOSTRA = ('O correr da vida embrulha tudo, a vida é assim: esquenta e esfria, aperta e daí afrouxa, '
           'sossega e depois desinquieta. Liberdade é pouco. O que eu desejo ainda não tem nome. '
           'Ensinar não é transferir conhecimento, mas criar as possibilidades para a sua produção.')

PARES = [
    ('Literata Fallback', 'literata/literata-normal-latin.woff2', 'LiberationSerif-Regular.ttf', ['Times New Roman', 'Liberation Serif']),
    ('Ysabeau Office Fallback', 'ysabeau-office/ysabeau-office-normal-latin.woff2', 'LiberationSans-Regular.ttf', ['Arial', 'Liberation Sans', 'Helvetica']),
    ('Caveat Fallback', 'caveat/caveat-normal-latin.woff2', 'LiberationSans-Regular.ttf', ['Arial', 'Liberation Sans', 'Helvetica']),
]

def largura_media(font):
    upm = font['head'].unitsPerEm
    cmap, hmtx = font.getBestCmap(), font['hmtx']
    total = sum(hmtx[cmap[ord(c)]][0] for c in AMOSTRA if ord(c) in cmap)
    return total / len(AMOSTRA) / upm

def metricas(font):
    upm = font['head'].unitsPerEm
    hhea = font['hhea']
    return hhea.ascent / upm, abs(hhea.descent) / upm, hhea.lineGap / upm

saida = []
for nome, nossa, sistema, locais in PARES:
    a, b = TTFont(os.path.join(FONTES, nossa)), TTFont(os.path.join(SISTEMA, sistema))
    ajuste = largura_media(a) / largura_media(b)
    asc, desc, gap = metricas(a)
    saida.append({
        'nome': nome, 'locais': locais,
        'sizeAdjust': f'{ajuste * 100:.2f}%',
        'ascent': f'{asc / ajuste * 100:.2f}%', 'descent': f'{desc / ajuste * 100:.2f}%', 'lineGap': f'{gap / ajuste * 100:.2f}%',
    })
json.dump(saida, open(os.path.join(FONTES, 'metricas-fallback.json'), 'w'), indent=2, ensure_ascii=False)
print(json.dumps(saida, indent=1, ensure_ascii=False))
