# BondVestibular v0.2 · BondLabs

Site estático (HTML + CSS + JS puro, sem build). É só extrair e publicar.

## Publicar (igual ao BondChess)
1. Crie o repo no GitHub (ex.: `bondvestibular-web`) e suba todos os arquivos desta pasta.
2. No Render: **New → Static Site**, aponte para o repo.
   - Build command: *(deixe vazio)*
   - Publish directory: `.`
3. (Opcional) Domínio: `vestibular.bondlabs.com.br` em Settings → Custom Domains.

Para testar no PC antes: dentro da pasta, rode `python -m http.server 8000` e abra http://localhost:8000

## O que tem na v0.1
- **Provas oficiais**: Enem 2022–2025, 1º e 2º dia (caderno azul), PDF ao lado da folha de respostas, cronômetro (5h30 / 5h), salva sozinho e corrige com o gabarito oficial do Inep (anuladas não contam).
- **Resultado**: acertos por área + "por que errei" (motivo e assunto de cada erro).
- **Diagnóstico IA**: área mais fraca, motivos, assuntos que mais erra e botão que monta o pedido completo para colar no Claude.
- **Matérias**, **Livros da Fuvest 2028** (checklist), **Redação** (modo Enem / Fuvest, com pedido de correção para a IA), **Stats** com backup.
- **Banco de questões (v0.2)**: 740 questões do Enem 2022–2025 recortadas da prova oficial (pasta `questoes/`), separadas por matéria, com resposta na hora, filtros por ano / não feitas / que errei. A separação por matéria é automática; o usuário pode corrigir dentro da questão.
- **Livros da Fuvest (v0.2)**: resumo, temas e o que observar em cada uma das 9 obras.
- Treino dissertativo: tela "em breve".

## Estrutura
```
index.html  style.css  app.js
data/gabaritos.js   gabaritos oficiais extraídos dos PDFs do Inep
data/conteudo.js    matérias, livros (com resumos), competências da redação
data/questoes.js    índice do banco (id, ano, dia, número, área, matéria, página)
questoes/           uma imagem .webp por questão
provas/             cadernos oficiais (enemANO_d1.pdf / enemANO_d2.pdf)
```

## Adicionar o Enem 2026 (quando o Inep publicar)
1. Coloque `enem2026_d1.pdf` e `enem2026_d2.pdf` em `provas/`.
2. Em `data/gabaritos.js`, adicione `"2026_D1"` e `"2026_D2"` no mesmo formato.
3. Em `data/conteudo.js`, adicione `{ ano: 2026, obs: "" }` no começo de `provas`.

Os dados do usuário ficam no localStorage do navegador. Use Exportar/Importar na tela de stats.
