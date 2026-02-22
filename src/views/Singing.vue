<template>
  <div class="page-content">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Canto</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Clases de Canto</h2>
            <p>
              En esta clase, de una hora semanal, te ayudaré a mejorar como cantante y a cuidar adecuadamente tu voz utilizando técnicas que podrás aplicar al estilo musical que prefieras (pop, baladas, comercial, bachata, rumbas, entre otros). Está dirigida a personas de todas las edades, desde nivel iniciación hasta avanzado.
            </p>
            
            <h3>Los objetivos que trabajaremos son:</h3>
            <ul>
              <li>Conocer las pautas de higiene vocal y cómo aplicarlas en tu día a día.</li>
              <li>Controlar la respiración diafragmática para mejorar tu técnica vocal.</li>
              <li>Cuidar la postura corporal para evitar tensiones innecesarias.</li>
              <li>Entrenar tu voz con ejercicios diseñados para ampliar tu rango vocal y mejorar su colocación.</li>
              <li>Cantar las canciones que elijas, aplicando los conocimientos adquiridos.</li>
            </ul>
          </div>
        </div>

        <div class="info-circles">
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Edad</span>
            </div>
            <h4>Desde 8 años hasta adultos</h4>
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
  name: 'Singing',
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