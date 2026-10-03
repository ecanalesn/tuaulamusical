<template>
  <div class="page-content">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Pruebas de acceso al Conservatorio</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div
          v-if="activeLevel === 'basicProfessional'"
          id="basic-professional-panel"
          class="content-grid"
        >
          <div class="text-content">
            <h2>Preparación a las pruebas de acceso al Conservatorio Profesional de Música</h2>

            <h3>Enseñanzas Básicas</h3>
            <p>
              Si tu hijo o hija tiene entre 8 y 12 años y quiere entrar al Conservatorio, puede presentarse a las pruebas de acceso a las Enseñanzas Básicas en cualquier especialidad instrumental.
            </p>
            <p>
              La clase es individual, de una hora a la semana, y está centrada por completo en preparar esa prueba, que se celebra cada año en mayo.
            </p>
            <p>
              Lo recomendable es prepararla con al menos tres meses de antelación, aunque si dispones de menos tiempo también ofrezco cursos intensivos de un mes.
              Trabajamos con modelos de examen y con un libro físico propio, incluido en la matrícula (20€).
            </p>

            <h4>Qué se evalúa en la prueba</h4>
            <ul>
              <li>a) Imitar estructuras melódicas o rítmicas breves con voz o percusión.</li>
              <li>b) Mantener el pulso durante períodos breves de silencio.</li>
              <li>c) Entonar, de forma imitativa, intervalos mayores, menores o justos (registro medio).</li>
              <li>d) Reproducir escalas o modelos melódicos sencillos a partir de diferentes alturas.</li>
              <li>e) Entonar una canción o melodía tonal propuesta por la comisión o por los aspirantes.</li>
              <li>f) Conseguir y mantener un adecuado estado de relajación en la actitud corporal.</li>
              <li>g) Demostrar capacidad de atención y coordinación motora.</li>
            </ul>

            <h3>Educación Vocal en Enseñanzas Básicas</h3>
            <p>Educación Vocal se cursa en el segundo ciclo de Enseñanzas Básicas (3.º y 4.º). Está orientada a desarrollar la formación vocal del alumnado que quiere continuar después en la especialidad de Canto de Enseñanzas Profesionales.</p>
            <p>Preparo las pruebas de acceso a 3.º de Enseñanzas Básicas en Educación Vocal para niños y niñas, adolescentes y personas adultas. Consulta la <a class="inline-link" href="https://www.cpmcordoba.com/estudia-con-nosotros/admisi%C3%B3n-y-acceso/acceso-a-diferentes-cursos-de-1%C2%BA" target="_blank" rel="noopener noreferrer">información de acceso del CPM Córdoba Músico Ziryab</a>.</p>

            <h4>Estructura de la prueba de acceso a 3.º de Enseñanzas Básicas</h4>
            <p>La prueba consta de dos partes, que se realizan en convocatorias diferentes:</p>
            <ol>
              <li>Interpretación de dos obras de Educación Vocal fijadas por el centro para el curso correspondiente. Consulta las <a class="inline-link" href="https://www.cpmcordoba.com/docencia" target="_blank" rel="noopener noreferrer">programaciones de la especialidad</a>.</li>
              <li>Ejercicio teórico-práctico.</li>
            </ol>

            <h3>Enseñanzas Profesionales</h3>
            <p>
              En esta clase individual, de una hora y media a la semana, te preparo para presentarte a las pruebas de acceso a las Enseñanzas Profesionales del Conservatorio en la especialidad de Canto o Piano.
            </p>
            <p>
              Está abierta a cualquier edad, aunque la recomiendo especialmente entre los 12 y los 16 años, y no necesitas conocimientos previos: empezamos desde tu nivel actual.
            </p>

            <h4>Qué incluye la prueba de acceso</h4>
            <p>Piano:</p>
            <ul>
              <li>a) Interpretación de tres obras de distintos estilos, al menos una de ellas de memoria.</li>
              <li>b) Ejercicio para evaluar la capacidad auditiva y los conocimientos teóricos y prácticos de lenguaje musical.</li>
            </ul>
            <p>Canto:</p>
            <ul>
              <li>a) Interpretación de dos obras de estilos diferentes, elegidas libremente, una de ellas de repertorio lírico.</li>
              <li>b) Ejercicio para evaluar la capacidad auditiva y los conocimientos teóricos y prácticos de lenguaje musical.</li>
            </ul>

            <h4>Preguntas frecuentes</h4>

            <p class="conservatory-faq-question">¿Cuánto tiempo necesito para prepararme?</p>
            <p>Depende de tu nivel y del tiempo que puedas dedicar cada día. Si partes de cero, lo ideal es un curso de un año aproximadamente, o uno intensivo de al menos 9 meses, con unas 2 horas de estudio diario. Como las pruebas suelen ser en mayo, lo habitual es empezar en septiembre. En cualquier caso, la preparación se adapta a tu disponibilidad y a tu ritmo.</p>

            <p class="conservatory-faq-question">¿Cómo consigo el temario?</p>
            <p>El temario está incluido en la matrícula (35€). Al empezar las clases recibes dos libros físicos propios, <em>Preparación a las pruebas</em> (Análisis Musical y lectura a primera vista) y <em>Escalas de Hanon para piano</em>, así como el repertorio de las obras que elijas, modelos de examen y recursos adicionales en la plataforma.</p>

          </div>
        </div>

        <div
          v-else
          id="superior-panel"
          class="content-grid"
        >
          <div class="text-content">
            <h2>Preparación a las pruebas de acceso al Conservatorio Superior de Música</h2>
            <p>Se recomienda haber cursado previamente Enseñanzas Profesionales, al menos hasta 4.º curso, para contar con una base de Piano y conocimientos asentados de Lenguaje Musical.</p>
            <p>Si todavía no has cursado las <router-link class="inline-link" to="/pruebas-acceso-conservatorio-profesional">Enseñanzas Profesionales</router-link>, te recomiendo preparar primero esas pruebas de acceso; las preparo en Canto y en Piano.</p>

            <h3>Preparación de Piano</h3>
            <p>Trabajamos análisis, lectura a primera vista e interpretación de las obras de Piano que marque la convocatoria. Como el programa y el formato pueden cambiar cada curso, revisamos siempre las bases vigentes.</p>
            <p>También puedes preparar solo la parte teórica y de análisis musical si te presentas por otro instrumento o por Flamencología.</p>

            <p>El acceso requiere cumplir los requisitos académicos y superar la prueba específica. Consulta la <a class="inline-link" href="https://csmcordoba.com/pruebas-de-acceso/" target="_blank" rel="noopener noreferrer">convocatoria oficial del CSM Rafael Orozco</a> para conocer las bases y fechas actualizadas.</p>
          </div>
        </div>

        <ClassPricing
          v-if="activeLevel === 'basicProfessional'"
          :plans="[
            { name: 'Preparación a elegir: pruebas de acceso al Conservatorio (Enseñanzas Básicas o Profesionales)' }
          ]"
        />
        <ClassPricing
          v-else
          :plans="[
            { name: 'Preparación a elegir: pruebas de acceso al Conservatorio (Enseñanzas Superiores), EVAU (opción Música) o Bachillerato de Artes' }
          ]"
        />

        <div v-if="activeLevel === 'basicProfessional'" class="info-circles">
          <div class="info-circle">
            <div class="circle-icon">
              <span class="circle-text">Edad</span>
            </div>
            <h4>Básicas: Desde los 8 años<br>Profesionales: Recomendable de 12 a 16 años</h4>
            <p>Edad recomendada para cada prueba</p>
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
  name: 'ConservatoryTests',
  components: {
    ClassPricing
  },
  data() {
    return {
      activeLevel: this.$route.meta.level,
      enrollmentYear: this.getEnrollmentYear()
    }
  },
  watch: {
    // Al pasar de una ruta a la otra Vue reutiliza la vista, así que hay que actualizar el nivel
    '$route.meta.level'(level) {
      if (!level) return
      this.activeLevel = level
      this.updatePageMeta()
    }
  },
  created() {
    this.updatePageMeta()
  },
  methods: {
    updatePageMeta() {
      if (this.activeLevel === 'superior') {
        setPageMeta(
          'Pruebas de Acceso al Conservatorio Superior Rafael Orozco en Córdoba | Tu Aula Musical',
          'Preparación de las pruebas de acceso a Enseñanzas Superiores de Música en el Conservatorio Superior Rafael Orozco de Córdoba: Análisis Musical, lectura a primera vista, repertorio de piano o solo parte teórica para Flamencología y otras especialidades.'
        )
      } else {
        setPageMeta(
          'Pruebas de Acceso al Conservatorio en Córdoba: Básicas y Profesionales | Tu Aula Musical',
          'Preparación de las pruebas de acceso al Conservatorio en Córdoba: Enseñanzas Básicas de cualquier especialidad, 3.º de Básicas en Educación Vocal y Enseñanzas Profesionales de Canto o Piano en el Músico Ziryab.'
        )
      }
    },
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