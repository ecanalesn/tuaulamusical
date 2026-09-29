<template>
  <div class="page-content">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Bachillerato de Artes o EVAU</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="content-grid">
          <div class="text-content">
            <h2>Asignaturas de Bachillerato de Artes</h2>
            <p>Clases individuales adaptadas a tu curso, a tu nivel y a tus objetivos.</p>

            <h3>Lenguaje y Práctica Musical (1.º de Bachillerato)</h3>
            <p>Asignatura práctica para aprender a leer partituras, entrenar el oído y el ritmo, e interpretar música con instrumentos o con la voz.</p>

            <h3>Análisis Musical (1.º y 2.º de Bachillerato)</h3>
            <p>Estudio de cómo están construidas las obras: su estructura, armonía y evolución de los estilos musicales a lo largo de la historia.</p>

            <h3>Coro y Técnica Vocal (1.º y 2.º de Bachillerato)</h3>
            <p>Trabajo de respiración, cuidado de la voz, afinación y canto en grupo a varias voces con repertorio de distintas épocas.</p>

            <h2>Evaluación para el Acceso a la Universidad (EVAU), opción Música</h2>
            <p>Preparamos los contenidos musicales del examen según tu nivel y la convocatoria de ese año.</p>
          </div>
        </div>

        <ClassPricing :plans="[{ name: 'Preparación a elegir: pruebas de acceso al Conservatorio (Enseñanzas Superiores), EVAU (opción Música) o Bachillerato de Artes' }]" />
      </div>
    </section>
  </div>
</template>

<script>
import ClassPricing from '@/components/ClassPricing.vue'
import { setPageMeta } from '@/utils/seo'

export default {
  name: 'ArtsBaccalaureateEVAU',
  components: {
    ClassPricing
  },
  created() {
    setPageMeta(
      'Bachillerato de Artes o EVAU en Córdoba | Tu Aula Musical',
      'Clases individuales en Córdoba de Lenguaje y Práctica Musical, Análisis Musical, Coro y Técnica Vocal para Bachillerato de Artes y preparación de EVAU, opción Música.'
    )
  }
}
</script>

<style>
@import '../assets/css/classes.css';
</style>