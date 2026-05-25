<template>
  <div class="grid gap-4 my-10 sm:grid-cols-2" :class="block.items?.length > 2 ? 'md:grid-cols-3' : ''">
    <figure v-for="(item, i) in block.items" :key="i" class="m-0">
      <div class="rounded-md overflow-hidden bg-surface aspect-[4/3] relative cursor-pointer group" @click="selectedMedia = resolveSrc(item.src)">
        <video v-if="isVideo(item.src)" :src="resolveSrc(item.src)" autoplay muted loop playsinline @error="e => e.target.parentElement.classList.add('error')" class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"></video>
        <img v-else :src="resolveSrc(item.src)" :alt="item.caption || 'Gallery image'" loading="lazy" @error="e => e.target.parentElement.classList.add('error')" class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" />
        
        <div class="absolute inset-0 hidden items-center justify-center text-muted bg-surface group-[.error]:flex">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
      </div>
      <figcaption v-if="item.caption" class="text-[0.8rem] text-muted mt-2 text-center italic">{{ item.caption }}</figcaption>
    </figure>

    <Teleport to="body">
      <Transition name="lightbox-fade">
        <div v-if="selectedMedia" class="fixed inset-0 bg-black/85 flex items-center justify-center z-[9999] p-8 backdrop-blur-sm" @click="selectedMedia = null">
          <div class="relative max-w-[90vw] max-h-[90vh]">
            <video v-if="isVideo(selectedMedia)" :src="selectedMedia" autoplay muted loop playsinline class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)]"></video>
            <img v-else :src="selectedMedia" alt="Enlarged view" class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.3)]" />
            <button class="absolute md:-top-10 md:-right-10 -top-10 right-0 bg-transparent border-none text-white cursor-pointer p-2 flex items-center justify-center opacity-70 transition-opacity duration-200 hover:opacity-100" @click.stop="selectedMedia = null">
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

<style>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}
.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}

.group.error img,
.group.error video {
  display: none !important;
}
</style>
