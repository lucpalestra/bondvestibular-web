/* BondVestibular v0.1 · BondLabs
   SPA simples (sem build). Dados ficam no localStorage do navegador. */
(function () {
  "use strict";
  const C = window.CONTEUDO, G = window.GABARITOS;
  const VERSION = "v0.3";
  const KEY = "bondvestibular_v0";
  const LIMITE = { D1: 330 * 60, D2: 300 * 60 }; // 5h30 e 5h
  const CORRECAO_URL = "https://www.preparaenem.com/enem/provas-gabaritos-e-correcoes-do-enem.htm";
  const $app = document.getElementById("app");

  // ---------- estado ----------
  function load() {
    try { return Object.assign(blank(), JSON.parse(localStorage.getItem(KEY)) || {}); }
    catch (e) { return blank(); }
  }
  function blank() { return { attempts: [], current: {}, livros: {}, redacoes: [], draft: { enem: "", fuvest: "" } }; }
  let S = load();
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* storage indisponível */ } }

  // ---------- utils ----------
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = sec => { sec = Math.max(0, Math.floor(sec)); const h = Math.floor(sec / 3600), m = Math.floor(sec % 3600 / 60), s = sec % 60; return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`; };
  const pct = (a, b) => b ? Math.round(a / b * 100) : 0;
  const dataBR = t => new Date(t).toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "2-digit" });
  function toast(msg) { const t = document.getElementById("toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2200); }
  function copy(text) {
    (navigator.clipboard ? navigator.clipboard.writeText(text) : Promise.reject())
      .then(() => toast("Copiado! Cole no Claude ✨"))
      .catch(() => { const ta = document.createElement("textarea"); ta.value = text; document.body.appendChild(ta); ta.select(); try { document.execCommand("copy"); toast("Copiado! Cole no Claude ✨"); } catch (e) { toast("Não deu para copiar"); } ta.remove(); });
  }
  const go = h => { location.hash = h; };
  const top = (titulo, back = "#/") => `<div class="top"><button class="back" data-go="${back}">‹ Voltar</button><h2>${titulo}</h2></div>`;
  const provaNome = id => { const [a, d] = id.split("_"); return `Enem ${a} · ${d === "D1" ? "1º dia" : "2º dia"}`; };
  const pdfDe = id => { const [a, d] = id.split("_"); return `provas/enem${a}_${d.toLowerCase()}.pdf`; };
  const qnums = dia => dia === "D1" ? range(1, 90) : range(91, 180);
  function range(a, b) { const r = []; for (let i = a; i <= b; i++) r.push(i); return r; }
  const gabKey = (q, lang) => q <= 5 ? q + lang : String(q);
  const areaDe = q => [...C.areas.D1, ...C.areas.D2].find(a => q >= a.de && q <= a.ate);

  // ---------- correção ----------
  function corrigir(id, answers, lang) {
    const gab = G[id], dia = id.split("_")[1];
    const r = { acertos: 0, total: 0, anuladas: [], erros: [], brancos: [], areas: {} };
    C.areas[dia].forEach(a => r.areas[a.id] = { nome: a.nome, cor: a.cor, acertos: 0, total: 0 });
    qnums(dia).forEach(q => {
      const certa = gab[gabKey(q, lang)], sua = answers[q], ar = r.areas[areaDe(q).id];
      if (certa === "X") { r.anuladas.push(q); return; }
      r.total++; ar.total++;
      if (sua === certa) { r.acertos++; ar.acertos++; }
      else if (!sua) r.brancos.push({ q, certa });
      else r.erros.push({ q, sua, certa });
    });
    return r;
  }

  // ---------- telas ----------
  const MENU = [
    { ic: "📝", t: "Provas oficiais", s: "Enem 2022 a 2025 com cronômetro e correção", h: "#/provas" },
    { ic: "🧠", t: "Diagnóstico IA", s: "Seus erros por área, assunto e motivo", h: "#/diagnostico" },
    { ic: "📚", t: "Matérias", s: "As 4 áreas do Enem + o que a Fuvest cobra a mais", h: "#/materias" },
    { ic: "🗂️", t: "Banco de questões", s: "740 questões do Enem separadas por matéria", h: "#/banco", tag: "novo", tagc: "new" },
    { ic: "📖", t: "Livros da Fuvest", s: "As 9 obras obrigatórias da Fuvest 2028, com resumo", h: "#/livros" },
    { ic: "✍️", t: "Redação", s: "Modo Enem e modo Fuvest, com pedido de correção", h: "#/redacao" },
    { ic: "🖊️", t: "Treino dissertativo", s: "2ª fase da Fuvest: resolver por escrito", h: "#/dissertativo", tag: "em breve" },
    { ic: "📊", t: "Minhas provas e stats", s: "Histórico, acertos e evolução", h: "#/stats" }
  ];

  function home() {
    const feitas = S.attempts.length;
    const livrosLidos = Object.values(S.livros).filter(Boolean).length;
    $app.innerHTML = `
      <div class="hdr">
        <div class="logo">🎓</div>
        <div class="brand"><h1>BondVestibular</h1><p>by BondLabs · Enem + Fuvest · rumo à USP</p></div>
        <div class="flag" title="Brasil"><svg viewBox="0 0 72 50" width="72" height="50" aria-label="Bandeira do Brasil"><rect width="72" height="50" rx="5" fill="#009c3b"/><path d="M36 5 67 25 36 45 5 25z" fill="#ffdf00"/><circle cx="36" cy="25" r="11.5" fill="#002776"/><path d="M24.8 22.6c7.6-1.6 15.6.2 22.2 4.4l.6-1.9c-6.9-4.3-15.2-6.1-23.1-4.3z" fill="#fff"/></svg></div>
      </div>
      <div class="status">8 provas oficiais + 740 questões ✅ · ${feitas} feita${feitas === 1 ? "" : "s"} · ${livrosLidos}/9 livros lidos</div>
      <div class="menu">
        ${MENU.map(m => `
          <button class="mcard" data-go="${m.h}">
            <div class="ic">${m.ic}</div>
            <div class="tx"><div class="t">${m.t}${m.tag ? `<span class="tag ${m.tagc || ""}">${m.tag}</span>` : ""}</div><div class="s">${m.s}</div></div>
            <div class="ch">›</div>
          </button>`).join("")}
      </div>
      <div class="foot">${VERSION} · Gabaritos oficiais Inep · BondLabs</div>`;
  }

  function provas() {
    const ultima = id => S.attempts.filter(a => a.prova === id).slice(-1)[0];
    const btn = (ano, d) => {
      const id = `${ano}_${d}`, u = ultima(id), em = S.current[id];
      const sub = em ? `em andamento · ${Object.keys(em.answers || {}).length} marcadas`
        : u ? `última: ${u.result.acertos}/${u.result.total} (${pct(u.result.acertos, u.result.total)}%)`
        : d === "D1" ? "Linguagens + Humanas · 5h30" : "Natureza + Matemática · 5h";
      return `<button class="dayb" data-go="#/prova/${id}"><b>${d === "D1" ? "1º dia" : "2º dia"}</b><span>${sub}</span></button>`;
    };
    $app.innerHTML = `${top("📝 Provas oficiais")}
      <div class="box muted small">Caderno <b>azul</b> (1º dia = caderno 1, 2º dia = caderno 7). Gabarito oficial do Inep já embutido: é só marcar e entregar.</div>
      ${C.provas.map(p => `
        <div class="box"><div class="year"><div class="y">${p.ano}</div>${btn(p.ano, "D1")}${btn(p.ano, "D2")}</div>
        <div class="muted small" style="margin-top:8px">${p.obs}</div></div>`).join("")}
      <div class="box"><div class="year"><div class="y" style="opacity:.5">2026</div>
        <div class="muted">O 2º dia é em 15/11. O Inep publica a prova completa até o fim de novembro, aí ela entra aqui.</div></div></div>`;
  }

  let tick = null;
  function prova(id) {
    if (!G[id]) return go("#/provas");
    const dia = id.split("_")[1];
    let cur = S.current[id];
    if (dia === "D1" && !(cur && cur.lang)) {
      $app.innerHTML = `${top(provaNome(id), "#/provas")}
        <div class="box"><h3>Qual língua estrangeira?</h3><p class="muted">As questões 1 a 5 têm versão em Inglês e em Espanhol. Na Fuvest só tem Inglês.</p>
        <div class="row"><button class="btn" data-lang="i">🇬🇧 Inglês</button><button class="btn sec" data-lang="e">🇪🇸 Espanhol</button></div></div>`;
      $app.querySelectorAll("[data-lang]").forEach(b => b.onclick = () => {
        S.current[id] = { answers: {}, elapsed: 0, lang: b.dataset.lang, startedAt: Date.now() }; save(); prova(id);
      });
      return;
    }
    if (!cur) { cur = S.current[id] = { answers: {}, elapsed: 0, lang: "i", startedAt: Date.now() }; save(); }
    const limite = LIMITE[dia];
    $app.parentElement && document.querySelector("main").classList.add("wide");
    const areas = C.areas[dia];
    $app.innerHTML = `
      ${top(provaNome(id), "#/provas")}
      <div class="exam">
        <div class="pdf"><iframe src="${pdfDe(id)}#view=FitH" title="Prova"></iframe></div>
        <div>
          <div class="sticky">
            <div class="box" style="margin:0">
              <div class="row" style="justify-content:space-between">
                <div><div class="muted small">Tempo restante</div><div class="timer" id="tm">${fmt(limite - cur.elapsed)}</div></div>
                <div class="row"><button class="btn sec" id="play">▶ Iniciar</button><a class="btn ghost" href="${pdfDe(id)}" target="_blank" rel="noopener" style="text-decoration:none">📄 Prova</a></div>
              </div>
              <div class="progress" style="margin-top:12px"><i id="pg"></i></div>
              <div class="row small muted" style="margin-top:8px;justify-content:space-between"><span id="cnt"></span>${dia === "D1" ? `<span>Língua: ${cur.lang === "i" ? "Inglês" : "Espanhol"}</span>` : ""}</div>
            </div>
          </div>
          <div class="box sheet" id="sheet">
            ${areas.map(a => `<div class="area" style="color:${a.cor}">${a.nome} · ${a.de}–${a.ate}</div>` +
              range(a.de, a.ate).map(q => `<div class="q" data-q="${q}"><span class="n">${q}</span>${"ABCDE".split("").map(L => `<button class="bub${cur.answers[q] === L ? " on" : ""}" data-l="${L}">${L}</button>`).join("")}</div>`).join("")).join("")}
          </div>
          <div class="row"><button class="btn" id="ent">Entregar prova</button><button class="btn danger" id="zer">Recomeçar</button></div>
        </div>
      </div>`;
    const total = qnums(dia).length;
    const upd = () => {
      const n = Object.keys(cur.answers).length;
      document.getElementById("cnt").textContent = `${n}/${total} marcadas`;
      document.getElementById("pg").style.width = pct(n, total) + "%";
      const rest = limite - cur.elapsed, tm = document.getElementById("tm");
      tm.textContent = fmt(rest); tm.classList.toggle("low", rest < 1800);
    };
    upd();
    document.getElementById("sheet").onclick = e => {
      const b = e.target.closest(".bub"); if (!b) return;
      const q = b.parentElement.dataset.q, L = b.dataset.l;
      if (cur.answers[q] === L) delete cur.answers[q]; else cur.answers[q] = L;
      b.parentElement.querySelectorAll(".bub").forEach(x => x.classList.toggle("on", cur.answers[q] === x.dataset.l));
      save(); upd();
    };
    const play = document.getElementById("play");
    const setRun = on => {
      clearInterval(tick); tick = null;
      if (on) { let last = Date.now(); tick = setInterval(() => { const now = Date.now(); cur.elapsed += (now - last) / 1000; last = now; upd(); if (Math.floor(cur.elapsed) % 5 === 0) save(); if (cur.elapsed >= limite) { setRun(false); toast("⏰ Tempo esgotado!"); } }, 1000); }
      play.textContent = on ? "⏸ Pausar" : (cur.elapsed > 0 ? "▶ Continuar" : "▶ Iniciar");
      save();
    };
    setRun(false);
    play.onclick = () => setRun(!tick);
    const ent = document.getElementById("ent");
    ent.onclick = () => {
      const faltam = total - Object.keys(cur.answers).length;
      if (!ent.dataset.ok && faltam > 0) { ent.dataset.ok = 1; ent.textContent = `Faltam ${faltam}. Entregar mesmo assim?`; return; }
      setRun(false);
      const result = corrigir(id, cur.answers, cur.lang);
      const att = { id: "a" + Date.now(), prova: id, lang: cur.lang, answers: cur.answers, elapsed: Math.round(cur.elapsed), startedAt: cur.startedAt, finishedAt: Date.now(), result, notas: {} };
      S.attempts.push(att); delete S.current[id]; save();
      go("#/resultado/" + att.id);
    };
    const zer = document.getElementById("zer");
    zer.onclick = () => {
      if (!zer.dataset.ok) { zer.dataset.ok = 1; zer.textContent = "Apagar respostas?"; return; }
      setRun(false); delete S.current[id]; save(); prova(id);
    };
  }

  function bars(areas) {
    return `<div class="bars">${Object.values(areas).map(a => `
      <div class="b"><div class="lbl"><span>${a.nome}</span><span>${a.acertos}/${a.total} · ${pct(a.acertos, a.total)}%</span></div>
      <div class="bar"><i style="width:${pct(a.acertos, a.total)}%;background:${a.cor}"></i></div></div>`).join("")}</div>`;
  }

  function resultado(aid) {
    const a = S.attempts.find(x => x.id === aid); if (!a) return go("#/stats");
    const r = a.result, lista = [...r.erros, ...r.brancos].sort((x, y) => x.q - y.q);
    $app.innerHTML = `${top("Resultado", "#/provas")}
      <div class="box"><div class="muted">${provaNome(a.prova)} · ${dataBR(a.finishedAt)} · tempo ${fmt(a.elapsed)}</div>
        <div class="row" style="margin:10px 0 4px;gap:18px"><div class="big">${r.acertos}<span class="muted" style="font-size:28px">/${r.total}</span></div>
        <div><b style="font-size:22px">${pct(r.acertos, r.total)}% de acerto</b><div class="muted small">${r.erros.length} erradas · ${r.brancos.length} em branco${r.anuladas.length ? ` · anulada${r.anuladas.length > 1 ? "s" : ""}: ${r.anuladas.join(", ")}` : ""}</div></div></div>
        ${bars(r.areas)}
        <p class="muted small">No Enem de verdade a nota é calculada pela TRI (acertar as fáceis pesa mais). A estimativa por TRI entra numa próxima versão.</p>
        <div class="row"><a class="btn" href="${CORRECAO_URL}" target="_blank" rel="noopener" style="text-decoration:none">📺 Correção comentada</a><a class="btn sec" href="${pdfDe(a.prova)}" target="_blank" rel="noopener" style="text-decoration:none">📄 Abrir prova</a><button class="btn ghost" data-go="#/diagnostico">🧠 Diagnóstico</button></div>
      </div>
      <div class="box"><h3>Por que errei? <span class="muted small">(isso alimenta o diagnóstico)</span></h3>
        ${lista.length ? lista.map(e => {
          const n = a.notas[e.q] || {};
          return `<div class="err" data-q="${e.q}"><div class="qn">${e.q}</div><div>
            <div class="small" style="margin-bottom:6px">${e.sua ? `Você: <b style="color:var(--bad)">${e.sua}</b> · ` : `<span class="muted">Em branco</span> · `}Certa: <b style="color:var(--ok)">${e.certa}</b> · <span class="muted">${areaDe(e.q).nome}</span></div>
            <div class="grid2"><select data-k="motivo"><option value="">Motivo…</option>${C.motivos.map(m => `<option${n.motivo === m ? " selected" : ""}>${esc(m)}</option>`).join("")}</select>
            <input type="text" data-k="assunto" placeholder="Assunto (ex.: porcentagem, Era Vargas)" value="${esc(n.assunto || "")}"></div></div></div>`;
        }).join("") : `<p>Gabaritou! 🏆</p>`}
      </div>`;
    $app.querySelectorAll(".err").forEach(row => {
      const q = row.dataset.q;
      row.querySelectorAll("[data-k]").forEach(el => el.onchange = el.oninput = () => {
        a.notas[q] = a.notas[q] || {}; a.notas[q][el.dataset.k] = el.value.trim(); save();
      });
    });
  }

  function diagnostico() {
    if (!S.attempts.length) {
      $app.innerHTML = `${top("🧠 Diagnóstico IA")}<div class="box"><h3>Faça a primeira prova</h3><p class="muted">O diagnóstico nasce dos seus erros. Comece pela prova de 2025 completa (os dois dias, cronometrados): ela vira sua nota de partida.</p><button class="btn" data-go="#/provas">Ir para as provas</button></div>`;
      return;
    }
    // última tentativa de cada prova
    const ult = {}; S.attempts.forEach(a => ult[a.prova] = a);
    const tents = Object.values(ult);
    const areas = {};
    tents.forEach(a => Object.entries(a.result.areas).forEach(([k, v]) => {
      areas[k] = areas[k] || { nome: v.nome, cor: v.cor, acertos: 0, total: 0 };
      areas[k].acertos += v.acertos; areas[k].total += v.total;
    }));
    const motivos = {}, assuntos = {}, erros = [];
    tents.forEach(a => [...a.result.erros, ...a.result.brancos].forEach(e => {
      const n = a.notas[e.q] || {};
      if (n.motivo) motivos[n.motivo] = (motivos[n.motivo] || 0) + 1;
      if (n.assunto) { const k = n.assunto.toLowerCase(); assuntos[k] = (assuntos[k] || 0) + 1; }
      erros.push({ prova: a.prova, q: e.q, area: areaDe(e.q).nome, sua: e.sua || "branco", certa: e.certa, motivo: n.motivo || "", assunto: n.assunto || "" });
    }));
    const totMot = Object.values(motivos).reduce((x, y) => x + y, 0);
    const ordA = Object.values(areas).sort((x, y) => pct(x.acertos, x.total) - pct(y.acertos, y.total));
    const topMot = Object.entries(motivos).sort((x, y) => y[1] - x[1]);
    const topAss = Object.entries(assuntos).sort((x, y) => y[1] - x[1]).slice(0, 8);
    const dicas = [];
    if (ordA.length) dicas.push(`Sua área mais fraca até agora é <b>${ordA[0].nome}</b> (${pct(ordA[0].acertos, ordA[0].total)}%). É onde cada hora de estudo rende mais.`);
    const m = topMot[0] && topMot[0][0];
    if (m === "Não sabia o conteúdo") dicas.push("A maioria dos erros é de <b>conteúdo</b>: estude os assuntos da lista abaixo antes de fazer mais provas.");
    if (m === "Interpretei errado") dicas.push("Muitos erros de <b>interpretação</b>: leia o comando antes do texto e sublinhe o que a questão pede.");
    if (m === "Faltou tempo") dicas.push("O <b>tempo</b> está pegando: média ideal de ~3 min por questão. Pule as longas e volte depois.");
    if (m === "Chutei") dicas.push("Muitos <b>chutes</b>: na TRI, chute em questão fácil que você errou derruba a nota. Priorize garantir as fáceis.");
    if (m === "Erro bobo / desatenção") dicas.push("Erros de <b>desatenção</b>: confira unidade, sinal e alternativa antes de marcar.");
    if (!totMot) dicas.push("Marque o <b>motivo</b> de cada erro na tela de resultado para o diagnóstico ficar mais preciso.");
    const missing = ["D1", "D2"].filter(d => !tents.some(a => a.prova.endsWith(d)));
    if (missing.length) dicas.push(`Falta fazer uma prova do <b>${missing[0] === "D1" ? "1º dia" : "2º dia"}</b> para o diagnóstico cobrir todas as áreas.`);

    const prompt = [
      "Você é meu professor particular para o Enem e a Fuvest (meta: USP).",
      "Analise meu desempenho e me diga: 1) onde estou perdendo mais pontos, 2) quais assuntos estudar primeiro, 3) um plano semanal para as próximas 4 semanas.",
      "", "DESEMPENHO POR ÁREA (última tentativa de cada prova):",
      ...Object.values(areas).map(a => `- ${a.nome}: ${a.acertos}/${a.total} (${pct(a.acertos, a.total)}%)`),
      "", "MOTIVOS DOS ERROS:", ...(topMot.length ? topMot.map(([k, v]) => `- ${k}: ${v}`) : ["- (não marquei)"]),
      "", "ERROS (prova | questão | área | minha resposta | certa | motivo | assunto):",
      ...erros.map(e => `- ${e.prova} | ${e.q} | ${e.area} | ${e.sua} | ${e.certa} | ${e.motivo || "-"} | ${e.assunto || "-"}`)
    ].join("\n");

    $app.innerHTML = `${top("🧠 Diagnóstico IA")}
      <div class="box"><h3>Acerto por área</h3><div class="muted small">Considera a última tentativa de cada prova (${tents.length} prova${tents.length > 1 ? "s" : ""}).</div>${bars(areas)}</div>
      <div class="box"><h3>O que fazer agora</h3>${dicas.map(d => `<p>👉 ${d}</p>`).join("")}</div>
      <div class="grid2">
        <div class="box"><h3>Motivos dos erros</h3>${topMot.length ? `<div class="bars">${topMot.map(([k, v]) => `<div class="b"><div class="lbl"><span>${esc(k)}</span><span>${v}</span></div><div class="bar"><i style="width:${pct(v, totMot)}%;background:var(--gold)"></i></div></div>`).join("")}</div>` : `<p class="muted">Ainda sem motivos marcados.</p>`}</div>
        <div class="box"><h3>Assuntos que mais erro</h3>${topAss.length ? topAss.map(([k, v]) => `<div class="row" style="justify-content:space-between;padding:6px 0;border-top:1px solid var(--line)"><span>${esc(k)}</span><b>${v}×</b></div>`).join("") : `<p class="muted">Anote o assunto de cada erro na tela de resultado.</p>`}</div>
      </div>
      <div class="box"><h3>Diagnóstico com IA</h3><p class="muted">Na v0 o app monta o pedido completo com todos os seus erros. Copie e cole no Claude para receber a análise e o plano de estudo. A IA integrada dentro do app vem na próxima versão.</p>
        <button class="btn" id="cp">✨ Copiar pedido para a IA</button></div>`;
    document.getElementById("cp").onclick = () => copy(prompt);
  }

  const BANCO_DE = { "Português (gramática e interpretação)": "LC|Português", "Literatura": "LC|Literatura", "Artes": "LC|Artes", "Educação Física": "LC|Educação Física", "TIC": "LC|TIC", "História": "CH|História", "Geografia": "CH|Geografia", "Filosofia": "CH|Filosofia", "Sociologia": "CH|Sociologia", "Física": "CN|Física", "Química": "CN|Química", "Biologia": "CN|Biologia", "Matemática": "MT|Matemática" };
  function materias() {
    $app.innerHTML = `${top("📚 Matérias")}
      ${C.materias.map(m => `<div class="box"><h3>${m.ic} ${m.area} <span class="tag">${m.dia}</span></h3>${(window.PROGRAMA || {})[m.area] ? `<button class="btn" style="margin:4px 0 10px" data-go="#/programa">📋 Programa completo (Enem + Fuvest)</button>` : ""}
        <div class="disc">${m.disc.map(d => { const b = BANCO_DE[d]; return b ? `<span class="link" data-banco="${b}">${esc(d)} ›</span>` : `<span>${esc(d)}</span>`; }).join("")}</div>
        <div class="muted small" style="margin-top:12px">O que mais costuma cair:</div>
        <ul style="margin:6px 0 0;padding-left:20px">${m.foco.map(f => `<li>${esc(f)}</li>`).join("")}</ul></div>`).join("")}
      <div class="box"><h3>🏛️ O que a Fuvest cobra a mais</h3>
        ${C.fuvestExtra.map(f => `<div style="padding:8px 0;border-top:1px solid var(--line)"><b>${f.t}</b><div class="muted small">${f.s}</div></div>`).join("")}</div>
      <p class="muted small" style="text-align:center">Toque numa matéria para treinar no banco de questões. Aulas e resumos por assunto entram nas próximas versões.</p>`;
  }

  let livroAberto = -1;
  function livros() {
    const lidos = C.livros.filter((_, i) => S.livros[i]).length;
    $app.innerHTML = `${top("📖 Livros da Fuvest")}
      <div class="box"><div class="row" style="justify-content:space-between"><b>${lidos}/9 lidos</b><span class="muted small">Lista oficial da Fuvest 2028 (provas no fim de 2027)</span></div>
      <div class="progress" style="margin-top:10px"><i style="width:${pct(lidos, 9)}%"></i></div></div>
      ${C.livros.map((l, i) => `
        <div class="box livrobox">
          <div class="livro" data-open="${i}" style="cursor:pointer">
            <input type="checkbox" data-i="${i}"${S.livros[i] ? " checked" : ""} title="Marcar como lido">
            <span class="yr">${l.ano}</span>
            <span style="flex:1"><b>${esc(l.titulo)}</b><div class="muted small">${esc(l.autora)} · ${esc(l.origem)} · ${esc(l.genero)}</div></span>
            <span class="ch" style="color:var(--gold);font-size:24px">${livroAberto === i ? "−" : "+"}</span>
          </div>
          ${livroAberto === i ? `
            <div style="margin-top:12px">
              <h4 class="lh">Resumo</h4><p style="margin:4px 0 12px;line-height:1.55">${esc(l.resumo)}</p>
              <h4 class="lh">Temas</h4><div class="disc" style="margin-bottom:12px">${l.temas.map(t => `<span>${esc(t)}</span>`).join("")}</div>
              <h4 class="lh">O que observar para a prova</h4><p style="margin:4px 0 0;line-height:1.55">${esc(l.olhar)}</p>
            </div>` : ""}
        </div>`).join("")}
      <p class="muted small">Resumos de apoio: não substituem a leitura. Confira a lista no edital da Fuvest 2028 quando sair.</p>
      <div class="box"><h3>E os livros do Enem?</h3>
        <p style="margin:0;line-height:1.55">O Enem <b>não tem lista de livros obrigatórios</b>. A literatura cai em trechos curtos (poema, conto, crônica, parte de romance) dentro da prova de Linguagens, e a questão pede interpretação e reconhecimento de estilo de época (Romantismo, Modernismo etc.), não a leitura prévia de uma obra. No banco de questões dá para filtrar só <b>Literatura</b>.</p>
        <button class="btn sec" style="margin-top:12px" data-banco="LC|Literatura">Ver questões de Literatura</button></div>`;
    $app.querySelectorAll("[data-i]").forEach(c => { c.onclick = e => e.stopPropagation(); c.onchange = () => { S.livros[c.dataset.i] = c.checked; save(); livros(); }; });
    $app.querySelectorAll("[data-open]").forEach(r => r.onclick = () => { const i = +r.dataset.open; livroAberto = livroAberto === i ? -1 : i; livros(); });
  }

  // ---------- banco de questões ----------
  const Q = (window.QUESTOES || []).map(r => ({ id: r[0], ano: r[1], dia: r[2], num: r[3], lang: r[4], area: r[5], mat: r[6], page: r[7] }));
  const AREAS = [
    { id: "LC", nome: "Linguagens", ic: "🗣️", mats: ["Português", "Literatura", "Inglês", "Espanhol", "Artes", "Educação Física", "TIC"] },
    { id: "CH", nome: "Humanas", ic: "🌎", mats: ["História", "Geografia", "Filosofia", "Sociologia"] },
    { id: "CN", nome: "Natureza", ic: "🧪", mats: ["Biologia", "Química", "Física"] },
    { id: "MT", nome: "Matemática", ic: "📐", mats: ["Matemática"] }
  ];
  const matDe = q => (S.matFix && S.matFix[q.id]) || q.mat;
  const certaDe = q => G[`${q.ano}_${q.dia}`][q.num <= 5 && q.dia === "D1" ? q.num + q.lang : String(q.num)];
  const imgDe = q => `questoes/${q.ano}_${q.dia.toLowerCase()}_${q.num}${q.lang}.webp`;
  let BF = { area: "MT", mat: "Matemática", ano: 0, so: "todas", i: 0 };
  const RES = window.RESOLUCOES || {};
  const temaDe = q => (RES[q.id] && RES[q.id].t) || [];
  function bancoLista() {
    S.banco = S.banco || {};
    return Q.filter(q => (BF.topic ? temaDe(q).includes(BF.topic) : (q.area === BF.area && matDe(q) === BF.mat)) && (!BF.ano || q.ano === BF.ano) &&
      (BF.so === "todas" || q.id === BF.pin || (BF.so === "novas" && !S.banco[q.id]) || (BF.so === "erradas" && S.banco[q.id] && !S.banco[q.id].ok)));
  }
  function banco() {
    S.banco = S.banco || {};
    const stat = (area, mat) => { const qs = Q.filter(q => q.area === area && (!mat || matDe(q) === mat)); const f = qs.filter(q => S.banco[q.id]); return { n: qs.length, f: f.length, ok: f.filter(q => S.banco[q.id].ok).length }; };
    $app.innerHTML = `${top("🗂️ Banco de questões")}
      <div class="box muted small">${Q.length} questões oficiais do Enem 2022 a 2025, separadas por matéria. Responda e veja na hora se acertou. A separação por matéria é automática: se alguma estiver no lugar errado, dá para corrigir dentro da questão.</div>
      ${AREAS.map(a => {
        const sa = stat(a.id);
        return `<div class="box"><h3>${a.ic} ${a.nome} <span class="muted small">· ${sa.f}/${sa.n} feitas${sa.f ? ` · ${pct(sa.ok, sa.f)}% de acerto` : ""}</span></h3>
          <div class="matgrid">${a.mats.map(m => { const s = stat(a.id, m); return `<button class="matb" data-banco="${a.id}|${m}"><b>${m}</b><span>${s.n} questões${s.f ? ` · ${s.f} feitas · ${pct(s.ok, s.f)}%` : ""}</span></button>`; }).join("")}</div></div>`;
      }).join("")}
      <p class="muted small" style="text-align:center">Enem 2009 a 2021 e questões da Fuvest entram nas próximas versões.</p>`;
  }
  function bancoQ() {
    S.banco = S.banco || {};
    const lista = bancoLista();
    if (BF.i >= lista.length) BF.i = Math.max(0, lista.length - 1);
    const q = lista[BF.i];
    const chips = (arr, cur, key) => arr.map(([v, l]) => `<button class="chip${cur === v ? " on" : ""}" data-f="${key}" data-v="${v}">${l}</button>`).join("");
    const head = `${top(BF.topic ? esc(topicoNome(BF.topic)) : `${BF.mat}`, BF.topic ? "#/programa" : "#/banco")}
      <div class="box" style="padding:14px 16px">
        <div class="chips">${chips([[0, "Todos os anos"], [2025, "2025"], [2024, "2024"], [2023, "2023"], [2022, "2022"]], BF.ano, "ano")}</div>
        <div class="chips" style="margin-top:8px">${chips([["todas", "Todas"], ["novas", "Não feitas"], ["erradas", "Que errei"]], BF.so, "so")}</div>
      </div>`;
    if (!q) {
      $app.innerHTML = head + `<div class="box"><p class="muted">Nenhuma questão com esse filtro.</p></div>`;
    } else {
      const certa = certaDe(q), r = S.banco[q.id], anulada = certa === "X";
      const area = AREAS.find(a => a.id === q.area);
      $app.innerHTML = head + `
        <div class="row" style="justify-content:space-between;margin-bottom:10px">
          <b>Enem ${q.ano} · questão ${q.num}${q.lang ? (q.lang === "i" ? " (Inglês)" : " (Espanhol)") : ""}</b>
          <span class="muted">${BF.i + 1} de ${lista.length}</span>
        </div>
        <div class="qimg"><img src="${imgDe(q)}" alt="Questão ${q.num} do Enem ${q.ano}"></div>
        <div class="box" style="margin-top:12px">
          ${anulada ? `<p><b>Questão anulada pelo Inep.</b> Não vale ponto, mas serve de treino.</p>` : `
          <div class="row" id="alts">${"ABCDE".split("").map(L => {
            let cls = "bub big";
            if (r) { if (L === certa) cls += r.r === L ? " ok" : " right"; else if (L === r.r) cls += " bad"; }
            return `<button class="${cls}" data-r="${L}"${r ? " disabled" : ""}>${L}</button>`;
          }).join("")}</div>
          ${r ? `<p style="margin:12px 0 0;font-weight:900;color:${r.ok ? "var(--ok)" : "var(--bad)"}">${r.ok ? "✅ Acertou!" : `❌ Errou. A certa é ${certa}.`}</p>` : `<p class="muted small" style="margin:10px 0 0">Toque na alternativa para responder.</p>`}`}
          <div class="row" style="margin-top:14px">
            <button class="btn sec" id="prev"${BF.i === 0 ? " disabled" : ""}>‹ Anterior</button>
            <button class="btn" id="next"${BF.i >= lista.length - 1 ? " disabled" : ""}>Próxima ›</button>
            ${r ? `<button class="btn ghost" id="redo">Refazer</button>` : ""}
          </div>
        </div>
        ${resBox(q, certa, r)}
        <div class="box small">
          <div class="row"><a href="${pdfDe(`${q.ano}_${q.dia}`)}#page=${q.page}" target="_blank" rel="noopener">📄 Ver na prova (pág. ${q.page})</a> · <a href="${CORRECAO_URL}" target="_blank" rel="noopener">📺 Correção comentada</a></div>
          <div class="row" style="margin-top:10px"><span class="muted">Matéria errada? Mudar para:</span>
            <select id="fix" style="width:auto">${area.mats.map(m => `<option${m === matDe(q) ? " selected" : ""}>${m}</option>`).join("")}</select></div>
        </div>`;
      if (!anulada && !r) $app.querySelectorAll("[data-r]").forEach(b => b.onclick = () => { S.banco[q.id] = { r: b.dataset.r, ok: b.dataset.r === certa, t: Date.now() }; BF.pin = q.id; save(); bancoQ(); });
      document.getElementById("prev").onclick = () => { resAberta = false; BF.pin = null; BF.i--; bancoQ(); window.scrollTo(0, 0); };
      document.getElementById("next").onclick = () => { resAberta = false; const sai = BF.pin === q.id && BF.so !== "todas" && !(BF.so === "erradas" && r && !r.ok); BF.pin = null; if (!sai) BF.i++; bancoQ(); window.scrollTo(0, 0); };
      const vr = document.getElementById("vres"); if (vr) vr.onclick = () => { resAberta = !resAberta; bancoQ(); };
      const ia = document.getElementById("ia"); if (ia) ia.onclick = () => pedirIA(q, certa);
      const redo = document.getElementById("redo"); if (redo) redo.onclick = () => { delete S.banco[q.id]; save(); bancoQ(); };
      document.getElementById("fix").onchange = e => { S.matFix = S.matFix || {}; S.matFix[q.id] = e.target.value; save(); toast(`Movida para ${e.target.value}`); bancoQ(); };
    }
    $app.querySelectorAll("[data-f]").forEach(b => b.onclick = () => { const v = b.dataset.v; BF[b.dataset.f] = b.dataset.f === "ano" ? +v : v; BF.i = 0; bancoQ(); });
  }
  let resAberta = false, TEXTOS = null;
  function resBox(q, certa, r) {
    const res = RES[q.id];
    if (res) {
      const label = res.r === "X" ? "Questão anulada" : `Resposta: ${res.r}`;
      if (!r && !resAberta) return `<div class="box"><button class="btn sec" id="vres">📘 Ver resolução passo a passo</button> <span class="muted small">(dica: tente responder antes)</span></div>`;
      return `<div class="box res"><div class="row" style="justify-content:space-between"><h3 style="margin:0">📘 Resolução passo a passo</h3>${r ? "" : `<button class="btn ghost" id="vres">Esconder</button>`}</div>
        <ol>${res.p.map(p => `<li>${p}</li>`).join("")}</ol>
        <div class="resp">${label}</div>
        ${res.t.length ? `<div class="disc">${res.t.map(t => `<span class="link" data-topico="${t}">${esc(topicoNome(t))} ›</span>`).join("")}</div>` : ""}</div>`;
    }
    return `<div class="box"><div class="row"><button class="btn sec" id="ia">✨ Resolver com IA</button><span class="muted small">Copia o pedido com a questão. Cole no Claude para ver o passo a passo.</span></div></div>`;
  }
  function pedirIA(q, certa) {
    const go2 = () => {
      const txt = (TEXTOS && TEXTOS[q.id]) || "";
      const url = new URL(imgDe(q), location.href).href;
      copy([
        `Você é um professor de cursinho pré-vestibular. Resolva passo a passo, de forma didática, a questão ${q.num} do Enem ${q.ano} (${matDe(q)}).`,
        `Explique: o que a questão pede, o raciocínio e as contas, por que a alternativa certa está certa e por que as outras estão erradas. No fim, diga qual conteúdo da matéria eu preciso revisar.`,
        ``, `Imagem da questão (com as figuras): ${url}`,
        certa && certa !== "X" ? `Gabarito oficial do Inep: ${certa}` : `Esta questão foi anulada pelo Inep.`,
        ``, `Texto da questão (extraído do PDF, fórmulas e figuras podem ter saído com falhas; na dúvida, use a imagem):`, txt
      ].join("\n"));
    };
    if (TEXTOS) return go2();
    fetch("data/textos.json").then(r => r.json()).then(j => { TEXTOS = j; go2(); }).catch(() => { TEXTOS = {}; go2(); });
  }
  const topicoNome = id => { for (const m in (window.PROGRAMA || {})) for (const g of PROGRAMA[m].grupos) for (const it of g.itens) if (it.id === id) return it.t; return id; };
  document.addEventListener("click", e => {
    const tp = e.target.closest("[data-topico]");
    if (tp) { BF = { area: "MT", mat: "Matemática", ano: 0, so: "todas", i: 0, topic: tp.dataset.topico }; resAberta = false; location.hash === "#/banco/q" ? bancoQ() : go("#/banco/q"); return; }
    const el = e.target.closest("[data-banco]"); if (!el) return;
    const [area, mat] = el.dataset.banco.split("|"); BF = { area, mat, ano: 0, so: "todas", i: 0 };
    location.hash === "#/banco/q" ? bancoQ() : go("#/banco/q");
  });

  let modoRed = "enem";
  function redacao() {
    const enem = modoRed === "enem";
    const txt = S.draft[modoRed] || "";
    $app.innerHTML = `${top("✍️ Redação")}
      <div class="box"><div class="chips"><button class="chip${enem ? " on" : ""}" data-m="enem">Modo Enem</button><button class="chip${!enem ? " on" : ""}" data-m="fuvest">Modo Fuvest</button></div>
        <p class="muted small" style="margin-bottom:0">${enem ? "Dissertativo-argumentativo, até 30 linhas, com proposta de intervenção. Nota de 0 a 1000 (5 competências de 0 a 200)." : "Dissertação sobre o tema proposto, com mais liberdade de forma e sem obrigação de proposta de intervenção. Faz parte do 1º dia da 2ª fase."}</p></div>
      <div class="box"><input type="text" id="tema" placeholder="Tema da redação" value="${esc(S.draft[modoRed + "_tema"] || "")}" style="margin-bottom:10px">
        <textarea id="txt" placeholder="Escreva aqui…">${esc(txt)}</textarea>
        <div class="row small muted" style="justify-content:space-between;margin-top:8px"><span id="info"></span><span>salvo automaticamente</span></div></div>
      ${enem ? `<div class="box"><h3>As 5 competências</h3>${C.competenciasEnem.map(c => `<div class="small" style="padding:5px 0">${esc(c)}</div>`).join("")}</div>` : ""}
      <div class="row"><button class="btn" id="cp">✨ Copiar pedido de correção para a IA</button><button class="btn sec" id="sv">Salvar no histórico</button></div>
      ${S.redacoes.length ? `<div class="box" style="margin-top:16px"><h3>Histórico</h3>${S.redacoes.slice().reverse().map(r => `<div style="padding:6px 0;border-top:1px solid var(--line)"><b>${esc(r.tema || "Sem tema")}</b> <span class="muted small">· ${r.modo === "enem" ? "Enem" : "Fuvest"} · ${dataBR(r.data)} · ${r.palavras} palavras</span></div>`).join("")}</div>` : ""}`;
    const ta = document.getElementById("txt"), tema = document.getElementById("tema"), info = document.getElementById("info");
    const upd = () => {
      const t = ta.value, pal = (t.trim().match(/\S+/g) || []).length, lin = Math.ceil(t.replace(/\n/g, " ").length / 75);
      info.textContent = `${pal} palavras · ~${lin} linhas${enem ? " (máx. 30)" : ""}`;
      info.style.color = enem && lin > 30 ? "var(--bad)" : "";
    };
    upd();
    ta.oninput = () => { S.draft[modoRed] = ta.value; save(); upd(); };
    tema.oninput = () => { S.draft[modoRed + "_tema"] = tema.value; save(); };
    $app.querySelectorAll("[data-m]").forEach(b => b.onclick = () => { modoRed = b.dataset.m; redacao(); });
    document.getElementById("cp").onclick = () => {
      if (!ta.value.trim()) return toast("Escreva a redação primeiro");
      copy(enem
        ? `Corrija minha redação como um corretor do Enem. Dê a nota de cada competência (0 a 200, em múltiplos de 40), a nota final e, para cada competência, o que fazer para subir.\n\n${C.competenciasEnem.join("\n")}\n\nTEMA: ${tema.value || "(não informado)"}\n\nREDAÇÃO:\n${ta.value}`
        : `Corrija minha redação como um corretor da Fuvest. Avalie adequação ao tema e ao gênero dissertativo, qualidade da argumentação, coesão e coerência e domínio da norma culta. Dê uma nota estimada e os 3 pontos mais importantes para melhorar.\n\nTEMA: ${tema.value || "(não informado)"}\n\nREDAÇÃO:\n${ta.value}`);
    };
    document.getElementById("sv").onclick = () => {
      if (!ta.value.trim()) return toast("Escreva a redação primeiro");
      S.redacoes.push({ modo: modoRed, tema: tema.value, texto: ta.value, data: Date.now(), palavras: (ta.value.trim().match(/\S+/g) || []).length });
      S.draft[modoRed] = ""; S.draft[modoRed + "_tema"] = ""; save(); toast("Redação salva ✅"); redacao();
    };
  }

  let progF = "todos";
  function programa() {
    const P = window.PROGRAMA["Matemática"]; S.prog = S.prog || {};
    const all = P.grupos.flatMap(g => g.itens), feitos = all.filter(i => S.prog[i.id]).length;
    const nQ = id => Q.filter(q => temaDe(q).includes(id)).length;
    const badge = p => p === "EF" ? `<span class="tag">Enem + Fuvest</span>` : p === "E" ? `<span class="tag" style="background:#173a5c;color:#9cc8ff">só Enem</span>` : `<span class="tag" style="background:#3b2f12;color:var(--gold)">só Fuvest</span>`;
    const ok = it => progF === "todos" || (progF === "enem" ? it.p.includes("E") : it.p.includes("F"));
    $app.innerHTML = `${top("📐 Programa de Matemática", "#/materias")}
      <div class="box"><p style="margin:0 0 10px;line-height:1.55">${esc(P.intro)}</p>
        <div class="row" style="justify-content:space-between"><b>${feitos}/${all.length} estudados</b><span class="muted small">Fontes: Matriz de Referência do Enem (Inep) e programa da Fuvest 2027</span></div>
        <div class="progress" style="margin-top:10px"><i style="width:${pct(feitos, all.length)}%"></i></div>
        <div class="chips" style="margin-top:12px">${[["todos", "Tudo"], ["enem", "Cai no Enem"], ["fuvest", "Cai na Fuvest"]].map(([v, l]) => `<button class="chip${progF === v ? " on" : ""}" data-pf="${v}">${l}</button>`).join("")}</div></div>
      ${P.grupos.map(g => { const its = g.itens.filter(ok); if (!its.length) return ""; return `<div class="box"><h3>${esc(g.g)}</h3>
        ${its.map(it => { const n = nQ(it.id); return `<div class="topico"><label class="row" style="align-items:flex-start;gap:12px;flex-wrap:nowrap"><input type="checkbox" data-pid="${it.id}"${S.prog[it.id] ? " checked" : ""} style="margin-top:4px">
          <span style="flex:1"><b>${esc(it.t)}</b> ${badge(it.p)}<div class="muted small" style="margin-top:4px;line-height:1.5">${esc(it.d)}</div>
          ${n ? `<span class="link small" data-topico="${it.id}" style="display:inline-block;margin-top:6px;color:var(--gold);cursor:pointer;font-weight:800">📘 ${n} questã${n > 1 ? "ões" : "o"} resolvida${n > 1 ? "s" : ""} ›</span>` : ""}</span></label></div>`; }).join("")}</div>`; }).join("")}
      <div class="box small"><b>Fora do programa atual:</b> ${esc(P.fora)}</div>
      <p class="muted small" style="text-align:center">As questões resolvidas por tópico são as de Matemática do Enem 2025. Os outros anos entram nas próximas rodadas.</p>`;
    $app.querySelectorAll("[data-pid]").forEach(c => c.onchange = () => { S.prog[c.dataset.pid] = c.checked; save(); programa(); });
    $app.querySelectorAll("[data-pf]").forEach(b => b.onclick = () => { progF = b.dataset.pf; programa(); });
  }

  function emBreve(titulo, itens) {
    $app.innerHTML = `${top(titulo)}<div class="box"><span class="tag new">em breve</span><h3 style="margin-top:12px">O que vem aqui</h3>
      <ul style="padding-left:20px">${itens.map(i => `<li style="margin:6px 0">${i}</li>`).join("")}</ul></div>
      <div class="box muted small">Enquanto isso, as provas oficiais de 2022 a 2025 já estão funcionando no menu de provas.</div>`;
  }

  function stats() {
    const at = S.attempts.slice().reverse();
    const tempoTot = S.attempts.reduce((s, a) => s + a.elapsed, 0);
    $app.innerHTML = `${top("📊 Minhas provas e stats")}
      <div class="grid2">
        <div class="box"><div class="muted small">Provas entregues</div><div class="big">${S.attempts.length}</div></div>
        <div class="box"><div class="muted small">Tempo de prova</div><div class="big" style="font-size:40px">${fmt(tempoTot)}</div></div>
      </div>
      <div class="box">${at.length ? `<table><tr><th>Prova</th><th>Data</th><th>Acertos</th><th>Tempo</th></tr>
        ${at.map(a => `<tr data-go="#/resultado/${a.id}" style="cursor:pointer"><td>${provaNome(a.prova)}</td><td>${dataBR(a.finishedAt)}</td><td><b>${a.result.acertos}/${a.result.total}</b> <span class="muted">${pct(a.result.acertos, a.result.total)}%</span></td><td>${fmt(a.elapsed)}</td></tr>`).join("")}</table>`
        : `<p class="muted">Nenhuma prova entregue ainda.</p><button class="btn" data-go="#/provas">Fazer a primeira</button>`}</div>
      <div class="box"><h3>Backup</h3><p class="muted small">Seus dados ficam só neste navegador. Exporte de vez em quando para não perder.</p>
        <div class="row"><button class="btn sec" id="exp">⬇ Exportar</button><label class="btn sec">⬆ Importar<input type="file" id="imp" accept=".json" hidden></label></div></div>`;
    document.getElementById("exp").onclick = () => {
      const blob = new Blob([JSON.stringify(S, null, 1)], { type: "application/json" });
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = `bondvestibular-backup-${new Date().toISOString().slice(0, 10)}.json`; a.click();
    };
    document.getElementById("imp").onchange = e => {
      const f = e.target.files[0]; if (!f) return;
      f.text().then(t => { S = Object.assign(blank(), JSON.parse(t)); save(); toast("Backup importado ✅"); stats(); }).catch(() => toast("Arquivo inválido"));
    };
  }

  // ---------- roteador ----------
  function route() {
    clearInterval(tick); tick = null;
    document.querySelector("main").classList.remove("wide");
    const [, p, arg] = (location.hash || "#/").split("/");
    switch (p) {
      case "provas": provas(); break;
      case "prova": prova(arg); break;
      case "resultado": resultado(arg); break;
      case "diagnostico": diagnostico(); break;
      case "materias": materias(); break;
      case "banco": arg === "q" ? bancoQ() : banco(); break;
      case "livros": livros(); break;
      case "redacao": redacao(); break;
      case "dissertativo": emBreve("🖊️ Treino dissertativo", ["Questões discursivas da 2ª fase da Fuvest", "Você escreve a resolução e a IA corrige o raciocínio, passo a passo", "Filtro pela carreira (matérias específicas do 2º dia)", "Português dissertativo do 1º dia da 2ª fase"]); break;
      case "stats": stats(); break;
      case "programa": programa(); break;
      default: home();
    }
    window.scrollTo(0, 0);
  }
  document.addEventListener("click", e => { const el = e.target.closest("[data-go]"); if (el) { e.preventDefault(); go(el.dataset.go); } });
  window.addEventListener("hashchange", route);
  route();
})();
