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
