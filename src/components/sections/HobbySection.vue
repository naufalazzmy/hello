<template>
  <section id="hobbies" class="section-padding">
    <div class="container">
      <span class="section-label reveal">Beyond the Code</span>
      <div class="hobbies-header reveal reveal-delay-1">
        <h2 class="text-h1">
          When I'm not building,<br />
          <span style="color: var(--color-primary)">I'm exploring.</span>
        </h2>
        <p class="text-body" style="color: var(--color-muted); max-width: 400px;">
          Life's too short to only write code. Here's what keeps me curious outside of work.
        </p>
      </div>

      <!-- Hobby Cards -->
      <div class="hobbies-grid">
        <!-- Photography -->
        <div class="hobby-card reveal reveal-delay-1">
          <div class="hobby-visual photography">
            <div class="hobby-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
            </div>
            <div class="hobby-bg-pattern" />
          </div>
          <div class="hobby-body">
            <h3 class="text-h3">Photography</h3>
            <p class="text-sm" style="color: var(--color-muted); margin-top: 0.5rem; line-height: 1.7;">
              I see the world through a lens. Mostly street, cinematic, and travel photography —
              chasing light, moods, and the quiet moments between moments.
            </p>
            <a href="https://instagram.com/naufalazzmy" target="_blank" rel="noopener" class="hobby-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              @naufalazzmy
            </a>
          </div>
        </div>

        <!-- Traveling -->
        <div class="hobby-card reveal reveal-delay-2">
          <div class="hobby-visual traveling">
            <div class="hobby-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            </div>
            <div class="hobby-bg-pattern" />
          </div>
          <div class="hobby-body">
            <h3 class="text-h3">Traveling</h3>
            <p class="text-sm" style="color: var(--color-muted); margin-top: 0.5rem; line-height: 1.7;">
              New places, new perspectives. I travel to get uncomfortable in the best way —
              exploring different cultures, food, and landscapes whenever I get the chance.
            </p>
            <span class="hobby-tag">🗺️ Wandering the world</span>
          </div>
        </div>

        <!-- Journaling -->
        <div class="hobby-card reveal reveal-delay-3">
          <div class="hobby-visual journaling">
            <div class="hobby-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
            </div>
            <div class="hobby-bg-pattern" />
          </div>
          <div class="hobby-body">
            <h3 class="text-h3">Storytelling</h3>
            <p class="text-sm" style="color: var(--color-muted); margin-top: 0.5rem; line-height: 1.7;">
              Writing keeps me grounded. From trip journals to random thoughts at midnight —
              I believe every experience is worth capturing before it fades.
            </p>
            <span class="hobby-tag">📝 Writing it all down</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
    { threshold: 0.15 }
  )
  document.querySelectorAll('#hobbies .reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
.hobbies-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.hobbies-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.hobby-card {
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  transition: var(--transition);
}

.hobby-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

/* Visuals */
.hobby-visual {
  height: 180px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.photography { background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%); }
.traveling   { background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%); }
.journaling  { background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%); }

.hobby-icon-wrap {
  position: relative;
  z-index: 1;
  width: 72px;
  height: 72px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.15);
  transition: var(--transition);
}

.hobby-card:hover .hobby-icon-wrap {
  transform: scale(1.1);
  background: rgba(244, 132, 95, 0.25);
  border-color: rgba(244, 132, 95, 0.4);
}

.hobby-bg-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(rgba(244,132,95,0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Body */
.hobby-body {
  padding: 1.5rem;
}

.hobby-body h3 {
  margin-bottom: 0;
}

.hobby-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-primary);
  transition: var(--transition);
}

.hobby-link:hover {
  gap: 10px;
}

.hobby-tag {
  display: inline-block;
  margin-top: 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-muted);
}

@media (max-width: 900px) {
  .hobbies-grid { grid-template-columns: 1fr; max-width: 480px; margin: 0 auto; }
  .hobbies-header { flex-direction: column; align-items: flex-start; }
}
</style>
