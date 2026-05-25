<template>
  <nav class="fixed top-0 left-0 right-0 z-[100] transition-default py-3"
    :class="{ 'bg-bg/85 backdrop-blur-md border-b border-border py-2.5 shadow-sm': isScrolled }">
    <div class="container flex items-center justify-end gap-6">

      <!-- Back link on project pages -->
      <button v-if="isProjectPage" @click="goBack"
        class="mr-auto inline-flex items-center gap-2 text-[0.875rem] font-semibold text-muted bg-none border-none py-1.5 transition-default font-body hover:text-primary">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
        Back to Projects
      </button>

      <!-- Desktop Links (hidden on project pages) -->
      <ul class="hidden md:flex list-none gap-6" v-if="!isProjectPage">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href"
            class="text-[0.9rem] font-medium text-muted transition-default relative pb-1 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[2px] after:bg-primary after:rounded-[2px] after:scale-x-0 after:transition-default hover:text-text hover:after:scale-x-100"
            :class="{ '!text-text after:!scale-x-100': activeSection === link.section }">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- CTA -->
      <a v-if="!isProjectPage" href="mailto:naufalazzmi@gmail.com"
        class="btn btn-primary px-[18px] py-[8px] text-[0.8rem] hidden md:inline-flex">
        Say Hello ✦
      </a>

      <!-- Mobile Hamburger (hidden on project pages) -->
      <button v-if="!isProjectPage" class="flex flex-col gap-[5px] p-1 md:hidden group cursor-none"
        @click="mobileOpen = !mobileOpen" aria-label="Toggle menu">
        <span class="block w-6 h-[2px] bg-text rounded-[2px] transition-default origin-center"
          :class="{ 'translate-y-[7px] rotate-45': mobileOpen }" />
        <span class="block w-6 h-[2px] bg-text rounded-[2px] transition-default" :class="{ 'opacity-0': mobileOpen }" />
        <span class="block w-6 h-[2px] bg-text rounded-[2px] transition-default origin-center"
          :class="{ '-translate-y-[7px] -rotate-45': mobileOpen }" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div
      class="md:hidden flex flex-col bg-bg/95 backdrop-blur-md border-t border-border overflow-hidden transition-all duration-400 ease-in-out"
      :class="mobileOpen ? 'max-h-[400px] py-6 px-8' : 'max-h-0 py-0 px-8'">
      <ul class="list-none">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="mobileOpen = false"
            class="block py-3 text-[1.1rem] font-semibold border-b border-border text-text">{{ link.label }}</a>
        </li>
      </ul>
      <a href="mailto:naufalazzmi@gmail.com" class="btn btn-primary mt-4 self-start">Say Hello ✦</a>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isScrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('hero')

const isProjectPage = computed(() => route.name === 'project')

const goHome = () => router.push('/')
const goBack = () => router.push('/#projects')

const links = [
  { href: '#about', label: 'About', section: 'about' },
  { href: '#projects', label: 'Projects', section: 'projects' },
  { href: '#others', label: 'Others', section: 'others' },
  { href: '#contact', label: 'Contact', section: 'contact' },
]

const onScroll = () => {
  isScrolled.value = window.scrollY > 40
  if (isProjectPage.value) return

  const sections = ['hero', 'about', 'projects', 'others', 'contact']
  for (const id of [...sections].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
