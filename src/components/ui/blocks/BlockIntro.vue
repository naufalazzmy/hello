<template>
  <p class="block-intro">{{ block.value }}</p>
</template>

<script setup>
defineProps({ block: Object })
</script>

<style scoped>
.block-intro {
  font-size: clamp(1.1rem, 2vw, 1.25rem);
  line-height: 1.8;
  color: var(--color-text);
  font-weight: 400;
  border-left: 3px solid var(--color-primary);
  padding-left: 1.5rem;
  margin: 2rem 0;
}
</style>
