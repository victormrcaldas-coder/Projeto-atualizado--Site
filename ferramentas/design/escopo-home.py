# Gera assets/css/telas/home-site.css: o sistema novo (02-base, 03-componentes) e a home (telas/home.css)
# valendo só dentro de #view-home. As outras telas continuam com memotiva.css até a etapa de cada uma.
# Cada seletor ganha o prefixo "#view-home ", o que também faz o estilo novo vencer o antigo na home.
# "body" vira o próprio #view-home; regras de "html" e de "main" ficam de fora (são da página toda).
# @keyframes saem sem prefixo. Uso: python3 ferramentas/design/escopo-home.py  (rode depois de mudar
# qualquer um dos três arquivos de origem; o arquivo gerado não se edita à mão).
import os, re

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
ORIGENS = ['assets/css/02-base.css', 'assets/css/03-componentes.css', 'assets/css/telas/home.css']
SAIDA = 'assets/css/telas/home-site.css'
ESCOPO = '#view-home'


def blocos(css):
    """Divide o CSS em itens de topo: ('comentario', txt), ('regra', seletor, corpo), ('at', prelúdio, corpo)."""
    i, n, itens = 0, len(css), []
    while i < n:
        if css[i].isspace():
            i += 1
            continue
        if css.startswith('/*', i):
            j = css.index('*/', i) + 2
            itens.append(('comentario', css[i:j]))
            i = j
            continue
        j = css.index('{', i)
        cabeca = css[i:j].strip()
        prof, k = 1, j + 1
        while prof:
            if css.startswith('/*', k):
                k = css.index('*/', k) + 2
                continue
            if css[k] == '{':
                prof += 1
            elif css[k] == '}':
                prof -= 1
            k += 1
        corpo = css[j + 1 : k - 1]
        itens.append(('at' if cabeca.startswith('@') else 'regra', cabeca, corpo))
        i = k
    return itens


def separar(seletores):
    """Separa a lista de seletores nas vírgulas de topo (não nas de :is(), :not() etc.)."""
    partes, prof, atual = [], 0, ''
    for c in seletores:
        if c in '([':
            prof += 1
        elif c in ')]':
            prof -= 1
        if c == ',' and prof == 0:
            partes.append(atual.strip())
            atual = ''
        else:
            atual += c
    partes.append(atual.strip())
    return [p for p in partes if p]


def prefixar(seletor):
    s = re.sub(r'/\*.*?\*/', '', seletor, flags=re.S).strip()
    if re.match(r'^(html|main)\b', s):
        return None
    if re.match(r'^body\b', s):
        return ESCOPO + s[4:]
    return ESCOPO + ' ' + s


def transformar(itens, recuo=''):
    saida, fora = [], []
    for it in itens:
        if it[0] == 'comentario':
            saida.append(recuo + it[1])
        elif it[0] == 'regra':
            novos = [x for x in (prefixar(s) for s in separar(it[1])) if x]
            if novos:
                saida.append(recuo + (',\n' + recuo).join(novos) + ' {' + it[2].rstrip() + '\n' + recuo + '}')
        elif it[1].startswith('@keyframes'):
            fora.append(it[1] + ' {' + it[2].rstrip() + '\n}')
        else:
            dentro, f = transformar(blocos(it[2]), recuo + '  ')
            fora += f
            if dentro.strip():
                saida.append(recuo + it[1] + ' {\n' + dentro + '\n' + recuo + '}')
    return '\n'.join(saida), fora


partes, todos_fora = [], []
for origem in ORIGENS:
    with open(os.path.join(RAIZ, origem), encoding='utf-8') as f:
        txt, fora = transformar(blocos(f.read()))
    partes.append(f'/* ==================== {origem} ==================== */\n' + txt)
    todos_fora += fora
cabecalho = (
    '/* GERADO por ferramentas/design/escopo-home.py a partir de ' + ', '.join(ORIGENS) + '.\n'
    '   Não edite aqui: mude a origem e rode o script de novo. Vale só dentro de #view-home. */\n'
)
with open(os.path.join(RAIZ, SAIDA), 'w', encoding='utf-8') as f:
    f.write(cabecalho + '\n\n'.join(partes) + '\n\n' + '\n'.join(todos_fora) + '\n')
print(SAIDA, os.path.getsize(os.path.join(RAIZ, SAIDA)) // 1024, 'KB')
