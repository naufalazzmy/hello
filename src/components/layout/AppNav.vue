<template>
  <nav class="nav" :class="{ scrolled: isScrolled }">
    <div class="container nav-inner">
      <!-- Logo -->
      <a href="#" @click.prevent="goHome" class="nav-logo">
        <span class="logo-mark">N</span>
        <span class="logo-text">Naufal</span>
      </a>

      <!-- Back link on project pages -->
      <button v-if="isProjectPage" @click="goBack" class="back-nav-btn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
        Back to Projects
      </button>

      <!-- Desktop Links (hidden on project pages) -->
      <ul class="nav-links" v-if="!isProjectPage">
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" class="nav-link" :class="{ active: activeSection === link.section }">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- CTA -->
      <a v-if="!isProjectPage" href="mailto:naufalazzmi@gmail.com" class="btn btn-primary nav-cta">
        Say Hello ✦
      </a>

      <!-- Mobile Hamburger (hidden on project pages) -->
      <button v-if="!isProjectPage" class="hamburger" @click="mobileOpen = !mobileOpen" :class="{ open: mobileOpen }" aria-label="Toggle menu">
        <span /><span /><span />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ open: mobileOpen }">
      <ul>
        <li v-for="link in links" :key="link.href">
          <a :href="link.href" @click="mobileOpen = false" class="mobile-link">{{ link.label }}</a>
        </li>
      </ul>
      <a href="mailto:naufalazzmi@gmail.com" class="btn btn-primary" style="margin-top: 1rem;">Say Hello ✦</a>
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
const goBack = () => router.push('/')

const links = [
  { href: '#about', label: 'About', section: 'about' },
  { href: '#projects', label: 'Projects', section: 'projects' },
  { href: '#hobbies', label: 'Fun', section: 'hobbies' },
  { href: '#contact', label: 'Contact', section: 'contact' },
]

const onScroll = () => {
  isScrolled.value = window.scrollY > 40
  if (isProjectPage.value) return

  const sections = ['hero', 'about', 'projects', 'hobbies', 'contact']
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

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: var(--transition);
  padding: 1.25rem 0;
}

.nav.scrolled {
  background: rgba(250, 250, 248, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--color-border);
  padding: 0.85rem 0;
  box-shadow: var(--shadow-sm);
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  transition: var(--transition);
}

.logo-mark {
  width: 34px;
  height: 34px;
  background: var(--color-primary);
  color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 800;
  transition: var(--transition);
}

.nav-logo:hover .logo-mark {
  transform: rotate(-8deg) scale(1.1);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin-left: auto;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--color-muted);
  transition: var(--transition);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--color-primary);
  border-radius: 2px;
  transform: scaleX(0);
  transition: var(--transition);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-text);
}

.nav-link.active::after {
  transform: scaleX(1);
}

.back-nav-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-muted);
  background: none;
  border: none;
  padding: 8px 0;
  transition: var(--transition);
  font-family: var(--font-body);
  margin-left: 0.5rem;
}

.back-nav-btn:hover {
  color: var(--color-primary);
}

.nav-cta {
  padding: 10px 22px;
  font-size: 0.85rem;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 4px;
  margin-left: auto;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--color-text);
  border-radius: 2px;
  transition: var(--transition);
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile Menu */
.mobile-menu {
  display: none;
  flex-direction: column;
  padding: 1.5rem 2rem;
  background: rgba(250, 250, 248, 0.97);
  backdrop-filter: blur(16px);
  border-top: 1px solid var(--color-border);
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}

.mobile-menu.open {
  max-height: 400px;
}

.mobile-link {
  display: block;
  padding: 0.75rem 0;
  font-size: 1.1rem;
  font-weight: 600;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text);
}

@media (max-width: 768px) {
  .nav-links, .nav-cta { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: flex; }
}
</style>
