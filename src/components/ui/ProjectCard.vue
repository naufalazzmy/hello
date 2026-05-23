<template>
  <router-link :to="`/project/${project.slug}`" class="project-card" :class="{ featured: project.featured }" custom v-slot="{ navigate }">
  <article class="project-card" :class="{ featured: project.featured }" @click="navigate" role="link">
    <!-- Category Tag -->
    <div class="card-top">
      <span class="category-tag" :class="categoryClass">{{ project.category }}</span>
      <div class="card-links">
        <a v-if="project.github" :href="project.github" target="_blank" rel="noopener" class="icon-link" title="View on GitHub" data-cursor-expand>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
        </a>
        <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener" class="icon-link" title="Live Demo" data-cursor-expand>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/></svg>
        </a>
      </div>
    </div>

    <!-- Content -->
    <div class="card-body">
      <h3 class="text-h3 card-title">{{ project.title }}</h3>
      <p class="card-desc text-sm">{{ project.description }}</p>
    </div>

    <!-- Tech Tags + Read More -->
    <div class="card-footer">
      <div class="tech-tags">
        <span v-for="t in project.tech.slice(0, 4)" :key="t" class="tech-tag">{{ t }}</span>
        <span v-if="project.tech.length > 4" class="tech-tag">+{{ project.tech.length - 4 }}</span>
      </div>
      <span class="read-more">
        Read more
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </span>
    </div>

    <!-- Featured Badge -->
    <div v-if="project.featured" class="featured-badge">✦ Featured</div>
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
  'tag-game': props.project.category === 'Game Dev',
  'tag-ai': props.project.category === 'AI',
  'tag-web': props.project.category === 'Web App',
}))
</script>

<style scoped>
/* Override router-link default anchor styles on card wrapper */
a.project-card { text-decoration: none; color: inherit; display: block; }

.project-card {
  position: relative;
  background: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: var(--transition);
  overflow: hidden;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--color-primary-light), transparent 60%);
  opacity: 0;
  transition: var(--transition);
  pointer-events: none;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
}

.project-card:hover::before {
  opacity: 1;
}

.project-card.featured {
  border-color: var(--color-primary);
  background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-white) 60%);
}

/* Top Row */
.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.category-tag {
  display: inline-flex;
  align-items: center;
  padding: 4px 12px;
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.tag-game {
  background: #E8F4FD;
  color: #2980B9;
}

.tag-ai {
  background: #F0FBF4;
  color: #27AE60;
}

.tag-web {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

/* Links */
.card-links {
  display: flex;
  gap: 0.5rem;
}

.icon-link {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  transition: var(--transition);
  background: var(--color-surface);
}

.icon-link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

/* Body */
.card-body {
  flex: 1;
}

.card-title {
  margin-bottom: 0.6rem;
  color: var(--color-text);
  transition: var(--transition);
}

.project-card:hover .card-title {
  color: var(--color-primary);
}

.card-desc {
  color: var(--color-muted);
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Tech Tags */
.card-footer {
  border-top: 1px solid var(--color-border);
  padding-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.read-more {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--color-muted);
  white-space: nowrap;
  transition: var(--transition);
  font-family: var(--font-display);
  letter-spacing: 0.02em;
}

.project-card:hover .read-more {
  color: var(--color-primary);
  gap: 8px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.tech-tag {
  padding: 3px 10px;
  background: var(--color-surface);
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--color-muted);
  font-family: var(--font-body);
  transition: var(--transition);
}

.project-card:hover .tech-tag {
  background: var(--color-primary-light);
  color: var(--color-primary);
}

/* Featured Badge */
.featured-badge {
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--color-primary);
  font-family: var(--font-display);
  text-transform: uppercase;
}
</style>
