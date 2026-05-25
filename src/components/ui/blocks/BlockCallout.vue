<template>
  <div class="my-8 py-5 px-6 bg-surface rounded-md border border-border flex flex-col gap-2 transition-default hover:border-primary hover:bg-primary-light">
    <span class="font-display text-[0.8rem] font-bold tracking-[0.04em] text-text">{{ block.label }}</span>
    <p class="text-[0.975rem] leading-[1.7] text-muted">{{ block.value }}</p>
  </div>
</template>

<script setup>
defineProps({ block: Object })
</script>
