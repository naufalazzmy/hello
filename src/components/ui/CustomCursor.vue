<template>
  <div class="cursor-wrapper">
    <div class="cursor-dot" ref="dot" />
    <div class="cursor-ring" ref="ring" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dot = ref(null)
const ring = ref(null)

let mouseX = 0, mouseY = 0
let ringX = 0, ringY = 0
let animFrame = null

const onMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  dot.value.style.transform = `translate(${mouseX}px, ${mouseY}px)`
}

const onMouseEnterLink = () => ring.value?.classList.add('expanded')
const onMouseLeaveLink = () => ring.value?.classList.remove('expanded')

const animateRing = () => {
  ringX += (mouseX - ringX) * 0.12
  ringY += (mouseY - ringY) * 0.12
  if (ring.value) {
    ring.value.style.transform = `translate(${ringX}px, ${ringY}px)`
  }
  animFrame = requestAnimationFrame(animateRing)
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove)
  animateRing()

  // Expand on interactive elements
  const els = document.querySelectorAll('a, button, [data-cursor-expand]')
  els.forEach(el => {
    el.addEventListener('mouseenter', onMouseEnterLink)
    el.addEventListener('mouseleave', onMouseLeaveLink)
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(animFrame)
})
</script>

<style scoped>
.cursor-wrapper {
  pointer-events: none;
  position: fixed;
  inset: 0;
  z-index: 9999;
}

.cursor-dot {
  position: absolute;
  top: -4px;
  left: -4px;
  width: 8px;
  height: 8px;
  background: var(--color-primary);
  border-radius: 50%;
  will-change: transform;
}

.cursor-ring {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 40px;
  height: 40px;
  border: 1.5px solid var(--color-primary);
  border-radius: 50%;
  opacity: 0.6;
  will-change: transform;
  transition: width 0.3s ease, height 0.3s ease,
              top 0.3s ease, left 0.3s ease, opacity 0.3s ease;
}

.cursor-ring.expanded {
  width: 60px;
  height: 60px;
  top: -30px;
  left: -30px;
  opacity: 1;
  background: var(--color-primary-glow);
}

@media (max-width: 768px) {
  .cursor-wrapper { display: none; }
}
</style>
