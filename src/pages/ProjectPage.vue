<template>
  <div class="min-h-screen pt-[80px]">
    <!-- 404 state -->
    <div v-if="!project" class="py-[120px] text-center">
      <div class="container">
        <h1 class="text-h1">Project not found</h1>
        <router-link to="/" class="btn btn-primary mt-8 inline-flex">
          ← Back to Home
        </router-link>
      </div>
    </div>

    <template v-else>
      <!-- Hero Area -->
      <div class="pt-12 bg-bg">
        <div class="container">
          <!-- Category + Year -->
          <div class="flex items-center gap-3 mb-5">
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[0.06em] uppercase" :class="categoryClass">{{ project.category }}</span>
            <span class="text-[0.8rem] font-semibold text-muted">{{ project.year }}</span>
          </div>

          <!-- Title & Description -->
          <h1 class="mb-4 leading-[1.1] break-words hyphens-auto max-w-full overflow-hidden project-title" :class="titleSizeClass">{{ project.title }}</h1>
          <p class="text-[1.1rem] leading-[1.7] text-muted max-w-[640px] mb-10">{{ project.description }}</p>

          <!-- Project Info Grid -->
          <div class="flex flex-wrap border border-border rounded-lg overflow-hidden mb-12 bg-white w-full">
            <div class="flex flex-col gap-1 px-5 py-3.5 border-r border-b border-border -mb-px -mr-px flex-1 min-w-[100%] sm:min-w-[150px] last:border-r-0">
              <span class="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-muted font-display">Role</span>
              <span class="text-[0.95rem] font-semibold text-text">{{ project.role || 'Developer' }}</span>
            </div>
            <div class="flex flex-col gap-1 px-5 py-3.5 border-r border-b border-border -mb-px -mr-px flex-1 min-w-[100%] sm:min-w-[150px] last:border-r-0">
              <span class="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-muted font-display">Duration</span>
              <span class="text-[0.95rem] font-semibold text-text">{{ project.duration || 'N/A' }}</span>
            </div>
            <div class="flex flex-col gap-1 px-5 py-3.5 border-r border-b border-border -mb-px -mr-px flex-1 min-w-[100%] sm:min-w-[150px] last:border-r-0">
              <span class="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-muted font-display">Stack</span>
              <span class="flex flex-wrap gap-1 text-[0.95rem] font-semibold text-text">
                <span v-for="t in project.tech" :key="t" class="px-2 py-0.5 bg-surface rounded-full text-xs font-medium text-muted">{{ t }}</span>
              </span>
            </div>
            <div class="flex flex-col gap-1 px-5 py-3.5 border-r border-b border-border -mb-px -mr-px flex-1 min-w-[100%] sm:min-w-[150px] last:border-r-0" v-if="project.github || project.demo">
              <span class="text-[0.7rem] font-bold tracking-[0.08em] uppercase text-muted font-display">Links</span>
              <span class="flex flex-wrap gap-2 text-[0.95rem] font-semibold text-text">
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.8rem] font-semibold border-[1.5px] border-border bg-surface text-text transition-default hover:border-primary hover:text-primary hover:bg-primary-light">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.8rem] font-semibold border-[1.5px] border-primary bg-primary text-white transition-default hover:bg-primary-hover">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
                  Live Demo
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Cover Image -->
      <div class="bg-surface py-12" v-if="project.coverImage">
        <div class="container">
          <div class="rounded-xl overflow-hidden bg-surface-2 aspect-[16/7] relative flex items-center justify-center w-full">
            <img class="absolute top-0 left-0 w-full h-full object-cover object-center" :src="resolveImage(project.coverImage)" :alt="project.title + ' cover'" @error="coverError = true" v-if="!coverError" />
            <div class="flex items-center justify-center bg-gradient-to-br from-primary-light to-surface absolute inset-0" v-else>
              <div class="flex flex-col items-center gap-4">
                <span class="text-6xl leading-none">{{ categoryEmoji }}</span>
                <span class="font-display text-2xl font-bold text-muted opacity-50">{{ project.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- No cover image placeholder -->
      <div class="bg-surface py-12" v-else>
        <div class="container">
          <div class="rounded-xl overflow-hidden bg-surface-2 aspect-[16/7] relative flex items-center justify-center w-full">
            <div class="flex items-center justify-center bg-gradient-to-br from-primary-light to-surface absolute inset-0">
              <div class="flex flex-col items-center gap-4">
                <span class="text-6xl leading-none">{{ categoryEmoji }}</span>
                <span class="font-display text-2xl font-bold text-muted opacity-50">{{ project.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Body -->
      <div class="py-16 pb-20 bg-bg">
        <div class="container grid grid-cols-1">
          <ContentRenderer :content="project.content" />
        </div>
      </div>

      <!-- Prev / Next Navigation -->
      <div class="bg-surface border-t border-border py-10">
        <div class="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <router-link
            v-if="prevProject"
            :to="`/project/${prevProject.slug}`"
            class="flex flex-col gap-1.5 p-6 rounded-lg border-[1.5px] border-border bg-white transition-default text-text hover:border-primary hover:bg-primary-light hover:-translate-y-1 hover:shadow-md"
          >
            <span class="flex items-center gap-1.5 text-xs font-bold tracking-[0.08em] uppercase text-muted font-display">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Previous
            </span>
            <span class="font-display text-[1.1rem] font-bold text-text">{{ prevProject.title }}</span>
            <span class="text-[0.8rem] text-muted">{{ prevProject.category }}</span>
          </router-link>
          <div v-else class="border-[1.5px] border-dashed border-border rounded-lg bg-transparent pointer-events-none" />

          <router-link
            v-if="nextProject"
            :to="`/project/${nextProject.slug}`"
            class="flex flex-col gap-1.5 p-6 rounded-lg border-[1.5px] border-border bg-white transition-default text-text hover:border-primary hover:bg-primary-light hover:-translate-y-1 hover:shadow-md items-end text-right"
          >
            <span class="flex items-center gap-1.5 text-xs font-bold tracking-[0.08em] uppercase text-muted font-display justify-end">
              Next
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
            <span class="font-display text-[1.1rem] font-bold text-text">{{ nextProject.title }}</span>
            <span class="text-[0.8rem] text-muted">{{ nextProject.category }}</span>
          </router-link>
          <div v-else class="border-[1.5px] border-dashed border-border rounded-lg bg-transparent pointer-events-none" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../data/projects.js'
import ContentRenderer from '../components/ui/ContentRenderer.vue'

const route = useRoute()
const coverError = ref(false)

const resolveImage = (path) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : base + '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return cleanBase + cleanPath
}

const project = computed(() =>
  projects.find(p => p.slug === route.params.slug) ?? null
)

const currentIndex = computed(() =>
  projects.findIndex(p => p.slug === route.params.slug)
)

const prevProject = computed(() =>
  currentIndex.value > 0 ? projects[currentIndex.value - 1] : null
)

const nextProject = computed(() =>
  currentIndex.value < projects.length - 1 ? projects[currentIndex.value + 1] : null
)

const titleSizeClass = computed(() => {
  const len = project.value?.title?.length || 0
  return len > 22 
    ? 'text-[clamp(2.25rem,5vw,4rem)] font-display font-extrabold tracking-[-0.03em]' 
    : 'text-display'
})

const categoryClass = computed(() => ({
  'bg-[#E8F4FD] text-[#2980B9]': project.value?.category === 'Game Dev',
  'bg-[#F0FBF4] text-[#27AE60]':   project.value?.category?.includes('AI'),
  'bg-primary-light text-primary':  project.value?.category === 'Web App',
}))

const categoryEmoji = computed(() => {
  const cat = project.value?.category || ''
  if (cat === 'Game Dev') return '🎮'
  if (cat.includes('AI')) return '🤖'
  if (cat === 'Web App') return '🌐'
  return '💻'
})
</script>
