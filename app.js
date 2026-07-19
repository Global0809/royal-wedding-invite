/* ═══════════════════════════════════════════════════════════
   ROYAL WEDDING INVITE — ENGINE
   Frame-scrub cinema · petals · gyro parallax · scratch card
   hand-tracking magic mode · synth bells · countdown · RSVP
   ═══════════════════════════════════════════════════════════ */
(() => {
"use strict";

const CFG = window.WEDDING_CONFIG;
const REDUCED = matchMedia("(prefers-reduced-motion: reduce)").matches;
const IS_TOUCH = matchMedia("(pointer: coarse)").matches;
const SAVE_DATA = !!(navigator.connection && navigator.connection.saveData);
const DPR = Math.min(window.devicePixelRatio || 1, 2);
const $ = (s) => document.querySelector(s);
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const lerp = (a, b, t) => a + (b - a) * t;
/* QA shim: "?tick" drives the loop with setTimeout where rAF is unavailable
   (hidden-tab automated testing). Real visitors always get rAF. */
const RAF = /[?&]tick/.test(location.search)
  ? (fn) => setTimeout(() => fn(performance.now()), 16)
  : (fn) => requestAnimationFrame(fn);

/* ── Theme from config ──────────────────────────────────── */
{
  const t = CFG.theme, r = document.documentElement.style;
  r.setProperty("--maroon", t.maroon);
  r.setProperty("--maroon-deep", t.maroonDeep);
  r.setProperty("--gold", t.gold);
  r.setProperty("--gold-soft", t.goldSoft);
  r.setProperty("--ivory", t.ivory);
  r.setProperty("--ink", t.inkOnIvory);
}

/* ── Stable viewport unit (no URL-bar jumps) ────────────── */
let vhPx = Math.max(window.innerHeight, 1) / 100;
const setVh = () => {
  if (window.innerHeight < 120) return;   // ignore transient 0-height resize events
  vhPx = window.innerHeight / 100;
  document.documentElement.style.setProperty("--vh", vhPx + "px");
};
setVh();
let lastW = window.innerWidth, rzTimer = 0;
const remeasure = () => { setVh(); scrub.resize(); petals.resize(); };
window.addEventListener("resize", () => {
  // On touch devices ignore height-only resizes (URL bar collapse)
  if (IS_TOUCH && window.innerWidth === lastW) return;
  lastW = window.innerWidth;
  remeasure();
  clearTimeout(rzTimer);
  rzTimer = setTimeout(remeasure, 280);   // settle pass after the browser finishes resizing
});
window.addEventListener("orientationchange", () => {
  clearTimeout(rzTimer);
  rzTimer = setTimeout(remeasure, 350);
});

/* ═══════════════ AUDIO — synthesized temple sounds ═══════ */
const audio = (() => {
  let ctx = null, master = null, bgm = null, noiseBuf = null;
  let muted = localStorage.getItem("wed-muted") === "1";
  let bgmFadeToken = 0;

  const init = () => {
    if (ctx) { ctx.resume(); return; }
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctx.resume();                                  // iOS ships it suspended
    master = ctx.createGain();
    master.gain.value = muted ? 0 : 1;
    master.connect(ctx.destination);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const nd = noiseBuf.getChannelData(0);
    for (let i = 0; i < nd.length; i++) nd[i] = Math.random() * 2 - 1;
  };

  /* Background score — the real instrument, started inside the tap gesture */
  const startBgm = () => {
    if (bgm) return;
    bgm = new Audio("assets/audio/bgm.m4a");
    bgm.preload = "metadata";
    bgm.loop = true;
    bgm.playsInline = true;
    bgm.volume = 0;
    bgm.muted = muted;
    bgm.play().then(() => fadeBgmTo(0.32, 1900)).catch(() => {});
  };

  const fadeBgmTo = (target, duration = 600, pauseAtEnd = false) => {
    if (!bgm) return;
    const token = ++bgmFadeToken;
    const from = bgm.volume;
    const started = performance.now();
    const step = (now) => {
      if (token !== bgmFadeToken || !bgm) return;
      const p = Math.min(1, (now - started) / Math.max(1, duration));
      const eased = 1 - Math.pow(1 - p, 2);
      bgm.volume = from + (target - from) * eased;
      if (p < 1) requestAnimationFrame(step);
      else if (pauseAtEnd) bgm.pause();
    };
    requestAnimationFrame(step);
  };

  /* Soft airy whoosh for scroll gusts */
  let lastWhoosh = -1;
  const whoosh = (strength = 0.5) => {
    if (!ctx || muted) return;
    const t = ctx.currentTime;
    if (t - lastWhoosh < 0.65) return;
    lastWhoosh = t;
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = noiseBuf; src.loop = true;
    f.type = "bandpass"; f.Q.value = 0.6;
    f.frequency.setValueAtTime(300, t);
    f.frequency.exponentialRampToValueAtTime(1400, t + 0.28);
    f.frequency.exponentialRampToValueAtTime(240, t + 0.7);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.05 * strength, t + 0.16);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
    src.connect(f).connect(g).connect(master);
    src.start(t); src.stop(t + 0.75);
  };

  /* Scratchy foil texture while the finger rubs */
  let lastScratch = 0;
  const scratchNoise = () => {
    if (!ctx || muted) return;
    const t = ctx.currentTime;
    if (t - lastScratch < 0.07) return;
    lastScratch = t;
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g = ctx.createGain();
    src.buffer = noiseBuf;
    src.playbackRate.value = 0.8 + Math.random() * 0.5;
    f.type = "highpass"; f.frequency.value = 2400 + Math.random() * 1200;
    g.gain.setValueAtTime(0.028, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.08);
    src.connect(f).connect(g).connect(master);
    src.start(t); src.stop(t + 0.09);
  };

  /* Temple bell — inharmonic partials + strike noise */
  const bell = (base = 432, vol = 0.5, dur = 3.2) => {
    if (!ctx || muted) return;
    const now = ctx.currentTime;
    const partials = [[1, 1], [2.74, 0.45], [5.4, 0.22], [8.93, 0.09]];
    partials.forEach(([ratio, g]) => {
      const o = ctx.createOscillator(), gn = ctx.createGain();
      o.type = "sine";
      o.frequency.value = base * ratio;
      o.detune.value = (Math.random() - 0.5) * 6;
      gn.gain.setValueAtTime(vol * g * 0.32, now);
      gn.gain.exponentialRampToValueAtTime(0.0001, now + dur * (1 - ratio * 0.06));
      o.connect(gn).connect(master);
      o.start(now); o.stop(now + dur);
    });
    // strike transient
    const nb = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
    const d = nb.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
    const src = ctx.createBufferSource(), f = ctx.createBiquadFilter(), g2 = ctx.createGain();
    src.buffer = nb; f.type = "bandpass"; f.frequency.value = base * 2.7; f.Q.value = 2;
    g2.gain.value = vol * 0.25;
    src.connect(f).connect(g2).connect(master);
    src.start(now);
  };

  const chime = () => bell(864, 0.22, 1.6);

  const toggleMute = () => {
    muted = !muted;
    localStorage.setItem("wed-muted", muted ? "1" : "0");
    if (master) master.gain.linearRampToValueAtTime(muted ? 0 : 1, ctx.currentTime + 0.3);
    if (bgm) bgm.muted = muted;
    return muted;
  };

  const fadeForWorld = (duration = 720) => {
    if (ctx && master) {
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);
      master.gain.linearRampToValueAtTime(0.0001, now + duration / 1000);
    }
    fadeBgmTo(0, duration, true);
  };

  const restoreAfterWorld = () => {
    ++bgmFadeToken;
    if (ctx && master) {
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);
      master.gain.linearRampToValueAtTime(muted ? 0.0001 : 1, now + 0.45);
    }
    if (bgm && !muted) {
      bgm.volume = 0;
      bgm.play().then(() => fadeBgmTo(0.32, 650)).catch(() => {});
    }
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { ctx && ctx.suspend(); bgm && bgm.pause(); }
    else { ctx && ctx.resume(); bgm && !muted && bgm.play().catch(() => {}); }
  });

  return {
    init, bell, chime, startBgm, whoosh, scratchNoise, toggleMute,
    fadeForWorld, restoreAfterWorld, isMuted: () => muted,
  };
})();

/* ═══════════════ FRAME STORE — two-tier loader ═══════════ */
const frames = (() => {
  const N = CFG.frames.count;
  const lo = new Array(N), hi = new Array(N);
  const loState = new Uint8Array(N);          // 0 none · 1 loading · 2 ready · 3 failed
  const hiState = new Uint8Array(N);
  const name = (i) => CFG.frames.prefix + String(i + 1).padStart(3, "0") + CFG.frames.ext;
  const memory = Number(navigator.deviceMemory || 8);
  const connection = navigator.connection || {};
  const slowConnection = /(^|-)2g$/.test(connection.effectiveType || "");
  const hiEnabled = !SAVE_DATA && !IS_TOUCH && !slowConnection && innerWidth >= 900 && memory >= 4;
  const GATE = Math.min(70, N);
  const LO_LIMIT = SAVE_DATA ? 2 : IS_TOUCH ? 4 : 6;
  const HI_LIMIT = 3, HI_RADIUS = 4, HI_KEEP = 8;
  let loActive = 0, loPtr = GATE, loStreaming = false;
  let hiActive = 0, current = 0;

  const loadLo = (i, done) => {
    if (i < 0 || i >= N || loState[i] !== 0) return false;
    loState[i] = 1;
    loActive++;
    const img = new Image();
    img.decoding = "async";
    lo[i] = img;
    img.onload = img.onerror = () => {
      loState[i] = img.naturalWidth ? 2 : 3;
      loActive--;
      if (done) done();
    };
    img.src = CFG.frames.loPath + name(i);
    return true;
  };

  /* Entry is gated on the first GATE frames only; the rest stream behind
     the opened doors. No request for the remaining frames is made up front. */
  const preloadLo = (onProgress) => new Promise((resolve) => {
    if (!GATE) { resolve(); return; }
    let next = 0, done = 0;
    const pumpGate = () => {
      while (loActive < 8 && next < GATE) {
        loadLo(next++, () => {
          done++;
          onProgress(done / GATE);
          if (done === GATE) resolve();
          else pumpGate();
        });
      }
    };
    pumpGate();
  });

  const pumpLo = () => {
    if (!loStreaming) return;
    while (loActive < LO_LIMIT) {
      let idx = -1;
      for (let d = 0; d <= 18; d++) {
        const a = current + d, b = current - d;
        if (a < N && loState[a] === 0) { idx = a; break; }
        if (b >= 0 && loState[b] === 0) { idx = b; break; }
      }
      if (idx < 0) {
        while (loPtr < N && loState[loPtr] !== 0) loPtr++;
        idx = loPtr < N ? loPtr++ : -1;
      }
      if (idx < 0 || !loadLo(idx, pumpLo)) return;
    }
  };

  const evictHi = () => {
    for (let i = 0; i < N; i++) {
      if (hiState[i] === 2 && Math.abs(i - current) > HI_KEEP) {
        if (hi[i]) {
          hi[i].onload = hi[i].onerror = null;
          hi[i].src = "";
        }
        hi[i] = null;
        hiState[i] = 0;
      }
    }
  };

  const pumpHi = () => {
    if (!hiEnabled) return;
    while (hiActive < HI_LIMIT) {
      let idx = -1;
      for (let d = 0; d <= HI_RADIUS; d++) {
        const a = current + d, b = current - d;
        if (a < N && hiState[a] === 0) { idx = a; break; }
        if (b >= 0 && hiState[b] === 0) { idx = b; break; }
      }
      if (idx === -1) return;
      hiState[idx] = 1; hiActive++;
      const img = new Image();
      img.decoding = "async";
      hi[idx] = img;
      img.onload = () => {
        hiState[idx] = 2;
        hiActive--;
        evictHi();
        pumpHi();
      };
      img.onerror = () => { hiState[idx] = 3; hiActive--; pumpHi(); };
      img.src = CFG.frames.hiPath + name(idx);
    }
  };

  return {
    N,
    preloadLo,
    startHi: () => { loStreaming = true; pumpLo(); pumpHi(); },
    setPlayhead: (i) => {
      current = clamp(Math.round(i), 0, N - 1);
      pumpLo();
      evictHi();
      pumpHi();
    },
    /* best available image for frame i; prefer hi only when settled */
    get: (i, settled) => {
      if (settled && hiState[i] === 2 && hi[i]) return hi[i];
      if (loState[i] === 2 && lo[i]) return lo[i];
      for (let d = 1; d < N; d++) {
        const a = i + d, b = i - d;
        if (a < N && loState[a] === 2 && lo[a]) return lo[a];
        if (b >= 0 && loState[b] === 2 && lo[b]) return lo[b];
      }
      return null;
    },
  };
})();

/* ═══════════════ SCRUB ENGINE — the unfolding ════════════ */
const scrub = (() => {
  const canvas = $("#scrub"), ctx2d = canvas.getContext("2d");
  const hero = $("#hero");
  const beats = [...document.querySelectorAll(".beat")];
  const chapterEl = $("#crown-chapter");
  let chapterIdx = -1;
  const SCRUB_VH = 200;                        // scroll distance of the film (40% shorter = faster journey)
  let cur = 0, target = 0, drawn = -1, tiltX = 0, settledFrames = 0;

  /* beat windows in progress space: [in-start, in-end, out-start, out-end] */
  const WINDOWS = [
    [0.00, 0.00, 0.07, 0.16],
    [0.20, 0.27, 0.34, 0.41],
    [0.47, 0.54, 0.62, 0.69],
    [0.73, 0.79, 0.85, 0.90],
    [0.925, 0.97, 2, 2],
  ];

  const resize = () => {
    canvas.width = Math.round(canvas.clientWidth * DPR);
    canvas.height = Math.round(canvas.clientHeight * DPR);
    ivory = IVORY();
    drawn = -1;
    hero.style.height = (SCRUB_VH + 100) * vhPx + "px";
  };

  const IVORY = () => getComputedStyle(document.documentElement).getPropertyValue("--ivory").trim() || "#F4EBDB";
  let ivory = "#F4EBDB";
  /* Offscreen feather: the frame's own edges melt to transparent before compositing,
     so no hard rectangle can ever show, whatever the film contains. */
  let off = null, offCtx = null;
  const featherFrame = (img, w, h) => {
    if (!off || off.width !== w || off.height !== h) {
      off = document.createElement("canvas");
      off.width = w; off.height = h;
      offCtx = off.getContext("2d");
    }
    offCtx.globalCompositeOperation = "source-over";
    offCtx.clearRect(0, 0, w, h);
    offCtx.drawImage(img, 0, 0, w, h);
    offCtx.globalCompositeOperation = "destination-in";
    const mx = Math.round(w * 0.10), my = Math.round(h * 0.10);
    const gv = offCtx.createLinearGradient(0, 0, 0, h);
    gv.addColorStop(0, "rgba(0,0,0,0)"); gv.addColorStop(my / h, "rgba(0,0,0,1)");
    gv.addColorStop(1 - my / h, "rgba(0,0,0,1)"); gv.addColorStop(1, "rgba(0,0,0,0)");
    offCtx.fillStyle = gv; offCtx.fillRect(0, 0, w, h);
    const gh = offCtx.createLinearGradient(0, 0, w, 0);
    gh.addColorStop(0, "rgba(0,0,0,0)"); gh.addColorStop(mx / w, "rgba(0,0,0,1)");
    gh.addColorStop(1 - mx / w, "rgba(0,0,0,1)"); gh.addColorStop(1, "rgba(0,0,0,0)");
    offCtx.fillStyle = gh; offCtx.fillRect(0, 0, w, h);
    return off;
  };
  const draw = (i, settled) => {
    const img = frames.get(i, settled);
    if (!img || !img.naturalWidth) return;
    if (canvas.width < 2 || canvas.height < 2) { resize(); if (canvas.width < 2) return; }
    const cw = canvas.width, ch = canvas.height;
    // The world FLOATS: contain-fit, edges feathered into the page ivory
    const s = Math.min(cw / img.naturalWidth, ch / img.naturalHeight) * 0.97;
    const w = Math.round(img.naturalWidth * s), h = Math.round(img.naturalHeight * s);
    ctx2d.fillStyle = ivory;
    ctx2d.fillRect(0, 0, cw, ch);
    const px = tiltX * 9 * DPR;
    const py = (ch - h) * 0.42;                       // sit slightly above centre; copy breathes below
    ctx2d.drawImage(featherFrame(img, w, h), (cw - w) / 2 + px, py);
  };

  const beatOpacity = (p, [a, b, c, d]) => {
    if (p < a || p > d) return 0;
    if (p < b) return (p - a) / Math.max(b - a, 1e-4);
    if (p < c) return 1;
    return 1 - (p - c) / Math.max(d - c, 1e-4);
  };

  let progress = 0;
  const tick = (dt) => {
    const rect = hero.getBoundingClientRect();
    const dist = rect.height - window.innerHeight;
    progress = clamp(-rect.top / Math.max(dist, 1), 0, 1);
    target = progress * (frames.N - 1);
    cur = lerp(cur, target, 1 - Math.exp(-dt * 12));
    const vel = Math.abs(target - cur);
    if (vel < 1.4) settledFrames++; else settledFrames = 0;
    const i = Math.round(cur);
    frames.setPlayhead(i);
    const settled = settledFrames > 2;
    const key = i * 2 + (settled ? 1 : 0);
    if (key !== drawn) { draw(i, settled); drawn = key; }

    let domBeat = 0, domO = -1;
    beats.forEach((el, k) => {
      const o = beatOpacity(progress, WINDOWS[k]);
      if (o > domO) { domO = o; domBeat = k; }
      if (o <= 0) { el.style.opacity = "0"; el.style.visibility = "hidden"; return; }
      el.style.visibility = "visible";
      el.style.opacity = o.toFixed(3);
      el.style.transform = `translateY(${(1 - o) * 18}px)`;
    });
    // the crown chapter follows the story
    if (domBeat !== chapterIdx) {
      chapterIdx = domBeat;
      chapterEl.textContent = beats[domBeat].dataset.chapter || "";
      chapterEl.classList.remove("swap");
      void chapterEl.offsetWidth;
      chapterEl.classList.add("swap");
    }
    return vel;
  };

  return {
    resize, tick,
    setTilt: (x) => { tiltX = x; drawn = -1; },
    getProgress: () => progress,
    firstPaint: () => draw(0, false),
  };
})();

/* ═══════════════ PETALS — ambient particle system ════════ */
const petals = (() => {
  const canvas = $("#petals"), c = canvas.getContext("2d");
  const COLORS = [
    ["#8C2B47", "#5C1428"],   // rose maroon
    ["#E5B54B", "#C9922B"],   // marigold
    ["#F4EBDB", "#E0CDA8"],   // ivory
  ];
  let list = [], wind = 0, gust = 0, running = false, lowPerf = false;
  let attractor = null;       // {x,y} from hand tracking

  const resize = () => {
    canvas.width = Math.round(innerWidth * DPR);
    canvas.height = Math.round(innerHeight * DPR);
  };

  const spawn = (x, y, burst = false) => {
    const [c1, c2] = COLORS[(Math.random() * COLORS.length) | 0];
    list.push({
      x: x ?? Math.random() * innerWidth,
      y: y ?? -30,
      s: 7 + Math.random() * 11,
      vy: (burst ? 1.5 : 0.35) + Math.random() * 0.55,
      vx: burst ? (Math.random() - 0.5) * 3 : 0,
      ph: Math.random() * Math.PI * 2,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.04,
      c1, c2,
      life: 1,
      fade: burst ? 0.004 : 0,
    });
  };

  const baseCount = () => (lowPerf ? 8 : IS_TOUCH ? 16 : 26);    // light petal drift

  const step = (dt) => {
    if (!running) return;
    c.clearRect(0, 0, canvas.width, canvas.height);
    const n = baseCount();
    if (list.length < n && Math.random() < 0.1) spawn();
    gust *= 0.92;
    for (let i = list.length - 1; i >= 0; i--) {
      const p = list[i];
      p.ph += dt * 1.6;
      p.x += (Math.sin(p.ph) * 0.5 + wind + p.vx) * dt * 60;
      p.y += (p.vy + gust) * dt * 60;
      p.rot += p.vr + Math.sin(p.ph) * 0.008;
      p.vx *= 0.97;
      if (attractor) {
        const dx = attractor.x - p.x, dy = attractor.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 90000) { p.vx += dx * 0.0004 * dt * 60; p.vy += dy * 0.00025 * dt * 60; }
      }
      if (p.fade) p.life -= p.fade * dt * 600;
      if (p.y > innerHeight + 40 || p.life <= 0) { list.splice(i, 1); continue; }
      // draw petal
      c.save();
      c.translate(p.x * DPR, p.y * DPR);
      c.rotate(p.rot);
      c.scale(DPR, DPR);
      c.globalAlpha = 0.78 * Math.max(p.life, 0);
      const g = c.createLinearGradient(0, -p.s, 0, p.s);
      g.addColorStop(0, p.c1); g.addColorStop(1, p.c2);
      c.fillStyle = g;
      c.beginPath();
      c.moveTo(0, -p.s);
      c.quadraticCurveTo(p.s * 0.8, -p.s * 0.25, 0, p.s);
      c.quadraticCurveTo(-p.s * 0.8, -p.s * 0.25, 0, -p.s);
      c.fill();
      c.restore();
    }
  };

  return {
    resize, step,
    start: () => { running = true; },
    setWind: (w) => { wind = w; },
    addGust: (g) => { gust = clamp(gust + g, -2, 4); },
    setAttractor: (pt) => { attractor = pt; },
    burst: (x, y, n = 18) => { for (let i = 0; i < n; i++) spawn(x + (Math.random() - 0.5) * 60, y + (Math.random() - 0.5) * 40, true); },
    trail: (x, y) => { if (list.length < 46) spawn(x, y, true); },
    setLowPerf: () => { lowPerf = true; },
  };
})();

/* ═══════════════ GYRO / MOUSE PARALLAX ═══════════════════ */
const parallax = (() => {
  let tilt = 0;
  const apply = (t) => {
    tilt = clamp(t, -1, 1);
    scrub.setTilt(tilt);
    petals.setWind(tilt * 1.4);
  };
  const enable = () => {
    if (REDUCED || IS_TOUCH) return;         // gyro removed by design; desktop gets mouse drift
    window.addEventListener("mousemove", (e) => {
      apply((e.clientX / innerWidth - 0.5) * 1.6);
    }, { passive: true });
  };
  return { enable, getTilt: () => tilt };
})();

/* ═══════════════ COUNTDOWN ═══════════════════════════════ */
(() => {
  const tgt = new Date(CFG.wedding.dateISO).getTime();
  const el = { d: $("#cd-d"), h: $("#cd-h"), m: $("#cd-m"), s: $("#cd-s") };
  const pad = (n) => String(n).padStart(2, "0");
  const roll = (node, txt) => {
    if (node.textContent === txt) return;
    node.textContent = txt;
    node.classList.remove("tick");
    void node.offsetWidth;             // restart the roll animation
    node.classList.add("tick");
  };
  const upd = () => {
    let ms = tgt - Date.now();
    if (ms <= 0) {
      $("#countdown").innerHTML = `<p class="date-line" style="margin:0">॥ शुभ विवाह ॥ It's happening!</p>`;
      clearInterval(iv);
      return;
    }
    roll(el.d, pad(ms / 864e5 | 0));
    roll(el.h, pad((ms / 36e5 | 0) % 24));
    roll(el.m, pad((ms / 6e4 | 0) % 60));
    roll(el.s, pad((ms / 1e3 | 0) % 60));
  };
  const iv = setInterval(upd, 1000);
  upd();
})();

/* ═══════════════ EVENT CARDS ═════════════════════════════ */
(() => {
  const ICONS = {
    haldi: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 13h16c0 3.5-2.5 7-8 7s-8-3.5-8-7z"/><path d="M12 10c0-2.4 1.8-3.2 1.8-5M9 10c0-1.7 1.2-2.3 1.2-3.8M15 10c0-1.7 1.2-2.3 1.2-3.8"/></svg>`,
    sangeet: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M9 18V6l10-2v11"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="16.5" cy="15" r="2.5"/></svg>`,
    wedding: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M12 3c2.8 3.2 5 5.9 5 9a5 5 0 0 1-10 0c0-3.1 2.2-5.8 5-9z"/><path d="M12 21v-4"/><path d="M7 21h10"/></svg>`,
    reception: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M7 3h4l-1.2 7a2.8 2.8 0 1 1-1.6 0z" transform="rotate(-14 9 12)"/><path d="M13 3h4l-1.2 7a2.8 2.8 0 1 1-1.6 0z" transform="rotate(14 15 12)"/><path d="M12 2l.5 1.5M10 1.5l0 1"/></svg>`,
  };
  const wrap = $("#event-cards");
  CFG.events.forEach((ev) => {
    const card = document.createElement("article");
    card.className = "event-card";
    card.style.setProperty("--accent", ev.accent);
    card.innerHTML = `
      <span class="event-ico">${ICONS[ev.icon] || ICONS.wedding}</span>
      <h3 class="event-name">${ev.name}</h3>
      <p class="event-line">${ev.line}</p>
      <p class="event-meta"><b>${ev.date}</b> · ${ev.time}<br>${ev.venue}</p>`;
    wrap.appendChild(card);
  });

  let chimed = 0;
  const show = (el, stagger) => setTimeout(() => {
    el.classList.add("shown");
    if (chimed++ < 4) audio.chime();
  }, 120 * stagger);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        show(e.target, [...wrap.children].indexOf(e.target));
        io.unobserve(e.target);
      });
    }, { threshold: 0.25 });
    [...wrap.children].forEach((el) => io.observe(el));
  } else {
    [...wrap.children].forEach((el, i) => show(el, i));
  }
})();

/* ═══════════════ SCRATCH CARD ════════════════════════════ */
(() => {
  $("#scratch-heading").textContent = CFG.scratch.heading;
  $("#scratch-message").textContent = CFG.scratch.message;

  const canvas = $("#scratch-foil"), c = canvas.getContext("2d", { willReadFrequently: true });
  const wrap = $("#scratch-wrap");
  let painted = false, cleared = false, strokes = 0;

  const paintFoil = () => {
    const w = canvas.width = wrap.clientWidth * DPR;
    const h = canvas.height = wrap.clientHeight * DPR;
    const g = c.createLinearGradient(0, 0, w * 0.3, h);
    g.addColorStop(0, "#D9B45C"); g.addColorStop(0.35, "#B8923B");
    g.addColorStop(0.55, "#EBD292"); g.addColorStop(0.8, "#C09A40");
    g.addColorStop(1, "#A37F2E");
    c.fillStyle = g;
    c.fillRect(0, 0, w, h);
    // speckle texture
    c.globalAlpha = 0.12;
    for (let i = 0; i < 900; i++) {
      c.fillStyle = Math.random() > 0.5 ? "#fff" : "#6b5215";
      c.fillRect(Math.random() * w, Math.random() * h, 2, 2);
    }
    c.globalAlpha = 1;
    // ornament ring + text
    c.strokeStyle = "rgba(90,60,10,.55)";
    c.lineWidth = 2 * DPR;
    c.setLineDash([6 * DPR, 5 * DPR]);
    c.beginPath(); c.arc(w / 2, h / 2, Math.min(w, h) * 0.3, 0, Math.PI * 2); c.stroke();
    c.setLineDash([]);
    c.fillStyle = "rgba(74,15,34,.78)";
    c.font = `600 ${15 * DPR}px Cinzel, serif`;
    c.textAlign = "center";
    c.fillText("SCRATCH HERE", w / 2, h / 2 - 6 * DPR);
    c.font = `${24 * DPR}px serif`;
    c.fillText("🪙", w / 2, h / 2 + 26 * DPR);
    painted = true;
  };
  paintFoil();
  /* Repaint only on REAL size changes (rotation) — a repaint wipes scratch
     progress, and mobile URL-bar collapse fires tiny resizes constantly. */
  let foilW = wrap.clientWidth, foilH = wrap.clientHeight;
  new ResizeObserver(() => {
    if (cleared || strokes > 0) return;   // never wipe scratch progress
    const dw = Math.abs(wrap.clientWidth - foilW), dh = Math.abs(wrap.clientHeight - foilH);
    if (dw < 24 && dh < 24) return;
    foilW = wrap.clientWidth; foilH = wrap.clientHeight;
    paintFoil();
  }).observe(wrap);

  const checkCleared = () => {
    const sw = 36, sh = 48;
    const img = c.getImageData(0, 0, canvas.width, canvas.height);
    let empty = 0, step = Math.max(1, Math.floor(canvas.width / sw)) * 4;
    const rowStep = Math.max(1, Math.floor(canvas.height / sh));
    for (let y = 0; y < canvas.height; y += rowStep)
      for (let x = 3; x < canvas.width * 4; x += step)
        if (img.data[y * canvas.width * 4 + x] < 128) empty++;   // <128: GPU/hibernation alpha residue
    return empty / (sw * sh) > 0.55;
  };

  let last = null;
  const DBG = /[?&]tick/.test(location.search) ? (window.__scratchDbg = { calls: 0, drawn: 0, blocked: "" }) : null;
  const scratch = (e) => {
    if (DBG) DBG.calls++;
    if (cleared || !painted) { if (DBG) DBG.blocked = `cleared=${cleared} painted=${painted}`; return; }
    if (DBG) DBG.drawn++;
    const r = canvas.getBoundingClientRect();
    const x = (e.clientX - r.left) * (canvas.width / r.width);
    const y = (e.clientY - r.top) * (canvas.height / r.height);
    c.globalCompositeOperation = "destination-out";
    c.lineWidth = 54 * DPR / 2;
    c.lineCap = "round";
    c.beginPath();
    if (last) c.moveTo(last.x, last.y); else c.moveTo(x - 0.1, y);
    c.lineTo(x, y);
    c.stroke();
    c.globalCompositeOperation = "source-over";
    last = { x, y };
    audio.scratchNoise();
    if (++strokes % 14 === 0 && checkCleared()) reveal();
  };

  const reveal = () => {
    cleared = true;
    canvas.classList.add("cleared");
    wrap.classList.add("celebrate");
    // a small ceremony: three rising bells + petal fountain + shimmer flash
    audio.bell(520, 0.5, 2.6);
    setTimeout(() => audio.bell(660, 0.42, 2.4), 260);
    setTimeout(() => audio.bell(880, 0.36, 3.0), 540);
    if (navigator.vibrate) navigator.vibrate([30, 80, 30, 80, 60]);
    const r = wrap.getBoundingClientRect();
    petals.burst(r.left + r.width / 2, r.top + r.height / 3, 26);
    setTimeout(() => petals.burst(r.left + r.width / 2, r.top + r.height / 2, 20), 450);
    setTimeout(() => petals.burst(r.left + r.width / 2, r.top + r.height / 4, 16), 900);
  };

  canvas.addEventListener("pointerdown", (e) => { try { canvas.setPointerCapture(e.pointerId); } catch {} last = null; scratch(e); });
  canvas.addEventListener("pointermove", (e) => { if (e.buttons) scratch(e); });
  canvas.addEventListener("pointerup", () => { last = null; });
})();

/* ═══════════════ MAGIC BUS — hand state shared between
   Magic Mode (writer) and the Sanctum (reader) ════════════ */
const magicBus = { active: false, handY: null, captured: false };
if (/[?&]tick/.test(location.search)) window.__magicBus = magicBus;   // QA hook

/* ═══════════════ SANCTUM — the hand-unlocked hidden film ═ */
const sanctum = (() => {
  const sec = $("#sanctum");
  if (!sec) return { tick: () => {} };
  const S = CFG.sanctum;
  $("#sanctum-eyebrow").textContent = S.eyebrow;
  $("#sanctum-heading").textContent = S.heading;
  $("#sanctum-hint").textContent = S.hint;
  $("#sanctum-veil-text").textContent = S.veilText;
  const canvas = $("#sanctum-canvas"), c = canvas.getContext("2d");
  const progressEl = $("#sanctum-progress"), veilText = $("#sanctum-veil-text");
  const imgs = new Array(S.count);
  let state = "locked";            // locked → loading → unlocked
  let inView = false, cur = 0, target = 0, drawn = -1;

  new IntersectionObserver((es) => {
    es.forEach((e) => {
      inView = e.isIntersecting;
      if (e.isIntersecting && state === "locked") load();   // everyone gets the moment
    });
  }, { rootMargin: "900px 0px" }).observe(sec);

  const load = () => {
    state = "loading";
    veilText.textContent = "Unfolding…";
    progressEl.classList.remove("hidden");
    let done = 0, next = 0, active = 0;
    const limit = IS_TOUCH ? 4 : 6;
    const name = (i) => S.path + S.prefix + String(i + 1).padStart(3, "0") + S.ext;
    const pump = () => {
      while (active < limit && next < S.count) {
        const i = next++;
        const img = new Image();
        img.decoding = "async";
        imgs[i] = img;
        active++;
        img.onload = img.onerror = () => {
          active--;
          done++;
          progressEl.textContent = Math.round(done / S.count * 100) + "%";
          if (done === S.count) unlock();
          else pump();
        };
        img.src = name(i);
      }
    };
    pump();
  };

  const resize = () => {
    const r = canvas.getBoundingClientRect();
    if (r.width < 2) return;
    canvas.width = Math.round(r.width * DPR);
    canvas.height = Math.round(r.height * DPR);
    drawn = -1;
  };

  const draw = (i) => {
    const img = imgs[i];
    if (!img || !img.naturalWidth) return;
    if (canvas.width < 2) resize();
    const cw = canvas.width, ch = canvas.height;
    const s = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const w = img.naturalWidth * s, h = img.naturalHeight * s;
    c.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
  };

  const unlock = () => {
    state = "unlocked";
    resize();
    draw(0);
    sec.classList.add("unlocked");
    audio.bell(560, 0.5, 3.4);
    if (navigator.vibrate) navigator.vibrate([20, 60, 30]);
    const r = sec.querySelector("#sanctum-portal").getBoundingClientRect();
    petals.burst(r.left + r.width / 2, r.top + r.height / 3, 26);
  };

  const tick = (dt) => {
    magicBus.captured = state === "unlocked" && inView && magicBus.active && magicBus.handY != null;
    if (state === "locked") {
      // proximity fallback in case the observer is late (throttled tabs, odd browsers)
      const r = sec.getBoundingClientRect();
      if (r.top < window.innerHeight * 2) load();
      return;
    }
    if (state !== "unlocked") return;
    if (magicBus.captured) {
      // palm height conducts the film: lower the palm = fold back, raise = unfold
      const y = clamp((0.82 - magicBus.handY) / 0.64, 0, 1);
      target = y * (S.count - 1);
    } else {
      // no hand? the scroll itself carries you through the moment
      const r = sec.getBoundingClientRect();
      const dist = Math.max(r.height - window.innerHeight, 1);
      const p = clamp(-r.top / dist, 0, 1);
      target = p * (S.count - 1);
    }
    cur = lerp(cur, target, 1 - Math.exp(-dt * 6));
    const i = Math.round(cur);
    if (i !== drawn) {
      draw(i); drawn = i;
      fillEl.style.transform = `scaleX(${(i / (S.count - 1)).toFixed(3)})`;
    }
  };
  const fillEl = $("#sanctum-fill");

  window.addEventListener("resize", () => { if (state === "unlocked") { resize(); drawn = -1; } });
  return { tick };
})();

/* ═══════════════ DECOR PARALLAX — floating cutouts ═══════ */
const decor = (() => {
  const els = [...document.querySelectorAll(".decor[data-depth]")].map((el) => ({
    el, depth: parseFloat(el.dataset.depth) || 0.2,
  }));
  const io = new IntersectionObserver((es) => {
    es.forEach((e) => e.target.classList.toggle("shown", e.isIntersecting));
  }, { threshold: 0.04 });
  document.querySelectorAll(".decor, .foot-diya").forEach((el) => io.observe(el));

  const tick = (tiltX) => {
    const mid = window.innerHeight / 2;
    els.forEach(({ el, depth }) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -80 || r.top > window.innerHeight + 80) return;
      const delta = (r.top + r.height / 2 - mid) * -depth;
      el.style.transform = `translate3d(${(tiltX * depth * 46).toFixed(1)}px, ${delta.toFixed(1)}px, 0)`;
    });
  };
  return { tick };
})();

/* ═══════════════ MAGIC MODE — hand tracking ══════════════ */
(() => {
  const btn = $("#magic-toggle"), status = $("#magic-status"), cam = $("#magic-cam");
  const hud = $("#magic-hud"), hudCanvas = $("#hud-canvas");
  const hudCtx = hudCanvas.getContext("2d");
  const BONES = [[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];
  const drawHud = (lm) => {
    const w = hudCanvas.width = hudCanvas.clientWidth * 2;
    const h = hudCanvas.height = hudCanvas.clientHeight * 2;
    if (!lm) return;
    hudCtx.strokeStyle = "rgba(229,200,120,.9)";
    hudCtx.fillStyle = "#F6E7B6";
    hudCtx.lineWidth = 2;
    BONES.forEach(([a, b]) => {
      hudCtx.beginPath();
      hudCtx.moveTo(lm[a].x * w, lm[a].y * h);
      hudCtx.lineTo(lm[b].x * w, lm[b].y * h);
      hudCtx.stroke();
    });
    lm.forEach((p) => {
      hudCtx.beginPath();
      hudCtx.arc(p.x * w, p.y * h, 3, 0, Math.PI * 2);
      hudCtx.fill();
    });
  };
  let on = false, stream = null, landmarker = null, rafId = 0, lastVideoTime = -1;
  let scrollVel = 0;

  const say = (msg) => { status.textContent = msg; status.classList.remove("hidden"); };

  const stop = () => {
    on = false;
    magicBus.active = false;
    magicBus.handY = null;
    btn.classList.remove("on");
    btn.querySelector(".magic-label").textContent = "Enable Magic Mode";
    btn.querySelector(".magic-sub").textContent = "Wave your hand — the page follows";
    cancelAnimationFrame(rafId);
    petals.setAttractor(null);
    if (stream) { stream.getTracks().forEach((t) => t.stop()); stream = null; }
    hud.classList.remove("live");
    status.classList.add("hidden");
    scrollVel = 0;
  };

  const loop = () => {
    if (!on) return;
    rafId = requestAnimationFrame(loop);
    if (!landmarker || cam.readyState < 2 || cam.currentTime === lastVideoTime) {
      window.scrollBy(0, scrollVel *= 0.94);
      return;
    }
    lastVideoTime = cam.currentTime;
    const res = landmarker.detectForVideo(cam, performance.now());
    drawHud(res.landmarks && res.landmarks[0]);
    if (res.landmarks && res.landmarks.length) {
      const tip = res.landmarks[0][9];        // palm centre
      const x = (1 - tip.x) * innerWidth;     // mirror
      const y = tip.y * innerHeight;
      magicBus.handY = tip.y;
      petals.setAttractor({ x, y });
      petals.trail(x, y);
      if (magicBus.captured) {
        // the Sanctum holds the hand — no page scrolling, pure film scrubbing
        scrollVel = lerp(scrollVel, 0, 0.3);
        say("🪷 The moment is in your hand — raise it to unfold");
      } else {
        // vertical hand position drives scroll
        if (tip.y < 0.4)      scrollVel = lerp(scrollVel, -(0.4 - tip.y) * 46, 0.18);
        else if (tip.y > 0.6) scrollVel = lerp(scrollVel,  (tip.y - 0.6) * 46, 0.18);
        else                  scrollVel = lerp(scrollVel, 0, 0.2);
        say(tip.y < 0.4 ? "🖐 Rising…" : tip.y > 0.6 ? "🖐 Descending…" : "🖐 Hold — petals follow your hand");
      }
    } else {
      magicBus.handY = null;
      petals.setAttractor(null);
      scrollVel = lerp(scrollVel, 0, 0.1);
      say("Show your palm to the camera ✋");
    }
    if (Math.abs(scrollVel) > 0.3 && !magicBus.captured) window.scrollBy(0, scrollVel);
  };

  btn.addEventListener("click", async () => {
    if (on) { stop(); return; }
    try {
      say("Summoning the magic… ✨");
      btn.querySelector(".magic-label").textContent = "Loading…";
      const vision = await import("https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/vision_bundle.mjs");
      const files = await vision.FilesetResolver.forVisionTasks(
        "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm");
      landmarker = landmarker || await vision.HandLandmarker.createFromOptions(files, {
        baseOptions: {
          modelAssetPath: "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task",
          delegate: "GPU",
        },
        runningMode: "VIDEO",
        numHands: 1,
      });
      stream = await navigator.mediaDevices.getUserMedia({
        video: { width: 320, height: 240, facingMode: "user" },
      });
      cam.srcObject = stream;
      await cam.play();
      on = true;
      btn.classList.add("on");
      btn.querySelector(".magic-label").textContent = "Magic Mode On";
      btn.querySelector(".magic-sub").textContent = "Tap again to turn off";
      hud.classList.add("live");
      magicBus.active = true;
      say("Show your palm to the camera ✋");
      audio.chime();
      loop();
    } catch (err) {
      stop();
      say(err.name === "NotAllowedError"
        ? "No camera, no problem — just scroll: the moment unfolds anyway. Tap to retry magic."
        : "Magic unavailable here — but scroll on: the moment unfolds with your scroll.");
      btn.querySelector(".magic-label").textContent = "Enable Magic Mode";
    }
  });
})();

/* ═══════════════ VENUE + RSVP ════════════════════════════ */
(() => {
  $("#venue-name").textContent = CFG.venue.name;
  $("#venue-address").textContent = CFG.venue.address;
  const mapsHref = "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(CFG.venue.mapsQuery);
  $("#maps-btn").href = mapsHref;
  const mapLink = $("#map-link");
  if (mapLink) mapLink.href = mapsHref;
  $("#rsvp-deadline").textContent = CFG.rsvp.deadline;

  const modal = $("#rsvp-modal"), slot = $("#rsvp-frame-slot");
  const hasRealForm = CFG.rsvp.formUrl && !/PLACEHOLDER/i.test(CFG.rsvp.formUrl);
  let built = false;
  const buildRsvp = () => {
    if (built) return;
    built = true;
    if (hasRealForm) {
      const f = document.createElement("iframe");
      f.src = CFG.rsvp.formUrl;
      f.loading = "lazy";
      slot.appendChild(f);
      return;
    }
    // Native royal RSVP (no Google Form configured yet)
    slot.innerHTML = `
      <form id="rsvp-form" novalidate>
        <label class="rf-label">Your name
          <input class="rf-input" name="name" type="text" autocomplete="name" placeholder="Guest of honour" required>
        </label>
        <div class="rf-label">Will you grace the occasion?
          <div class="rf-choices">
            <label class="rf-chip"><input type="radio" name="attending" value="yes" checked><span>Joyfully accepts</span></label>
            <label class="rf-chip"><input type="radio" name="attending" value="no"><span>Regretfully declines</span></label>
          </div>
        </div>
        <label class="rf-label">Guests attending
          <select class="rf-input" name="count">
            <option>1</option><option>2</option><option>3</option><option>4</option><option>5+</option>
          </select>
        </label>
        <label class="rf-label">A note for the couple <span class="rf-opt">(optional)</span>
          <textarea class="rf-input" name="note" rows="2" placeholder="Blessings, wishes, song requests…"></textarea>
        </label>
        <button class="btn-maroon rf-submit" type="submit">Send with love</button>
      </form>
      <div id="rsvp-done" class="hidden">
        <p class="rf-done-mark">🪷</p>
        <h4 class="gold-foil">धन्यवाद · Thank you</h4>
        <p class="rf-done-text">Your response has been received.<br>We can't wait to celebrate with you.</p>
      </div>`;
    slot.querySelector("#rsvp-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target).entries());
      if (!data.name || !data.name.trim()) { e.target.querySelector("[name=name]").focus(); return; }
      try { localStorage.setItem("wed-rsvp", JSON.stringify({ ...data, at: new Date().toISOString() })); } catch {}
      e.target.classList.add("hidden");
      slot.querySelector("#rsvp-done").classList.remove("hidden");
      audio.bell(660, 0.45, 2.6);
      setTimeout(() => audio.bell(880, 0.32, 2.4), 300);
      if (navigator.vibrate) navigator.vibrate([25, 60, 40]);
      const r = modal.querySelector(".modal-sheet").getBoundingClientRect();
      petals.burst(r.left + r.width / 2, r.top + 80, 24);
    });
  };
  $("#rsvp-btn").addEventListener("click", () => {
    buildRsvp();
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    audio.chime();
  });
  const close = () => { modal.classList.add("hidden"); document.body.style.overflow = ""; };
  $("#rsvp-close").addEventListener("click", close);
  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
})();

/* ═══════════════ FILM BANDS — lazy cinematic loops ═══════ */
const finale = (() => {
  const el = document.getElementById("finale");
  let done = false;
  const tick = () => {
    if (done || !el) return;
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight * 0.78) { done = true; el.classList.add("shown"); audio.chime(); }
  };
  return { tick };
})();

/* The invitation and 3D world stay as separate routes. This transition starts
   the heavier world only after a deliberate tap, then releases this page. */
(() => {
  const link = $("#world-portal-link"), overlay = $("#portal-transition");
  if (!link || !overlay) return;
  const isPrimaryActivation = (e) => !e.defaultPrevented && e.button === 0
    && !e.metaKey && !e.ctrlKey && !e.shiftKey && !e.altKey;
  const rememberAudioIntent = () => {
    try {
      sessionStorage.setItem("wedding-world-audio-intent", audio.isMuted() ? "muted" : "play");
    } catch { /* private modes may restrict storage; the world still shows its sound gate */ }
  };
  if (REDUCED) {
    link.addEventListener("click", (e) => { if (isPrimaryActivation(e)) rememberAudioIntent(); });
    return;
  }
  let leaving = false, navTimer = 0;

  const reset = () => {
    const shouldRestore = leaving || document.body.classList.contains("portal-opening");
    leaving = false;
    clearTimeout(navTimer);
    document.body.classList.remove("portal-opening");
    document.body.removeAttribute("aria-busy");
    link.removeAttribute("aria-disabled");
    overlay.setAttribute("aria-hidden", "true");
    overlay.style.removeProperty("--portal-x");
    overlay.style.removeProperty("--portal-y");
    if (shouldRestore) audio.restoreAfterWorld();
  };

  link.addEventListener("click", (e) => {
    if (!isPrimaryActivation(e)) return;
    e.preventDefault();
    if (leaving) return;
    leaving = true;
    rememberAudioIntent();

    const visual = link.querySelector(".world-portal-visual");
    const r = (visual || link).getBoundingClientRect();
    overlay.style.setProperty("--portal-x", `${r.left + r.width / 2}px`);
    overlay.style.setProperty("--portal-y", `${r.top + r.height / 2}px`);
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("portal-opening");
    document.body.setAttribute("aria-busy", "true");
    link.setAttribute("aria-disabled", "true");

    audio.bell(540, 0.22, 1.3);
    audio.whoosh(0.9);
    audio.fadeForWorld(720);
    document.querySelectorAll("video").forEach((video) => video.pause());

    navTimer = setTimeout(() => {
      try { location.assign(link.href); }
      catch { location.href = link.href; }
    }, 820);
  });

  addEventListener("pageshow", reset);
})();

const films = (() => {
  const vids = [...document.querySelectorAll(".film-band video")];
  const wake = (v) => {
    if (!v.src && v.dataset.src) v.src = v.dataset.src;
    if (v.paused) v.play().catch(() => {});
  };
  let acc = 0;
  /* driven from the main loop — observer-independent, works in every browser */
  const tick = (dt) => {
    acc += dt;
    if (acc < 0.4 || !vids.length) return;
    acc = 0;
    vids.forEach((v) => {
      const r = v.getBoundingClientRect();
      const near = r.bottom > -300 && r.top < innerHeight + 300;
      if (near) wake(v);
      else if (!v.paused) v.pause();
    });
  };
  return { tick };
})();

/* ═══════════════ SOUND TOGGLE ════════════════════════════ */
(() => {
  const b = $("#sound-toggle");
  if (audio.isMuted()) b.classList.add("muted");
  b.addEventListener("click", () => {
    b.classList.toggle("muted", audio.toggleMute());
    if (!audio.isMuted()) audio.chime();
  });
})();

/* ═══════════════ FINISHING TOUCHES ═══════════════════════ */
(() => {
  /* Names → letter spans for the cascade entrance */
  const names = $(".names");
  if (names) {
    names.setAttribute("aria-label", names.textContent.trim());
    let li = 0;
    const split = (node) => {
      [...node.childNodes].forEach((n) => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          for (const ch of n.textContent) {
            if (ch.trim() === "") { frag.appendChild(document.createTextNode(ch)); continue; }
            const s = document.createElement("span");
            s.className = "ltr";
            s.style.setProperty("--li", li++);
            s.textContent = ch;
            s.setAttribute("aria-hidden", "true");
            frag.appendChild(s);
          }
          node.replaceChild(frag, n);
        } else if (n.nodeType === 1) { n.classList.add("ltr"); n.style.setProperty("--li", li++); }
      });
    };
    split(names);
  }

  /* Self-drawing flourish under every section title */
  const FLOURISH = `<svg class="flourish" viewBox="0 0 150 26" aria-hidden="true">
    <path d="M5 13 C 30 13, 40 4, 62 12"/><path d="M145 13 C 120 13, 110 22, 88 14"/>
    <circle cx="75" cy="13" r="7.5"/>
    <rect class="gem" x="71" y="9" width="8" height="8"/>
  </svg>`;
  document.querySelectorAll(".sec-head").forEach((h) => {
    h.insertAdjacentHTML("beforeend", FLOURISH);
  });
  const headIO = new IntersectionObserver((es) => {
    es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("shown"); headIO.unobserve(e.target); } });
  }, { threshold: 0.5 });
  document.querySelectorAll(".sec-head").forEach((h) => headIO.observe(h));

  /* Holographic tilt + sheen on event cards (touch/pointer driven) */
  document.getElementById("event-cards").addEventListener("pointermove", (e) => {
    const card = e.target.closest(".event-card");
    if (!card || REDUCED) return;
    const r = card.getBoundingClientRect();
    const fx = clamp((e.clientX - r.left) / r.width, 0, 1);
    const fy = clamp((e.clientY - r.top) / r.height, 0, 1);
    card.style.animationPlayState = "paused";
    card.style.transform =
      `perspective(700px) rotateY(${(fx - 0.5) * 7}deg) rotateX(${(0.5 - fy) * 6}deg) translateY(-2px)`;
    card.style.setProperty("--shx", (fx * 100).toFixed(1) + "%");
  }, { passive: true });
  ["pointerleave", "pointerup", "pointercancel"].forEach((ev) =>
    document.getElementById("event-cards").addEventListener(ev, (e) => {
      const card = e.target.closest(".event-card");
      if (!card) return;
      card.style.transform = "";
      card.style.animationPlayState = "";
    }, { passive: true }));

  /* Tap sparkle — a pinch of petals wherever a finger lands */
  let lastSpark = 0;
  document.addEventListener("pointerdown", (e) => {
    const t = performance.now();
    if (t - lastSpark < 450 || REDUCED) return;
    lastSpark = t;
    petals.burst(e.clientX, e.clientY, 3);
  }, { passive: true });
})();

/* ═══════════════ MANDALA (loader SVG petals) ═════════════ */
(() => {
  const ring = $("#petal-ring");
  const NS = "http://www.w3.org/2000/svg";
  for (let i = 0; i < 24; i++) {
    const p = document.createElementNS(NS, "path");
    p.setAttribute("d", "M0,-88 C6,-76 6,-66 0,-58 C-6,-66 -6,-76 0,-88 Z");
    p.setAttribute("fill", i % 2 ? "rgba(201,162,75,.5)" : "none");
    p.setAttribute("stroke", "currentColor");
    p.setAttribute("stroke-width", ".7");
    p.setAttribute("transform", `rotate(${i * 15})`);
    ring.appendChild(p);
  }
})();

/* ═══════════════ MAIN LOOP + FPS GUARD ═══════════════════ */
const threadEl = $("#thread");
let lastT = performance.now(), fpsAcc = 0, fpsN = 0, degraded = false;
const mainLoop = (t) => {
  const dt = Math.min((t - lastT) / 1000, 0.05);
  lastT = t;
  const vel = scrub.tick(dt) || 0;
  petals.addGust(Math.min(vel * 0.004, 0.4));
  if (vel > 7) audio.whoosh(Math.min(vel / 26, 1));   // airy gust on brisk scrolls
  petals.step(dt);
  sanctum.tick(dt);
  decor.tick(parallax.getTilt());
  films.tick(dt);
  finale.tick();
  // golden scroll thread
  const doc = document.documentElement;
  const sp = clamp(scrollY / Math.max(doc.scrollHeight - innerHeight, 1), 0, 1);
  threadEl.style.setProperty("--sp", sp.toFixed(4));
  // fps monitor
  fpsAcc += dt; fpsN++;
  if (fpsAcc > 2 && !degraded) {
    if (fpsN / fpsAcc < 44) { degraded = true; petals.setLowPerf(); }
    fpsAcc = 0; fpsN = 0;
  }
  RAF(mainLoop);
};

/* ═══════════════ BOOT — the seal opens ═══════════════════ */
(() => {
  const loader = $("#loader"), sealBtn = $("#seal-btn");
  const pctEl = $("#loader-pct"), statusEl = $("#loader-status"), tapEl = $("#loader-tap");
  const ring = $("#progress-ring");
  const CIRC = 414.7;

  scrub.resize();
  petals.resize();

  if (REDUCED) {
    // Reduced motion: static invitation, no film scrub, no petals
    loader.classList.add("gone");
    document.querySelectorAll(".beat").forEach((b, i) => { b.style.opacity = i === 0 ? 1 : 0; });
    const img = new Image();
    img.onload = () => scrub.firstPaint();
    img.src = CFG.frames.loPath + CFG.frames.prefix + "001" + CFG.frames.ext;
    $("#sound-toggle").classList.remove("hidden");
    return;
  }

  const ringPetals = [...document.querySelectorAll("#petal-ring path")];
  ringPetals.forEach((p) => { p.style.opacity = .18; p.style.transition = "opacity .6s ease"; });
  frames.preloadLo((f) => {
    pctEl.textContent = Math.round(f * 100) + "%";
    ring.style.strokeDashoffset = CIRC * (1 - f);
    // the mandala blooms petal by petal as the world loads
    const lit = Math.round(f * ringPetals.length);
    for (let k = 0; k < lit; k++) ringPetals[k].style.opacity = 1;
  }).then(() => {
    try { scrub.firstPaint(); } catch { /* paint must never block entry */ }
    statusEl.classList.add("hidden");
    tapEl.classList.remove("hidden");
    sealBtn.disabled = false;
  });

  sealBtn.addEventListener("click", () => {
    audio.init();
    audio.bell(432, 0.55, 4);                // the seal breaks with a temple bell
    setTimeout(() => audio.bell(648, 0.3, 3), 350);
    audio.whoosh(1);                         // doors part with a breath of air
    audio.startBgm();                        // the score begins inside the tap gesture
    parallax.enable();
    loader.classList.add("open");
    $("#hero").classList.add("entered");     // names cascade in as the doors part
    setTimeout(() => {
      loader.classList.add("gone");
      $("#sound-toggle").classList.remove("hidden");
      $("#thread").classList.add("on");
      petals.start();
    }, 1500);
    frames.startHi();
    RAF(mainLoop);
  }, { once: true });
})();

})();
