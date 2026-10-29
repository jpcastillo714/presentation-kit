/* =====================================================================
   presentation-kit engine: navigation, steps, notes.
   Expected structure:
     <div class="stage"> <section class="slide">…</section> … </div>
   Keys: → / space / click advance (steps first), ← goes back, Home/End,
   N notes, P presenter view, B black screen, F full screen, E study
   mode, M animations on/off, ? help.
   Animations: a slide with data-anim="name" calls
   window.animations.name(slide, level, {final}) every time its step level
   changes. The function must draw the STATE of that level (idempotent);
   printing calls it with the last level and final = true.
   ===================================================================== */
(function () {
  "use strict";
  const stage = document.querySelector(".stage");
  const slides = Array.from(document.querySelectorAll(".stage > .slide"));
  if (!stage || !slides.length) return;
  const animations = (window.animations = window.animations || {});
  const printing = /[?&]print\b/.test(location.search);
  const es = document.documentElement.lang === "es";
  const tr = (en, sp) => (es ? sp : en);
  let current = 0;
  let presenter = null;
  const start = Date.now();

  // --- Scale the fixed stage to the window --------------------------------
  function scale() {
    const s = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = `translate(-50%, -50%) scale(${s})`;
  }

  // --- Steps ----------------------------------------------------------------
  const steps = (sl) => Array.from(sl.querySelectorAll("[data-step]"));
  const level = (sl) => Number(sl.dataset.level || 0);
  const maxLevel = (sl) => Math.max(0, Number(sl.dataset.steps || 0), ...steps(sl).map((e) => Number(e.dataset.step)));

  function apply(sl, options = {}) {
    const n = level(sl);
    steps(sl).forEach((e) => e.classList.toggle("shown", Number(e.dataset.step) <= n));
    const f = animations[sl.dataset.anim];
    if (typeof f === "function") {
      try { f(sl, n, options); } catch (err) { console.error("Animation", sl.dataset.anim, err); }
    }
  }

  // --- Go to a slide ---------------------------------------------------------
  function go(k, n = 0) {
    k = Math.max(0, Math.min(slides.length - 1, k));
    slides[current].classList.remove("active");
    current = k;
    const sl = slides[current];
    sl.dataset.level = String(Math.max(0, Math.min(n, maxLevel(sl))));
    sl.classList.add("active");
    apply(sl);
    if (location.hash !== "#" + (current + 1)) history.replaceState(null, "", "#" + (current + 1));
    refreshNotes();
  }
  function next() {
    const sl = slides[current];
    if (level(sl) < maxLevel(sl)) { sl.dataset.level = String(level(sl) + 1); apply(sl); refreshNotes(); }
    else if (current < slides.length - 1) go(current + 1, 0);
  }
  function prev() {
    const sl = slides[current];
    if (level(sl) > 0) { sl.dataset.level = String(level(sl) - 1); apply(sl); refreshNotes(); }
    else if (current > 0) go(current - 1, maxLevel(slides[current - 1]));
  }

  // --- Notes: panel at the bottom (rehearsal) and presenter window (talk) ---
  const panel = document.createElement("div");
  panel.id = "notes-panel";
  document.body.appendChild(panel);
  const blackout = document.createElement("div");
  blackout.className = "blackout";
  document.body.appendChild(blackout);
  const help = document.createElement("div");
  help.id = "engine-help";
  help.innerHTML = tr(
    "<b>Keys</b><br>→ space click: next · ←: back · Home / End<br>" +
    "N: notes below · P: presenter view (new window) · B: black screen · F: full screen<br>" +
    "E: study mode (shows «why it works» in the example decks) · M: animations on/off · ?: this help",
    "<b>Teclas</b><br>→ espacio clic: avanzar · ←: retroceder · Inicio / Fin<br>" +
    "N: notas abajo · P: vista del orador (otra ventana) · B: pantalla negra · F: pantalla completa<br>" +
    "E: modo estudio (muestra «por qué funciona» en los ejemplos) · M: animaciones sí/no · ?: esta ayuda");
  document.body.appendChild(help);

  function notice(txt) {
    let a = document.getElementById("engine-notice");
    if (!a) {
      a = document.createElement("div"); a.id = "engine-notice";
      a.style.cssText = "position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:40;background:rgba(20,20,20,.9);" +
        "color:#fff;font:16px system-ui,sans-serif;padding:8px 16px;border-radius:6px;transition:opacity .4s";
      document.body.appendChild(a);
    }
    a.textContent = txt; a.style.opacity = 1;
    clearTimeout(a._t); a._t = setTimeout(() => (a.style.opacity = 0), 1800);
  }

  const notesOf = (sl) => { const a = sl && sl.querySelector("aside.notes"); return a ? a.innerHTML : `<i>${tr("(no notes)", "(sin notas)")}</i>`; };
  const titleOf = (sl) => { const h = sl && sl.querySelector("h1"); return h ? h.textContent.trim() : tr("(no title)", "(sin título)"); };

  function refreshNotes() {
    const sl = slides[current];
    panel.innerHTML = `<b>${current + 1}/${slides.length} · ${tr("step", "paso")} ${level(sl)}/${maxLevel(sl)}</b> — ${notesOf(sl)}`;
    if (presenter && !presenter.closed) {
      const d = presenter.document;
      const nx = slides[current + 1];
      d.getElementById("p-num").textContent = `${current + 1} / ${slides.length}  ·  ${tr("step", "paso")} ${level(sl)} / ${maxLevel(sl)}`;
      d.getElementById("p-title").textContent = titleOf(sl);
      d.getElementById("p-notes").innerHTML = notesOf(sl);
      d.getElementById("p-next").textContent = nx ? tr("Next: ", "Sigue: ") + titleOf(nx) : tr("Last slide", "Última diapositiva");
    }
  }
  function openPresenter() {
    presenter = window.open("", "presenter", "width=900,height=640");
    if (!presenter) { alert(tr("The browser blocked the presenter window.", "El navegador bloqueó la ventana del orador.")); return; }
    presenter.document.write(`<!doctype html><meta charset="utf-8"><title>${tr("Presenter", "Orador")}</title>
      <body style="font:20px/1.5 system-ui,sans-serif;margin:24px;background:#141414;color:#eee">
      <div style="display:flex;justify-content:space-between;color:#aaa"><span id="p-num"></span><span id="p-clock"></span></div>
      <h2 id="p-title" style="font-size:28px;margin:12px 0 18px"></h2>
      <div id="p-notes" style="font-size:22px"></div>
      <p id="p-next" style="color:#9ab;margin-top:28px"></p>
      <p style="color:#777;font-size:14px">${tr("Keys work in this window too.", "Las teclas funcionan también en esta ventana.")}</p></body>`);
    presenter.document.close();
    presenter.addEventListener("keydown", keys);
    const clock = () => {
      if (!presenter || presenter.closed) return;
      const s = Math.floor((Date.now() - start) / 1000);
      presenter.document.getElementById("p-clock").textContent =
        `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
      setTimeout(clock, 1000);
    };
    clock();
    refreshNotes();
  }

  // --- Keyboard, click and swipe ---------------------------------------------
  function keys(e) {
    if (e.target && /input|textarea|select/i.test(e.target.tagName)) return;
    const k = e.key;
    if (["ArrowRight", "PageDown", " ", "Enter"].includes(k)) { e.preventDefault(); next(); }
    else if (["ArrowLeft", "PageUp", "Backspace"].includes(k)) { e.preventDefault(); prev(); }
    else if (k === "Home") go(0);
    else if (k === "End") go(slides.length - 1, maxLevel(slides[slides.length - 1]));
    else if (k === "n" || k === "N") panel.classList.toggle("open");
    else if (k === "p" || k === "P") openPresenter();
    else if (k === "b" || k === "B" || k === ".") blackout.classList.toggle("active");
    else if (k === "f" || k === "F") { document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen(); }
    else if (k === "?") help.classList.toggle("open");
    else if (k === "e" || k === "E") document.body.classList.toggle("study");
    else if (k === "m" || k === "M") {
      const b = document.body.dataset;
      b.motion = b.motion === "never" ? "always" : "never";
      notice(b.motion === "never" ? tr("Animations off (M to turn on)", "Animaciones apagadas (M para encender)")
                                  : tr("Animations on", "Animaciones encendidas"));
      go(current, level(slides[current]));
    }
  }
  document.addEventListener("keydown", keys);
  document.addEventListener("click", (e) => {
    if (e.target.closest("a, button, input, select, textarea, .interactive")) return;
    (e.clientX < window.innerWidth * 0.25 ? prev : next)();
  });
  let x0 = null;
  document.addEventListener("touchstart", (e) => { x0 = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    x0 = null;
  });
  window.addEventListener("resize", scale);
  window.addEventListener("hashchange", () => {
    const k = parseInt(location.hash.slice(1), 10) - 1;
    if (Number.isFinite(k) && k !== current) go(k);
  });

  // --- What the profile asks for: slide number and logo ----------------------
  const logo = document.body.dataset.logo;
  slides.forEach((sl, i) => {
    const num = document.createElement("div");
    num.className = "slide-number";
    num.textContent = String(i + 1);
    sl.appendChild(num);
    if (logo) {
      const img = document.createElement("img");
      img.className = "profile-logo"; img.src = logo; img.alt = "";
      sl.appendChild(img);
    }
  });

  // --- Print mode (used by kit.py pdf and shots): everything in its final state
  function finalState() {
    slides.forEach((sl) => { sl.dataset.level = String(maxLevel(sl)); apply(sl, { final: true }); });
  }
  window.addEventListener("beforeprint", finalState);

  // --- Start -------------------------------------------------------------------
  scale();
  if (/[?&]scene-only\b/.test(location.search)) document.body.classList.add("scene-only");
  if (printing) { document.documentElement.classList.add("printing"); document.body.classList.remove("fade"); finalState(); }
  const h = parseInt(location.hash.slice(1), 10);
  slides.forEach((sl) => sl.classList.remove("active"));
  go(Number.isFinite(h) ? h - 1 : 0);
  if (printing) finalState();
  window.deck = { go, next, prev, slides, level: () => level(slides[current]), current: () => current };
})();
