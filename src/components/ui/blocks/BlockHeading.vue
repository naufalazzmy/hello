<template>
  <h3 class="block-heading">{{ block.value }}</h3>
</template>

<script setup>
defineProps({ block: Object })
</script>

<style scoped>
.block-heading {
  font-family: var(--font-display);
  font-size: clamp(1.25rem, 2.5vw, 1.75rem);
  font-weight: 700;
  color: var(--color-text);
  margin: 3rem 0 1rem;
  letter-spacing: -0.02em;
}

.block-heading::before {
  content: '—';
  color: var(--color-primary);
  margin-right: 0.5rem;
  font-weight: 800;
}
</style>
