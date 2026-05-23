<template>
  <div class="block-code">
    <div class="code-header">
      <div class="code-dots">
        <span /><span /><span />
      </div>
      <span class="code-lang">{{ block.lang || 'code' }}</span>
    </div>
    <pre class="code-body"><code>{{ block.value }}</code></pre>
  </div>
</template>

<script setup>
defineProps({ block: Object })
</script>

<style scoped>
.block-code {
  margin: 2rem 0;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
}

.code-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1.25rem;
  background: #1e1e2e;
  border-bottom: 1px solid rgba(255,255,255,0.05);
}

.code-dots {
  display: flex;
  gap: 6px;
}

.code-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.code-dots span:nth-child(1) { background: #ff5f57; }
.code-dots span:nth-child(2) { background: #febc2e; }
.code-dots span:nth-child(3) { background: #28c840; }

.code-lang {
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(255,255,255,0.4);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-family: var(--font-body);
}

.code-body {
  margin: 0;
  padding: 1.5rem;
  background: #1e1e2e;
  overflow-x: auto;
  font-family: 'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.7;
  color: #cdd6f4;
}

.code-body code {
  font-family: inherit;
}
</style>
