/* MeMotiva — app/17-fundos-trilhas.js
   Galeria de fundos e trilhas sonoras.
   Carregado na ordem definida em index.html (ver ARCHITECTURE.md). */

/* ================================================================
   FASE 5 — GALERIA DE FUNDOS
   Fundos gerados por CSS (gradientes + camadas), organizados em
   categorias. Não dependem de rede: carregam sempre, inclusive
   offline, e não pesam no armazenamento.
   ================================================================ */
const FUNDOS = [
  {
    id: 'paisagens',
    nome: 'Paisagens',
    itens: [
      ['Amanhecer', 'linear-gradient(180deg,#FF9A4D 0%,#FFC978 38%,#FFE9C2 62%,#8FBF9F 100%)', '#2A1704'],
      [
        'Pôr do sol no mar',
        'linear-gradient(180deg,#3B1D5E 0%,#B34A6B 42%,#FF8A5B 70%,#1E3A5F 100%)',
        '#FFF6EC'
      ],
      [
        'Montanha ao entardecer',
        'linear-gradient(180deg,#2C3E63 0%,#5C6E97 45%,#C58B76 78%,#3A2B3A 100%)',
        '#FFF3E9'
      ],
      ['Campo aberto', 'linear-gradient(180deg,#8FD3F4 0%,#C9E7B7 55%,#6EA95F 100%)', '#12240D'],
      ['Deserto', 'linear-gradient(180deg,#F5C77E 0%,#E0965A 50%,#9C5B3C 100%)', '#2A1408'],
      ['Floresta na neblina', 'linear-gradient(180deg,#D9E4DD 0%,#8FA895 45%,#41564A 100%)', '#F2F7F3'],
      ['Praia calma', 'linear-gradient(180deg,#7EC8E3 0%,#BDE6F0 45%,#F3E3C3 100%)', '#123040'],
      ['Aurora', 'linear-gradient(180deg,#0B1026 0%,#123C5A 35%,#2CBF9E 62%,#8E5CC0 100%)', '#F0FAFF']
    ]
  },
  {
    id: 'pinturas',
    nome: 'Pinturas',
    itens: [
      [
        'Aquarela quente',
        'radial-gradient(circle at 22% 24%,#FFD1A1 0%,transparent 52%),radial-gradient(circle at 78% 34%,#F7A399 0%,transparent 48%),radial-gradient(circle at 48% 82%,#F6D186 0%,transparent 56%),linear-gradient(150deg,#FFF3E4,#FBE0CE)',
        '#3A2114'
      ],
      [
        'Aquarela fria',
        'radial-gradient(circle at 25% 20%,#A8D8F0 0%,transparent 50%),radial-gradient(circle at 76% 40%,#B8C6F2 0%,transparent 48%),radial-gradient(circle at 45% 85%,#9FE6D4 0%,transparent 54%),linear-gradient(150deg,#EEF6FB,#DCE7F5)',
        '#12303F'
      ],
      [
        'Óleo noturno',
        'radial-gradient(circle at 30% 28%,#2E4E8C 0%,transparent 55%),radial-gradient(circle at 72% 62%,#7A4FA3 0%,transparent 50%),linear-gradient(160deg,#0F1734,#241A3D)',
        '#F0ECFF'
      ],
      [
        'Impressionista',
        'radial-gradient(circle at 18% 30%,#F7C873 0%,transparent 45%),radial-gradient(circle at 62% 22%,#9BD1A4 0%,transparent 44%),radial-gradient(circle at 40% 76%,#8FB9E8 0%,transparent 48%),linear-gradient(140deg,#FDF6E7,#EAF2E6)',
        '#2C2A16'
      ],
      [
        'Guache rosa',
        'radial-gradient(circle at 30% 26%,#F3A6C0 0%,transparent 52%),radial-gradient(circle at 74% 70%,#F5CBA7 0%,transparent 50%),linear-gradient(150deg,#FFF0F5,#FBE4E9)',
        '#43172C'
      ],
      [
        'Tinta e papel',
        'radial-gradient(circle at 20% 18%,rgba(0,0,0,.10) 0%,transparent 46%),radial-gradient(circle at 82% 74%,rgba(0,0,0,.09) 0%,transparent 44%),linear-gradient(155deg,#F4E9CE,#E4D2A6)',
        '#2B2013'
      ],
      ['Vitral', 'conic-gradient(from 20deg at 40% 40%,#E4572E,#F4A259,#3C8DAD,#7A4FA3,#E4572E)', '#FFF8F0'],
      ['Afresco', 'linear-gradient(160deg,#E8DCC6 0%,#D3C0A3 48%,#B9A386 100%)', '#2C2317']
    ]
  },
  {
    id: 'abstratos',
    nome: 'Abstratos',
    itens: [
      [
        'Bruma coral',
        'radial-gradient(circle at 30% 30%,#FF8A65 0%,transparent 55%),radial-gradient(circle at 70% 70%,#FFB88C 0%,transparent 55%),linear-gradient(135deg,#2B1B18,#4A2A22)',
        '#FFEDE4'
      ],
      [
        'Onda jade',
        'radial-gradient(circle at 25% 70%,#22C1A5 0%,transparent 58%),radial-gradient(circle at 78% 26%,#0E7C6A 0%,transparent 52%),linear-gradient(140deg,#062622,#0B3E36)',
        '#E6FFF8'
      ],
      [
        'Névoa violeta',
        'radial-gradient(circle at 28% 24%,#9B6DFF 0%,transparent 55%),radial-gradient(circle at 72% 74%,#5B3FA8 0%,transparent 52%),linear-gradient(140deg,#170F2B,#241640)',
        '#F1EBFF'
      ],
      [
        'Fumaça',
        'radial-gradient(circle at 35% 40%,rgba(255,255,255,.35) 0%,transparent 50%),radial-gradient(circle at 70% 65%,rgba(255,255,255,.18) 0%,transparent 46%),linear-gradient(150deg,#1C1B1A,#3A3735)',
        '#F5F2EE'
      ],
      [
        'Ouro líquido',
        'radial-gradient(circle at 30% 32%,#FFD98A 0%,transparent 55%),radial-gradient(circle at 74% 68%,#C98F2E 0%,transparent 52%),linear-gradient(140deg,#2A1E08,#48340F)',
        '#FFF6DF'
      ],
      ['Gradiente suave', 'linear-gradient(135deg,#FDCB8B,#F49C8E 45%,#9C7DD1)', '#2A1330'],
      [
        'Bloco geométrico',
        'linear-gradient(115deg,#0B8A6E 0%,#0B8A6E 38%,#F4E9CE 38%,#F4E9CE 62%,#C2540A 62%)',
        '#1B1817'
      ],
      [
        'Malha',
        'repeating-linear-gradient(45deg,rgba(255,255,255,.06) 0 12px,transparent 12px 24px),linear-gradient(140deg,#1E293B,#0F172A)',
        '#E8F0FA'
      ]
    ]
  },
  {
    id: 'texturas',
    nome: 'Texturas',
    itens: [
      [
        'Papel envelhecido',
        'radial-gradient(circle at 18% 12%,rgba(255,255,255,.55),transparent 55%),linear-gradient(155deg,#F4E9CE,#EAD8AC)',
        '#2B2013'
      ],
      [
        'Papel kraft',
        'radial-gradient(circle at 80% 20%,rgba(255,255,255,.25),transparent 50%),linear-gradient(150deg,#C9A578,#A97F52)',
        '#241505'
      ],
      [
        'Linho',
        'repeating-linear-gradient(90deg,rgba(0,0,0,.035) 0 2px,transparent 2px 5px),repeating-linear-gradient(0deg,rgba(0,0,0,.035) 0 2px,transparent 2px 5px),linear-gradient(150deg,#F5F1E8,#E5DED0)',
        '#22201B'
      ],
      [
        'Concreto',
        'radial-gradient(circle at 30% 30%,rgba(255,255,255,.16),transparent 50%),linear-gradient(150deg,#8E8C88,#5E5C58)',
        '#FFFFFF'
      ],
      [
        'Madeira',
        'repeating-linear-gradient(92deg,rgba(0,0,0,.07) 0 3px,transparent 3px 11px),linear-gradient(160deg,#9A6B45,#6E4526)',
        '#FFEEDC'
      ],
      [
        'Veludo escuro',
        'radial-gradient(circle at 40% 35%,rgba(255,255,255,.12),transparent 55%),linear-gradient(150deg,#2A0E1C,#160710)',
        '#FCE9F1'
      ],
      [
        'Mármore',
        'radial-gradient(ellipse at 25% 30%,rgba(0,0,0,.10),transparent 45%),radial-gradient(ellipse at 70% 70%,rgba(0,0,0,.08),transparent 42%),linear-gradient(150deg,#FAFAF7,#E7E5DF)',
        '#211F1C'
      ],
      [
        'Areia',
        'repeating-radial-gradient(circle at 30% 30%,rgba(0,0,0,.03) 0 2px,transparent 2px 6px),linear-gradient(150deg,#EFDFC2,#D9C29A)',
        '#2C2114'
      ]
    ]
  },
  {
    id: 'ceumar',
    nome: 'Céu e mar',
    itens: [
      ['Céu limpo', 'linear-gradient(180deg,#3FA9E0 0%,#9BD7F2 60%,#E6F6FE 100%)', '#08293D'],
      ['Céu de chuva', 'linear-gradient(180deg,#4A5A6B 0%,#7C8B99 55%,#B9C4CC 100%)', '#101820'],
      ['Mar profundo', 'linear-gradient(180deg,#04364A 0%,#0A6C86 55%,#4FB7C9 100%)', '#EAFBFF'],
      ['Espuma', 'linear-gradient(180deg,#BFEAF5 0%,#EAF9FC 55%,#FFFFFF 100%)', '#0B2C38'],
      ['Nuvens ao pôr do sol', 'linear-gradient(180deg,#5C4B8B 0%,#C97BA0 45%,#F6B48A 100%)', '#2A0F27'],
      [
        'Tempestade',
        'radial-gradient(circle at 60% 20%,rgba(255,255,255,.22),transparent 45%),linear-gradient(180deg,#1B2430,#38424E 60%,#5B646E)',
        '#F1F5F9'
      ],
      [
        'Céu estrelado',
        'radial-gradient(circle at 20% 20%,rgba(255,255,255,.9) 0 1px,transparent 2px),radial-gradient(circle at 65% 35%,rgba(255,255,255,.75) 0 1px,transparent 2px),radial-gradient(circle at 80% 70%,rgba(255,255,255,.85) 0 1px,transparent 2px),radial-gradient(circle at 40% 78%,rgba(255,255,255,.7) 0 1px,transparent 2px),linear-gradient(180deg,#070B1E,#141B3C)',
        '#EAF0FF'
      ],
      [
        'Lua cheia',
        'radial-gradient(circle at 72% 24%,#FFF6D8 0%,#FFF6D8 7%,rgba(255,246,216,.25) 12%,transparent 26%),linear-gradient(180deg,#0B1024,#1C2445)',
        '#F4F7FF'
      ]
    ]
  },
  {
    id: 'minimalistas',
    nome: 'Minimalistas',
    itens: [
      ['Branco puro', 'linear-gradient(160deg,#FFFFFF,#F3F2EF)', '#1B1817'],
      ['Areia clara', 'linear-gradient(160deg,#F7F1E6,#EDE3D2)', '#2A2318'],
      ['Grafite', 'linear-gradient(160deg,#2A2826,#171514)', '#F3ECE3'],
      ['Verde sálvia', 'linear-gradient(160deg,#DCE7DC,#BFD1BF)', '#16261A'],
      ['Azul sereno', 'linear-gradient(160deg,#DFE9F5,#C3D6EA)', '#0F2233'],
      ['Terracota', 'linear-gradient(160deg,#EBC0A6,#D19776)', '#341A0B'],
      ['Preto e ouro', 'linear-gradient(160deg,#141210,#1E1A14 70%,#3A2E14)', '#F6E3B0'],
      ['Rosé', 'linear-gradient(160deg,#F7E1E4,#E9C3CB)', '#3C1723']
    ]
  },
  {
    id: 'flores',
    nome: 'Flores e natureza',
    itens: [
      [
        'Campo de flores',
        'radial-gradient(circle at 20% 70%,#F2A0B6 0 8px,transparent 9px),radial-gradient(circle at 44% 82%,#FFD277 0 7px,transparent 8px),radial-gradient(circle at 70% 66%,#C7A6E8 0 8px,transparent 9px),linear-gradient(180deg,#DBEBC8,#9CC47F)',
        '#17280F'
      ],
      [
        'Cerejeira',
        'radial-gradient(circle at 25% 25%,#FFD9E4 0 10px,transparent 11px),radial-gradient(circle at 60% 40%,#FFC5D6 0 8px,transparent 9px),radial-gradient(circle at 80% 20%,#FFE3EC 0 9px,transparent 10px),linear-gradient(160deg,#FFF4F7,#F6DCE5)',
        '#4A1A2C'
      ],
      [
        'Folhagem',
        'radial-gradient(ellipse at 20% 30%,#2F6B45 0%,transparent 45%),radial-gradient(ellipse at 75% 65%,#3E8B58 0%,transparent 45%),linear-gradient(150deg,#0E2B1A,#1B4429)',
        '#E9F7EE'
      ],
      [
        'Girassóis',
        'radial-gradient(circle at 30% 35%,#FFC93C 0 14px,#8A5A16 0 18px,transparent 19px),radial-gradient(circle at 70% 65%,#FFD75E 0 12px,#8A5A16 0 15px,transparent 16px),linear-gradient(170deg,#7FB25E,#4B7A38)',
        '#1B2409'
      ],
      [
        'Lavanda',
        'radial-gradient(circle at 30% 60%,#B39BE0 0%,transparent 45%),linear-gradient(175deg,#E9E2F7,#B8A5DE 70%,#7C6BB0)',
        '#26183F'
      ],
      [
        'Musgo e pedra',
        'radial-gradient(circle at 60% 40%,#7C9A6C 0%,transparent 48%),linear-gradient(150deg,#5D6455,#3A4034)',
        '#F0F5EA'
      ],
      [
        'Bambu',
        'repeating-linear-gradient(88deg,rgba(0,0,0,.08) 0 4px,transparent 4px 26px),linear-gradient(160deg,#A9C48A,#6E9153)',
        '#132009'
      ],
      [
        'Chuva na folha',
        'radial-gradient(circle at 30% 25%,rgba(255,255,255,.5) 0 3px,transparent 4px),radial-gradient(circle at 62% 55%,rgba(255,255,255,.4) 0 4px,transparent 5px),linear-gradient(160deg,#2E5E45,#173A2A)',
        '#E7F6ED'
      ]
    ]
  },
  {
    id: 'noite',
    nome: 'Noite e luz',
    itens: [
      [
        'Vela',
        'radial-gradient(circle at 50% 42%,#FFCB6B 0%,rgba(255,203,107,.28) 16%,transparent 42%),linear-gradient(180deg,#120C06,#241708)',
        '#FFE9C2'
      ],
      [
        'Cidade à noite',
        'repeating-linear-gradient(90deg,rgba(255,214,120,.16) 0 3px,transparent 3px 16px),linear-gradient(180deg,#0A1020,#1B2540 60%,#33405F)',
        '#F3F7FF'
      ],
      ['Neon', 'linear-gradient(140deg,#FF2E93 0%,#7A2FF7 45%,#00E5FF 100%)', '#0B0212'],
      [
        'Fogueira',
        'radial-gradient(circle at 50% 78%,#FF9A3C 0%,rgba(255,110,40,.4) 22%,transparent 52%),linear-gradient(180deg,#160A05,#2B1105)',
        '#FFE2C4'
      ],
      ['Meia-noite', 'linear-gradient(180deg,#05070F,#0E1526 60%,#182236)', '#DCE6F5'],
      [
        'Vaga-lumes',
        'radial-gradient(circle at 24% 62%,#D9FF7A 0 2px,transparent 3px),radial-gradient(circle at 58% 34%,#D9FF7A 0 2px,transparent 3px),radial-gradient(circle at 78% 72%,#D9FF7A 0 2px,transparent 3px),linear-gradient(180deg,#08160F,#12281C)',
        '#E7FFE9'
      ],
      [
        'Farol',
        'radial-gradient(circle at 78% 22%,rgba(255,245,200,.7) 0%,transparent 24%),linear-gradient(180deg,#0C1626,#1D3350)',
        '#F4F9FF'
      ],
      [
        'Névoa azul',
        'radial-gradient(circle at 40% 50%,rgba(160,200,255,.28),transparent 55%),linear-gradient(180deg,#101A2B,#22344F)',
        '#E7F0FF'
      ]
    ]
  },
  {
    id: 'papel',
    nome: 'Papel e escrita',
    itens: [
      [
        'Caderno pautado',
        'repeating-linear-gradient(180deg,transparent 0 27px,rgba(60,90,140,.22) 27px 28px),linear-gradient(160deg,#FDFCF7,#F4F1E7)',
        '#1F2430'
      ],
      [
        'Papel quadriculado',
        'repeating-linear-gradient(0deg,rgba(60,90,140,.14) 0 1px,transparent 1px 22px),repeating-linear-gradient(90deg,rgba(60,90,140,.14) 0 1px,transparent 1px 22px),linear-gradient(160deg,#FDFDFA,#F2F2EC)',
        '#22262E'
      ],
      [
        'Carta antiga',
        'radial-gradient(circle at 12% 10%,rgba(160,120,60,.18),transparent 46%),radial-gradient(circle at 88% 88%,rgba(160,120,60,.2),transparent 44%),linear-gradient(155deg,#F6ECD4,#E2CFA6)',
        '#33230F'
      ],
      ['Papel de carta rosa', 'linear-gradient(160deg,#FFF7F8,#F7E4E8)', '#4A2029'],
      [
        'Papel reciclado',
        'repeating-linear-gradient(65deg,rgba(0,0,0,.03) 0 3px,transparent 3px 9px),linear-gradient(160deg,#E9E2D2,#D6CCB6)',
        '#2B2619'
      ],
      [
        'Máquina de escrever',
        'repeating-linear-gradient(180deg,transparent 0 24px,rgba(0,0,0,.05) 24px 25px),linear-gradient(160deg,#F5F3EC,#E6E2D6)',
        '#1A1815'
      ],
      ['Página escura', 'linear-gradient(160deg,#1C1A18,#26221E)', '#F3EBDD'],
      [
        'Papel de seda',
        'radial-gradient(circle at 30% 20%,rgba(255,255,255,.7),transparent 50%),linear-gradient(160deg,#F3EFF8,#E4DEEC)',
        '#2A2437'
      ]
    ]
  }
];

/* ================================================================
   FASE 5 — TRILHAS
   Trilhas instrumentais sintetizadas no próprio navegador (Web
   Audio). Tocam sem rede e sem depender de serviço externo. A
   pessoa também pode subir uma música do aparelho dela.
   ================================================================ */
const TRILHAS = [
  {
    id: 't01',
    nome: 'Manhã de vidro',
    genero: 'Piano',
    humor: 'calma',
    dur: 96,
    esc: 'maior',
    raiz: 60,
    bpm: 66,
    timbre: 'piano'
  },
  {
    id: 't02',
    nome: 'Chuva na janela',
    genero: 'Ambiente',
    humor: 'melancolia',
    dur: 120,
    esc: 'menor',
    raiz: 57,
    bpm: 58,
    timbre: 'pad'
  },
  {
    id: 't03',
    nome: 'Cordas de despedida',
    genero: 'Cordas',
    humor: 'saudade',
    dur: 110,
    esc: 'menor',
    raiz: 55,
    bpm: 52,
    timbre: 'cordas'
  },
  {
    id: 't04',
    nome: 'Violão de tarde',
    genero: 'Violão',
    humor: 'leveza',
    dur: 100,
    esc: 'maior',
    raiz: 52,
    bpm: 78,
    timbre: 'violao'
  },
  {
    id: 't05',
    nome: 'Passo firme',
    genero: 'Cinemático',
    humor: 'coragem',
    dur: 104,
    esc: 'maior',
    raiz: 53,
    bpm: 92,
    timbre: 'cinema'
  },
  {
    id: 't06',
    nome: 'Céu aberto',
    genero: 'Ambiente',
    humor: 'esperança',
    dur: 118,
    esc: 'maior',
    raiz: 60,
    bpm: 70,
    timbre: 'pad'
  },
  {
    id: 't07',
    nome: 'Lo-fi de segunda',
    genero: 'Lo-fi',
    humor: 'foco',
    dur: 112,
    esc: 'menor',
    raiz: 58,
    bpm: 76,
    timbre: 'lofi'
  },
  {
    id: 't08',
    nome: 'Noite de inverno',
    genero: 'Piano',
    humor: 'introspecção',
    dur: 108,
    esc: 'menor',
    raiz: 56,
    bpm: 60,
    timbre: 'piano'
  },
  {
    id: 't09',
    nome: 'Recomeço',
    genero: 'Cinemático',
    humor: 'força',
    dur: 120,
    esc: 'maior',
    raiz: 57,
    bpm: 84,
    timbre: 'cinema'
  },
  {
    id: 't10',
    nome: 'Mar de manhã',
    genero: 'Ambiente',
    humor: 'paz',
    dur: 126,
    esc: 'maior',
    raiz: 55,
    bpm: 62,
    timbre: 'pad'
  },
  {
    id: 't11',
    nome: 'Carta que não enviei',
    genero: 'Piano',
    humor: 'saudade',
    dur: 102,
    esc: 'menor',
    raiz: 53,
    bpm: 56,
    timbre: 'piano'
  },
  {
    id: 't12',
    nome: 'Roda de amigos',
    genero: 'Violão',
    humor: 'alegria',
    dur: 98,
    esc: 'maior',
    raiz: 59,
    bpm: 96,
    timbre: 'violao'
  },
  {
    id: 't13',
    nome: 'Cidade acordando',
    genero: 'Lo-fi',
    humor: 'rotina',
    dur: 114,
    esc: 'maior',
    raiz: 56,
    bpm: 80,
    timbre: 'lofi'
  },
  {
    id: 't14',
    nome: 'Coragem silenciosa',
    genero: 'Cordas',
    humor: 'coragem',
    dur: 116,
    esc: 'menor',
    raiz: 52,
    bpm: 64,
    timbre: 'cordas'
  },
  {
    id: 't15',
    nome: 'Estrela da manhã',
    genero: 'Ambiente',
    humor: 'esperança',
    dur: 122,
    esc: 'maior',
    raiz: 62,
    bpm: 68,
    timbre: 'pad'
  },
  {
    id: 't16',
    nome: 'Depois da tempestade',
    genero: 'Cinemático',
    humor: 'alívio',
    dur: 110,
    esc: 'maior',
    raiz: 55,
    bpm: 74,
    timbre: 'cinema'
  },
  {
    id: 't17',
    nome: 'Mãe',
    genero: 'Piano',
    humor: 'ternura',
    dur: 106,
    esc: 'maior',
    raiz: 57,
    bpm: 58,
    timbre: 'piano'
  },
  {
    id: 't18',
    nome: 'Interior de Minas',
    genero: 'Violão',
    humor: 'memória',
    dur: 104,
    esc: 'maior',
    raiz: 50,
    bpm: 72,
    timbre: 'violao'
  },
  {
    id: 't19',
    nome: 'Quarto às três',
    genero: 'Lo-fi',
    humor: 'insônia',
    dur: 118,
    esc: 'menor',
    raiz: 54,
    bpm: 70,
    timbre: 'lofi'
  },
  {
    id: 't20',
    nome: 'Travessia',
    genero: 'Cordas',
    humor: 'força',
    dur: 124,
    esc: 'menor',
    raiz: 50,
    bpm: 66,
    timbre: 'cordas'
  },
  {
    id: 't21',
    nome: 'Sol na pele',
    genero: 'Ambiente',
    humor: 'alegria',
    dur: 100,
    esc: 'maior',
    raiz: 64,
    bpm: 88,
    timbre: 'pad'
  },
  {
    id: 't22',
    nome: 'O que ficou',
    genero: 'Piano',
    humor: 'melancolia',
    dur: 112,
    esc: 'menor',
    raiz: 55,
    bpm: 54,
    timbre: 'piano'
  },
  {
    id: 't23',
    nome: 'Passagem',
    genero: 'Cinemático',
    humor: 'reflexão',
    dur: 118,
    esc: 'menor',
    raiz: 57,
    bpm: 70,
    timbre: 'cinema'
  },
  {
    id: 't24',
    nome: 'Domingo devagar',
    genero: 'Violão',
    humor: 'paz',
    dur: 108,
    esc: 'maior',
    raiz: 53,
    bpm: 64,
    timbre: 'violao'
  }
];
