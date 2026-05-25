<template>
  <section id="hero" class="relative min-h-screen flex items-center overflow-hidden bg-bg">
    <!-- Particle Canvas -->
    <canvas ref="canvas" class="absolute inset-0 pointer-events-none z-0" />

    <div class="container relative z-10 pt-[100px] pb-[80px] grid grid-cols-1 md:grid-cols-[1fr_auto] md:gap-x-12 lg:gap-x-24 grid-rows-[auto_auto_auto_auto_auto] gap-y-0 items-start">
      
      <!-- Headshot — minimal -->
      <!-- <div class="reveal reveal-delay-4 col-span-1 md:col-start-2 md:row-start-1 md:row-end-6 flex items-center justify-center mb-10 md:mb-0 -order-1 md:order-none self-center mx-auto md:mx-0">
        <div class="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[240px] md:h-[240px] lg:w-[300px] lg:h-[300px] rounded-full border-4 border-primary-light p-2 bg-white shadow-xl transition-default hover:border-primary hover:scale-[1.03]">
          <img src="../../assets/profile.webp" alt="Naufal Azzmi" class="w-full h-full rounded-full object-cover" />
        </div>
      </div> -->

      <!-- Greeting -->
      <div class="reveal col-start-1 flex items-center gap-2.5 text-[0.9rem] font-medium text-muted mb-4 font-body" ref="greetEl">
        <span class="w-2 h-2 bg-primary rounded-full anim-pulse" />
        <span>Hey there, I'm</span>
      </div>

      <!-- Name -->
      <h1 class="reveal reveal-delay-1 col-start-1 text-display mb-6 leading-none" ref="nameEl">
        Naufal<br />
        <span class="text-primary relative">Azzmi.</span>
      </h1>

      <!-- Typewriter Tagline -->
      <div class="reveal reveal-delay-2 col-start-1 font-display text-[clamp(1.1rem,2.5vw,1.5rem)] font-semibold text-text mb-6 min-h-[2em]" ref="taglineEl">
        <span class="text-muted">I </span>
        <span class="text-primary">{{ displayedText }}<span class="inline-block anim-blink text-primary" :class="{ 'opacity-0': !showCursor }">|</span></span>
      </div>

      <!-- Sub Description -->
      <p class="reveal reveal-delay-3 col-start-1 text-body max-w-[480px] text-muted mb-10" ref="descEl">
        Software Engineer crafting cool things across web, AI & games.
        Ship on time. Always built with intent.
      </p>

      <!-- CTAs -->
      <div class="reveal reveal-delay-4 col-start-1 flex gap-4 flex-wrap" ref="ctaEl">
        <a href="#projects" class="btn btn-primary">
          See My Work
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
        <a href="/naufalazzmi_resume.pdf" download class="btn btn-outline">
          Download Resume
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
        </a>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <div class="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent origin-top anim-scrollDown" />
      <span class="text-xs text-muted">scroll</span>
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
  particles = Array.from({ length: 150 }, () => ({
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
.anim-pulse { animation: pulse 2s infinite; }
.anim-blink { animation: blink 1s step-end infinite; }
.anim-scrollDown { animation: scrollDown 2s ease-in-out infinite; }
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(0.8); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes scrollDown {
  0% { transform: scaleY(0); transform-origin: top; opacity: 0; }
  50% { transform: scaleY(1); transform-origin: top; opacity: 1; }
  100% { transform: scaleY(1); transform-origin: bottom; opacity: 0; }
}
</style>
