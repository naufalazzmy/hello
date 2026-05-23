<template>
  <div class="block-images" :class="`cols-${block.items?.length > 2 ? 3 : 2}`">
    <figure v-for="(item, i) in block.items" :key="i" class="gallery-item">
      <div class="image-wrap">
        <img :src="item.src" :alt="item.caption || 'Gallery image'" loading="lazy" @error="e => e.target.parentElement.classList.add('error')" />
        <div class="img-placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        </div>
      </div>
      <figcaption v-if="item.caption">{{ item.caption }}</figcaption>
    </figure>
  </div>
</template>

<script setup>
defineProps({ block: Object })
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
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.image-wrap:hover img { transform: scale(1.05); }

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
.image-wrap.error img { display: none; }

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
