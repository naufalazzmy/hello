<template>
  <div class="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
    <div class="absolute -top-1 -left-1 w-2 h-2 bg-primary rounded-full will-change-transform" ref="dot" />
    <div 
      class="absolute border-[1.5px] border-primary rounded-full will-change-transform ring-transition"
      :class="isExpanded ? '-top-[30px] -left-[30px] w-[60px] h-[60px] opacity-100 bg-primary-glow' : '-top-5 -left-5 w-10 h-10 opacity-60 bg-transparent'"
      ref="ring" 
    />
  </div>
</template>

<style scoped>
.ring-transition {
  transition: width 0.3s ease, height 0.3s ease, top 0.3s ease, left 0.3s ease, opacity 0.3s ease, background-color 0.3s ease;
}
</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dot = ref(null)
const ring = ref(null)
const isExpanded = ref(false)

let mouseX = 0, mouseY = 0
let ringX = 0, ringY = 0
let animFrame = null

const onMouseMove = (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
  if (dot.value) {
    dot.value.style.transform = `translate(${mouseX}px, ${mouseY}px)`
  }
}

const onMouseEnterLink = () => { isExpanded.value = true }
const onMouseLeaveLink = () => { isExpanded.value = false }

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
