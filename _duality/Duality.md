---
title: "Duality"
layout: post
permalink: /
hidden: true
---
<!-- URL of the post: https://duality.nexus/ -->

<style>
  /* ---------- Hero ---------- */
  .hero {
    position: relative;
    min-height: 100vh;
    min-height: 100svh;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    isolation: isolate;
  }

  .hero::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: -2;
    background:
      radial-gradient(60% 50% at 50% 46%, rgba(251, 246, 239, 0.95), rgba(251, 246, 239, 0) 70%),
      radial-gradient(40% 40% at 8% 100%, rgba(79, 140, 247, 0.10), rgba(79, 140, 247, 0) 70%);
  }

  /* The bottom-right neuron from neuron.png, rising out of the bottom-left
     corner with half of it off-screen. */
  .hero-neuron {
    position: absolute;
    left: 0;
    bottom: 4vh;
    height: 58vh;
    width: auto;
    max-width: none;
    z-index: -1;
    transform-origin: 50% 100%;
    transform: translateX(-50%) rotate(10deg);
    pointer-events: none;
    user-select: none;
  }

  .hero-inner {
    width: min(1100px, 100%);
    padding: 0 24px;
    text-align: center;
  }

  /* The top-left neuron from neuron.png, protruding from the top-right corner. */
  .corner-neuron {
    position: absolute;
    top: 92px;
    right: 0;
    width: 238px;
    height: auto;
    max-width: none;
    z-index: -1;
    transform: translateX(44%) rotate(-42deg);
    pointer-events: none;
    user-select: none;
  }

  #title-canvas {
    display: block;
    width: 100%;
    height: clamp(150px, 24vw, 300px);
  }

  .hero-tagline {
    margin: 6px 0 0;
    font-family: var(--font-body);
    font-size: clamp(1rem, 1.6vw, 1.2rem);
    font-weight: 500;
    letter-spacing: 0.01em;
    color: var(--ink-soft);
  }

  .hero-tagline strong {
    font-weight: 600;
    color: var(--blue-deep);
  }

  .hero-scroll {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    width: 26px;
    height: 42px;
    border: 1.5px solid var(--ink-faint);
    border-radius: 999px;
    opacity: 0.7;
  }

  .hero-scroll::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 8px;
    width: 6px;
    height: 6px;
    margin-left: -3px;
    border-radius: 50%;
    background: var(--gold-deep);
    animation: scroll-dot 1.8s ease-in-out infinite;
  }

  @keyframes scroll-dot {
    0%   { transform: translateY(0); opacity: 1; }
    80%  { transform: translateY(16px); opacity: 0; }
    100% { transform: translateY(0); opacity: 0; }
  }

  /* ---------- Sections ---------- */
  .section {
    max-width: 1140px;
    margin: 0 auto;
    padding: 110px 24px;
  }

  .section-head {
    text-align: center;
    margin-bottom: 56px;
  }

  .section-head h2 {
    font-size: clamp(2.3rem, 4.5vw, 3.4rem);
    line-height: 1.1;
    margin: 10px 0 0;
  }

  /* Mission */
  .mission {
    background: linear-gradient(180deg, var(--bg), var(--bg-deep) 35%, var(--bg));
  }

  .mission .section {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 64px;
    align-items: center;
  }

  .mission h2 {
    font-size: clamp(2.6rem, 5vw, 3.8rem);
    line-height: 1.05;
    margin: 10px 0 0;
  }

  .mission h2 em {
    font-style: italic;
    color: var(--blue-deep);
  }

  .mission p {
    font-size: 1.15rem;
    color: var(--ink-soft);
    margin: 0 0 18px;
  }

  .mission p.lead {
    font-family: var(--font-display);
    font-variation-settings: "SOFT" 100;
    font-size: 1.55rem;
    line-height: 1.4;
    color: var(--ink);
  }

  /* Approach cards */
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 30px 28px 26px;
    background: var(--surface);
    border: 1px solid var(--line);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .card:hover {
    transform: translateY(-6px);
    border-color: rgba(79, 140, 247, 0.45);
    box-shadow: 0 24px 48px -20px rgba(45, 95, 216, 0.35);
  }

  .card-num {
    position: absolute;
    top: 24px;
    right: 26px;
    font-family: var(--font-display);
    font-size: 0.95rem;
    color: var(--ink-faint);
  }

  .icon-bubble {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: var(--blue-deep);
    background: radial-gradient(circle at 50% 45%, var(--gold) 0%, rgba(244, 202, 155, 0.55) 55%, rgba(79, 140, 247, 0.18) 100%);
    box-shadow: 0 0 0 6px rgba(79, 140, 247, 0.08);
  }

  .icon-bubble svg {
    width: 28px;
    height: 28px;
  }

  .card h3 {
    font-size: 1.6rem;
    margin: 22px 0 8px;
  }

  .card p {
    color: var(--ink-soft);
    margin: 0 0 26px;
    flex-grow: 1;
  }

  .card-meta {
    border-top: 1px solid var(--line);
    padding-top: 18px;
    font-size: 0.82rem;
    color: var(--ink-faint);
  }

  .meter {
    height: 6px;
    margin: 10px 0 8px;
    border-radius: 999px;
    background: var(--gold-tint);
    overflow: hidden;
  }

  .meter span {
    display: block;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--gold-deep), var(--blue));
  }

  .meter-label {
    display: flex;
    justify-content: space-between;
    color: var(--ink-soft);
  }

  .chips {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 10px;
  }

  .chip {
    padding: 4px 11px;
    border-radius: 999px;
    border: 1px solid var(--line);
    color: var(--ink-soft);
  }

  .chip.is-on {
    border-color: transparent;
    background: var(--blue-deep);
    color: #fff;
  }

  /* Roadmap */
  .timeline {
    position: relative;
    max-width: 920px;
    margin: 0 auto;
  }

  .timeline::before {
    content: "";
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 50%;
    width: 2px;
    margin-left: -1px;
    background: linear-gradient(to bottom, var(--gold-deep), var(--blue) 60%, rgba(79, 140, 247, 0));
    opacity: 0.6;
  }

  .step {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 96px 1fr;
    align-items: center;
    margin-bottom: 64px;
  }

  .step:last-child {
    margin-bottom: 0;
  }

  .step-node {
    grid-column: 2;
    justify-self: center;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    color: var(--blue-deep);
    background: radial-gradient(circle at 50% 45%, var(--gold) 0%, #F8DFC2 60%, var(--surface) 100%);
    border: 1px solid rgba(217, 149, 79, 0.45);
    box-shadow: 0 0 0 8px var(--bg), 0 10px 30px -8px rgba(217, 149, 79, 0.6);
  }

  .step-node svg {
    width: 28px;
    height: 28px;
  }

  .step-body {
    grid-row: 1;
  }

  .step.left .step-body {
    grid-column: 1;
    text-align: right;
  }

  .step.right .step-body {
    grid-column: 3;
  }

  .step-body h3 {
    font-size: 1.75rem;
    margin: 6px 0 8px;
  }

  .step-body p {
    margin: 0;
    color: var(--ink-soft);
  }

  /* Contact CTA */
  .cta {
    position: relative;
    max-width: 760px;
    margin: 0 auto;
    padding: 64px 40px;
    text-align: center;
    border-radius: 28px;
    overflow: hidden;
    background:
      radial-gradient(80% 90% at 50% 0%, rgba(244, 202, 155, 0.55), rgba(244, 202, 155, 0) 70%),
      var(--surface);
    border: 1px solid rgba(217, 149, 79, 0.35);
    box-shadow: var(--shadow);
  }

  .cta canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .cta-content {
    position: relative;
  }

  .cta h2 {
    font-size: clamp(2.3rem, 5vw, 3.2rem);
    margin: 0 0 12px;
  }

  .cta p {
    color: var(--ink-soft);
    margin: 0 auto 30px;
    max-width: 460px;
  }

  /* ---------- Responsive ---------- */
  @media (max-width: 900px) {
    .mission .section {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .cards {
      grid-template-columns: 1fr;
      max-width: 520px;
      margin: 0 auto;
    }
  }

  @media (max-width: 700px) {
    .section {
      padding: 80px 20px;
    }

    .hero-neuron {
      height: 34vh;
      bottom: 2vh;
      opacity: 0.8;
    }

    .corner-neuron {
      top: 72px;
      width: 150px;
    }

    .timeline::before {
      left: 32px;
    }

    .step,
    .step.left,
    .step.right {
      grid-template-columns: 64px 1fr;
      gap: 20px;
      align-items: start;
    }

    .step-node {
      grid-column: 1;
      grid-row: 1;
    }

    .step.left .step-body,
    .step.right .step-body {
      grid-column: 2;
      text-align: left;
    }

    .cta {
      margin: 0 4px;
      padding: 48px 22px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-scroll::after {
      animation: none;
    }
  }
</style>

{% include duality-nav.html active="home" %}

<section class="hero">
  <img class="hero-neuron" src="/images/neuron-hero.webp" alt="" aria-hidden="true">
  <img class="corner-neuron" src="/images/neuron-small.webp" alt="" aria-hidden="true">
  <div class="hero-inner">
    <h1 class="visually-hidden">Duality</h1>
    <canvas id="title-canvas" aria-hidden="true"></canvas>
    <p class="hero-tagline">Creating the most detailed <strong>brain maps</strong></p>
  </div>
  <div class="hero-scroll" aria-hidden="true"></div>
</section>

<div class="mission">
  <div class="section">
    <div>
      <span class="d-eyebrow">Mission</span>
      <h2>Map the brain. <em>Understand</em> it.</h2>
    </div>
    <div>
      <p class="lead">Humanity doesn't know how the brain works, and so can't cure, enhance, or imitate it.</p>
      <p>We are solving this by creating the most detailed brain maps and using them for brain simulation and diagnosis. Beginning with small organisms, we aim to enable in silico drug development and breakthrough treatments for brain diseases.</p>
    </div>
  </div>
</div>

<hr class="d-divider">

<div class="section">
  <div class="section-head">
    <span class="d-eyebrow">Approach</span>
    <h2>From tissue to insight</h2>
  </div>

  <div class="cards">
    <div class="card">
      <span class="card-num">01</span>
      <div class="icon-bubble">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.3 15.3 21 21"/><circle cx="8.5" cy="9" r="1.2"/><circle cx="12.5" cy="12" r="1.2"/><path d="M9.4 9.8l2.2 1.4"/></svg>
      </div>
      <h3>Scan</h3>
      <p>We image brain tissue at nanometre resolution, capturing its structure down to individual synapses.</p>
      <div class="card-meta">
        Level of resolution
        <div class="meter"><span style="width: 90%;"></span></div>
        <div class="meter-label"><span>mm</span><span>~nm</span></div>
      </div>
    </div>

    <div class="card">
      <span class="card-num">02</span>
      <div class="icon-bubble">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 7.5 12 12 3 7.5Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/></svg>
      </div>
      <h3>Map</h3>
      <p>We turn the imaging data into the most detailed digital brain maps: every neuron and every connection.</p>
      <div class="card-meta">
        Level of biophysical detail
        <div class="meter"><span style="width: 95%;"></span></div>
        <div class="meter-label"><span>Wiring</span><span>Moonshot</span></div>
      </div>
    </div>

    <div class="card">
      <span class="card-num">03</span>
      <div class="icon-bubble">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6.5" r="2.5"/><circle cx="18" cy="8" r="2.5"/><circle cx="11" cy="18" r="2.5"/><circle cx="19.5" cy="18.5" r="1.5"/><path d="M8.4 7.1 15.6 7.6"/><path d="M7.1 8.8l2.7 7"/><path d="M16.6 10.1l-4.3 5.8"/><path d="M13.5 18.2h4.5"/></svg>
      </div>
      <h3>Simulate &amp; diagnose</h3>
      <p>We run the maps as simulations to test drugs, understand disease and support diagnosis.</p>
      <div class="card-meta">
        Applications
        <div class="chips">
          <span class="chip is-on">Treatments</span>
          <span class="chip is-on">Diagnosis</span>
          <span class="chip">Cognition</span>
        </div>
      </div>
    </div>
  </div>
</div>

<hr class="d-divider">

<div class="section">
  <div class="section-head">
    <span class="d-eyebrow">Roadmap</span>
    <h2>Where we're going</h2>
  </div>

  <div class="timeline">
    <div class="step left">
      <div class="step-node">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 21 7.5 12 12 3 7.5Z"/><path d="m3 12 9 4.5 9-4.5"/><path d="m3 16.5 9 4.5 9-4.5"/></svg>
      </div>
      <div class="step-body">
        <span class="d-eyebrow">Step 1</span>
        <h3>Build the maps</h3>
        <p>Develop nanometre-scale imaging and reconstruction to produce the most detailed neural maps.</p>
      </div>
    </div>

    <div class="step right">
      <div class="step-node">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3Z"/></svg>
      </div>
      <div class="step-body">
        <span class="d-eyebrow">Step 2</span>
        <h3>Make breakthroughs</h3>
        <p>Map the zebrafish brain end to end and run drug-like simulations on it.</p>
      </div>
    </div>

    <div class="step left">
      <div class="step-node">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.5c3 2.4 4.5 5.9 4.5 9.9l-1.8 3.6H9.3l-1.8-3.6c0-4 1.5-7.5 4.5-9.9Z"/><circle cx="12" cy="9.5" r="1.7"/><path d="M7.6 12.6 5 15.5V19l3.4-2"/><path d="m16.4 12.6 2.6 2.9V19l-3.4-2"/><path d="m10.5 19 1.5 2.5 1.5-2.5"/></svg>
      </div>
      <div class="step-body">
        <span class="d-eyebrow">Step 3</span>
        <h3>Productionise</h3>
        <p>Scale to mice and humans, and bring our maps, simulations and diagnostics to labs, clinics and drug-discovery teams.</p>
      </div>
    </div>
  </div>
</div>

<div class="section" style="padding-top: 20px;">
  <div class="cta" id="cta">
    <canvas id="cta-canvas" aria-hidden="true"></canvas>
    <div class="cta-content">
      <span class="d-eyebrow">Contact</span>
      <h2>Get in touch</h2>
      <p>Working on brain mapping, simulation or diagnosis? We'd love to hear from you.</p>
      <a class="d-button" id="cta-button" href="/contact/">Contact us</a>
    </div>
  </div>
</div>

{% include duality-footer.html %}

<script>
// "Duality" title assembled from palette-coloured circles.
(function () {
  const canvas = document.getElementById('title-canvas');
  const ctx = canvas.getContext('2d');
  const TEXT = 'Duality';
  const FONT = 'Fraunces, Georgia, serif';
  // Mostly blue with golden accents, like the reference neurons.
  const COLORS = ['#4F8CF7', '#4F8CF7', '#4F8CF7', '#3B74E6', '#2D5FD8', '#6FA2FA', '#F4CA9B', '#E7AE72'];
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let dots = [];
  let width = 0;
  let height = 0;
  let startTime = 0;
  let assembled = false;
  let pointer = null;
  let running = false;

  function sampleTargets() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const off = document.createElement('canvas');
    off.width = Math.ceil(width);
    off.height = Math.ceil(height);
    const o = off.getContext('2d');
    let size = height * 0.78;
    o.font = '700 ' + size + 'px ' + FONT;
    const measured = o.measureText(TEXT).width;
    if (measured > width * 0.9) size *= (width * 0.9) / measured;
    const step = Math.max(3, Math.round(size / 36));
    o.font = '700 ' + size + 'px ' + FONT;
    o.textAlign = 'center';
    o.textBaseline = 'middle';
    o.fillText(TEXT, width / 2, height * 0.44);
    // Thicken hairline serifs so thin strokes still get a row of circles.
    o.lineWidth = step * 1.1;
    o.lineJoin = 'round';
    o.strokeText(TEXT, width / 2, height * 0.44);
    const data = o.getImageData(0, 0, off.width, off.height).data;
    const targets = [];
    let row = 0;
    for (let y = Math.floor(step / 2); y < off.height; y += step * 0.87, row++) {
      const yi = Math.round(y);
      for (let x = (row % 2 ? step : step / 2); x < off.width; x += step) {
        const xi = Math.round(x);
        if (data[(yi * off.width + xi) * 4 + 3] > 140) targets.push([xi, yi]);
      }
    }
    return { targets: targets, step: step };
  }

  function build(settled) {
    const sampled = sampleTargets();
    const step = sampled.step;
    dots = sampled.targets.map(function (t) {
      const angle = Math.random() * Math.PI * 2;
      const dist = 12 + Math.pow(Math.random(), 2.4) * width * 0.6;
      return {
        tx: t[0],
        ty: t[1],
        sx: settled ? t[0] : t[0] + Math.cos(angle) * dist,
        sy: settled ? t[1] : t[1] + Math.sin(angle) * dist * 0.7,
        ox: 0,
        oy: 0,
        r: step * 0.38 * (0.75 + Math.random() * 0.45),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        delay: settled ? 0 : Math.random() * 700,
        dur: settled ? 0 : 1900 + Math.random() * 1500
      };
    });
  }

  function frame(now) {
    if (!startTime) startTime = now;
    const t = now - startTime;
    ctx.clearRect(0, 0, width, height);
    let moving = false;

    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      const p = d.dur ? Math.min(1, Math.max(0, (t - d.delay) / d.dur)) : 1;
      if (p < 1) moving = true;
      const e = 1 - Math.pow(1 - p, 3);
      let x = d.sx + (d.tx - d.sx) * e;
      let y = d.sy + (d.ty - d.sy) * e;

      // Once assembled, circles shy away from the pointer and drift back.
      if (assembled) {
        let fx = 0;
        let fy = 0;
        if (pointer) {
          const dx = d.tx - pointer.x;
          const dy = d.ty - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 70 && dist > 0.01) {
            const push = (1 - dist / 70) * 16;
            fx = (dx / dist) * push;
            fy = (dy / dist) * push;
          }
        }
        d.ox += (fx - d.ox) * 0.15;
        d.oy += (fy - d.oy) * 0.15;
        if (Math.abs(d.ox) > 0.05 || Math.abs(d.oy) > 0.05) moving = true;
        x += d.ox;
        y += d.oy;
      }

      ctx.globalAlpha = Math.min(1, 0.15 + p * 1.4);
      ctx.fillStyle = d.color;
      ctx.beginPath();
      ctx.arc(x, y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    if (!assembled && !moving) assembled = true;
    if (moving || pointer) {
      requestAnimationFrame(frame);
    } else {
      running = false;
    }
  }

  function run() {
    if (running) return;
    running = true;
    requestAnimationFrame(frame);
  }

  function start() {
    build(reduceMotion);
    if (reduceMotion) assembled = true;
    run();
  }

  canvas.addEventListener('pointermove', function (e) {
    if (!assembled) return;
    const rect = canvas.getBoundingClientRect();
    pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    run();
  });
  canvas.addEventListener('pointerleave', function () {
    pointer = null;
    run();
  });

  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      if (Math.abs(canvas.getBoundingClientRect().width - width) < 1) return;
      build(assembled);
      run();
    }, 150);
  });

  const fontReady = document.fonts
    ? document.fonts.load('600 100px Fraunces').then(function () { return document.fonts.ready; })
    : Promise.resolve();
  Promise.race([fontReady, new Promise(function (r) { setTimeout(r, 2500); })]).then(start);
})();

// Contact card: circles drift out of the button and trail the pointer.
(function () {
  const box = document.getElementById('cta');
  const canvas = document.getElementById('cta-canvas');
  const button = document.getElementById('cta-button');
  const ctx = canvas.getContext('2d');
  const COLORS = ['#4F8CF7', '#3B74E6', '#6FA2FA', '#F4CA9B', '#E7AE72'];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let particles = [];
  let pointer = null;
  let tick = 0;
  let width = 0;
  let height = 0;
  let origin = { x: 0, y: 0 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = box.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const b = button.getBoundingClientRect();
    origin = { x: b.left + b.width / 2 - rect.left, y: b.top + b.height / 2 - rect.top };
  }

  function spawn(x, y, fromButton) {
    const angle = Math.random() * Math.PI * 2;
    const speed = fromButton ? 0.25 + Math.random() * 0.45 : 0.2 + Math.random() * 0.6;
    particles.push({
      x: x,
      y: y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r: 1.6 + Math.random() * 2.6,
      life: 150 + Math.random() * 90,
      max: 240,
      color: COLORS[Math.floor(Math.random() * COLORS.length)]
    });
  }

  function frame() {
    ctx.clearRect(0, 0, width, height);
    if (tick % 12 === 0) for (let i = 0; i < 2; i++) spawn(origin.x, origin.y, true);
    if (pointer && tick % 4 === 0) spawn(pointer.x, pointer.y, false);
    tick++;

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life--;
      p.alpha = Math.max(0, p.life / p.max);
    }
    particles = particles.filter(function (p) { return p.life > 0; });

    ctx.lineWidth = 0.6;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 70) {
          ctx.strokeStyle = 'rgba(79, 140, 247, ' + (Math.min(particles[i].alpha, particles[j].alpha) * (1 - dist / 70) * 0.45) + ')';
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    requestAnimationFrame(frame);
  }

  box.addEventListener('pointermove', function (e) {
    const rect = box.getBoundingClientRect();
    pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  });
  box.addEventListener('pointerleave', function () { pointer = null; });
  button.addEventListener('click', function () {
    for (let i = 0; i < 24; i++) spawn(origin.x, origin.y, true);
  });
  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(frame);
})();
</script>
