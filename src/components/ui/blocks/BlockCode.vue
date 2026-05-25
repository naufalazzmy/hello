<template>
  <div class="my-8 rounded-lg overflow-hidden border border-border">
    <div class="flex items-center gap-4 py-3 px-5 bg-[#1e1e2e] border-b border-white/5">
      <div class="flex gap-1.5">
        <span class="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span class="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span class="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      <span class="text-[0.75rem] font-semibold text-white/40 uppercase tracking-[0.08em] font-body">{{ block.lang || 'code' }}</span>
    </div>
    <pre class="m-0 p-6 bg-[#1e1e2e] overflow-x-auto font-mono text-[0.9rem] leading-[1.7] text-[#cdd6f4]"><code>{{ block.value }}</code></pre>
  </div>
</template>

<script setup>
defineProps({ block: Object })
</script>
