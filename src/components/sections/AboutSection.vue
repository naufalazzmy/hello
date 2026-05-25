<template>
  <section id="about" class="section-padding">
    <div class="container">
      <div class="about-grid">
        <!-- Left: Bio -->
        <div class="about-bio">
          <span class="section-label reveal" ref="labelEl">About Me</span>
          <h2 class="text-h1 reveal reveal-delay-1">
            Engineer at heart,<br />
            <span style="color: var(--color-primary)">builder by nature.</span>
          </h2>
          <p class="text-body reveal reveal-delay-2"
            style="color: var(--color-muted); margin-top: 1.5rem; max-width: 480px; line-height: 1.8;">
            {{ yearsOfExperience }}+ years experienced Software engineer who loves building things that are
            both functional and delightful. Whether it's a web app, an AI pipeline,
            or a game mechanic — if it's interesting, I'll build it.
          </p>
          <p class="text-body reveal reveal-delay-3"
            style="color: var(--color-muted); margin-top: 1rem; max-width: 480px; line-height: 1.8;">
            Currently exploring the intersection of AI and creative software.
            When I'm not coding, I'm behind a camera or planning the next trip.
          </p>

          <!-- Quick Stats -->
          <div class="about-stats reveal reveal-delay-3">
            <div class="stat">
              <span class="stat-num">{{ projectsCount }}+</span>
              <span class="stat-label">Projects Shipped</span>
            </div>
            <div class="stat-divider" />
            <div class="stat">
              <span class="stat-num">3</span>
              <span class="stat-label">Domains</span>
            </div>
            <div class="stat-divider" />
            <div class="stat">
              <span class="stat-num">∞</span>
              <span class="stat-label">Cups of Coffee</span>
            </div>
          </div>
        </div>

        <!-- Right: Tech Stack -->
        <div class="about-skills">
          <span class="section-label reveal">Tech Stack</span>
          <div class="skills-grid reveal reveal-delay-1">
            <div v-for="tech in techStack" :key="tech.name" class="skill-item" :title="tech.name">
              <div class="skill-icon">
                <img :src="tech.icon" :alt="tech.name" loading="lazy" @error="onIconError($event)" />
              </div>
              <span class="skill-name text-xs">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { techStack } from '../../data/techStack.js'
import { projects } from '../../data/projects.js'

const yearsOfExperience = computed(() => new Date().getFullYear() - 2021)
const projectsCount = projects.length

const onIconError = (e) => {
  e.target.style.display = 'none'
}

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('#about .reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

.about-stats {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 2.5rem;
  padding: 1.5rem 2rem;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-num {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: var(--color-primary);
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--color-muted);
  font-weight: 500;
  margin-top: 4px;
  white-space: nowrap;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--color-border);
}

/* Tech Stack Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 1rem 0.5rem;
  background: var(--color-white);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.skill-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--color-primary-light);
  opacity: 0;
  transition: var(--transition);
}

.skill-item:hover {
  border-color: var(--color-primary);
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.skill-item:hover::before {
  opacity: 1;
}

.skill-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.skill-icon img {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.skill-name {
  position: relative;
  z-index: 1;
  color: var(--color-muted);
  text-align: center;
  font-size: 0.65rem;
  letter-spacing: 0.04em;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .skills-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .about-stats {
    gap: 1rem;
    padding: 1rem;
  }
}
</style>
