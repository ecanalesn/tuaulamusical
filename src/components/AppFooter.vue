<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Sección Contacto -->
        <div class="footer-section">
          <h3>Contacto</h3>
          <div class="contact-info">
            <p><i class="fas fa-phone"></i> <a href="tel:+34616471534" @click="trackPhoneClick">616 47 15 34</a></p>
            <p><i class="fas fa-map-marker-alt"></i> Plaza de Andalucía, 7, Córdoba</p>
          </div>
        </div>

        <!-- Sección Horario -->
        <div class="footer-section">
          <h3>Horario</h3>
          <div class="schedule-info">
            <p>De lunes a jueves</p>
            <p><i class="fas fa-clock"></i> 16:30 a 20:30</p>
          </div>
        </div>

      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Tu Aula Musical. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { track } from '@/utils/track'

export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    trackPhoneClick() {
      track('phone_click', { origin: this.$route?.name || this.$route?.path || 'unknown' })
    }
  }
}
</script>

<style scoped>
/* Footer */
.footer {
  background: #133a44;
  color: #fff;
  padding: 20px 0 20px;
  margin-top: 30px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  max-width: 800px;
  margin: 0 auto 30px;
}

.footer-section h3,
.footer-section h4 {
  color: var(--accent-terracotta-light);
  margin-bottom: 20px;
  font-family: 'Playfair Display', Georgia, serif;
  text-align: left;
}

.footer-section h3 {
  font-size: 24px;
  font-weight: 400;
}

.footer-section h4 {
  font-size: 18px;
  font-weight: 400;
}

.footer-section p {
  line-height: 1.6;
  color: #c8d9dd;
  font-family: 'Lora', Georgia, serif;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #c8d9dd;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--accent-terracotta-light);
}

.contact-info p {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.contact-info a {
  color: inherit;
  text-decoration: none;
}

.contact-info a:hover {
  color: var(--accent-terracotta-light);
  text-decoration: underline;
}

.contact-info i {
  margin-right: 10px;
  color: var(--accent-terracotta-light);
  width: 20px;
}

.schedule-info p {
  color: #c8d9dd;
  margin-bottom: 5px;
  text-align: left;
}

.footer-bottom {
  text-align: center;
}

.footer-bottom p {
  color: #c8d9dd;
  margin: 0;
}



@media screen and (max-width: 768px) {
  .footer {
    padding: 30px 0 20px;
  }
  
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
  }
  
  .container {
    padding: 0 15px;
  }
}
</style>
