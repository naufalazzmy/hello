<template>
  <footer class="app-footer">
    <div class="container footer-inner">
      <div class="footer-left">
        <a href="#hero" class="footer-logo">
          <span class="logo-mark">N</span>
          <span>Naufal Azzmi</span>
        </a>
        <p class="text-sm" style="color: var(--color-muted);">
          Software Engineer · Builder · Explorer
        </p>
      </div>
      <div class="footer-right">
        <p class="text-sm" style="color: var(--color-muted);">
          © {{ new Date().getFullYear() }} Naufal Azzmi
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--color-border);
  background: var(--color-surface);
  padding: 2.5rem 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1rem;
}

.logo-mark {
  width: 28px;
  height: 28px;
  background: var(--color-primary);
  color: white;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  font-weight: 800;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
}

@media (max-width: 600px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-right {
    align-items: flex-start;
  }
}
</style>
