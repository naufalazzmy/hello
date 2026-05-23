<template>
  <div class="content-renderer">
    <template v-for="(block, i) in content" :key="i">
      <BlockIntro    v-if="block.type === 'intro'"    :block="block" />
      <BlockHeading  v-else-if="block.type === 'heading'"  :block="block" />
      <BlockText     v-else-if="block.type === 'text'"     :block="block" />
      <BlockImage    v-else-if="block.type === 'image'"    :block="block" />
      <BlockImages   v-else-if="block.type === 'images'"   :block="block" />
      <BlockQuote    v-else-if="block.type === 'quote'"    :block="block" />
      <BlockCallout  v-else-if="block.type === 'callout'"  :block="block" />
      <BlockCode     v-else-if="block.type === 'code'"     :block="block" />
      <BlockDivider  v-else-if="block.type === 'divider'"  :block="block" />
    </template>

    <!-- Empty state -->
    <div v-if="!content || content.length === 0" class="empty-content">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      <p>Project write-up coming soon.</p>
    </div>
  </div>
</template>

<script setup>
import BlockIntro   from './blocks/BlockIntro.vue'
import BlockHeading from './blocks/BlockHeading.vue'
import BlockText    from './blocks/BlockText.vue'
import BlockImage   from './blocks/BlockImage.vue'
import BlockImages  from './blocks/BlockImages.vue'
import BlockQuote   from './blocks/BlockQuote.vue'
import BlockCallout from './blocks/BlockCallout.vue'
import BlockCode    from './blocks/BlockCode.vue'
import BlockDivider from './blocks/BlockDivider.vue'

defineProps({
  content: { type: Array, default: () => [] }
})
</script>

<style scoped>
.content-renderer {
  max-width: 740px;
}

.empty-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 2rem;
  color: var(--color-muted);
  text-align: center;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px dashed var(--color-border);
}

.empty-content p {
  font-size: 0.95rem;
  font-weight: 500;
}
</style>
