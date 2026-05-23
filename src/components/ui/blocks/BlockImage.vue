<template>
  <figure class="block-image">
    <div class="image-wrap">
      <img
        :src="resolvedSrc"
        :alt="block.caption || 'Project image'"
        loading="lazy"
        @error="onError"
        ref="imgEl"
      />
      <!-- Placeholder shown when no image or load fails -->
      <div class="img-placeholder" v-if="showPlaceholder">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <span>Image coming soon</span>
      </div>
    </div>
    <figcaption v-if="block.caption">{{ block.caption }}</figcaption>
  </figure>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ block: Object })
const showPlaceholder = ref(!props.block.src)
const imgEl = ref(null)

const resolvedSrc = computed(() => {
  const path = props.block.src
  if (!path) return ''
  if (path.startsWith('http')) return path
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : base + '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return cleanBase + cleanPath
})

const onError = () => { showPlaceholder.value = true }
</script>

<style scoped>
.block-image {
  margin: 2.5rem 0;
}

.image-wrap {
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: var(--color-surface);
  position: relative;
  min-height: 280px;
}

.image-wrap img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s ease;
}

.image-wrap:hover img {
  transform: scale(1.02);
}

.img-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: var(--color-muted);
  background: var(--color-surface);
  min-height: 280px;
}

.img-placeholder span {
  font-size: 0.85rem;
  font-weight: 500;
}

figcaption {
  text-align: center;
  font-size: 0.825rem;
  color: var(--color-muted);
  margin-top: 0.75rem;
  font-style: italic;
}
</style>
