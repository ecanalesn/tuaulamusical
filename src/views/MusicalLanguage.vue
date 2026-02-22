<template>
  <div class="page-content">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Lenguaje Musical</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Clases de refuerzo de Lenguaje Musical (Enseñanzas Profesionales)</h2>

            <p>
              En esta clase, de una hora o una hora y media a la semana, trabajaremos la asignatura de 
              <strong>Lenguaje Musical</strong> correspondiente a tu curso de las Enseñanzas Profesionales de Música.  
              Sea cual sea tu especialidad instrumental, reforzaremos las áreas en las que necesites mayor apoyo, 
              utilizando los libros oficiales del Conservatorio, material complementario y recursos de refuerzo 
              que te proporcionaré para que puedas ponerte al día en el menor tiempo posible.
            </p>

            <p>
              Cada sesión es <strong>totalmente personalizada</strong> según las necesidades del alumno, 
              enfocándonos en los aspectos que requieran más atención: teoría musical, dictado, ritmo o entonación.
            </p>

            <p>
              La metodología combina <strong>explicaciones claras</strong>, ejercicios prácticos, dictados auditivos, 
              lectura rítmica y entonación, con el objetivo de garantizar un 
              <strong>progreso constante y sólido</strong> en todas las áreas del lenguaje musical.
            </p>

            <h4>Los objetivos que trabajaremos son:</h4>
            <ul>
              <li><strong>Teoría Musical:</strong> lectura de partituras, análisis rítmico y armónico.</li>
              <li><strong>Dictado:</strong> entrenamiento auditivo progresivo para mejorar el oído musical.</li>
              <li><strong>Ritmo:</strong> ejercicios de pulso, subdivisión y práctica de compases complejos.</li>
              <li><strong>Entonación:</strong> práctica melódica y afinación vocal para una interpretación precisa.</li>
            </ul>

            <p>
              Estas clases son ideales tanto para alumnos del Conservatorio que deseen 
              <strong>reforzar sus conocimientos</strong>, como para quienes se preparan para 
              <strong>exámenes, recuperaciones o pruebas de acceso</strong>.
            </p>
          </div>
        </div>

        <div class="info-circles">
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Nivel</span>
            </div>
            <h4>1º a 6º Curso</h4>
            <p>Enseñanzas Profesionales</p>
          </div>
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Duración</span>
            </div>
            <h4>Una hora u hora y media/semana</h4>
            <p>Según las necesidades del alumno</p>
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
  name: 'MusicalLanguage',
  data() {
    return {
      enrollmentYear: new Date().getFullYear() + 1
    }
  }
}
</script>

<style>
@import '../assets/css/classes.css';
</style>