<template>
  <p class="text-[1.05rem] leading-[1.85] text-muted my-5">{{ block.value }}</p>
</template>

<script setup>
defineProps({ block: Object })
</script>
