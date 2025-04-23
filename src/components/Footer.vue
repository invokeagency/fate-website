<script>
export default {
  name: 'Footer'
}
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="legal-links">
          <router-link to="/privacy">Privacy Policy</router-link>
          <span class="separator">•</span>
          <router-link to="/license">License Agreement</router-link>
        </div>
        <span class="separator">|</span>
        <p class="copyright">© {{ new Date().getFullYear() }} MintMarketingLLC. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 1rem 0;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.legal-links a {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color 0.2s;
  font-size: 0.9rem;
}

.legal-links a:hover {
  color: #00c6ff;
}

.separator {
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.8rem;
}

.copyright {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  margin: 0;
}

@media (max-width: 768px) {
  .footer {
    padding: 0.75rem 0;
  }

  .container {
    padding: 0 1rem;
  }

  .footer-content {
    gap: 0.8rem;
  }

  .legal-links a {
    font-size: 0.85rem;
  }
}
</style> 