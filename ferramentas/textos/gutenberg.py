"""Baixa textos do Project Gutenberg pelo espelho GITenberg (raw.githubusercontent.com), útil quando o
gutenberg.org está bloqueado. É a fonte de "texto integral lido", o padrão de evidência mais alto.

Preparação (uma vez): clonar o índice do GITenberg na pasta de trabalho:
  git clone --depth 1 https://github.com/gitenberg-dev/gitberg .trabalho/corpus/gitberg/gitenberg
  (o arquivo usado é gitenberg/data/GITenberg_repo_list.tsv: id <tab> nome do repositório)
Uso: python3 ferramentas/textos/gutenberg.py <id> [<id> ...]  -> .trabalho/corpus/pg/<id>.txt
Obs.: o índice não tem livros acrescentados ao Gutenberg depois de ~2019.
"""
import sys, os, subprocess
RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
S = os.environ.get('MEMOTIVA_TRABALHO') or os.path.join(RAIZ, '.trabalho')
LIST = os.path.join(S, 'corpus/gitberg/gitenberg/data/GITenberg_repo_list.tsv')
OUT = os.path.join(S, 'corpus/pg'); os.makedirs(OUT, exist_ok=True)
repos = {}
for line in open(LIST, encoding='utf-8'):
    p = line.rstrip('\n').split('\t')
    if len(p) >= 2: repos[p[0]] = p[1]
def fetch(i):
    dest = os.path.join(OUT, f'{i}.txt')
    if os.path.exists(dest) and os.path.getsize(dest) > 1000: return dest, 'cache'
    r = repos.get(str(i))
    if not r: return None, 'sem repo no índice'
    for br in ('master', 'main'):
        for fn in (f'{i}-0.txt', f'{i}.txt', f'{i}-8.txt', f'{i}-h/{i}-h.htm', f'{i}-h.htm'):
            url = f'https://raw.githubusercontent.com/GITenberg/{r}/{br}/{fn}'
            res = subprocess.run(['curl', '-s', '-f', '-m', '120', '-o', dest, url])
            if res.returncode == 0 and os.path.getsize(dest) > 1000:
                return dest, url
    if os.path.exists(dest): os.remove(dest)
    return None, 'arquivo não encontrado ('+r+')'
if __name__ == '__main__':
    for i in sys.argv[1:]:
        d, how = fetch(i); print(i, d, how)
