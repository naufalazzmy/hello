<template>
  <router-link :to="`/project/${project.slug}`" class="block no-underline text-inherit" custom v-slot="{ navigate }">
    <article 
      class="relative bg-white border border-border rounded-[24px] p-7 flex flex-col gap-4 transition-default overflow-hidden group cursor-none hover:-translate-y-1.5 hover:border-primary hover:shadow-lg"
      :class="{ 'border-primary bg-[linear-gradient(135deg,var(--color-primary-light)_0%,var(--color-white)_60%)]': project.featured }"
      @click="navigate" 
      role="link"
    >
      <div class="absolute inset-0 bg-gradient-to-br from-primary-light to-transparent to-60% opacity-0 transition-default pointer-events-none group-hover:opacity-100" />
      
      <!-- Category Tag -->
      <div class="flex items-center justify-between relative z-10">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-[0.7rem] font-bold tracking-[0.06em] uppercase" :class="categoryClass">{{ project.category }}</span>
        <div class="flex gap-2">
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted transition-default bg-surface hover:text-primary hover:border-primary hover:bg-primary-light" title="View on GitHub" data-cursor-expand>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="w-8 h-8 rounded-md border border-border flex items-center justify-center text-muted transition-default bg-surface hover:text-primary hover:border-primary hover:bg-primary-light" title="Live Demo" data-cursor-expand>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
          </a>
        </div>
      </div>

      <!-- Content -->
      <div class="flex-1 relative z-10 mt-2">
        <h3 class="text-h3 mb-2.5 text-text transition-default group-hover:text-primary">{{ project.title }}</h3>
        <p class="text-sm text-muted leading-[1.7] line-clamp-3">{{ project.description }}</p>
      </div>

      <!-- Tech Tags + Read More -->
      <div class="border-t border-border pt-4 mt-2 flex items-center justify-between gap-2 relative z-10">
        <div class="flex flex-wrap gap-1.5">
          <span v-for="t in project.tech.slice(0, 4)" :key="t" class="px-2.5 py-1 bg-surface rounded-full text-[0.7rem] font-semibold text-muted font-body transition-default group-hover:bg-primary-light group-hover:text-primary">{{ t }}</span>
          <span v-if="project.tech.length > 4" class="px-2.5 py-1 bg-surface rounded-full text-[0.7rem] font-semibold text-muted font-body transition-default group-hover:bg-primary-light group-hover:text-primary">+{{ project.tech.length - 4 }}</span>
        </div>
        <span class="inline-flex items-center gap-1 text-[0.75rem] font-bold text-muted whitespace-nowrap transition-default font-display tracking-[0.02em] group-hover:text-primary group-hover:gap-2">
          Read more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </span>
      </div>

      <!-- Featured Badge -->
      <div v-if="project.featured" class="absolute top-5 right-5 text-[0.65rem] font-bold tracking-[0.08em] text-primary font-display uppercase relative z-10">✦ Featured</div>
    </article>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  project: { type: Object, required: true }
})

const categoryClass = computed(() => ({
  'bg-[#E8F4FD] text-[#2980B9]': props.project.category === 'Game Dev',
  'bg-[#F0FBF4] text-[#27AE60]': props.project.category === 'AI',
  'bg-primary-light text-primary': props.project.category === 'Web App',
}))
</script>
