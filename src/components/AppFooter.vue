<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Sección Contacto -->
        <div class="footer-section">
          <h3>Contacto</h3>
          <div class="contact-info">
            <p><i class="fas fa-phone"></i> 616 47 15 34</p>
            <p><i class="fas fa-map-marker-alt"></i> Plaza de Andalucía 7, Córdoba</p>
          </div>
        </div>

        <!-- Sección Horario -->
        <div class="footer-section">
          <h3>Horario</h3>
          <div class="schedule-info">
            <p>Lunes a Jueves</p>
            <p><i class="fas fa-clock"></i> 16:00 a 20:00</p>
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
export default {
  name: 'AppFooter',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
/* Footer */
.footer {
  background: #333;
  color: #fff;
  padding: 20px 0 20px;
  margin-top: 100px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;
  justify-items: center;
}

.footer-section h3,
.footer-section h4 {
  color: var(--primary-turquoise);
  margin-bottom: 20px;
  font-family: 'Righteous', cursive;
  text-align: center;
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
  color: #ccc;
  font-family: 'Work Sans', sans-serif;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--primary-turquoise);
}

.contact-info p {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}

.contact-info i {
  margin-right: 10px;
  color: var(--primary-turquoise);
  width: 20px;
}

.schedule-info p {
  color: #ccc;
  margin-bottom: 5px;
  text-align: center;
}

.footer-bottom {
  text-align: center;
}

.footer-bottom p {
  color: #ccc;
  margin: 0;
}



@media screen and (max-width: 768px) {
  .footer {
    padding: 30px 0 20px;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .container {
    padding: 0 15px;
  }
}
</style>
