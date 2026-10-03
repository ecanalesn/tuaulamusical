<template>
  <div class="page-content">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Piano</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="piano-content-sections">
          <section class="piano-detail-section">
            <div class="content-grid">
              <div class="text-content">
                <h2>Clases de piano para adolescentes y adultos</h2>
                <p>
                  En estas clases individuales de una hora a la semana puedes aprender a tocar el piano desde cero o perfeccionar tu técnica si ya tienes nivel. Avanzamos a tu ritmo y según tus objetivos.
                </p>

                <h3>Si partes de cero o tu nivel es inicial, trabajaremos:</h3>
                <ul>
                  <li>Adquirir los conocimientos básicos del lenguaje musical.</li>
                  <li>Leer las notas en clave de sol y fa mientras mantienes el ritmo.</li>
                  <li>Desarrollar agilidad en los dedos a través de la práctica de escalas.</li>
                  <li>Interpretar piezas musicales aplicando los conocimientos adquiridos.</li>
                  <li>Mantener una postura correcta tanto de cuerpo como de manos.</li>
                </ul>

                <h3>Si ya tienes un nivel avanzado, trabajaremos:</h3>
                <ul>
                  <li>Consolidar y perfeccionar las nociones prácticas y teóricas.</li>
                  <li>Usar el pedal correctamente.</li>
                  <li>Aumentar la velocidad y fluidez en la interpretación.</li>
                  <li>Aprender piezas más complejas.</li>
                </ul>

                <h3>Lenguaje Musical</h3>
                <p>Las clases de piano incluyen también Lenguaje Musical, desde las nociones básicas hasta estos contenidos:</p>
                <ul class="piano-language-topics">
                  <li><strong>Lectura y escritura:</strong> pentagrama, claves, líneas adicionales, notas y cifrado americano.</li>
                  <li><strong>Teclado y tonalidad:</strong> notas, alteraciones, tonos y semitonos, modos mayor y menor.</li>
                  <li><strong>Ritmo y compás:</strong> figuras, silencios, compases y patrones rítmicos.</li>
                  <li><strong>Interpretación:</strong> tempo, dinámica, carácter, articulación y signos de repetición.</li>
                </ul>
              </div>
            </div>
          </section>

          <section class="piano-detail-section piano-initiation-section">
            <div class="content-grid">
              <div class="text-content">
                <h2>Clases de piano para niños y niñas (de 7 a 12 años)</h2>
                <p>
                  Clases individuales de una hora a la semana en las que aprenden a tocar el piano de forma progresiva, adaptadas a su edad y a su ritmo.
                </p>

                <h3>Qué trabajan en las clases</h3>
                <ul>
                  <li>Tocar piezas sencillas con ambas manos.</li>
                  <li>Leer partituras en clave de sol y fa.</li>
                  <li>Ritmo y coordinación, también con instrumentos de percusión Orff.</li>
                  <li>Fundamentos del lenguaje musical, con ejercicios de lectura y escritura.</li>
                  <li>Repaso de lo aprendido con actividades prácticas e interactivas.</li>
                </ul>

                <p>
                  A partir de los 8 años también pueden preparar las pruebas de acceso a las Enseñanzas Básicas del Conservatorio, en cualquier especialidad instrumental. <router-link to="/pruebas-acceso-conservatorio-profesional" class="inline-link">Consulta la preparación de las pruebas de acceso</router-link>.
                </p>
              </div>
            </div>
          </section>
        </div>

        <ClassPricing :plans="['Piano']" />

        <div class="info-circles">
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Edad</span>
            </div>
            <h4>Niños/as, adolescentes y adultos</h4>
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
  name: 'Piano',
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
      'Clases de Piano en Córdoba | Tu Aula Musical',
      'Clases individuales de piano en Córdoba para niños/as, adolescentes y adultos, desde nivel inicial hasta avanzado. Piano y Lenguaje Musical, una hora semanal.'
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
