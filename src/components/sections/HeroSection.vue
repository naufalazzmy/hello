<template>
  <section id="hero" class="hero">
    <!-- Particle Canvas -->
    <canvas ref="canvas" class="hero-canvas" />

    <div class="container hero-content">
      <!-- Greeting -->
      <div class="hero-greeting reveal" ref="greetEl">
        <span class="greeting-dot" />
        <span>Hey there, I'm</span>
      </div>

      <!-- Name -->
      <h1 class="text-display hero-name reveal reveal-delay-1" ref="nameEl">
        Naufal<br />
        <span class="name-accent">Azzmi.</span>
      </h1>

      <!-- Typewriter Tagline -->
      <div class="hero-tagline reveal reveal-delay-2" ref="taglineEl">
        <span class="tagline-prefix">I </span>
        <span class="typewriter">{{ displayedText }}<span class="cursor-blink" :class="{ hide: !showCursor }">|</span></span>
      </div>

      <!-- Sub Description -->
      <p class="hero-desc text-body reveal reveal-delay-3" ref="descEl">
        Software Engineer crafting cool things across web, AI & games.
        Ship on time. Always built with intent.
      </p>

      <!-- CTAs -->
      <div class="hero-ctas reveal reveal-delay-4" ref="ctaEl">
        <a href="#projects" class="btn btn-primary">
          See My Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="/resume.pdf" download class="btn btn-outline">
          Download Resume
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        </a>
      </div>

      <!-- Headshot — minimal -->
      <div class="hero-avatar reveal reveal-delay-4">
        <div class="avatar-ring">
          <img src="../../assets/profile.webp" alt="Naufal Azzmi" class="avatar-image" />
        </div>
        <div class="avatar-label">
          <span class="text-xs">Naufal Azzmi</span>
          <span class="text-xs" style="color: var(--color-muted)">Software Engineer</span>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="scroll-indicator">
      <div class="scroll-line" />
      <span class="text-xs" style="color: var(--color-muted)">scroll</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
const greetEl = ref(null)
const nameEl = ref(null)
const taglineEl = ref(null)
const descEl = ref(null)
const ctaEl = ref(null)

// ── Typewriter ──────────────────────────────────────────────────
const lines = [
  'build things that actually work.',
  'ship cool side projects at 2am.',
  'make the UI a little more beautiful.',
  'turn coffee into functional code.',
  'break things — then fix them better.',
]
const displayedText = ref('')
const showCursor = ref(true)
let lineIdx = 0, charIdx = 0, typing = true, typeTimer = null

const typeStep = () => {
  const line = lines[lineIdx]
  if (typing) {
    if (charIdx <= line.length) {
      displayedText.value = line.slice(0, charIdx++)
      typeTimer = setTimeout(typeStep, 55)
    } else {
      typeTimer = setTimeout(() => { typing = false; typeStep() }, 1800)
    }
  } else {
    if (charIdx > 0) {
      displayedText.value = line.slice(0, --charIdx)
      typeTimer = setTimeout(typeStep, 30)
    } else {
      lineIdx = (lineIdx + 1) % lines.length
      typing = true
      typeTimer = setTimeout(typeStep, 300)
    }
  }
}

// ── Particles ────────────────────────────────────────────────────
let ctx, particles = [], animId

const initParticles = () => {
  const el = canvas.value
  if (!el) return
  el.width = window.innerWidth
  el.height = window.innerHeight
  ctx = el.getContext('2d')
  particles = Array.from({ length: 55 }, () => ({
    x: Math.random() * el.width,
    y: Math.random() * el.height,
    r: Math.random() * 2.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.15,
  }))
  drawParticles()
}

const drawParticles = () => {
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)
  particles.forEach(p => {
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(244, 132, 95, ${p.alpha})`
    ctx.fill()
    p.x += p.dx; p.y += p.dy
    if (p.x < 0 || p.x > canvas.value.width) p.dx *= -1
    if (p.y < 0 || p.y > canvas.value.height) p.dy *= -1
  })
  animId = requestAnimationFrame(drawParticles)
}

const onResize = () => {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
}

// ── Scroll Reveal ────────────────────────────────────────────────
const revealEls = () => {
  const els = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') })
  }, { threshold: 0.1 })
  els.forEach(el => io.observe(el))
}

onMounted(() => {
  initParticles()
  window.addEventListener('resize', onResize)
  setTimeout(typeStep, 800)

  // Trigger hero reveals immediately
  setTimeout(() => {
    document.querySelectorAll('#hero .reveal').forEach(el => el.classList.add('revealed'))
  }, 100)

  revealEls()
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', onResize)
  clearTimeout(typeTimer)
})
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--color-bg);
}

.hero-canvas {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  padding-top: 100px;
  padding-bottom: 80px;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: auto auto auto auto auto;
  gap: 0;
  align-items: start;
}

.hero-greeting {
  grid-column: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-muted);
  margin-bottom: 1rem;
  font-family: var(--font-body);
}

.greeting-dot {
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

.hero-name {
  grid-column: 1;
  margin-bottom: 1.5rem;
  line-height: 1.0;
}

.name-accent {
  color: var(--color-primary);
  position: relative;
}

.hero-tagline {
  grid-column: 1;
  font-family: var(--font-display);
  font-size: clamp(1.1rem, 2.5vw, 1.5rem);
  font-weight: 600;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  min-height: 2em;
}

.tagline-prefix {
  color: var(--color-muted);
}

.typewriter {
  color: var(--color-primary);
}

.cursor-blink {
  display: inline-block;
  animation: blink 1s step-end infinite;
  color: var(--color-primary);
}

.cursor-blink.hide { opacity: 0; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-desc {
  grid-column: 1;
  max-width: 480px;
  color: var(--color-muted);
  margin-bottom: 2.5rem;
}

.hero-ctas {
  grid-column: 1;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Avatar — right side, minimal */
.hero-avatar {
  grid-column: 2;
  grid-row: 1 / 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-left: 4rem;
  margin-top: 2rem;
}

.avatar-ring {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid var(--color-primary-light);
  padding: 4px;
  background: var(--color-white);
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.avatar-ring:hover {
  border-color: var(--color-primary);
  transform: scale(1.05);
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-label {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 1;
}

.scroll-line {
  width: 1px;
  height: 48px;
  background: linear-gradient(to bottom, var(--color-primary), transparent);
  animation: scrollDown 2s ease-in-out infinite;
}

@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
  50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
  100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
}

@media (max-width: 900px) {
  .hero-content {
    grid-template-columns: 1fr;
  }
  .hero-avatar {
    grid-column: 1;
    grid-row: auto;
    flex-direction: row;
    margin-left: 0;
    margin-bottom: 2rem;
    order: -1;
  }
  .avatar-ring { width: 72px; height: 72px; }
}
</style>
