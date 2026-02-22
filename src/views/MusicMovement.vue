<template>
  <div class="page-content">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Música y Movimiento</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Clases de Música y Movimiento</h2>
            <p>
              En esta clase de una hora semanal, tu hijo/a aprenderá a tocar el piano de manera divertida a través de juegos. 
              Dirigido a niños/as de 4 a 12 años, el enfoque se adapta a cada grupo de edad para asegurar un aprendizaje progresivo y ameno.
            </p>
            
            <p>
              Además, imparto clases de preparación para la prueba de acceso a las Enseñanzas Básicas del Conservatorio para cualquier instrumento (a partir de los 7 años). Puedes obtener más información <router-link to="/pruebas-conservatorio" class="inline-link">aquí</router-link>.
            </p>

            <h3>Los objetivos de las clases son:</h3>
            <ul>
              <li>Tocar canciones sencillas en el piano con ambas manos.</li>
              <li>Aprender a leer partituras en clave de sol y fa.</li>
              <li>Desarrollar la coordinación y mantener el ritmo utilizando instrumentos de percusión Orff (xilófono, claves y maracas).</li>
              <li>Conocer los aspectos básicos del lenguaje musical a través de fichas de lectoescritura.</li>
              <li>Reforzar los conocimientos adquiridos a través de juegos interactivos y dinámicos.</li>
            </ul>
          </div>
        </div>

        <div class="info-circles">
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Edad</span>
            </div>
            <h4>De 4 a 12 años</h4>
            <p>Clases adaptadas a cada edad</p>
          </div>
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Duración</span>
            </div>
            <h4>Una hora/semana</h4>
            <p>Tiempo óptimo para el aprendizaje</p>
          </div>
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Modalidad</span>
            </div>
            <h4>Clases individuales o para dos si vienes con tu amigo/a</h4>
            <p>Atención personalizada</p>
          </div>
        </div>

        <!-- Banner Matrícula -->
        <section class="enrollment-banner wow fadeInUp">
          <div class="container">
            <div class="banner-content">
              <div class="banner-text">
                <h3>Abierto el plazo de matrícula curso {{ enrollmentYear }}</h3>
              </div>
              <div class="banner-button">
                <router-link to="/matricula" class="btn-enroll">matricular</router-link>
              </div>
            </div>
          </div>
        </section>

        <!-- 3 Formatos Section -->
        <section class="formats-section">
          <div class="container">
            <div class="section-heading text-center">
              <h2>3 formatos</h2>
            </div>
            <div class="formats-grid">
              <div class="format-card">
                <h3>Clases individuales</h3>
                <p>Una clase individual a la semana presencial u online</p>
              </div>
              <div class="format-card">
                <h3>Clases compartidas</h3>
                <p>Una hora y media a la semana<br>Ven con tu compañero/a</p>
              </div>
              <div class="format-card">
                <h3>Bonos regalo</h3>
                <p>Regala clases de piano o canto<br>Tarjeta personalizada en 24h</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'MusicMovement',
  data() {
    return {
      enrollmentYear: this.getEnrollmentYear()
    }
  },
  methods: {
    getEnrollmentYear() {
      const now = new Date()
      const currentYear = now.getFullYear()
      const currentMonth = now.getMonth() + 1 // getMonth() returns 0-11
      
      // Si estamos antes del 1 de julio, mostramos el curso actual
      // Si estamos después del 1 de julio, mostramos el curso siguiente
      if (currentMonth < 7) {
        // Antes de julio: curso actual (ej: enero 2026 -> curso 2025/2026)
        return `${currentYear - 1}/${currentYear}`
      } else {
        // Después de julio: curso siguiente (ej: julio 2026 -> curso 2026/2027)
        return `${currentYear}/${currentYear + 1}`
      }
    }
  }
}
</script>

<style>
@import '../assets/css/classes.css';
</style>
