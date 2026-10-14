# Gera a versão autocontida de uma página de design/ (guia, layout, protótipos de tela) para prints e para
# Artifact: CSS e scripts embutidos, fontes em data URI, fotos locais (o Artifact e o navegador automático
# não carregam o Wikimedia). Uso:
#   python3 ferramentas/design/pagina-autocontida.py design/prototipos/layout.html .trabalho/design/<etapa>/pagina [--artifact]
# --artifact tira <!doctype>/<head>/<body> (o Artifact põe o próprio esqueleto). As fotos vêm de
# .trabalho/design/01-direcao/pagina/fotos/ (baixadas no Portão 1); autor sem foto local fica com iniciais.
import base64, json, os, re, shutil, sys, unicodedata
RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
pag, SAIDA = sys.argv[1], os.path.join(RAIZ, sys.argv[2]); artifact = '--artifact' in sys.argv
FOTOS1 = os.path.join(RAIZ, '.trabalho/design/01-direcao/pagina/fotos')
os.makedirs(SAIDA, exist_ok=True)
ler = lambda p: open(os.path.join(RAIZ, p), encoding='utf-8').read()
html = ler(pag)
def fonte_inline(m):
    return "url('data:font/woff2;base64," + base64.b64encode(open(os.path.join(RAIZ, 'assets/css', m.group(1)), 'rb').read()).decode() + "')"
html = re.sub(r'<link rel="preload"[^>]*>\n', '', html)
def css(m):
    c = ler('assets/css/' + m.group(1))
    if m.group(1) == '00-fontes.css':
        c = re.sub(r"url\('(\.\./fonts/[^']+)'\)", fonte_inline, c)
    return '<style>\n' + c + '\n</style>'
html = re.sub(r'<link rel="stylesheet" href="(?:\.\./)+assets/css/([^"]+)">', css, html)
slug = lambda s: re.sub(r'^-|-$', '', re.sub(r'[^a-z0-9]+', '-', ''.join(c for c in unicodedata.normalize('NFD', s) if not unicodedata.combining(c)).lower()))
amostra = ler('design/prototipos/amostra.js')
dados = json.loads(amostra[amostra.index('{'):amostra.rindex('}') + 1])
os.makedirs(os.path.join(SAIDA, 'fotos'), exist_ok=True)
faltam = []
for nome, a in dados['autores'].items():
    if not a['foto']: continue
    f = os.path.join(FOTOS1, slug(nome) + '.jpg')
    if os.path.exists(f): shutil.copy(f, os.path.join(SAIDA, 'fotos'))
    else: faltam.append(nome); a['foto'] = None
novo = amostra[:amostra.index('{')] + json.dumps(dados, ensure_ascii=False) + ';\n'
for nome in ['amostra', 'comum', 'sistema']:
    alvo = re.search(r'<script src="(?:prototipos/)?%s\.js"></script>' % nome, html)
    if not alvo: continue
    corpo = ('window.FOTOS_LOCAIS = true;\n' + novo) if nome == 'amostra' else ler(f'design/prototipos/{nome}.js')
    html = html.replace(alvo.group(0), '<script>\n' + corpo + '</script>')
assert '../assets' not in html and 'src="' + 'prototipos' not in html, 'sobrou caminho'
if artifact:
    html = re.sub(r'<!doctype html>\n<html[^>]*>\n<head>\n<meta charset="utf-8">\n<meta name="viewport"[^>]*>\n', '', html)
    html = re.sub(r'(<title>[^<]*</title>)', r'\1\n<meta name="claude:viewport-fit-sides" content="cover">', html, count=1)
    html = html.replace('</head>\n<body>\n', '', 1).replace('</body>\n</html>', '')
    assert html.startswith('<title>'), html[:60]
nome = os.path.basename(pag).replace('.html', '-artifact.html' if artifact else '.html')
open(os.path.join(SAIDA, nome), 'w', encoding='utf-8').write(html)
print(nome, len(html) // 1024, 'KB; fotos que faltaram:', faltam)
