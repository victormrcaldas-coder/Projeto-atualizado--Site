# Gera o CSS das telas já redesenhadas: o sistema novo (02-base, 03-componentes) e o CSS da tela,
# valendo só dentro do escopo dela. As outras telas continuam com memotiva.css até a etapa de cada uma.
# Cada seletor ganha o prefixo do escopo, o que também faz o estilo novo vencer o antigo ali.
# "body" vira o próprio escopo; regras de "html" e de "main" ficam de fora (são da página toda).
# Quando o escopo é a própria janela (#quoteExpand.expand-overlay), o seletor que começa pela classe
# dela ganha também a forma colada ("#quoteExpand.expand-overlay.show").
# @keyframes saem sem prefixo. Uso: python3 ferramentas/design/escopo.py  (rode depois de mudar
# qualquer arquivo de origem; os arquivos gerados não se editam à mão).
import os, re

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
SISTEMA = ['assets/css/02-base.css', 'assets/css/03-componentes.css']
ALVOS = [
    # Etapa 4: a home
    {'saida': 'assets/css/telas/home-site.css', 'escopo': '#view-home', 'raizes': [],
     'origens': SISTEMA + ['assets/css/telas/home.css']},
    # Etapa 5: o Explorar, as janelas da frase e da fotografia (abertas de qualquer tela) e as grades de
    # cartões de frase de qualquer tela (autor, obra, favoritos do perfil)
    {'saida': 'assets/css/telas/frase-site.css',
     'escopo': ':is(#view-explorar, #quoteExpand, #photoExpand, .quote-grid)',
     'raizes': [('.expand-overlay', ':is(#quoteExpand, #photoExpand)'), ('.quote-grid', '')],
     'origens': SISTEMA + ['assets/css/telas/cabeca.css', 'assets/css/telas/frase.css']},
    # Etapa 6: Autores & Obras, a página do autor (panorama) e a página da obra
    {'saida': 'assets/css/telas/autores-site.css', 'escopo': ':is(#view-autores, #view-panorama, #view-obra)',
     'raizes': [], 'origens': SISTEMA + ['assets/css/telas/cabeca.css', 'assets/css/telas/autores.css']},
]


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


def prefixar(seletor, alvo):
    s = re.sub(r'/\*.*?\*/', '', seletor, flags=re.S).strip()
    if re.match(r'^(html|main)\b', s):
        return []
    if re.match(r'^body\b', s):
        return [alvo['escopo'] + s[4:]]
    novos = [alvo['escopo'] + ' ' + s]
    for classe, raiz in alvo['raizes']:
        if re.match(re.escape(classe) + r'(?![\w-])', s):
            novos.append(raiz + s)
    return novos


def transformar(itens, alvo, recuo=''):
    saida, fora = [], []
    for it in itens:
        if it[0] == 'comentario':
            saida.append(recuo + it[1])
        elif it[0] == 'regra':
            novos = [x for s in separar(it[1]) for x in prefixar(s, alvo)]
            if novos:
                saida.append(recuo + (',\n' + recuo).join(novos) + ' {' + it[2].rstrip() + '\n' + recuo + '}')
        elif it[1].startswith('@keyframes'):
            fora.append(it[1] + ' {' + it[2].rstrip() + '\n}')
        else:
            dentro, f = transformar(blocos(it[2]), alvo, recuo + '  ')
            fora += f
            if dentro.strip():
                saida.append(recuo + it[1] + ' {\n' + dentro + '\n' + recuo + '}')
    return '\n'.join(saida), fora


for alvo in ALVOS:
    partes, todos_fora = [], []
    for origem in alvo['origens']:
        with open(os.path.join(RAIZ, origem), encoding='utf-8') as f:
            txt, fora = transformar(blocos(f.read()), alvo)
        partes.append(f'/* ==================== {origem} ==================== */\n' + txt)
        todos_fora += fora
    cabecalho = (
        '/* GERADO por ferramentas/design/escopo.py a partir de ' + ', '.join(alvo['origens']) + '.\n'
        '   Não edite aqui: mude a origem e rode o script de novo. Vale só dentro de ' + alvo['escopo'] + '. */\n'
    )
    saida = os.path.join(RAIZ, alvo['saida'])
    with open(saida, 'w', encoding='utf-8') as f:
        f.write(cabecalho + '\n\n'.join(partes) + '\n\n' + '\n'.join(dict.fromkeys(todos_fora)) + '\n')
    print(alvo['saida'], os.path.getsize(saida) // 1024, 'KB')
