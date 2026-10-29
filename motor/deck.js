/* =====================================================================
   Motor de kit-presentaciones — navegación, pasos, notas. / Engine: navigation, steps, notes.
   Estructura que espera:
     <div class="escenario"> <section class="slide">…</section> … </div>
   Teclas: → / espacio / clic avanzan (primero los pasos), ← retrocede,
   Inicio/Fin, N notas, P vista del orador, B pantalla negra, ? ayuda.
   Animaciones: una diapositiva con data-anim="nombre" llama a
   window.animaciones.nombre(slide, nivel, {final}) cada vez que cambia
   su nivel de pasos. La función debe dibujar el ESTADO de ese nivel
   (idempotente); el PDF la llama con el último nivel y final = true.
   ===================================================================== */
(function () {
  "use strict";
  const escenario = document.querySelector(".escenario");
  const slides = Array.from(document.querySelectorAll(".escenario > .slide"));
  if (!escenario || !slides.length) return;
  const animaciones = (window.animaciones = window.animaciones || {});
  const imprimir = /[?&]imprimir\b/.test(location.search);
  let actual = 0;
  let ventanaOrador = null;
  const inicio = Date.now();

  // --- Escala del escenario fijo a la ventana --------------------------
  function escalar() {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    escenario.style.transform = `translate(-50%, -50%) scale(${s})`;
  }

  // --- Pasos ------------------------------------------------------------
  const pasos = (sl) => Array.from(sl.querySelectorAll("[data-paso]"));
  const nivel = (sl) => Number(sl.dataset.nivel || 0);
  const maximo = (sl) => Math.max(0, Number(sl.dataset.pasos || 0), ...pasos(sl).map((e) => Number(e.dataset.paso)));

  function aplicar(sl, opciones = {}) {
    const n = nivel(sl);
    pasos(sl).forEach((e) => e.classList.toggle("visto", Number(e.dataset.paso) <= n));
    const f = animaciones[sl.dataset.anim];
    if (typeof f === "function") {
      try { f(sl, n, opciones); } catch (err) { console.error("Animación", sl.dataset.anim, err); }
    }
  }

  // --- Ir a una diapositiva ----------------------------------------------
  function ir(k, n = 0) {
    k = Math.max(0, Math.min(slides.length - 1, k));
    slides[actual].classList.remove("activa");
    actual = k;
    const sl = slides[actual];
    sl.dataset.nivel = String(Math.max(0, Math.min(n, maximo(sl))));
    sl.classList.add("activa");
    aplicar(sl);
    if (location.hash !== "#" + (actual + 1)) history.replaceState(null, "", "#" + (actual + 1));
    refrescarNotas();
  }
  function siguiente() {
    const sl = slides[actual];
    if (nivel(sl) < maximo(sl)) { sl.dataset.nivel = String(nivel(sl) + 1); aplicar(sl); refrescarNotas(); }
    else if (actual < slides.length - 1) ir(actual + 1, 0);
  }
  function anterior() {
    const sl = slides[actual];
    if (nivel(sl) > 0) { sl.dataset.nivel = String(nivel(sl) - 1); aplicar(sl); refrescarNotas(); }
    else if (actual > 0) ir(actual - 1, maximo(slides[actual - 1]));
  }

  // --- Notas: panel abajo (ensayo) y ventana del orador (charla) --------
  const panel = document.createElement("div");
  panel.id = "panel-notas";
  document.body.appendChild(panel);
  const negra = document.createElement("div");
  negra.className = "pantalla-negra";
  document.body.appendChild(negra);
  const ayuda = document.createElement("div");
  ayuda.id = "ayuda-motor";
  ayuda.innerHTML = document.documentElement.lang === "en"
    ? "<b>Keys</b><br>→ space click: next · ←: back · Home / End<br>" +
      "N: notes below · P: presenter view (new window) · B: black screen · F: full screen<br>" +
      "E: study mode (shows «why it works» in the example decks) · M: animations on/off · ?: this help"
    : "<b>Teclas</b><br>→ espacio clic: avanzar · ←: retroceder · Inicio / Fin<br>" +
      "N: notas abajo · P: vista del orador (otra ventana) · B: pantalla negra · F: pantalla completa<br>" +
      "E: modo estudio (muestra «por qué funciona» en las presentaciones de ejemplo) · M: animaciones sí/no · ?: esta ayuda";
  document.body.appendChild(ayuda);

  function aviso(txt) {
    let a = document.getElementById("aviso-motor");
    if (!a) {
      a = document.createElement("div"); a.id = "aviso-motor";
      a.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:40;background:rgba(20,20,20,.9);" +
        "color:#fff;font:16px system-ui,sans-serif;padding:8px 16px;border-radius:6px;transition:opacity .4s";
      document.body.appendChild(a);
    }
    a.textContent = txt; a.style.opacity = 1;
    clearTimeout(a._t); a._t = setTimeout(() => (a.style.opacity = 0), 1800);
  }

  const textoNotas = (sl) => { const a = sl && sl.querySelector("aside.notas"); return a ? a.innerHTML : "<i>(sin notas)</i>"; };
  const tituloDe = (sl) => { const h = sl && sl.querySelector("h1"); return h ? h.textContent.trim() : "(sin título)"; };

  function refrescarNotas() {
    const sl = slides[actual];
    panel.innerHTML = `<b>${actual + 1}/${slides.length} · paso ${nivel(sl)}/${maximo(sl)}</b> — ${textoNotas(sl)}`;
    if (ventanaOrador && !ventanaOrador.closed) {
      const d = ventanaOrador.document;
      const sig = slides[actual + 1];
      d.getElementById("o-num").textContent = `${actual + 1} / ${slides.length}  ·  paso ${nivel(sl)} de ${maximo(sl)}`;
      d.getElementById("o-titulo").textContent = tituloDe(sl);
      d.getElementById("o-notas").innerHTML = textoNotas(sl);
      d.getElementById("o-sig").textContent = sig ? "Sigue: " + tituloDe(sig) : "Última diapositiva";
    }
  }
  function abrirOrador() {
    ventanaOrador = window.open("", "orador", "width=900,height=640");
    if (!ventanaOrador) { alert("El navegador bloqueó la ventana del orador."); return; }
    ventanaOrador.document.write(`<!doctype html><meta charset="utf-8"><title>Orador</title>
      <body style="font:20px/1.5 system-ui,sans-serif;margin:24px;background:#141414;color:#eee">
      <div style="display:flex;justify-content:space-between;color:#aaa"><span id="o-num"></span><span id="o-reloj"></span></div>
      <h2 id="o-titulo" style="font-size:28px;margin:12px 0 18px"></h2>
      <div id="o-notas" style="font-size:22px"></div>
      <p id="o-sig" style="color:#9ab;margin-top:28px"></p>
      <p style="color:#777;font-size:14px">Las teclas funcionan también en esta ventana.</p></body>`);
    ventanaOrador.document.close();
    ventanaOrador.addEventListener("keydown", teclas);
    const reloj = () => {
      if (!ventanaOrador || ventanaOrador.closed) return;
      const s = Math.floor((Date.now() - inicio) / 1000);
      ventanaOrador.document.getElementById("o-reloj").textContent =
        `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
      setTimeout(reloj, 1000);
    };
    reloj();
    refrescarNotas();
  }

  // --- Teclado, clic y gestos -------------------------------------------
  function teclas(e) {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    const k = e.key;
    if (["ArrowRight", "PageDown", " ", "Enter"].includes(k)) { e.preventDefault(); siguiente(); }
    else if (["ArrowLeft", "PageUp", "Backspace"].includes(k)) { e.preventDefault(); anterior(); }
    else if (k === "Home") ir(0);
    else if (k === "End") ir(slides.length - 1, maximo(slides[slides.length - 1]));
    else if (k === "n" || k === "N") panel.classList.toggle("abierto");
    else if (k === "p" || k === "P") abrirOrador();
    else if (k === "b" || k === "B" || k === ".") negra.classList.toggle("activa");
    else if (k === "f" || k === "F") { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); }
    else if (k === "?") ayuda.classList.toggle("abierto");
    else if (k === "e" || k === "E") document.body.classList.toggle("estudio");
    else if (k === "m" || k === "M") {
      const b = document.body.dataset;
      b.movimiento = b.movimiento === "nunca" ? "siempre" : "nunca";
      aviso(b.movimiento === "nunca" ? "Animaciones apagadas (M para encender)" : "Animaciones encendidas");
      ir(actual, nivel(slides[actual]));
    }
  }
  document.addEventListener("keydown", teclas);
  document.addEventListener("click", (e) => {
    if (e.target.closest("a, button, input, select, textarea, .interactivo")) return;
    (e.clientX < window.innerWidth * 0.25 ? anterior : siguiente)();
  });
  let x0 = null;
  document.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) (dx < 0 ? siguiente : anterior)();
    x0 = null;
  });
  window.addEventListener("resize", escalar);
  window.addEventListener("hashchange", () => {
    const k = parseInt(location.hash.slice(1), 10) - 1;
    if (Number.isFinite(k) && k !== actual) ir(k);
  });

  // --- Decoración que pide el perfil: número y logo ---------------------
  const logo = document.body.dataset.logo;
  slides.forEach((sl, i) => {
    const num = document.createElement("div");
    num.className = "numero-slide";
    num.textContent = String(i + 1);
    sl.appendChild(num);
    if (logo) {
      const img = document.createElement("img");
      img.className = "logo-perfil"; img.src = logo; img.alt = "";
      sl.appendChild(img);
    }
  });

  // --- Modo impresión (lo usa kit.py pdf): todo en su estado final ------
  function estadoFinal() {
    slides.forEach((sl) => { sl.dataset.nivel = String(maximo(sl)); aplicar(sl, { final: true }); });
  }
  window.addEventListener("beforeprint", estadoFinal);

  // --- Arranque ----------------------------------------------------------
  escalar();
  if (/[?&]solo-lienzo\b/.test(location.search)) document.body.classList.add("solo-lienzo");
  if (imprimir) { document.documentElement.classList.add("imprimiendo"); document.body.classList.remove("fundido"); estadoFinal(); }
  const h = parseInt(location.hash.slice(1), 10);
  slides.forEach((sl) => sl.classList.remove("activa"));
  ir(Number.isFinite(h) ? h - 1 : 0);
  if (imprimir) estadoFinal();
  window.deck = { ir, siguiente, anterior, slides, nivel: () => nivel(slides[actual]), actual: () => actual };
})();
