<template>
  <h3 class="font-display text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold text-text mt-12 mb-4 tracking-[-0.02em] before:content-['—'] before:text-primary before:mr-2 before:font-extrabold">{{ block.value }}</h3>
</template>

<script setup>
defineProps({ block: Object })
</script>
