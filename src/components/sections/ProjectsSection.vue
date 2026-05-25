<template>
  <section id="projects" class="py-[80px] md:py-[120px] bg-surface">
    <div class="container">
      <!-- Header -->
      <div class="flex flex-col sm:flex-row justify-between items-start gap-8 mb-12 flex-wrap">
        <div>
          <span class="inline-flex items-center gap-2 font-display text-xs font-bold tracking-[0.12em] uppercase text-primary mb-6 reveal before:content-[''] before:block before:w-6 before:h-[2px] before:bg-primary before:rounded-[2px]" ref="labelEl">Projects</span>
          <h2 class="text-h1 reveal reveal-delay-1">
            Things I've <span class="text-primary">shipped.</span>
          </h2>
        </div>
        <p class="text-body text-muted max-w-[400px] sm:self-end reveal reveal-delay-2">
          {{ filteredProjects.length }} projects across game dev, AI & the web. Use the filters to explore.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex gap-3 flex-wrap mb-12 reveal reveal-delay-2">
        <button
          v-for="cat in categories"
          :key="cat"
          class="inline-flex items-center gap-2 px-[22px] py-[10px] rounded-full font-body text-[0.875rem] font-semibold border-[1.5px] border-border bg-white text-muted transition-default cursor-none hover:border-primary hover:text-primary"
          :class="activeFilter === cat ? '!bg-primary !border-primary !text-white shadow-glow' : ''"
          @click="setFilter(cat)"
        >
          <span class="inline-flex items-center justify-center w-5 h-5 rounded-full text-[0.7rem] font-bold transition-default" :class="activeFilter === cat ? 'bg-white/20' : 'bg-surface-2 text-text'">{{ countFor(cat) }}</span>
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <TransitionGroup name="project-grid" tag="div" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
</style>
