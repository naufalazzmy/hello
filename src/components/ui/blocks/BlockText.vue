<template>
  <p class="block-text">{{ block.value }}</p>
</template>

<script setup>
defineProps({ block: Object })
</script>

<style scoped>
.block-text {
  font-size: 1.05rem;
  line-height: 1.85;
  color: var(--color-muted);
  margin: 1.25rem 0;
}
</style>
