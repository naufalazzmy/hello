<template>
  <div class="project-page">
    <!-- 404 state -->
    <div v-if="!project" class="not-found">
      <div class="container">
        <h1 class="text-h1">Project not found</h1>
        <router-link to="/" class="btn btn-primary" style="margin-top: 2rem; display: inline-flex;">
          ← Back to Home
        </router-link>
      </div>
    </div>

    <template v-else>
      <!-- Hero Area -->
      <div class="project-hero">
        <div class="container">
          <!-- Back link
          <router-link to="/#projects" class="back-link">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Back to Projects
          </router-link> -->

          <!-- Category + Year -->
          <div class="hero-meta">
            <span class="category-tag" :class="categoryClass">{{ project.category }}</span>
            <span class="year-badge">{{ project.year }}</span>
          </div>

          <!-- Title & Description -->
          <h1 class="text-display project-title">{{ project.title }}</h1>
          <p class="project-description">{{ project.description }}</p>

          <!-- Project Info Grid -->
          <div class="project-info-grid">
            <div class="info-item">
              <span class="info-label">Role</span>
              <span class="info-value">{{ project.role || 'Developer' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Duration</span>
              <span class="info-value">{{ project.duration || 'N/A' }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Stack</span>
              <span class="info-value tech-stack">
                <span v-for="t in project.tech" :key="t" class="tech-pill">{{ t }}</span>
              </span>
            </div>
            <div class="info-item" v-if="project.github || project.demo">
              <span class="info-label">Links</span>
              <span class="info-value links-row">
                <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="project-link-btn">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                  GitHub
                </a>
                <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="project-link-btn demo">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
                  Live Demo
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Cover Image -->
      <div class="cover-image-wrap" v-if="project.coverImage">
        <div class="container">
          <div class="cover-image">
            <img :src="resolveImage(project.coverImage)" :alt="project.title + ' cover'" @error="coverError = true" v-if="!coverError" />
            <div class="cover-placeholder" v-else>
              <div class="placeholder-content">
                <span class="placeholder-emoji">{{ categoryEmoji }}</span>
                <span class="placeholder-name">{{ project.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- No cover image placeholder -->
      <div class="cover-image-wrap" v-else>
        <div class="container">
          <div class="cover-image cover-placeholder">
            <div class="placeholder-content">
              <span class="placeholder-emoji">{{ categoryEmoji }}</span>
              <span class="placeholder-name">{{ project.title }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Content Body -->
      <div class="content-body">
        <div class="container content-layout">
          <ContentRenderer :content="project.content" />
        </div>
      </div>

      <!-- Prev / Next Navigation -->
      <div class="project-nav-section">
        <div class="container project-nav-grid">
          <router-link
            v-if="prevProject"
            :to="`/project/${prevProject.slug}`"
            class="project-nav-card prev"
          >
            <span class="nav-dir">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              Previous
            </span>
            <span class="nav-title">{{ prevProject.title }}</span>
            <span class="nav-cat">{{ prevProject.category }}</span>
          </router-link>
          <div v-else class="project-nav-card empty" />

          <router-link
            v-if="nextProject"
            :to="`/project/${nextProject.slug}`"
            class="project-nav-card next"
          >
            <span class="nav-dir">
              Next
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
            <span class="nav-title">{{ nextProject.title }}</span>
            <span class="nav-cat">{{ nextProject.category }}</span>
          </router-link>
          <div v-else class="project-nav-card empty" />
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

const categoryClass = computed(() => ({
  'tag-game': project.value?.category === 'Game Dev',
  'tag-ai':   project.value?.category === 'AI',
  'tag-web':  project.value?.category === 'Web App',
}))

const categoryEmoji = computed(() => {
  const map = { 'Game Dev': '🎮', 'AI': '🤖', 'Web App': '🌐' }
  return map[project.value?.category] ?? '💻'
})
</script>

<style scoped>
.project-page {
  min-height: 100vh;
  padding-top: 80px;
}

.not-found {
  padding: 120px 0;
  text-align: center;
}

/* ── Hero ── */
.project-hero {
  padding: 3rem 0 0;
  background: var(--color-bg);
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-muted);
  transition: var(--transition);
  margin-bottom: 2rem;
}

.back-link:hover {
  color: var(--color-primary);
  gap: 12px;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
}

.category-tag {
  padding: 5px 14px;
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.tag-game { background: #E8F4FD; color: #2980B9; }
.tag-ai   { background: #F0FBF4; color: #27AE60; }
.tag-web  { background: var(--color-primary-light); color: var(--color-primary); }

.year-badge {
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-muted);
}

.project-title {
  margin-bottom: 1rem;
  line-height: 1.1;
  font-size: clamp(2rem, 5vw, 3.5rem);
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-muted);
  max-width: 640px;
  margin-bottom: 2.5rem;
}

/* Info Grid */
.project-info-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  margin-bottom: 3rem;
  background: var(--color-white);
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 0.875rem 1.25rem;
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  margin: 0 -1px -1px 0;
  flex: 1 1 auto;
  min-width: 150px;
}

.info-item:last-child { border-right: none; }

.info-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  font-family: var(--font-display);
}

.info-value {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--color-text);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.tech-pill {
  padding: 2px 8px;
  background: var(--color-surface);
  border-radius: var(--radius-full);
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--color-muted);
}

.links-row {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.project-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: var(--radius-full);
  font-size: 0.8rem;
  font-weight: 600;
  border: 1.5px solid var(--color-border);
  background: var(--color-surface);
  color: var(--color-text);
  transition: var(--transition);
}

.project-link-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
  background: var(--color-primary-light);
}

.project-link-btn.demo {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.project-link-btn.demo:hover {
  background: var(--color-primary-hover);
}

/* Cover Image */
.cover-image-wrap {
  background: var(--color-surface);
  padding: 3rem 0;
}

.cover-image {
  border-radius: var(--radius-xl);
  overflow: hidden;
  background: var(--color-surface-2);
  aspect-ratio: 16/7;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.cover-image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.cover-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-surface) 100%);
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.placeholder-emoji {
  font-size: 4rem;
  line-height: 1;
}

.placeholder-name {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-muted);
  opacity: 0.5;
}

/* Content Body */
.content-body {
  padding: 4rem 0 5rem;
  background: var(--color-bg);
}

.content-layout {
  display: grid;
  grid-template-columns: 1fr;
}

/* Prev/Next Navigation */
.project-nav-section {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 2.5rem 0;
}

.project-nav-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.project-nav-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 1.5rem;
  border-radius: var(--radius-lg);
  border: 1.5px solid var(--color-border);
  background: var(--color-white);
  transition: var(--transition);
  text-decoration: none;
  color: var(--color-text);
}

.project-nav-card:not(.empty):hover {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.project-nav-card.empty {
  border-style: dashed;
  background: transparent;
  pointer-events: none;
}

.project-nav-card.next {
  align-items: flex-end;
  text-align: right;
}

.nav-dir {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  font-family: var(--font-display);
}

.project-nav-card.next .nav-dir { justify-content: flex-end; }

.nav-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-text);
}

.nav-cat {
  font-size: 0.8rem;
  color: var(--color-muted);
}

@media (max-width: 768px) {
  .project-nav-grid { grid-template-columns: 1fr; }
}

@media (max-width: 480px) {
  .info-item { min-width: 100%; }
}
</style>
