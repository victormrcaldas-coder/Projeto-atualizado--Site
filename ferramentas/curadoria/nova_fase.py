"""Instala um bloco de fase como arquivo novo em assets/js/curadoria/ e o registra em index.html,
imediatamente antes de app/99-iniciar.js (que tem de continuar sendo o último script).

Uso:
  python3 ferramentas/curadoria/nova_fase.py --bloco .trabalho/fase129/bloco.js \
      --nome 39-fase129-lacunas.js --descricao "Fase 129 — lacunas, lote X."
Depois: node ferramentas/codigo/analise-carga.mjs && node ferramentas/testes/e2e.mjs fase129
"""
import argparse, os, re, subprocess

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ap = argparse.ArgumentParser()
ap.add_argument('--bloco', required=True)
ap.add_argument('--nome', required=True, help='ex.: 39-fase129-lacunas.js (número seguinte ao último arquivo de curadoria/)')
ap.add_argument('--descricao', required=True)
a = ap.parse_args()
assert re.match(r'^\d{2}-[a-z0-9-]+\.js$', a.nome), 'nome deve ser NN-descricao-em-minusculas.js'
destino = os.path.join(RAIZ, 'assets/js/curadoria', a.nome)
assert not os.path.exists(destino), 'arquivo já existe: ' + destino
bloco = open(a.bloco, encoding='utf-8').read()
cab = f'/* MeMotiva — curadoria/{a.nome}\n   {a.descricao}\n   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */\n\n'
open(destino, 'w', encoding='utf-8').write(cab + bloco.rstrip() + '\n')
html_p = os.path.join(RAIZ, 'index.html')
html = open(html_p, encoding='utf-8').read()
ancora = '<script src="assets/js/app/99-iniciar.js"></script>'
assert html.count(ancora) == 1, 'âncora app/99-iniciar.js não encontrada em index.html'
html = html.replace(ancora, f'<script src="assets/js/curadoria/{a.nome}"></script>\n' + ancora)
open(html_p, 'w', encoding='utf-8').write(html)
subprocess.run(['node', os.path.join(RAIZ, 'node_modules/.bin/prettier') if os.path.exists(os.path.join(RAIZ, 'node_modules/.bin/prettier')) else '/opt/node-tools/node_modules/prettier/bin/prettier.cjs', '--write', destino], cwd=RAIZ)
print('instalado:', destino)
