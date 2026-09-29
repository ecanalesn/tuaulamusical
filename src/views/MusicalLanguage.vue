<template>
  <div class="page-content">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Refuerzo de Lenguaje Musical</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Clases de refuerzo de Lenguaje Musical (Enseñanzas Básicas y Profesionales)</h2>

            <p>
              En esta clase, de una hora o una hora y media a la semana, trabajaremos la asignatura de 
              <strong>Lenguaje Musical</strong> correspondiente a tu curso de las Enseñanzas Básicas o Profesionales de Música.  
              Sea cual sea tu especialidad instrumental, reforzaremos las áreas en las que necesites mayor apoyo, 
              utilizando los libros oficiales del Conservatorio, material complementario y recursos de refuerzo 
              que te proporcionaré para que puedas ponerte al día en el menor tiempo posible.
            </p>

            <p>
              Cada sesión es <strong>totalmente personalizada</strong> según tus necesidades,
              enfocándonos en lo que más te cueste: teoría musical, dictado, ritmo o entonación.
            </p>

            <p>
              La metodología combina <strong>explicaciones claras</strong>, ejercicios prácticos, dictados auditivos, 
              lectura rítmica y entonación, con el objetivo de garantizar un 
              <strong>progreso constante y sólido</strong> en todas las áreas del lenguaje musical.
            </p>

            <h4>Los objetivos que trabajaremos son:</h4>
            <ul>
              <li><strong>Teoría Musical:</strong> Explicación de conceptos fundamentales y ejercicios de refuerzo.</li>
              <li><strong>Dictado:</strong> Entrenamiento auditivo progresivo para mejorar el oído musical.</li>
              <li><strong>Ritmo:</strong> Lectura musical y práctica de compases complejos.</li>
              <li><strong>Entonación:</strong> Práctica melódica-rítmica y afinación vocal para una interpretación precisa.</li>
            </ul>

          </div>
        </div>

        <ClassPricing :plans="[{ name: 'Piano + Lenguaje Musical', title: 'Refuerzo de Lenguaje Musical', additionalOption: 'Opción 6 horas: 120€/mes' }]" />

        <div class="info-circles">
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Nivel</span>
            </div>
            <h4>De 1.º de Básicas a 6.º de Profesionales</h4>
            <p>Todos los cursos del Conservatorio</p>
          </div>
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Duración</span>
            </div>
            <h4>Una hora u hora y media/semana</h4>
            <p>Según lo que necesites reforzar</p>
          </div>
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Modalidad</span>
            </div>
            <h4>Clases individuales</h4>
            <p>Atención personalizada</p>
          </div>
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Bono regalo</span>
            </div>
            <h4>Regala clases de música</h4>
            <p>Tarjeta de regalo disponible en 24 horas</p>
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
  name: 'MusicalLanguage',
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
      'Clases de refuerzo de Lenguaje Musical en Córdoba | Tu Aula Musical',
      'Clases de refuerzo de Lenguaje Musical (teoría, dictado, ritmo y entonación) para cualquier curso de Enseñanzas Básicas o Profesionales del Conservatorio en Córdoba, personalizadas según tu especialidad y nivel.'
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