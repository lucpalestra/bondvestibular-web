// Programa completo por matéria.
// Fontes: Matriz de Referência do Enem (objetos de conhecimento de Matemática, Inep)
// e conteúdo programático do Vestibular Fuvest 2027. Conferir o edital da Fuvest 2028 quando sair.
// p: "EF" = Enem e Fuvest, "E" = só Enem, "F" = só Fuvest.
window.PROGRAMA = {
  "Matemática": {
    intro: "O Enem cobra matemática aplicada a situações do dia a dia: muita leitura de gráfico, porcentagem, proporção e geometria. A Fuvest cobra mais conteúdo puro (funções, equações, trigonometria) e, na 2ª fase, você precisa escrever a resolução.",
    fora: "Não aparecem no programa atual da Fuvest nem na Matriz do Enem: matrizes, determinantes, números complexos e binômio de Newton. A Fuvest cobra sistemas lineares só até 3 equações e 3 incógnitas.",
    grupos: [
      { g: "Números e operações", itens: [
        { id: "num-ops", t: "Operações com naturais, inteiros, racionais e reais", p: "EF", d: "As quatro operações, frações, decimais, potências e raízes, desigualdades e valor absoluto. É a base de quase toda questão; o Enem cobra muito em contas do cotidiano (preços, códigos, tabelas)." },
        { id: "divis", t: "Divisibilidade, MMC, MDC e fatoração em primos", p: "EF", d: "Critérios de divisibilidade, decomposição em fatores primos, mínimo múltiplo comum (eventos que se repetem juntos) e máximo divisor comum (dividir em partes iguais e máximas)." },
        { id: "razao", t: "Razão, proporção e regra de três", p: "EF", d: "Grandezas direta e inversamente proporcionais, regra de três simples e composta, velocidade média, consumo, produtividade. Um dos temas que mais caem no Enem." },
        { id: "porc", t: "Porcentagem e matemática financeira", p: "EF", d: "Aumentos e descontos sucessivos, porcentagem de porcentagem, juros simples e compostos, taxas e índices. Treine ler \"x% de y\" e \"aumentou x%\" sem errar." },
        { id: "notacao", t: "Notação científica e arredondamento", p: "F", d: "Escrever números muito grandes ou pequenos como a × 10ⁿ, algarismos significativos e regras de arredondamento. Explícito no programa da Fuvest; no Enem aparece dentro de outras questões." },
        { id: "seq", t: "Sequências, PA e PG", p: "EF", d: "Padrões numéricos, progressão aritmética (soma constante) e geométrica (multiplica por constante), termo geral e soma dos termos." },
        { id: "contagem", t: "Análise combinatória", p: "EF", d: "Princípio fundamental da contagem, permutações, arranjos e combinações. O segredo é decidir se a ordem importa e se há restrições." }
      ]},
      { g: "Geometria", itens: [
        { id: "geo-fig", t: "Figuras planas e espaciais, vistas e planificações", p: "EF", d: "Reconhecer sólidos, contar faces, arestas e vértices (relação de Euler V − A + F = 2), planificações e projeções/vistas de objetos. Muito cobrado no Enem com figuras." },
        { id: "escala", t: "Grandezas, unidades de medida e escalas", p: "E", d: "Conversão de unidades (cm³ ↔ mL, m ↔ km, h ↔ min), escalas de mapas e plantas (1 : 100) e unidades compostas. Converta tudo para a mesma unidade antes de calcular." },
        { id: "areas-vol", t: "Perímetros, áreas e volumes", p: "EF", d: "Comprimento da circunferência, áreas de polígonos e círculos, volumes de prismas, pirâmides, cilindros, cones e esferas; capacidade (1 dm³ = 1 L)." },
        { id: "angulos", t: "Ângulos, posições de retas e simetrias", p: "E", d: "Ângulos entre retas paralelas e transversais, soma dos ângulos internos de polígonos, simetrias de figuras planas e espaciais." },
        { id: "semelhanca", t: "Congruência, semelhança e Teorema de Tales", p: "EF", d: "Casos de semelhança de triângulos, razão de semelhança (áreas na razão k², volumes na razão k³) e Teorema de Tales." },
        { id: "metricas", t: "Relações métricas: Pitágoras, polígonos regulares e círculos", p: "EF", d: "Teorema de Pitágoras, relações no triângulo retângulo, polígonos regulares inscritos e circunscritos, cordas e arcos." },
        { id: "trig-tri", t: "Trigonometria no triângulo, lei dos senos e dos cossenos", p: "EF", d: "Seno, cosseno e tangente no triângulo retângulo, ângulos notáveis (30°, 45°, 60°) e, para triângulos quaisquer, lei dos senos e lei dos cossenos." }
      ]},
      { g: "Estatística e probabilidade", itens: [
        { id: "graficos", t: "Leitura e interpretação de gráficos e tabelas", p: "EF", d: "Gráficos de barras, linhas, setores (pizza) e infográficos. No Enem, uma boa parte das questões depende só de ler o gráfico com atenção." },
        { id: "medias", t: "Média, mediana e moda", p: "EF", d: "Média aritmética e ponderada, mediana (ordene os dados primeiro!) e moda. Saber quando cada uma representa melhor os dados." },
        { id: "dispersao", t: "Amplitude, variância e desvio padrão", p: "EF", d: "Medidas de dispersão: quanto os dados se espalham em torno da média. Desvio padrão pequeno = dados concentrados." },
        { id: "quartis", t: "Quartis, decis e percentis", p: "F", d: "Medidas de posição que dividem os dados ordenados em partes iguais. Explícito no programa da Fuvest." },
        { id: "prob", t: "Probabilidade", p: "EF", d: "Casos favoráveis ÷ casos possíveis, eventos independentes (multiplica), união de eventos e probabilidade condicional." }
      ]},
      { g: "Álgebra e funções", itens: [
        { id: "func-geral", t: "Funções e gráficos: domínio, imagem, crescimento, máximos e mínimos", p: "EF", d: "Ler e interpretar o gráfico de uma função: onde cresce, onde decresce, raízes, valores máximos e mínimos." },
        { id: "func1", t: "Função do 1º grau", p: "EF", d: "f(x) = ax + b: reta, coeficiente angular (taxa de variação) e linear. Modela tarifas, custos fixos + variáveis, crescimento constante." },
        { id: "func2", t: "Função do 2º grau e Bhaskara", p: "EF", d: "f(x) = ax² + bx + c: parábola, raízes por Bhaskara (x = (−b ± √Δ)/2a), vértice (máximo ou mínimo) e problemas de otimização." },
        { id: "explog", t: "Funções exponencial e logarítmica", p: "EF", d: "Crescimento e decaimento exponencial (juros compostos, populações), propriedades dos logaritmos e equações exponenciais e logarítmicas." },
        { id: "func-rac", t: "Funções racionais simples e modulares", p: "EF", d: "Funções do tipo k/x (grandezas inversamente proporcionais) e funções com módulo |x|. A modular aparece explicitamente no programa da Fuvest." },
        { id: "polin", t: "Polinômios: fatoração, produtos notáveis e divisão", p: "EF", d: "Produtos notáveis, fatoração, divisão de polinômios e raízes. A Fuvest cobra divisão euclidiana de polinômios." },
        { id: "equacoes", t: "Equações e inequações", p: "EF", d: "Montar e resolver equações e inequações do 1º e do 2º grau, exponenciais, logarítmicas e trigonométricas a partir de um problema." },
        { id: "trig-ciclo", t: "Ciclo trigonométrico e funções trigonométricas", p: "EF", d: "Seno, cosseno e tangente no ciclo, radianos, gráficos, período e amplitude. Modela fenômenos que se repetem (marés, ondas, rodas-gigantes)." }
      ]},
      { g: "Geometria analítica", itens: [
        { id: "cartesiano", t: "Plano cartesiano e distância entre pontos", p: "EF", d: "Coordenadas, distância entre dois pontos, ponto médio e localização em malhas e mapas." },
        { id: "reta", t: "Equação da reta, paralelismo e perpendicularidade", p: "EF", d: "Equação y = mx + n, coeficiente angular, retas paralelas (mesmo m) e perpendiculares (m₁·m₂ = −1), mediatriz." },
        { id: "circunf", t: "Equação da circunferência e interseções", p: "EF", d: "(x − a)² + (y − b)² = r², posição de reta e circunferência e interseções entre elas." },
        { id: "sistemas", t: "Sistemas de equações (lineares até 3×3)", p: "EF", d: "Resolver sistemas por substituição, adição ou escalonamento. A Fuvest limita a no máximo 3 equações e 3 incógnitas." }
      ]}
    ]
  }
};

// Programas das outras matérias (gerado). Fontes: objetos de conhecimento da Matriz de Referência do Enem (Inep) e programa do Vestibular Fuvest 2027.
Object.assign(window.PROGRAMA, {
"Português": {
"area": "LC",
"slug": "portugues",
"intro": "No Enem, Português é quase tudo interpretação: o texto vem primeiro e a gramática aparece a serviço do sentido. Na Fuvest, a 1ª fase cobra leitura e argumentação, e o 1º dia da 2ª fase tem questões dissertativas de Português junto com a redação.",
"grupos": [
{
"g": "Leitura e interpretação",
"itens": [
{
"id": "port-0-0",
"t": "Interpretação de texto e gêneros textuais",
"p": "EF",
"d": "Identificar tema, tese, finalidade e público de notícias, crônicas, artigos, anúncios, charges e infográficos. É a habilidade mais cobrada da prova."
},
{
"id": "port-0-1",
"t": "Tipos textuais: narrar, descrever, expor, argumentar, instruir",
"p": "E",
"d": "Reconhecer como o texto se organiza e por que o autor escolheu essa forma."
},
{
"id": "port-0-2",
"t": "Texto argumentativo: tese, argumentos e contra-argumentação",
"p": "EF",
"d": "Separar fato de opinião, identificar estratégias de persuasão e como o autor rebate posições contrárias."
},
{
"id": "port-0-3",
"t": "Intertextualidade e interdiscursividade",
"p": "EF",
"d": "Perceber quando um texto conversa com outro (paródia, paráfrase, citação, alusão), inclusive entre épocas diferentes."
},
{
"id": "port-0-4",
"t": "Imparcialidade e parcialidade na notícia e na publicidade",
"p": "F",
"d": "Comparar como diferentes veículos cobrem o mesmo fato e identificar o posicionamento por trás das escolhas de palavras."
},
{
"id": "port-0-5",
"t": "Gêneros digitais e multimodais",
"p": "E",
"d": "Posts, memes, hipertexto e textos que misturam imagem e palavra: como funcionam e quem são os interlocutores."
}
]
},
{
"g": "Língua e uso",
"itens": [
{
"id": "port-1-0",
"t": "Coesão, coerência e conectivos",
"p": "EF",
"d": "Como as ideias se ligam: conectivos de causa, consequência, oposição, conclusão; retomadas por pronomes e sinônimos. Também é a competência 4 da redação."
},
{
"id": "port-1-1",
"t": "Variação linguística e preconceito linguístico",
"p": "E",
"d": "Variações regionais, sociais, históricas e de situação (formal × informal). O Enem valoriza respeitar as variedades, sem tratar uma como \"errada\"."
},
{
"id": "port-1-2",
"t": "Funções da linguagem",
"p": "E",
"d": "Referencial, emotiva, apelativa, poética, metalinguística e fática: qual predomina e por quê."
},
{
"id": "port-1-3",
"t": "Semântica e figuras de linguagem",
"p": "E",
"d": "Sentido das palavras no contexto, ambiguidade, polissemia, metáfora, ironia, hipérbole, eufemismo."
},
{
"id": "port-1-4",
"t": "Recursos linguísticos e contexto",
"p": "E",
"d": "Pessoa, tempo e espaço do discurso, registro, grau de formalidade, escolha de palavras, tempos e modos verbais."
},
{
"id": "port-1-5",
"t": "Gramática normativa",
"p": "EF",
"d": "Classes de palavras, concordância, regência, crase, colocação pronominal e pontuação. No Enem aparece dentro da interpretação; na Fuvest pesa nas dissertativas e na redação."
}
]
}
]
},
"Literatura": {
"area": "LC",
"slug": "literatura",
"intro": "O Enem cobra literatura em trechos curtos, ligando a obra ao contexto histórico, sem lista de livros. A Fuvest tem 9 leituras obrigatórias e cobra estilo, contexto e relações entre as obras.",
"grupos": [
{
"g": "Fundamentos",
"itens": [
{
"id": "lite-0-0",
"t": "Gêneros literários: narrativo, lírico e dramático",
"p": "EF",
"d": "Como cada gênero se constrói: narrador e personagens, eu lírico e versos, diálogo e encenação."
},
{
"id": "lite-0-1",
"t": "Literatura e processo social",
"p": "EF",
"d": "Relação entre a obra e a sociedade da época: o texto como retrato e crítica do seu tempo."
},
{
"id": "lite-0-2",
"t": "Literatura, outras artes e cultura de massa",
"p": "E",
"d": "Diálogos com música, cinema, pintura, quadrinhos e com a literatura de massa."
}
]
},
{
"g": "Escolas literárias",
"itens": [
{
"id": "lite-1-0",
"t": "Quinhentismo, Barroco e Arcadismo",
"p": "E",
"d": "Literatura de informação e jesuítica, contrastes barrocos (Gregório de Matos) e a simplicidade árcade."
},
{
"id": "lite-1-1",
"t": "Romantismo",
"p": "EF",
"d": "Nacionalismo, indianismo, ultrarromantismo e a poesia social (condoreira). Nebulosas, da lista da Fuvest, é dessa época."
},
{
"id": "lite-1-2",
"t": "Realismo e Naturalismo",
"p": "EF",
"d": "Crítica social, objetividade, determinismo; Machado de Assis e Aluísio Azevedo. Memórias de Martha, da Fuvest, dialoga com esse período."
},
{
"id": "lite-1-3",
"t": "Parnasianismo e Simbolismo",
"p": "E",
"d": "Arte pela arte e forma perfeita × musicalidade e sugestão."
},
{
"id": "lite-1-4",
"t": "Pré-Modernismo e Modernismo de 1922",
"p": "EF",
"d": "Ruptura com a tradição, Semana de Arte Moderna, linguagem coloquial, Oswald e Mário de Andrade."
},
{
"id": "lite-1-5",
"t": "Geração de 30 e romance regionalista",
"p": "EF",
"d": "Romance social nordestino: Graciliano, Jorge Amado, Rachel de Queiroz (João Miguel, da Fuvest)."
},
{
"id": "lite-1-6",
"t": "Geração de 45 e literatura contemporânea",
"p": "EF",
"d": "Clarice Lispector, Guimarães Rosa, João Cabral e autores atuais como Conceição Evaristo."
}
]
},
{
"g": "Fuvest",
"itens": [
{
"id": "lite-2-0",
"t": "Literaturas de língua portuguesa: Portugal e África",
"p": "F",
"d": "Formação das literaturas brasileira e portuguesa e autoras de Angola e Moçambique, presentes na lista obrigatória."
},
{
"id": "lite-2-1",
"t": "As 9 leituras obrigatórias",
"p": "F",
"d": "Leia as obras e use os resumos do app (menu Livros da Fuvest) para revisar temas e contexto."
}
]
}
]
},
"Inglês": {
"area": "LC",
"slug": "ingles",
"intro": "No Enem são 5 questões de leitura, e você escolhe entre Inglês e Espanhol. Na Fuvest só existe Inglês, e o programa vai além da leitura: linguagem figurada, idioms e o papel do inglês no mundo.",
"grupos": [
{
"g": "Leitura",
"itens": [
{
"id": "ingl-0-0",
"t": "Leitura e compreensão de textos",
"p": "EF",
"d": "Entender a ideia principal e a finalidade do texto. Não é preciso traduzir tudo, e sim achar o que a questão pede."
},
{
"id": "ingl-0-1",
"t": "Estratégias de leitura",
"p": "EF",
"d": "Skimming (ideia geral), scanning (informação específica), cognatos e falsos cognatos."
},
{
"id": "ingl-0-2",
"t": "Gêneros verbo-visuais",
"p": "EF",
"d": "Tirinhas, HQs, posts, anúncios e cartazes: texto e imagem juntos."
},
{
"id": "ingl-0-3",
"t": "Gramática a serviço do sentido",
"p": "EF",
"d": "Tempos verbais, modais, conectivos e pronomes, cobrados para entender o texto e não como regra solta."
}
]
},
{
"g": "Linguagem e sociedade",
"itens": [
{
"id": "ingl-1-0",
"t": "Linguagem figurada, ironia e humor",
"p": "EF",
"d": "Metáfora, ironia, hipérbole, eufemismo e trocadilhos (puns)."
},
{
"id": "ingl-1-1",
"t": "Idioms e phrasal verbs",
"p": "F",
"d": "Expressões cujo sentido não é a soma das palavras (\"break the ice\", \"give up\")."
},
{
"id": "ingl-1-2",
"t": "Fato × opinião, fake news e ambiguidade",
"p": "F",
"d": "Avaliar a confiabilidade do texto e separar dado de generalização."
},
{
"id": "ingl-1-3",
"t": "Variação linguística e inglês como língua franca",
"p": "F",
"d": "Os vários ingleses do mundo e o preconceito linguístico."
},
{
"id": "ingl-1-4",
"t": "Geopolítica do inglês",
"p": "F",
"d": "Como o inglês virou língua global: colonialismo e imperialismo territorial, cultural e econômico."
}
]
}
]
},
"Espanhol": {
"area": "LC",
"slug": "espanhol",
"intro": "Espanhol é opção só no Enem (5 questões, no lugar das de Inglês). A Fuvest só tem Inglês, então, mirando a USP, vale considerar Inglês para estudar uma língua só.",
"grupos": [
{
"g": "Leitura",
"itens": [
{
"id": "espa-0-0",
"t": "Leitura e compreensão de textos",
"p": "E",
"d": "Ideia principal, finalidade e público do texto."
},
{
"id": "espa-0-1",
"t": "Falsos amigos (heterosemánticos)",
"p": "E",
"d": "Palavras parecidas com o português e de sentido diferente: \"exquisito\", \"oficina\", \"embarazada\"."
},
{
"id": "espa-0-2",
"t": "Gêneros: tirinhas, poemas, notícias e publicidade",
"p": "E",
"d": "Como a linguagem muda conforme o gênero e a intenção."
},
{
"id": "espa-0-3",
"t": "Variedades do espanhol e cultura hispânica",
"p": "E",
"d": "Diferenças entre Espanha e América Latina e temas culturais e sociais dos países hispânicos."
},
{
"id": "espa-0-4",
"t": "Gramática a serviço do sentido",
"p": "E",
"d": "Tempos verbais, pronomes e conectivos para entender o texto."
}
]
}
]
},
"Artes": {
"area": "LC",
"slug": "artes",
"intro": "Artes cai principalmente em Linguagens do Enem, com imagem de obra, música ou performance e uma pergunta sobre sentido e contexto. A Fuvest também cobra, inclusive patrimônio e mediação cultural.",
"grupos": [
{
"g": "Linguagens artísticas",
"itens": [
{
"id": "arte-0-0",
"t": "Artes visuais, música, teatro e dança",
"p": "EF",
"d": "Elementos de cada linguagem (cor, forma, ritmo, cena, movimento) e formas híbridas."
},
{
"id": "arte-0-1",
"t": "Materiais, técnicas e processo de criação",
"p": "EF",
"d": "Suportes, procedimentos, ferramentas e tecnologia na criação artística."
},
{
"id": "arte-0-2",
"t": "Arte contemporânea: performance, instalação e arte urbana",
"p": "EF",
"d": "Obras que fogem do quadro na parede: o corpo, o espaço e o público como parte da obra."
}
]
},
{
"g": "Arte e sociedade",
"itens": [
{
"id": "arte-1-0",
"t": "Movimentos artísticos e contexto histórico",
"p": "EF",
"d": "Renascimento, vanguardas europeias e Modernismo brasileiro: o que cada um rompeu."
},
{
"id": "arte-1-1",
"t": "Patrimônio cultural material e imaterial",
"p": "EF",
"d": "Bens tombados, saberes, festas e celebrações (como o Círio de Nazaré e as paneleiras de Goiabeiras)."
},
{
"id": "arte-1-2",
"t": "Mediação cultural: museus e instituições",
"p": "F",
"d": "O papel de museus, galerias e centros culturais."
},
{
"id": "arte-1-3",
"t": "Diversidade e multiculturalidade",
"p": "E",
"d": "Valorização da produção artística de minorias e da arte popular."
}
]
}
]
},
"Educação Física": {
"area": "LC",
"slug": "educacao-fisica",
"intro": "No Enem, Educação Física vem em textos sobre corpo, esporte e sociedade. Não cobra regra de esporte, e sim o sentido cultural e social das práticas corporais.",
"grupos": [
{
"g": "Práticas corporais",
"itens": [
{
"id": "educ-0-0",
"t": "Esportes, danças, lutas, ginásticas e jogos como cultura",
"p": "EF",
"d": "As práticas corporais como linguagem e expressão cultural."
},
{
"id": "educ-0-1",
"t": "História das práticas corporais",
"p": "F",
"d": "Como as práticas mudaram com a sociedade e a tecnologia; práticas como patrimônio."
},
{
"id": "educ-0-2",
"t": "Exercício físico, saúde e condicionamento",
"p": "E",
"d": "Diferença entre atividade física e exercício e os efeitos na saúde."
},
{
"id": "educ-0-3",
"t": "Lazer e autonomia",
"p": "E",
"d": "O lazer como direito e a prática corporal crítica."
}
]
},
{
"g": "Corpo e sociedade",
"itens": [
{
"id": "educ-1-0",
"t": "Corpo, identidade e padrões de beleza na mídia",
"p": "EF",
"d": "Crítica aos padrões de corpo divulgados pela mídia e pelas redes."
},
{
"id": "educ-1-1",
"t": "Preconceito e inclusão nas práticas corporais",
"p": "EF",
"d": "Gênero, raça e deficiência no esporte e na dança."
},
{
"id": "educ-1-2",
"t": "Redes sociais e representação do corpo",
"p": "F",
"d": "Como as plataformas digitais influenciam a imagem do corpo."
}
]
}
]
},
"TIC": {
"area": "LC",
"slug": "tic",
"intro": "TIC (Tecnologias da Informação e Comunicação) aparece no Enem em textos sobre internet, redes sociais e o impacto da tecnologia. Na Fuvest, o tema aparece dentro de Português e Inglês.",
"grupos": [
{
"g": "Tecnologia e linguagem",
"itens": [
{
"id": "tic-0-0",
"t": "Gêneros digitais e suportes",
"p": "E",
"d": "E-mail, post, blog, meme, podcast: como o meio muda o texto."
},
{
"id": "tic-0-1",
"t": "Interlocutores na comunicação digital",
"p": "E",
"d": "Quem fala com quem, hipertexto e interatividade."
},
{
"id": "tic-0-2",
"t": "Função social das tecnologias e inclusão digital",
"p": "E",
"d": "Acesso desigual à tecnologia e o seu impacto no trabalho e na educação."
},
{
"id": "tic-0-3",
"t": "Desinformação, privacidade e algoritmos",
"p": "E",
"d": "Fake news, bolhas, proteção de dados e inteligência artificial."
}
]
}
]
},
"História": {
"area": "CH",
"slug": "historia",
"intro": "O Enem cobra História ligada a cidadania, trabalho, diversidade e direitos, sempre a partir de um texto ou imagem. A Fuvest tem um programa longo e cronológico, com Brasil, Américas e História Geral.",
"grupos": [
{
"g": "Brasil",
"itens": [
{
"id": "hist-0-0",
"t": "Povos indígenas e a conquista",
"p": "EF",
"d": "Sociedades indígenas antes de 1500, resistência e adaptação à colonização."
},
{
"id": "hist-0-1",
"t": "Brasil Colônia: administração e economia",
"p": "EF",
"d": "Capitanias, governo-geral, açúcar, pecuária, mineração e comércio; interiorização e formação das fronteiras."
},
{
"id": "hist-0-2",
"t": "Escravidão, resistência e cultura afro-brasileira",
"p": "EF",
"d": "Tráfico, quilombos, irmandades e a participação negra na formação do Brasil."
},
{
"id": "hist-0-3",
"t": "Revoltas coloniais e Independência",
"p": "EF",
"d": "Conjurações, vinda da Corte (1808) e o processo de Independência."
},
{
"id": "hist-0-4",
"t": "Império: Primeiro Reinado, Regências e Segundo Reinado",
"p": "EF",
"d": "Organização do Estado, revoltas regenciais, café, Guerra do Paraguai."
},
{
"id": "hist-0-5",
"t": "Imigração, abolição e crise do Império",
"p": "EF",
"d": "Fim do tráfico, leis abolicionistas, imigração europeia e asiática, Proclamação da República."
},
{
"id": "hist-0-6",
"t": "Primeira República",
"p": "EF",
"d": "Oligarquias, coronelismo, Canudos, Contestado, cangaço, revoltas urbanas e movimento operário."
},
{
"id": "hist-0-7",
"t": "Era Vargas e Estado Novo",
"p": "EF",
"d": "Revolução de 1930, leis trabalhistas, DIP e propaganda, industrialização."
},
{
"id": "hist-0-8",
"t": "República de 1946, ditadura militar e redemocratização",
"p": "EF",
"d": "Populismo, golpe de 1964, AI-5, repressão, Diretas Já e a Constituição de 1988."
},
{
"id": "hist-0-9",
"t": "Brasil contemporâneo e direitos",
"p": "EF",
"d": "Cidadania, ações afirmativas, direitos sociais nas constituições e o sistema político atual."
}
]
},
{
"g": "Américas",
"itens": [
{
"id": "hist-1-0",
"t": "Maias, astecas e incas; conquista espanhola",
"p": "EF",
"d": "Organização dessas sociedades, conquista, dominação e resistência."
},
{
"id": "hist-1-1",
"t": "Colonização espanhola e inglesa; trabalho forçado",
"p": "F",
"d": "Semelhanças e diferenças entre as colonizações; encomienda e mita."
},
{
"id": "hist-1-2",
"t": "Independências e formação dos Estados nacionais",
"p": "EF",
"d": "Lutas pela independência na América espanhola e nos EUA."
},
{
"id": "hist-1-3",
"t": "EUA: expansão, Guerra Civil, crise de 1929 e New Deal",
"p": "F",
"d": "Marcha para o Oeste, Guerra de Secessão, crise de 1929 e hegemonia no pós-guerra."
},
{
"id": "hist-1-4",
"t": "Revoluções e ditaduras na América Latina",
"p": "EF",
"d": "México, Cuba, Perón, Cárdenas e as ditaduras militares do século XX."
}
]
},
{
"g": "História Geral",
"itens": [
{
"id": "hist-2-0",
"t": "Antiguidade: Grécia e Roma",
"p": "EF",
"d": "Pólis, democracia ateniense, cidadania, República e Império romano."
},
{
"id": "hist-2-1",
"t": "Idade Média",
"p": "EF",
"d": "Feudalismo, Igreja Católica, mundos islâmico e bizantino, cidades e comércio, crise do século XIV."
},
{
"id": "hist-2-2",
"t": "Renascimento, Reformas religiosas e absolutismo",
"p": "EF",
"d": "Humanismo, Reforma e Contrarreforma, Inquisição, Estado moderno."
},
{
"id": "hist-2-3",
"t": "Iluminismo e revoluções liberais",
"p": "EF",
"d": "Ideias iluministas, revoluções inglesas do século XVII e Revolução Francesa."
},
{
"id": "hist-2-4",
"t": "Revolução Industrial e capitalismo",
"p": "EF",
"d": "Sistema fabril, operariado, urbanização; depois fordismo e toyotismo."
},
{
"id": "hist-2-5",
"t": "Século XIX: nacionalismos, socialismo e imperialismo",
"p": "EF",
"d": "Napoleão, revoluções de 1830 e 1848, partilha da África e da Ásia."
},
{
"id": "hist-2-6",
"t": "Guerras Mundiais e totalitarismos",
"p": "EF",
"d": "1ª e 2ª Guerras, nazismo, fascismo, stalinismo, crise de 1929."
},
{
"id": "hist-2-7",
"t": "Revoluções socialistas: Rússia e China",
"p": "EF",
"d": "Revolução Russa de 1917 e Revolução Chinesa de 1949."
},
{
"id": "hist-2-8",
"t": "Guerra Fria e descolonização",
"p": "EF",
"d": "Mundo bipolar, corrida armamentista e independências na Ásia e na África."
},
{
"id": "hist-2-9",
"t": "Mundo pós-Guerra Fria",
"p": "EF",
"d": "Queda do Muro de Berlim, fim da URSS, conflitos no Oriente Médio e conflitos étnicos e religiosos."
},
{
"id": "hist-2-10",
"t": "Patrimônio e diversidade cultural",
"p": "E",
"d": "Cultura material e imaterial e movimentos culturais e seu impacto social."
}
]
}
]
},
"Geografia": {
"area": "CH",
"slug": "geografia",
"intro": "Geografia no Enem mistura natureza e sociedade: questões ambientais, urbanização, agricultura e leitura de mapas e gráficos. O programa da Fuvest é amplo e cobra também geologia, oceanos e geopolítica.",
"grupos": [
{
"g": "Geografia física",
"itens": [
{
"id": "geog-0-0",
"t": "Cartografia: escala, projeções, coordenadas e fusos",
"p": "EF",
"d": "Ler mapas e gráficos, calcular escala, entender projeções e fusos horários; GPS e sensoriamento remoto."
},
{
"id": "geog-0-1",
"t": "Estrutura da Terra, tectônica e relevo",
"p": "EF",
"d": "Placas tectônicas, terremotos, vulcanismo, rochas, intemperismo e formas de relevo do Brasil."
},
{
"id": "geog-0-2",
"t": "Clima e mudanças climáticas",
"p": "EF",
"d": "Elementos e fatores do clima, climas do Brasil, efeito estufa, El Niño e aquecimento global."
},
{
"id": "geog-0-3",
"t": "Vegetação, biomas e domínios morfoclimáticos",
"p": "EF",
"d": "Grandes formações vegetais do mundo e domínios do Brasil (Amazônia, Cerrado, Caatinga…)."
},
{
"id": "geog-0-4",
"t": "Água: bacias hidrográficas, oceanos e litoral",
"p": "EF",
"d": "Bacias brasileiras, aquíferos, correntes marinhas e ecossistemas costeiros."
}
]
},
{
"g": "Ambiente",
"itens": [
{
"id": "geog-1-0",
"t": "Questões ambientais e acordos internacionais",
"p": "EF",
"d": "Desmatamento, desertificação, camada de ozônio, conferências do clima e Protocolo de Montreal."
},
{
"id": "geog-1-1",
"t": "Recursos minerais e matriz energética",
"p": "EF",
"d": "Fontes de energia, matriz energética brasileira e impactos ambientais."
},
{
"id": "geog-1-2",
"t": "Sustentabilidade e política ambiental brasileira",
"p": "EF",
"d": "Unidades de conservação, gestão de recursos hídricos e biodiversidade."
}
]
},
{
"g": "Geografia humana",
"itens": [
{
"id": "geog-2-0",
"t": "Espaço agrário: agronegócio, agricultura familiar e reforma agrária",
"p": "EF",
"d": "Modernização do campo, estrutura fundiária, conflitos e movimentos sociais rurais."
},
{
"id": "geog-2-1",
"t": "Industrialização no Brasil e no mundo",
"p": "EF",
"d": "Café e indústria em São Paulo, substituição de importações, desconcentração industrial."
},
{
"id": "geog-2-2",
"t": "Urbanização e rede urbana",
"p": "EF",
"d": "Metropolização, macrocefalia, segregação, mobilidade e movimentos sociais urbanos."
},
{
"id": "geog-2-3",
"t": "População e migrações",
"p": "EF",
"d": "Estrutura etária, transição demográfica, fecundidade, migrações internas e refugiados."
},
{
"id": "geog-2-4",
"t": "Globalização, blocos econômicos e organismos internacionais",
"p": "EF",
"d": "Multinacionais, Mercosul, União Europeia, ONU, OMC e ONGs."
},
{
"id": "geog-2-5",
"t": "Geopolítica e conflitos",
"p": "EF",
"d": "Guerra Fria, mundo multipolar, potências emergentes e conflitos regionais."
},
{
"id": "geog-2-6",
"t": "Formação territorial e regiões do Brasil",
"p": "EF",
"d": "Como o território se formou e as desigualdades regionais, incluindo o estado de São Paulo."
}
]
}
]
},
"Filosofia": {
"area": "CH",
"slug": "filosofia",
"intro": "Filosofia no Enem vem com um trecho de um filósofo e pede para relacionar a ideia ao conceito. Conhecer os principais pensadores e o que cada um defendia resolve a maioria das questões.",
"grupos": [
{
"g": "História da filosofia",
"itens": [
{
"id": "filo-0-0",
"t": "Origem da filosofia: mito, logos e pré-socráticos",
"p": "EF",
"d": "A passagem do mito à razão e a busca da arché (princípio de todas as coisas)."
},
{
"id": "filo-0-1",
"t": "Sócrates, Platão e Aristóteles",
"p": "EF",
"d": "Maiêutica, mundo das ideias, ética das virtudes e política."
},
{
"id": "filo-0-2",
"t": "Filosofia helenística",
"p": "EF",
"d": "Estoicismo (Sêneca), epicurismo e ceticismo: como viver bem."
},
{
"id": "filo-0-3",
"t": "Filosofia medieval",
"p": "EF",
"d": "Fé e razão em Agostinho e Tomás de Aquino."
},
{
"id": "filo-0-4",
"t": "Filosofia moderna: racionalismo, empirismo e Kant",
"p": "EF",
"d": "Descartes, Locke, Hume e Kant: de onde vem o conhecimento."
},
{
"id": "filo-0-5",
"t": "Filosofia contemporânea",
"p": "EF",
"d": "Nietzsche, Marx, existencialismo (Sartre), Escola de Frankfurt (Adorno), Foucault, Arendt."
}
]
},
{
"g": "Grandes temas",
"itens": [
{
"id": "filo-1-0",
"t": "Metafísica: idealismo, realismo, dualismo e materialismo",
"p": "F",
"d": "Grandes visões sobre o que é a realidade e a relação entre mente e corpo."
},
{
"id": "filo-1-1",
"t": "Ética: liberdade e responsabilidade",
"p": "EF",
"d": "Fundamentos da ação humana, dever, virtude e consequências."
},
{
"id": "filo-1-2",
"t": "Filosofia política: Maquiavel e os contratualistas",
"p": "EF",
"d": "Maquiavel, Hobbes, Locke e Rousseau: origem do Estado e do poder."
},
{
"id": "filo-1-3",
"t": "Democracia, cidadania, direitos humanos e justiça",
"p": "EF",
"d": "Teorias de justiça e fundamentos dos direitos humanos."
}
]
}
]
},
"Sociologia": {
"area": "CH",
"slug": "sociologia",
"intro": "Sociologia no Enem é muito sobre desigualdade, trabalho, cultura e movimentos sociais, quase sempre a partir de um texto atual. Os três clássicos (Durkheim, Weber e Marx) são a base.",
"grupos": [
{
"g": "Fundamentos",
"itens": [
{
"id": "soci-0-0",
"t": "Os clássicos: Durkheim, Weber e Marx",
"p": "EF",
"d": "Fato social, ação social e luta de classes: os três jeitos de explicar a sociedade."
},
{
"id": "soci-0-1",
"t": "Cultura, diversidade e etnocentrismo",
"p": "EF",
"d": "Relativismo cultural e crítica a julgar outras culturas pelos próprios valores."
},
{
"id": "soci-0-2",
"t": "Identidade, socialização e instituições",
"p": "EF",
"d": "Família, escola, religião e Estado na formação do indivíduo."
}
]
},
{
"g": "Sociedade contemporânea",
"itens": [
{
"id": "soci-1-0",
"t": "Estratificação e desigualdade social",
"p": "EF",
"d": "Classes, renda, mobilidade social e desigualdades no Brasil."
},
{
"id": "soci-1-1",
"t": "Trabalho: fordismo, toyotismo e precarização",
"p": "EF",
"d": "Mudanças no trabalho, terceirização, informalidade e trabalho por aplicativo."
},
{
"id": "soci-1-2",
"t": "Movimentos sociais e participação política",
"p": "EF",
"d": "Sindicatos, movimentos urbanos e rurais, democracia e cidadania."
},
{
"id": "soci-1-3",
"t": "Raça, gênero e direitos",
"p": "EF",
"d": "Racismo estrutural, interseccionalidade, feminismo e ações afirmativas."
},
{
"id": "soci-1-4",
"t": "Indústria cultural e meios de comunicação",
"p": "E",
"d": "Adorno e Horkheimer, cultura de massa e consumo."
},
{
"id": "soci-1-5",
"t": "Violência e segurança pública",
"p": "E",
"d": "Violência urbana, contra a mulher e o papel do Estado."
},
{
"id": "soci-1-6",
"t": "Globalização e mudanças sociais",
"p": "EF",
"d": "Modernidade líquida (Bauman), redes sociais e novas formas de sociabilidade."
}
]
}
]
},
"Física": {
"area": "CN",
"slug": "fisica",
"intro": "Física no Enem é muito aplicada: conta de luz, chuveiro, segurança no trânsito, som e energia. Fórmula decorada ajuda pouco sem entender o fenômeno. A Fuvest cobra mais conta e, na 2ª fase, a resolução escrita.",
"grupos": [
{
"g": "Mecânica",
"itens": [
{
"id": "fisi-0-0",
"t": "Grandezas, unidades, notação científica e vetores",
"p": "E",
"d": "Sistema Internacional, ordem de grandeza e operações com vetores."
},
{
"id": "fisi-0-1",
"t": "Cinemática: MU, MUV e gráficos",
"p": "EF",
"d": "Velocidade, aceleração e leitura de gráficos de posição e velocidade pelo tempo."
},
{
"id": "fisi-0-2",
"t": "Leis de Newton e forças",
"p": "EF",
"d": "Inércia, F = m·a, ação e reação; peso, normal, atrito e tração."
},
{
"id": "fisi-0-3",
"t": "Movimento circular e força centrípeta",
"p": "E",
"d": "Curvas, rotações e o que mantém um corpo em trajetória circular."
},
{
"id": "fisi-0-4",
"t": "Trabalho, energia e potência",
"p": "EF",
"d": "Energia cinética e potencial, conservação e dissipação de energia, potência."
},
{
"id": "fisi-0-5",
"t": "Impulso, quantidade de movimento e colisões",
"p": "EF",
"d": "Conservação do momento linear e por que airbag e carroceria deformável salvam vidas."
},
{
"id": "fisi-0-6",
"t": "Gravitação e leis de Kepler",
"p": "EF",
"d": "Lei da gravitação universal, órbitas, marés e movimento dos astros."
},
{
"id": "fisi-0-7",
"t": "Estática e torque",
"p": "E",
"d": "Equilíbrio de corpos, alavancas e momento de uma força."
},
{
"id": "fisi-0-8",
"t": "Hidrostática: Stevin, Pascal e Arquimedes",
"p": "E",
"d": "Pressão, prensa hidráulica, empuxo e flutuação."
}
]
},
{
"g": "Térmica",
"itens": [
{
"id": "fisi-1-0",
"t": "Calor, temperatura e calorimetria",
"p": "E",
"d": "Escalas termométricas, calor específico, trocas de calor, mudanças de estado e dilatação."
},
{
"id": "fisi-1-1",
"t": "Termodinâmica: gases e máquinas térmicas",
"p": "EF",
"d": "Gases ideais, leis da termodinâmica, ciclos e rendimento de motores e geladeiras."
}
]
},
{
"g": "Eletricidade e magnetismo",
"itens": [
{
"id": "fisi-2-0",
"t": "Eletrostática: carga, Lei de Coulomb e campo elétrico",
"p": "EF",
"d": "Força entre cargas, campo, potencial e poder das pontas."
},
{
"id": "fisi-2-1",
"t": "Eletrodinâmica: Ohm, circuitos e consumo",
"p": "EF",
"d": "Corrente, tensão, resistência, potência (P = U·i), kWh e conta de luz, fusíveis."
},
{
"id": "fisi-2-2",
"t": "Magnetismo e indução",
"p": "E",
"d": "Ímãs, campo magnético terrestre, motores e geradores."
}
]
},
{
"g": "Ondas, óptica e física moderna",
"itens": [
{
"id": "fisi-3-0",
"t": "Ondas e som",
"p": "EF",
"d": "Frequência, comprimento de onda, v = λ·f, altura, timbre e intensidade sonora em decibéis."
},
{
"id": "fisi-3-1",
"t": "Óptica: reflexão, refração, espelhos e lentes",
"p": "EF",
"d": "Formação de imagens, instrumentos ópticos e fenômenos do dia a dia."
},
{
"id": "fisi-3-2",
"t": "Ondas eletromagnéticas e espectro",
"p": "EF",
"d": "Rádio, micro-ondas, luz visível, raios X: frequência e aplicações."
},
{
"id": "fisi-3-3",
"t": "Radioatividade e radiação ionizante",
"p": "EF",
"d": "Tipos de radiação, meia-vida, usos na medicina e riscos."
},
{
"id": "fisi-3-4",
"t": "Energia solar, matriz energética e evolução estelar",
"p": "F",
"d": "Como as estrelas produzem energia e o papel da energia solar."
}
]
}
]
},
"Química": {
"area": "CN",
"slug": "quimica",
"intro": "Química no Enem aparece muito ligada a ambiente, alimentos, indústria e energia. Estequiometria, soluções e química orgânica estão entre os temas mais frequentes. A Fuvest cobra mais cálculo e nomenclatura.",
"grupos": [
{
"g": "Química geral",
"itens": [
{
"id": "quim-0-0",
"t": "Modelos atômicos e estrutura do átomo",
"p": "E",
"d": "Dalton, Thomson, Rutherford e Bohr; número atômico, massa e isótopos."
},
{
"id": "quim-0-1",
"t": "Tabela periódica e origem dos elementos",
"p": "EF",
"d": "Organização da tabela, propriedades periódicas e como os elementos se formaram nas estrelas."
},
{
"id": "quim-0-2",
"t": "Ligações químicas e forças intermoleculares",
"p": "EF",
"d": "Ligações iônica, covalente e metálica; polaridade e pontes de hidrogênio."
},
{
"id": "quim-0-3",
"t": "Substâncias, misturas e separação",
"p": "E",
"d": "Propriedades dos materiais, estados físicos e métodos de separação (filtração, destilação…)."
},
{
"id": "quim-0-4",
"t": "Funções inorgânicas: ácidos, bases, sais e óxidos",
"p": "E",
"d": "Definições, nomenclatura, indicadores e neutralização."
}
]
},
{
"g": "Cálculos químicos",
"itens": [
{
"id": "quim-1-0",
"t": "Reações, balanceamento e conservação da massa",
"p": "EF",
"d": "Leis ponderais e equações químicas balanceadas."
},
{
"id": "quim-1-1",
"t": "Mol e estequiometria",
"p": "EF",
"d": "Massa molar, constante de Avogadro e cálculos de quantidade em reações."
},
{
"id": "quim-1-2",
"t": "Soluções e concentração",
"p": "EF",
"d": "g/L, mol/L, porcentagem e ppm; diluição e mistura de soluções."
},
{
"id": "quim-1-3",
"t": "Gases",
"p": "E",
"d": "Leis dos gases, equação geral e volume molar."
},
{
"id": "quim-1-4",
"t": "Propriedades coligativas",
"p": "E",
"d": "Por que o sal aumenta a temperatura de ebulição da água e outros efeitos."
}
]
},
{
"g": "Físico-química",
"itens": [
{
"id": "quim-2-0",
"t": "Termoquímica: entalpia e Lei de Hess",
"p": "EF",
"d": "Reações endotérmicas e exotérmicas e calor de reação."
},
{
"id": "quim-2-1",
"t": "Cinética química",
"p": "EF",
"d": "Velocidade de reação, energia de ativação e catalisadores."
},
{
"id": "quim-2-2",
"t": "Equilíbrio químico e pH",
"p": "EF",
"d": "Constante de equilíbrio, deslocamento (Le Chatelier), pH e hidrólise."
},
{
"id": "quim-2-3",
"t": "Eletroquímica: pilhas e eletrólise",
"p": "EF",
"d": "Oxirredução, potenciais de redução, baterias e eletrólise."
},
{
"id": "quim-2-4",
"t": "Radioatividade, fissão e fusão",
"p": "E",
"d": "Decaimento, meia-vida e energia nuclear."
}
]
},
{
"g": "Orgânica e ambiente",
"itens": [
{
"id": "quim-3-0",
"t": "Química orgânica: funções, isomeria e reações",
"p": "EF",
"d": "Hidrocarbonetos, álcoois, ácidos, ésteres, aminas; isomeria e reações principais."
},
{
"id": "quim-3-1",
"t": "Polímeros e petroquímica",
"p": "EF",
"d": "Plásticos, borrachas, náilon e reciclagem."
},
{
"id": "quim-3-2",
"t": "Ciclos biogeoquímicos e poluição",
"p": "EF",
"d": "Ciclos do carbono, nitrogênio, enxofre e água; chuva ácida, agrotóxicos e poluição da água."
},
{
"id": "quim-3-3",
"t": "Combustíveis e energia",
"p": "E",
"d": "Petróleo, gás natural, biocombustíveis e impactos ambientais."
}
]
}
]
},
"Biologia": {
"area": "CN",
"slug": "biologia",
"intro": "Biologia no Enem é muito ecologia, saúde e genética aplicada (vacinas, doenças, biotecnologia). Na Fuvest, o programa destaca genética, evolução e fisiologia humana.",
"grupos": [
{
"g": "Células e moléculas",
"itens": [
{
"id": "biol-0-0",
"t": "Célula: procariontes, eucariontes e organelas",
"p": "EF",
"d": "Estrutura celular e a interação da célula com o ambiente."
},
{
"id": "biol-0-1",
"t": "Metabolismo: fotossíntese e respiração",
"p": "E",
"d": "Como as células obtêm e usam energia; fermentação."
},
{
"id": "biol-0-2",
"t": "Divisão celular: mitose e meiose",
"p": "EF",
"d": "Para que serve cada uma e as diferenças entre elas."
},
{
"id": "biol-0-3",
"t": "DNA, código genético e síntese de proteínas",
"p": "EF",
"d": "Replicação, transcrição, tradução e mutações."
},
{
"id": "biol-0-4",
"t": "Biotecnologia",
"p": "E",
"d": "Transgênicos, clonagem, células-tronco, testes de DNA e aspectos éticos."
}
]
},
{
"g": "Genética e evolução",
"itens": [
{
"id": "biol-1-0",
"t": "Genética: Mendel e padrões de herança",
"p": "EF",
"d": "Leis de Mendel, herança autossômica, ligada ao sexo e mitocondrial; heredogramas."
},
{
"id": "biol-1-1",
"t": "Grupos sanguíneos, imunologia e vacinas",
"p": "EF",
"d": "Sistema ABO e Rh, antígenos e anticorpos, como as vacinas previnem doenças."
},
{
"id": "biol-1-2",
"t": "Evolução: Darwin, teoria sintética e especiação",
"p": "EF",
"d": "Seleção natural, variação, mutação, recombinação, isolamento reprodutivo e evidências da evolução."
},
{
"id": "biol-1-3",
"t": "Evolução humana",
"p": "EF",
"d": "Origem e evolução da espécie humana."
},
{
"id": "biol-1-4",
"t": "Origem da vida",
"p": "E",
"d": "Hipóteses sobre a origem da Terra e dos seres vivos."
}
]
},
{
"g": "Seres vivos e corpo humano",
"itens": [
{
"id": "biol-2-0",
"t": "Classificação dos seres vivos e vírus",
"p": "E",
"d": "Reinos, níveis de organização, vírus, autótrofos e heterótrofos."
},
{
"id": "biol-2-1",
"t": "Fisiologia humana",
"p": "EF",
"d": "Sistemas digestório, respiratório, circulatório, urinário e nervoso e como trabalham juntos."
}
]
},
{
"g": "Ecologia e saúde",
"itens": [
{
"id": "biol-3-0",
"t": "Cadeias, teias alimentares e fluxo de energia",
"p": "EF",
"d": "Produtores, consumidores, decompositores e pirâmides ecológicas."
},
{
"id": "biol-3-1",
"t": "Populações, comunidades e relações ecológicas",
"p": "E",
"d": "Predação, parasitismo, mutualismo, competição e sucessão ecológica."
},
{
"id": "biol-3-2",
"t": "Ciclos biogeoquímicos",
"p": "E",
"d": "Ciclos do carbono, nitrogênio e água."
},
{
"id": "biol-3-3",
"t": "Biomas e problemas ambientais",
"p": "E",
"d": "Biomas brasileiros, desmatamento, poluição e conservação."
},
{
"id": "biol-3-4",
"t": "Saúde, doenças e saneamento",
"p": "EF",
"d": "Principais doenças no Brasil, prevenção, vacinação e saneamento básico."
}
]
}
]
}
});
Object.assign(window.PROGRAMA["Matemática"], { area: "MT", slug: "matematica" });
