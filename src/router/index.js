import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProjectPage from '../pages/ProjectPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
  },
  {
    path: '/project/:slug',
    name: 'project',
    component: ProjectPage,
    props: true,
  },
  {
    // Catch-all — redirect unknown routes home
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else if (to.hash) {
          resolve({ el: to.hash, behavior: 'smooth' })
        } else {
          resolve({ top: 0 })
        }
      }, 300) // Wait for page-fade transition
    })
  },
})

export default router
