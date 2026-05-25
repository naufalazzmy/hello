<template>
  <figure class="my-10">
    <div class="rounded-lg overflow-hidden bg-surface relative min-h-[280px] group">
      <img
        :src="resolvedSrc"
        :alt="block.caption || 'Project image'"
        loading="lazy"
        @error="onError"
        class="w-full h-auto block transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
        ref="imgEl"
      />
      <!-- Placeholder shown when no image or load fails -->
      <div class="absolute inset-0 flex flex-col items-center justify-center gap-3 text-muted bg-surface min-h-[280px]" v-if="showPlaceholder">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        <span class="text-[0.85rem] font-medium">Image coming soon</span>
      </div>
    </div>
    <figcaption v-if="block.caption" class="text-center text-[0.825rem] text-muted mt-3 italic">{{ block.caption }}</figcaption>
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
