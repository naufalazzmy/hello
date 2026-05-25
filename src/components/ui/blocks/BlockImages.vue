<template>
  <div class="block-images" :class="`cols-${block.items?.length > 2 ? 3 : 2}`">
    <figure v-for="(item, i) in block.items" :key="i" class="gallery-item">
      <div class="image-wrap" @click="selectedMedia = resolveSrc(item.src)">
        <video v-if="isVideo(item.src)" :src="resolveSrc(item.src)" autoplay muted loop playsinline @error="e => e.target.parentElement.classList.add('error')"></video>
        <img v-else :src="resolveSrc(item.src)" :alt="item.caption || 'Gallery image'" loading="lazy" @error="e => e.target.parentElement.classList.add('error')" />
        <div class="img-placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
      </div>
      <figcaption v-if="item.caption">{{ item.caption }}</figcaption>
    </figure>

    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div v-if="selectedMedia" class="lightbox-overlay" @click="selectedMedia = null">
          <div class="lightbox-content">
            <video v-if="isVideo(selectedMedia)" :src="selectedMedia" autoplay muted loop playsinline></video>
            <img v-else :src="selectedMedia" alt="Enlarged view" />
            <button class="close-btn" @click.stop="selectedMedia = null">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ block: Object })

const selectedMedia = ref(null)

const isVideo = (path) => {
  if (!path) return false
  return /\.(mp4|webm|ogg|mov)$/i.test(path.split('?')[0])
}

const resolveSrc = (path) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  const base = import.meta.env.BASE_URL || '/'
  const cleanBase = base.endsWith('/') ? base : base + '/'
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return cleanBase + cleanPath
}
</script>

<style scoped>
.block-images {
  display: grid;
  gap: 1rem;
  margin: 2.5rem 0;
}

.cols-2 { grid-template-columns: repeat(2, 1fr); }
.cols-3 { grid-template-columns: repeat(3, 1fr); }

.gallery-item { margin: 0; }

.image-wrap {
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--color-surface);
  aspect-ratio: 4/3;
  position: relative;
  cursor: pointer;
}

.image-wrap img,
.image-wrap video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-wrap:hover img,
.image-wrap:hover video { transform: scale(1.05); }

.img-placeholder {
  position: absolute;
  inset: 0;
  display: none;
  align-items: center;
  justify-content: center;
  color: var(--color-muted);
  background: var(--color-surface);
}

.image-wrap.error .img-placeholder { display: flex; }
.image-wrap.error img,
.image-wrap.error video { display: none; }

figcaption {
  font-size: 0.8rem;
  color: var(--color-muted);
  margin-top: 0.5rem;
  text-align: center;
  font-style: italic;
}

@media (max-width: 640px) {
  .cols-2, .cols-3 { grid-template-columns: 1fr; }
}
</style>

<style>
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 2rem;
  backdrop-filter: blur(5px);
}

.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
}

.lightbox-content img,
.lightbox-content video {
  max-width: 100%;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.close-btn {
  position: absolute;
  top: -40px;
  right: -40px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.close-btn:hover {
  opacity: 1;
}

.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .close-btn {
    top: -40px;
    right: 0;
  }
}
</style>
