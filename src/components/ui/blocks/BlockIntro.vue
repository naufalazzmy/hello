<template>
  <p class="text-[clamp(1.1rem,2vw,1.25rem)] leading-[1.8] text-text font-normal border-l-[3px] border-primary pl-6 my-8">{{ block.value }}</p>
</template>

<script setup>
defineProps({ block: Object })
</script>
