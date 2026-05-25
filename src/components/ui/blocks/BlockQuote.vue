<template>
  <blockquote class="relative my-12 py-8 pr-8 pl-12 bg-primary-light rounded-lg border-l-4 border-primary">
    <span class="absolute top-4 left-5 font-display text-6xl leading-none text-primary opacity-40 font-extrabold">"</span>
    <p class="font-display text-[1.15rem] font-semibold leading-[1.6] text-text italic relative z-10">{{ block.value }}</p>
    <cite v-if="block.author" class="block mt-3 text-[0.85rem] text-muted not-italic font-medium">— {{ block.author }}</cite>
  </blockquote>
</template>

<script setup>
defineProps({ block: Object })
</script>
