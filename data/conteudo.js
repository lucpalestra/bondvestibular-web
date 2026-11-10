// Conteúdo estático do BondVestibular v0.1
window.CONTEUDO = {
  provas: [
    { ano: 2025, obs: "3 questões anuladas no 2º dia (123, 132 e 174)" },
    { ano: 2024, obs: "1 questão anulada no 2º dia (129)" },
    { ano: 2023, obs: "1 questão anulada no 2º dia (164)" },
    { ano: 2022, obs: "1 questão anulada no 2º dia (157)" }
  ],
  areas: {
    D1: [
      { id: "LC", nome: "Linguagens", de: 1, ate: 45, cor: "#5b8def" },
      { id: "CH", nome: "Ciências Humanas", de: 46, ate: 90, cor: "#e8a33d" }
    ],
    D2: [
      { id: "CN", nome: "Ciências da Natureza", de: 91, ate: 135, cor: "#3fbf7f" },
      { id: "MT", nome: "Matemática", de: 136, ate: 180, cor: "#c06cf0" }
    ]
  },
  materias: [
    { area: "Linguagens", ic: "🗣️", dia: "Enem 1º dia · 45 questões",
      disc: ["Português (gramática e interpretação)", "Literatura", "Inglês ou Espanhol", "Artes", "Educação Física", "TIC"],
      foco: ["Interpretação de texto e gêneros textuais", "Funções da linguagem e variação linguística", "Escolas literárias e modernismo", "Arte contemporânea e patrimônio", "Inglês: leitura e compreensão (5 questões)"] },
    { area: "Ciências Humanas", ic: "🌎", dia: "Enem 1º dia · 45 questões",
      disc: ["História", "Geografia", "Filosofia", "Sociologia"],
      foco: ["Brasil Colônia, Império e República", "Cidadania, direitos e movimentos sociais", "Questões ambientais e urbanização", "Cartografia, clima e geopolítica", "Filósofos clássicos e modernos (ética e política)"] },
    { area: "Ciências da Natureza", ic: "🧪", dia: "Enem 2º dia · 45 questões",
      disc: ["Física", "Química", "Biologia"],
      foco: ["Ecologia e meio ambiente", "Genética e fisiologia humana", "Eletricidade, energia e ondas", "Estequiometria, soluções e química orgânica", "Funções orgânicas e reações"] },
    { area: "Matemática", ic: "📐", dia: "Enem 2º dia · 45 questões",
      disc: ["Matemática"],
      foco: ["Razão, proporção e porcentagem", "Estatística (média, mediana, moda) e gráficos", "Geometria plana e espacial", "Funções (1º e 2º grau, exponencial)", "Probabilidade e análise combinatória"] },
    { area: "Redação", ic: "✍️", dia: "Enem 1º dia · vale até 1000",
      disc: ["Texto dissertativo-argumentativo", "Proposta de intervenção"],
      foco: ["5 competências de 0 a 200", "Repertório sociocultural legitimado", "Coesão e conectivos", "Proposta com agente, ação, meio, finalidade e detalhamento"] }
  ],
  fuvestExtra: [
    { t: "Livros obrigatórios", s: "9 obras de autoras de língua portuguesa (lista da Fuvest 2028 no menu de livros)" },
    { t: "2ª fase dissertativa", s: "1º dia: Português + redação · 2º dia: matérias específicas da carreira" },
    { t: "Só Inglês", s: "Não tem opção de Espanhol" },
    { t: "Nota por acertos", s: "1ª fase com 80 questões; abaixo de 24 acertos elimina. Sem TRI" },
    { t: "Redação mais livre", s: "Dissertativa, mas sem obrigação de proposta de intervenção" }
  ],
  // Lista oficial divulgada pela Fuvest para o Vestibular 2028 (provas no fim de 2027). Confirmar no edital.
  // Resumos de apoio escritos para o app: não substituem a leitura.
  livros: [
    { ano: 1842, titulo: "Conselhos à minha filha", autora: "Nísia Floresta", origem: "Brasil", genero: "Prosa didática e moral",
      resumo: "Nísia Floresta escreve à filha, Lívia, um conjunto de conselhos sobre virtude, religião, estudo e conduta. O tom é o de um manual de boa formação, mas o centro do livro é a defesa de que a mulher precisa ser instruída. A autora é considerada uma das pioneiras do feminismo e da educação feminina no Brasil.",
      temas: ["Educação da mulher", "Moral e religião", "Relação mãe e filha", "Papel da mulher no Império"],
      olhar: "A tensão entre valores conservadores da época (recato, fé, obediência) e a reivindicação, avançada para 1842, de instrução para as mulheres." },
    { ano: 1872, titulo: "Nebulosas", autora: "Narcisa Amália", origem: "Brasil", genero: "Poesia (Romantismo)",
      resumo: "Único livro de poemas de Narcisa Amália, apontada como a primeira jornalista profissional do Brasil. Os poemas combinam o lirismo romântico (natureza, saudade, melancolia, amor) com uma poesia de engajamento social: crítica à escravidão, defesa de ideais republicanos e da condição da mulher.",
      temas: ["Lirismo e natureza", "Abolicionismo", "Ideais republicanos", "Voz feminina na literatura"],
      olhar: "Como o livro passa do eu lírico intimista para a poesia social, e o fato de ser uma mulher publicando poesia política no século XIX." },
    { ano: 1899, titulo: "Memórias de Martha", autora: "Julia Lopes de Almeida", origem: "Brasil", genero: "Romance (Realismo/Naturalismo)",
      resumo: "Martha, já adulta, narra a própria história. Depois da morte do pai, ela e a mãe empobrecem e passam a viver num cortiço no Rio de Janeiro. Entre a dureza do trabalho da mãe e a vida coletiva do cortiço, Martha encontra nos estudos o caminho para sair da pobreza e conquistar autonomia.",
      temas: ["Pobreza urbana e cortiço", "Educação como ascensão", "Trabalho feminino", "Rio de Janeiro do fim do século XIX"],
      olhar: "O olhar realista sobre a vida no cortiço e o papel da educação na emancipação de uma mulher pobre. Vale comparar com O Cortiço, de Aluísio Azevedo." },
    { ano: 1932, titulo: "João Miguel", autora: "Rachel de Queiroz", origem: "Brasil", genero: "Romance regionalista (Romance de 30)",
      resumo: "João Miguel, um homem simples do sertão do Ceará, mata outro homem numa briga quando estava bêbado e vai parar na cadeia de uma cidade do interior. O romance acompanha o cotidiano da prisão: a convivência com os outros presos, a culpa, a longa espera pelo julgamento e a relação com a companheira, Santa, que vai se afastando dele.",
      temas: ["Culpa e consciência", "Sistema prisional e justiça", "Sertão nordestino", "Solidão e abandono"],
      olhar: "A linguagem enxuta e regional típica do romance de 30 e a crítica social às condições da cadeia e da justiça para os pobres." },
    { ano: 1964, titulo: "A paixão segundo G. H.", autora: "Clarice Lispector", origem: "Brasil", genero: "Romance introspectivo",
      resumo: "G. H., escultora de classe alta no Rio de Janeiro, resolve arrumar o quarto da empregada, que acabou de ir embora. Lá dentro encontra uma barata e a esmaga na porta do armário. Diante do inseto agonizando, ela vive uma crise que desmonta quem ela achava que era, até o gesto extremo de provar a massa branca da barata.",
      temas: ["Identidade e desconstrução do eu", "Epifania", "Relação de classe com a empregada", "Limites da linguagem"],
      olhar: "O fluxo de consciência em primeira pessoa, a epifania como momento de revelação e o quarto da empregada como espaço de choque social." },
    { ano: 1967, titulo: "Geografia", autora: "Sophia de Mello Breyner Andresen", origem: "Portugal", genero: "Poesia",
      resumo: "Livro de poemas organizado como um percurso por lugares e viagens. Sophia busca a clareza, a luz e o mar, com forte influência da cultura grega clássica. Ao mesmo tempo, há uma dimensão ética e política: a poeta escreve durante a ditadura salazarista e trata da justiça e da liberdade.",
      temas: ["Mar, luz e paisagem", "Herança grega clássica", "Viagem e lugar", "Ética, justiça e liberdade"],
      olhar: "A relação entre espaço e poesia (o título não é à toa) e como a beleza clássica convive com a crítica ao seu tempo." },
    { ano: 1990, titulo: "Balada de amor ao vento", autora: "Paulina Chiziane", origem: "Moçambique", genero: "Romance",
      resumo: "Primeiro romance publicado por uma mulher em Moçambique. Sarnau conta sua vida: o amor de juventude por Mwando, que a abandona; o casamento com o futuro rei, de quem se torna uma das muitas esposas; o sofrimento dentro da poligamia; a fuga e o reencontro com Mwando anos depois.",
      temas: ["Poligamia e lobolo (dote)", "Tradição × cristianismo e colonização", "Condição da mulher", "Oralidade africana"],
      olhar: "A voz feminina que narra a própria opressão, as marcas da oralidade na escrita e o choque entre costumes tradicionais e valores trazidos pelo colonizador." },
    { ano: 2018, titulo: "Canção para ninar menino grande", autora: "Conceição Evaristo", origem: "Brasil", genero: "Romance",
      resumo: "A história de Fio Jasmim, ferroviário negro e sedutor que passa por várias cidades e se envolve com muitas mulheres. O romance é contado a partir dessas mulheres: suas vozes mostram o desejo, a espera, o abandono e a dor que ficam por trás do mito do conquistador.",
      temas: ["Masculinidade negra", "Afetos e abandono", "Escrevivência", "Protagonismo das mulheres negras"],
      olhar: "O conceito de escrevivência (escrita a partir da experiência negra) e como as mulheres viram as verdadeiras protagonistas da história de um homem." },
    { ano: 2019, titulo: "A visão das plantas", autora: "Djaimilia Pereira de Almeida", origem: "Portugal / Angola", genero: "Romance curto",
      resumo: "O capitão Celestino passou a vida no tráfico de escravizados e na pirataria. Velho, volta à aldeia natal no litoral português e dedica os últimos anos a cuidar de um jardim com uma delicadeza surpreendente. Vizinhos e o padre o veem como um monstro; ele não demonstra arrependimento.",
      temas: ["Memória da escravidão e do colonialismo", "Culpa e ausência de remorso", "Natureza e cuidado", "Velhice e morte"],
      olhar: "O contraste entre a violência do passado e a ternura com as plantas, e o que o livro diz sobre a memória colonial portuguesa. A autora parte de um personagem de Raul Brandão." }
  ],
  competenciasEnem: [
    "C1 · Domínio da norma padrão da língua escrita",
    "C2 · Compreender a proposta e desenvolver o tema no tipo dissertativo-argumentativo, com repertório",
    "C3 · Selecionar, organizar e interpretar informações em defesa de um ponto de vista",
    "C4 · Mecanismos linguísticos de coesão na argumentação",
    "C5 · Proposta de intervenção detalhada, respeitando os direitos humanos"
  ],
  motivos: ["Não sabia o conteúdo", "Interpretei errado", "Faltou tempo", "Chutei", "Erro bobo / desatenção"]
};
