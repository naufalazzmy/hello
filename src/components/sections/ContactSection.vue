<template>
  <section id="contact" class="section-padding contact-section">
    <div class="container">
      <div class="contact-inner">
        <span class="section-label reveal">Get In Touch</span>
        <h2 class="text-h1 reveal reveal-delay-1">
          Let's build something<br />
          <span style="color: var(--color-primary)">great together.</span>
        </h2>
        <p class="text-body reveal reveal-delay-2" style="color: var(--color-muted); max-width: 480px; margin-top: 1.5rem; line-height: 1.8;">
          Whether you have an opportunity, a project idea, or just want to say hello —
          my inbox is always open. I'll try to get back to you quickly.
        </p>

        <!-- Email CTA -->
        <div class="email-cta reveal reveal-delay-3">
          <a href="mailto:naufalazzmi@gmail.com" class="btn btn-primary email-btn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            Say Hello
          </a>
          <button class="btn btn-outline copy-btn" @click="copyEmail" :class="{ copied }">
            <svg v-if="!copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
            <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            {{ copied ? 'Copied!' : 'Copy Email' }}
          </button>
        </div>

        <!-- Social Links -->
        <div class="social-links reveal reveal-delay-4">
          <a href="https://github.com/naufalazzmy" target="_blank" rel="noopener" class="social-link" title="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/naufal-azzmi/" target="_blank" rel="noopener" class="social-link" title="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://instagram.com/naufalazzmy" target="_blank" rel="noopener" class="social-link" title="Instagram">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            <span>Instagram</span>
          </a>
        </div>
      </div>

      <!-- Decorative -->
      <div class="contact-deco" aria-hidden="true">
        <div class="deco-circle deco-1" />
        <div class="deco-circle deco-2" />
        <div class="deco-text">
          <span v-for="n in 3" :key="n">Let's Talk · Build Together · Ship Cool Things · </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const copied = ref(false)

const copyEmail = async () => {
  await navigator.clipboard.writeText('naufalazzmi@gmail.com')
  copied.value = true
  setTimeout(() => { copied.value = false }, 2500)
}

onMounted(() => {
  const io = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed') }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('#contact .reveal').forEach(el => io.observe(el))
})
</script>

<style scoped>
.contact-section {
  background: var(--color-bg);
  position: relative;
  overflow: hidden;
}

.container {
  position: relative;
}

.contact-inner {
  max-width: 600px;
  position: relative;
  z-index: 1;
}

/* Email CTA */
.email-cta {
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.email-btn {
  padding: 16px 32px;
  font-size: 1rem;
}

.copy-btn {
  padding: 16px 24px;
  font-size: 0.9rem;
}

.copy-btn.copied {
  background: var(--color-primary-light);
  border-color: var(--color-primary);
  color: var(--color-primary);
}

/* Social Links */
.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2.5rem;
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: var(--radius-full);
  border: 1.5px solid var(--color-border);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--color-muted);
  background: var(--color-white);
  transition: var(--transition);
}

.social-link:hover {
  color: var(--color-primary);
  border-color: var(--color-primary);
  background: var(--color-primary-light);
  transform: translateY(-2px);
}

/* Decorative */
.contact-deco {
  position: absolute;
  right: -80px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.deco-circle {
  position: absolute;
  border-radius: 50%;
  border: 1.5px solid var(--color-border);
}

.deco-1 {
  width: 400px;
  height: 400px;
  right: 0;
  top: -200px;
}

.deco-2 {
  width: 260px;
  height: 260px;
  right: 70px;
  top: -130px;
  background: radial-gradient(circle, var(--color-primary-light) 0%, transparent 70%);
  border: none;
}

.deco-text {
  position: absolute;
  right: 180px;
  top: -8px;
  font-family: var(--font-display);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  white-space: nowrap;
  opacity: 0.4;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  animation: scrollText 12s linear infinite;
}

@keyframes scrollText {
  from { transform: translateY(-100%); }
  to { transform: translateY(100%); }
}

@media (max-width: 900px) {
  .contact-deco { display: none; }
}
</style>
