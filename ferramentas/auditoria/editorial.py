"""Auditoria editorial automática sobre o ESTADO REAL do site (captura de ferramentas/testes/estado.mjs).

Uso: node ferramentas/testes/estado.mjs --salvar auditoria && python3 ferramentas/auditoria/editorial.py [.trabalho/estado/auditoria.json]
Saída: relatório em .trabalho/auditoria/editorial.json + resumo no terminal. Não altera nada.
"""
import json, re, sys, os, unicodedata, collections, itertools

RAIZ = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
ARQ = sys.argv[1] if len(sys.argv) > 1 else os.path.join(RAIZ, '.trabalho/estado/auditoria.json')
E = json.load(open(ARQ, encoding='utf-8'))
Q, OB, PG, PF, ST, PAP, REG = E['QUOTES'], E['OBRAS'], E['OBRA_PAGINA'], E['PERFIS_PROFUNDOS'], E['STORIES'], E['PAPEIS'], E['window.CURADORIA_REMOVIDAS']
CATS = {c['id'] for c in E['CATEGORIES']}
IDX = {a[0] for a in E['AUTOR_INDEX']}

def norm(t):
    t = unicodedata.normalize('NFD', str(t).lower()); t = ''.join(c for c in t if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-z0-9]', '', t)
def bg(t):
    n = norm(t); return collections.Counter(n[i:i+2] for i in range(len(n)-1))
def dice(a, b):
    A, B = bg(a), bg(b); s = sum((A & B).values()); return 2*s/max(1, sum(A.values())+sum(B.values()))

R = collections.defaultdict(list)
BIB = re.compile(r'(G[êe]nesis|[ÊE]xodo|Lev[íi]tico|N[úu]meros|Deuteron[ôo]mio|Josu[ée]|Ju[íi]zes|Rute|Samuel|Reis|Cr[ôo]nicas|Esdras|Neemias|Ester|J[óo]\b|Salmos?|Prov[ée]rbios|Eclesiastes|C[âa]ntico|Isa[íi]as|Jeremias|Lamenta|Ezequiel|Daniel|Os[ée]ias|Joel|Am[óo]s|Obadias|Jonas|Miqu[ée]ias|Naum|Habacuque|Sofonias|Ageu|Zacarias|Malaquias|Mateus|Marcos|Lucas|Jo[ãa]o|Atos|Romanos|Cor[íi]ntios|G[áa]latas|Ef[ée]sios|Filipenses|Colossenses|Tessalonicenses|Tim[óo]teo|Tito|Filemom|Hebreus|Tiago|Pedro|Judas|Apocalipse|Eclesi[áa]stico|Sir[áa]cida|Sabedoria)\s*\d+[:.,]\s*\d+')
EDICOES = ['Almeida Corrigida Fiel', 'Almeida Revisada Imprensa Bíblica', 'Nova Versão Internacional', 'Almeida Revista e Atualizada', 'Almeida Revista e Corrigida', 'Bíblia de Jerusalém', 'Ave-Maria', 'NTLH', 'Tradução', 'trad.']

ativos = {norm(q['text']): q for q in Q}
# 1. duplicatas exatas (texto normalizado)
por_txt = collections.defaultdict(list)
for q in Q: por_txt[norm(q['text'])].append(q)
for k, l in por_txt.items():
    if len(l) > 1: R['duplicata_exata'].append([(q['author'], q['qid'], q['st'], q['text'][:80]) for q in l])
# 2. variantes do mesmo autor (0,60–0,70 = zona que o portão não pega) e entre autores (>=0,80) — para revisão
por_aut = collections.defaultdict(list)
for q in Q: por_aut[q['author']].append(q)
for a, l in por_aut.items():
    if len(l) > 60: continue
    for x, y in itertools.combinations(l, 2):
        s = dice(x['text'], y['text'])
        if s >= 0.60: R['variante_mesmo_autor'].append((round(s, 2), a, x['qid'], x['text'][:70], y['qid'], y['text'][:70]))
# 3. campos
for q in Q:
    if q['cat'] not in CATS: R['categoria_invalida'].append((q['qid'], q['author'], q['cat']))
    if q['st'] not in ('A', 'X'): R['status_inesperado'].append((q['qid'], q['author'], q['st']))
    if q['st'] == 'X' and q['cat'] != 'ditados' and q['author'] == 'Ditado Popular': R['ditado_fora_categoria'].append((q['qid'], q['cat'], q['text'][:60]))
    if q['st'] == 'A' and q['cat'] == 'ditados': R['A_na_categoria_ditados'].append((q['qid'], q['author'], q['text'][:60]))
    if q['st'] == 'A' and not (q.get('src') or '').strip(): R['A_sem_fonte'].append((q['qid'], q['author'], q['text'][:60]))
    if q['st'] == 'A' and not (q.get('notaInterna') or '').strip(): R['A_sem_evidencia_registrada'].append((q['qid'], q['author'], q.get('src', '')[:50]))
    t = q['text']
    if t != t.strip() or '  ' in t: R['espacos_no_texto'].append((q['qid'], q['author'], repr(t[:60])))
    if t.count('“') != t.count('”') or t.count('"') % 2: R['aspas_desbalanceadas'].append((q['qid'], q['author'], t[:80]))
    if q.get('orig') and norm(q['orig']) == norm(t) and not re.search(r'[ãõçáéíóúâêô]', t) is None: pass
    if q.get('orig') and norm(q['orig']) == norm(t): R['orig_igual_ao_texto'].append((q['qid'], q['author'], t[:60]))
    na = q.get('notaAutoria') or ''
    if re.search(r'\bFase \d|curadoria|confer[ií]d[ao] em|\bqid\b|lacuna|notaInterna|auditoria', na, re.I): R['nota_publica_com_processo'].append((q['qid'], q['author'], na[:120]))
    incerto = r'não (foi )?(localizad|confirmad|conferid|encontrad)|sem (fonte|localização confirmada)|atribui[çc][ãa]o (duvidosa|incerta|não)|apócrif|n[ãa]o se confirma'
    src = q.get('src') or ''
    if q['st'] == 'A' and re.search(incerto, src, re.I): R['A_com_fonte_incerta'].append((q['qid'], q['author'], src[:120]))
    if q['st'] == 'A' and re.search(r'^(atribu|citad[oa] em|segundo|conforme|tradição|declaração pública|entrevistas? e|discursos? e)', src, re.I): R['A_fonte_generica'].append((q['qid'], q['author'], src[:100]))
    if q['author'] not in IDX and not re.search(r'Ditado|não identificado|Livro|Carta|Salmos|Provérbios|Eclesiastes|Evangelho|Alcorão|Upanishad|Tao|Talmud|Torá|Mishná|Bhagavad|Dhammapada|Isaías|João|Deuteronômio|Tiago|Colossenses|Naum|Rig|Veda|Avot|Hadith|Tradição|Bíblia', q['author']):
        R['autor_fora_do_indice'].append((q['qid'], q['author']))
    # bíblia
    if BIB.search(src) or BIB.search(q['author']):
        if not any(e in src for e in EDICOES): R['biblia_sem_edicao'].append((q['qid'], q['author'], src[:80]))
        if 'Almeida Revista e Atualizada' in src: R['biblia_ARA_nao_conferivel'].append((q['qid'], q['author'], src[:80]))
        m1 = BIB.search(q['author']); m2 = BIB.search(src)
        if m1 and m2 and norm(m1.group(0)) != norm(m2.group(0)): R['biblia_autor_vs_fonte'].append((q['qid'], q['author'], src[:80]))
# 4. registro de remoções
ativos_norm = set(por_txt)
for r in REG:
    if not (r.get('motivo') or '').strip(): R['registro_sem_motivo'].append((r.get('data'), r.get('autor'), (r.get('texto') or '')[:60], r.get('tipo')))
    if r.get('tipo') in ('removida', 'variante-removida', 'nao-inserir', 'historico-removida', 'historico-quarentena', 'removida-antes-do-merge') and norm(r.get('texto') or '') in ativos_norm:
        q = ativos[norm(r['texto'])]
        if q['author'] == r.get('autor'): R['removida_mas_ativa'].append((r.get('tipo'), r.get('autor'), r['texto'][:70]))
# 5. obras e páginas
for a, l in OB.items():
    vistos = set()
    for o in l:
        if not (o.get('d') or '').strip(): R['obra_sem_descricao'].append((a, o['t']))
        if o['t'] in vistos: R['obra_titulo_repetido_mesmo_autor'].append((a, o['t']))
        vistos.add(o['t'])
chaves = {a + '||' + o['t'] for a, l in OB.items() for o in l}
for k in PG:
    if k not in chaves: R['pagina_de_obra_orfa'].append(k)
# 6. autores: nomes quase iguais no índice
nomes = sorted(IDX)
nn = collections.defaultdict(list)
for n in nomes: nn[re.sub(r'(jr|junior|filho|neto|sobrinho)$', '', norm(n))].append(n)
for k, l in nn.items():
    if len(l) > 1: R['autor_nome_quase_igual'].append(l)
# 7. biografias: datas do papel x cronologia
def anos(papel):
    m = re.search(r'\(([^)]*)\)\s*$', papel or '')
    if not m: return None, None
    p = re.split(r'[–—-]', m.group(1))
    num = lambda s: (re.search(r'(\d{3,4})', s) or [None, None])[1] if s else None
    return (num(p[0]), num(p[1]) if len(p) > 1 else None)
for n in nomes:
    p = PF.get(n)
    st = next((s for s in ST if s['author'] == n and s.get('role')), None)
    papel = (st or {}).get('role') or PAP.get(n) or ''
    if not p or not p.get('cronologia'): continue
    nasc, morte = anos(papel)
    cron = p['cronologia']
    cn = next((c[0] for c in cron if re.search(r'\bNasce|\bnasce', str(c[1]))), None)
    cm = next((c[0] for c in cron if re.search(r'\bMorre|\bmorre|\bmorte\b|Falece', str(c[1]))), None)
    if nasc and cn and str(cn) != nasc and str(nasc) not in str(cn): R['bio_nascimento_divergente'].append((n, papel, cn))
    if morte and cm and str(cm) != morte and str(morte) not in str(cm): R['bio_morte_divergente'].append((n, papel, cm))
    if cm and not morte and papel: R['bio_morte_ausente_no_papel'].append((n, papel, cm))
    anos_cron = [c[0] for c in cron if isinstance(c[0], int)]
    if anos_cron != sorted(anos_cron): R['bio_cronologia_fora_de_ordem'].append((n, anos_cron))
# 8. histórias
for s in ST:
    if s['author'] not in IDX: R['historia_autor_fora_indice'].append((s['id'], s['author']))
    for f in ('title', 'excerpt', 'text'):
        if not (s.get(f) or '').strip(): R['historia_campo_vazio'].append((s['id'], f))

# 9. frase que cita uma obra do catálogo com outra forma do título e por isso não aparece na página
#    dela (a página lista as frases cuja fonte começa pelos 12 primeiros caracteres do título, ou q.obra)
import difflib
def bn(s):
    s = unicodedata.normalize('NFD', str(s).lower()); s = re.sub(r'[̀-ͯ]', '', s)
    return re.sub(r'\s+', ' ', re.sub(r'[^a-z0-9\s]', ' ', s)).strip()
for q in Q:
    if q.get('st') != 'A' or not q.get('src') or q.get('obra'): continue
    obras = [o for o in OB.get(q['author'], []) if isinstance(o, dict) and o.get('t')]
    if not obras or any(bn(q['src']).startswith(bn(o['t'])[:12]) for o in obras): continue
    cab = bn(re.split(r' \(|, ', q['src'])[0])
    melhor = max(obras, key=lambda o: difflib.SequenceMatcher(None, cab, bn(o['t'])).ratio())
    r = difflib.SequenceMatcher(None, cab, bn(melhor['t'])).ratio()
    if r >= 0.75: R['obra_sem_ligacao'].append((round(r, 2), q['author'], q['qid'], q['src'][:70], melhor['t']))

os.makedirs(os.path.join(RAIZ, '.trabalho/auditoria'), exist_ok=True)
json.dump(R, open(os.path.join(RAIZ, '.trabalho/auditoria/editorial.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
for k in sorted(R): print(f'{len(R[k]):5d}  {k}')
