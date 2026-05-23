<template>
  <section id="projects" class="section-padding" style="background: var(--color-surface);">
    <div class="container">
      <!-- Header -->
      <div class="projects-header">
        <div>
          <span class="section-label reveal" ref="labelEl">Projects</span>
          <h2 class="text-h1 reveal reveal-delay-1">
            Things I've <span style="color: var(--color-primary)">shipped.</span>
          </h2>
        </div>
        <p class="text-body reveal reveal-delay-2" style="color: var(--color-muted); max-width: 400px; align-self: flex-end;">
          {{ filteredProjects.length }} projects across game dev, AI & the web. Use the filters to explore.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="filter-row reveal reveal-delay-2">
        <button
          v-for="cat in categories"
          :key="cat"
          class="filter-btn"
          :class="{ active: activeFilter === cat }"
          @click="setFilter(cat)"
        >
          <span class="filter-count">{{ countFor(cat) }}</span>
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <TransitionGroup name="project-grid" tag="div" class="projects-grid">
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </TransitionGroup>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { projects, categories } from '../../data/projects.js'
import ProjectCard from '../ui/ProjectCard.vue'

const activeFilter = ref('All')

const setFilter = (cat) => { activeFilter.value = cat }

const filteredProjects = computed(() => {
  if (activeFilter.value === 'All') return projects
  return projects.filter(p => p.category === activeFilter.value)
})

const countFor = (cat) => {
  if (cat === 'All') return projects.length
  return projects.filter(p => p.category === cat).length
}

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('#projects .reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
.projects-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

/* Filter Buttons */
.filter-row {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}

.filter-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: var(--radius-full);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 600;
  border: 1.5px solid var(--color-border);
  background: var(--color-white);
  color: var(--color-muted);
  transition: var(--transition);
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: white;
  box-shadow: 0 4px 16px var(--color-primary-glow);
}

.filter-count {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 0.7rem;
  font-weight: 700;
  background: rgba(255, 255, 255, 0.2);
  transition: var(--transition);
}

.filter-btn:not(.active) .filter-count {
  background: var(--color-surface-2);
  color: var(--color-text);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

/* Transition */
.project-grid-enter-active,
.project-grid-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.project-grid-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.97);
}
.project-grid-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.97);
}
.project-grid-move {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@media (max-width: 900px) {
  .projects-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .projects-grid { grid-template-columns: 1fr; }
  .projects-header { flex-direction: column; }
}
</style>
