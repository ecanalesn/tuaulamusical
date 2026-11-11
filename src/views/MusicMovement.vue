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
              En esta clase individual de una hora a la semana, tu hijo o hija aprende a tocar el piano jugando, de forma divertida y progresiva.
              Está pensada para niños y niñas de 6 a 12 años, y adapto el enfoque a cada edad para que el aprendizaje sea ameno desde el primer día.
            </p>

            <p>
              Además, si tu hijo o hija quiere presentarse a la prueba de acceso a las Enseñanzas Básicas del Conservatorio (a partir de los 7 años, en cualquier instrumento), también puedo ayudarle a prepararla. Tienes más información <router-link to="/pruebas-conservatorio" class="inline-link">aquí</router-link>.
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

        <ClassPricing :plans="['Moderato']" />

        <div class="info-circles">
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Edad</span>
            </div>
            <h4>De 6 a 12 años</h4>
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
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Bono regalo</span>
            </div>
            <h4>Regala clases de música</h4>
            <p>Tarjeta personalizada en 24h</p>
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
                <router-link to="/contacto" class="btn-enroll">contactar</router-link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import ClassPricing from '@/components/ClassPricing.vue'
import { setPageMeta } from '@/utils/seo'

export default {
  name: 'MusicMovement',
  components: {
    ClassPricing
  },
  data() {
    return {
      enrollmentYear: this.getEnrollmentYear()
    }
  },
  created() {
    setPageMeta(
      'Clases de Música y Movimiento para Niños en Córdoba | Tu Aula Musical',
      'Clases individuales de música y movimiento para niños de 6 a 12 años en Córdoba, con piano e instrumentos de percusión Orff. Aprendizaje progresivo a través del juego.'
    )
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
