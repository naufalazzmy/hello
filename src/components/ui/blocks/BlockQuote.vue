<template>
  <blockquote class="block-quote">
    <span class="quote-mark">"</span>
    <p class="quote-text">{{ block.value }}</p>
    <cite v-if="block.author" class="quote-author">— {{ block.author }}</cite>
  </blockquote>
</template>

<script setup>
defineProps({ block: Object })
</script>

<style scoped>
.block-quote {
  position: relative;
  margin: 3rem 0;
  padding: 2rem 2rem 2rem 3rem;
  background: var(--color-primary-light);
  border-radius: var(--radius-lg);
  border-left: 4px solid var(--color-primary);
}

.quote-mark {
  position: absolute;
  top: 1rem;
  left: 1.25rem;
  font-family: var(--font-display);
  font-size: 4rem;
  line-height: 1;
  color: var(--color-primary);
  opacity: 0.4;
  font-weight: 800;
}

.quote-text {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 600;
  line-height: 1.6;
  color: var(--color-text);
  font-style: italic;
  position: relative;
  z-index: 1;
}

.quote-author {
  display: block;
  margin-top: 0.75rem;
  font-size: 0.85rem;
  color: var(--color-muted);
  font-style: normal;
  font-weight: 500;
}
</style>
