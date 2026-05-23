<template>
  <div class="block-callout">
    <span class="callout-label">{{ block.label }}</span>
    <p class="callout-value">{{ block.value }}</p>
  </div>
</template>

<script setup>
defineProps({ block: Object })
</script>

<style scoped>
.block-callout {
  margin: 2rem 0;
  padding: 1.25rem 1.5rem;
  background: var(--color-surface);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: var(--transition);
}

.block-callout:hover {
  border-color: var(--color-primary);
  background: var(--color-primary-light);
}

.callout-label {
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--color-text);
}

.callout-value {
  font-size: 0.975rem;
  line-height: 1.7;
  color: var(--color-muted);
}
</style>
