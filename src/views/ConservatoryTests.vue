<template>
  <div class="page-content">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Pruebas Conservatorio</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Clases de Preparación a Pruebas de Acceso al Conservatorio</h2>
            
            <h3>Enseñanzas Profesionales</h3>
              <p>
              En esta clase, de una hora y media semanal, aprenderás todo lo necesario para presentarte a las pruebas de acceso a las Enseñanzas Profesionales del Conservatorio, eligiendo la especialidad de Piano o Canto.
              </p>

              <p>
              La formación está dirigida a personas de todas las edades (aunque se recomienda especialmente para jóvenes entre 12 y 16 años) y no requiere nociones previas.
              </p>


            <h4>El objetivo principal será la preparación intensiva para el examen de las pruebas de acceso, que incluyen los siguientes requisitos:</h4>
            
            <p><strong>a)</strong> Interpretación de tres obras en el instrumento de especialidad, pertenecientes a distintos estilos. Al menos una de ellas deberá ser interpretada de memoria.</p>
            
            <p><strong>b)</strong> Ejercicio para evaluar la capacidad auditiva del alumno y sus conocimientos teóricos y prácticos del lenguaje musical.</p>

            <p><strong>Para la especialidad de Canto, la prueba consistirá en:</strong></p>
            
            <p><strong>a)</strong> Interpretación de dos obras de diferentes estilos, elegidas libremente por el aspirante, siendo una de ellas de repertorio lírico.</p>
            
            <p><strong>b)</strong> Ejercicio para evaluar la capacidad auditiva del alumno y sus conocimientos teóricos y prácticos del lenguaje musical.</p>

            <h4>Preguntas Frecuentes</h4>

              <p><strong>¿Cuánto tiempo necesito para prepararme para el examen?</strong></p>
              <p>El tiempo de preparación depende de tu nivel actual y de la dedicación diaria que puedas ofrecer. Si comienzas desde cero, lo ideal es un curso semi-intensivo de aproximadamente un año, o bien un curso intensivo de al menos 9 meses. La preparación se adapta a tu disponibilidad y objetivos. Por lo general, los exámenes se realizan en mayo, por lo que la formación suele iniciar en septiembre, con una recomendación de unas 2 horas de estudio diario si partes desde cero. Aun así, cada persona avanza a su propio ritmo.</p>

              <p><strong>¿Cómo obtengo el temario?</strong></p>
              <p>El temario está incluido en la matrícula (30€). Al comenzar las clases recibirás tres libros de preparación, modelos de examen y recursos adicionales en la plataforma.</p>


            <h3>Enseñanzas Básicas</h3>
              <p>
              Si tu hijo o hija tiene menos de 12 años y desea acceder al Conservatorio, puede presentarse a las pruebas de acceso a las Enseñanzas Básicas a partir de los 8 años, en cualquier especialidad instrumental.
              </p>

              <p>
              La clase, de una hora semanal, está enfocada a la preparación de esta prueba, que se celebra cada mes de mayo. 
              </p>
              <p>
              Se recomienda un mínimo de tres meses de aprendizaje; no obstante, si dispones de menos tiempo, también se ofrecen cursos intensivos de un mes
              Durante las sesiones trabajaremos con modelos de examen y material didáctico propio, incluido en la matrícula (10€).
              </p>
              


            <h4>Los objetivos evaluados en la prueba son:</h4>
            <ul>
              <li><strong>a)</strong> Imitar estructuras melódicas o rítmicas breves con voz o percusión.</li>
              <li><strong>b)</strong> Mantener el pulso durante períodos breves de silencio.</li>
              <li><strong>c)</strong> Entonar, de forma imitativa, intervalos mayores, menores o justos (registro medio).</li>
              <li><strong>d)</strong> Reproducir escalas o modelos melódicos sencillos a partir de diferentes alturas.</li>
              <li><strong>e)</strong> Entonar una canción o melodía tonal propuesta por la comisión o por los aspirantes.</li>
              <li><strong>f)</strong> Conseguir y mantener un adecuado estado de relajación en la actitud corporal.</li>
              <li><strong>g)</strong> Demostrar capacidad de atención y coordinación motora.</li>
            </ul>

          </div>
        </div>

        <div class="info-circles">
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Edad</span>
            </div>
            <h4>De 8 a 16 años</h4>
            <p>Clases adaptadas a cada edad</p>
          </div>
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Duración</span>
            </div>
            <h4>Una hora/semana (Básicas)<br>Una hora y media/semana (Profesionales)</h4>
            <p>Tiempo óptimo para el aprendizaje</p>
          </div>
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Modalidad</span>
            </div>
            <h4>Clases individuales</h4>
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
  name: 'ConservatoryTests',
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