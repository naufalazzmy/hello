<template>
  <section id="about" class="py-[80px] md:py-[120px]">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <!-- Left: Bio -->
        <div class="flex flex-col">
          <span class="inline-flex items-center gap-2 font-display text-xs font-bold tracking-[0.12em] uppercase text-primary mb-6 reveal before:content-[''] before:block before:w-6 before:h-[2px] before:bg-primary before:rounded-[2px]" ref="labelEl">About Me</span>
          <h2 class="text-h1 reveal reveal-delay-1">
            Engineer at heart,<br />
            <span class="text-primary">builder by nature.</span>
          </h2>
          <p class="text-body text-muted mt-6 max-w-[480px] leading-[1.8] reveal reveal-delay-2">
            {{ yearsOfExperience }}+ years experienced Software engineer who loves building things that are
            both functional and delightful. Whether it's a web app, an AI pipeline,
            or a game mechanic — if it's interesting, I'll build it.
          </p>
          <p class="text-body text-muted mt-4 max-w-[480px] leading-[1.8] reveal reveal-delay-3">
            Currently exploring the intersection of AI and creative software.
            When I'm not coding, I'm behind a camera or planning the next trip.
          </p>

          <!-- Quick Stats -->
          <div class="flex items-center gap-4 sm:gap-8 mt-10 p-4 sm:p-6 px-4 sm:px-8 bg-surface rounded-lg reveal reveal-delay-3">
            <div class="flex flex-col items-center">
              <span class="font-display text-3xl sm:text-4xl font-extrabold text-primary leading-none">{{ projectsCount }}+</span>
              <span class="text-[0.7rem] sm:text-xs text-muted font-medium mt-1 whitespace-nowrap">Projects Shipped</span>
            </div>
            <div class="w-[1px] h-10 bg-border" />
            <div class="flex flex-col items-center">
              <span class="font-display text-3xl sm:text-4xl font-extrabold text-primary leading-none">3</span>
              <span class="text-[0.7rem] sm:text-xs text-muted font-medium mt-1 whitespace-nowrap">Domains</span>
            </div>
            <div class="w-[1px] h-10 bg-border" />
            <div class="flex flex-col items-center">
              <span class="font-display text-3xl sm:text-4xl font-extrabold text-primary leading-none">∞</span>
              <span class="text-[0.7rem] sm:text-xs text-muted font-medium mt-1 whitespace-nowrap">Cups of Coffee</span>
            </div>
          </div>
        </div>

        <!-- Right: Tech Stack -->
        <div class="flex flex-col">
          <span class="inline-flex items-center gap-2 font-display text-xs font-bold tracking-[0.12em] uppercase text-primary mb-6 reveal before:content-[''] before:block before:w-6 before:h-[2px] before:bg-primary before:rounded-[2px]">Tech Stack</span>
          <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-4 mt-2 reveal reveal-delay-1">
            <div v-for="tech in techStack" :key="tech.name" class="group flex flex-col items-center gap-2 p-4 bg-white rounded-md border border-border transition-default relative overflow-hidden hover:border-primary hover:-translate-y-1 hover:shadow-md" :title="tech.name">
              <div class="absolute inset-0 bg-primary-light opacity-0 transition-default group-hover:opacity-100" />
              <div class="w-10 h-10 flex items-center justify-center relative z-10">
                <img :src="tech.icon" :alt="tech.name" loading="lazy" @error="onIconError($event)" class="w-8 h-8 object-contain" />
              </div>
              <span class="relative z-10 text-muted text-center text-[0.65rem] tracking-[0.04em] font-semibold uppercase">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { techStack } from '../../data/techStack.js'
import { projects } from '../../data/projects.js'

const yearsOfExperience = computed(() => new Date().getFullYear() - 2021)
const projectsCount = projects.length

const onIconError = (e) => {
  e.target.style.display = 'none'
}

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('#about .reveal').forEach(el => io.observe(el))
})
</script>
