<template>
  <div class="home">
            <!-- Hero Section -->
            <section class="home-hero-section">
              <div class="hero-image">
                <img src="/images/hero-cover.jpg" alt="Partitura abierta sobre un piano en Tu Aula Musical, Córdoba" width="1920" height="1280" class="hero-img" fetchpriority="high" loading="eager">
                <div class="hero-text">
                  <h1 class="hero-title">Tu Aula Musical</h1>
                  <h2 class="hero-services">Clases de piano, preparación a las pruebas de acceso a Enseñanzas Básicas, Profesionales y Superiores de Música, refuerzo de Lenguaje Musical, Análisis Musical y Bachillerato de Artes y preparación a la EVAU (opción Música)</h2>
                  <p class="hero-tagline">Formación individual en Córdoba, adaptada a tu nivel y a tus objetivos desde el primer día.</p>
                </div>
              </div>
            </section>

    <!-- El Aula -->
    <section class="aula-section wow fadeInUp" id="el-aula">
      <div class="container">
        <div class="aula-header">
          <h2 class="aula-title">El Aula</h2>
          <div class="aula-description">
            <p>Soy Estefanía, licenciada en Flamencología, Máster en Formación del Profesorado de ESO y Bachillerato, FP e Idiomas, pianista profesional y cantante. Desde 2012 doy clases de piano, preparo pruebas de acceso al Conservatorio, desde Enseñanzas Básicas hasta Superiores, y ofrezco refuerzo de asignaturas de música como Lenguaje Musical, Análisis Musical o las de Bachillerato de Artes.</p>
            <p>Las clases son individuales y presenciales, en mi aula de Córdoba. Trabajo con metodología y libros propios, inspirados en los métodos de piano de Bastien y John Thompson, y adapto cada clase a tu nivel, a tu ritmo y a tu objetivo: aprender a tocar, aprobar una prueba de acceso o sacar adelante una asignatura.</p>
            <p>Si empiezas de cero con el piano, sigues un sistema propio estructurado en cinco niveles, pensado para cualquier edad.</p>
            <p>Además, tienes acceso a mi plataforma online, con recursos interactivos para seguir practicando entre clase y clase.</p>
          </div>
      </div>
      
        <!-- Clases Creativas Section -->
        <div class="clases-creativas-section">
          <h3 class="clases-title">Clases</h3>
          <div class="clases-grid">
            <div class="clase-card" data-step="1">
              <router-link to="/piano" class="clase-link">
                <div class="clase-icon">
                  <svg class="clase-icon-keyboard" viewBox="0 0 58 36" aria-hidden="true"><rect x="1" y="1" width="56" height="34" rx="2" fill="none" /><g><line x1="9" y1="1" x2="9" y2="35" /><line x1="17" y1="1" x2="17" y2="35" /><line x1="25" y1="1" x2="25" y2="35" /><line x1="33" y1="1" x2="33" y2="35" /><line x1="41" y1="1" x2="41" y2="35" /><line x1="49" y1="1" x2="49" y2="35" /></g><g class="keys"><rect x="6.5" y="1" width="5" height="21" /><rect x="14.5" y="1" width="5" height="21" /><rect x="30.5" y="1" width="5" height="21" /><rect x="38.5" y="1" width="5" height="21" /><rect x="46.5" y="1" width="5" height="21" /></g></svg>
                </div>
                <h4>Piano</h4>
                <p>Interpretación musical y técnica pianística para niños/as, adolescentes y adultos</p>
              </router-link>
            </div>
            <div class="clase-card" data-step="2">
              <router-link to="/pruebas-acceso-conservatorio-profesional" class="clase-link">
                <div class="clase-icon"><i class="fa-solid fa-building-columns" aria-hidden="true"></i></div>
                <h4>Preparación a las pruebas de acceso a Enseñanzas Básicas y Profesionales del Conservatorio</h4>
                <p>Enseñanzas Básicas de cualquier especialidad, 3.º de Básicas de Educación Vocal o Enseñanzas Profesionales de Canto o Piano</p>
              </router-link>
            </div>
            <div class="clase-card" data-step="3">
              <router-link to="/pruebas-acceso-conservatorio-superior" class="clase-link">
                <div class="clase-icon"><i class="fa-solid fa-graduation-cap" aria-hidden="true"></i></div>
                <h4>Preparación a las pruebas de acceso a Enseñanzas Superiores del Conservatorio</h4>
                <p>Análisis Musical, lectura a primera vista, repertorio de piano o solo parte teórica (Flamencología)</p>
              </router-link>
            </div>
            <div class="clase-card" data-step="4">
              <router-link to="/lenguaje-musical" class="clase-link">
                <div class="clase-icon"><i class="fa-solid fa-book-open" aria-hidden="true"></i></div>
                <h4>Refuerzo de Lenguaje Musical</h4>
                <p>Teoría, dictado, ritmo y entonación para Enseñanzas Básicas y Profesionales</p>
              </router-link>
            </div>
            <div class="clase-card" data-step="5">
              <router-link to="/bachillerato-artes-evau" class="clase-link">
                <div class="clase-icon"><i class="fa-solid fa-music" aria-hidden="true"></i></div>
                <h4>Refuerzo de Bachillerato de Artes o preparación a la EVAU</h4>
                <p>Preparación para la EVAU (opción Música) y asignaturas de Bachillerato de Artes</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>




    <!-- Precios Section -->
    <section class="pricing-section wow fadeInUp" id="pricing">
      <div class="container">
        <div class="section-heading text-center">
        <h2>Precios</h2>
          <p class="section-description">
            Elige la preparación que mejor se adapte a ti. Clases individuales y seguimiento personalizado para avanzar a tu ritmo.
        </p>
          <p class="pricing-updated">Precios actualizados a {{ updatedAt }}.</p>
        </div>

        <div class="pricing-grid">
          <div 
            v-for="plan in pricingPlans" 
            :key="plan.id" 
            :class="['pricing-card', { 'featured': plan.featured }]"
          >
            <div class="card-badges">
              <div v-if="plan.featured" class="popular-badge">Más popular</div>
              <div v-if="plan.badge" class="new-plan-badge">{{ plan.badge }}</div>
            </div>
            <h3 class="card-title">{{ plan.name }}</h3>
            <div v-if="plan.choiceLabel" class="choice-label">{{ plan.choiceLabel }}</div>
            <div class="card-price">
              <span class="price-amount">{{ plan.price }}€</span>
              <span class="price-hours">{{ plan.period }}</span>
              <span v-if="plan.additionalOption" class="price-option">{{ plan.additionalOption }}</span>
            </div>
            <ul class="card-features">
              <li v-for="(feature, index) in plan.features" :key="index">
                <i class="fas fa-check"></i>
                <span v-if="typeof feature === 'object'" class="feature-text">{{ feature.text }}. <router-link :to="feature.link" class="feature-link">Info aquí</router-link></span>
                <template v-else>{{ feature }}</template>
              </li>
            </ul>
            <div class="card-button">
              <router-link :to="plan.link || '/contacto'">MÁS INFORMACIÓN</router-link>
            </div>
          </div>
        </div>
              </div>
    </section>

    <!-- Horarios disponibles -->
    <section v-if="scheduleSlots.length" class="schedule-section wow fadeInUp" id="horarios">
      <div class="container">
        <div class="schedule-panel">
          <div class="schedule-header">
            <h2>Horarios disponibles</h2>
            <p>
              Si ninguna hora te encaja, escríbeme y buscamos otra opción.
            </p>
            <p class="schedule-updated">Horarios actualizados a {{ updatedAt }}.</p>
          </div>

          <div class="schedule-rows">
            <div v-for="slot in scheduleSlots" :key="slot.day" class="schedule-row">
              <span class="schedule-day">{{ slot.day }}</span>
              <div class="schedule-hours">
                <span v-for="hour in slot.hours" :key="hour" class="schedule-hour">
                  <i class="fas fa-clock"></i> {{ hour }}
                </span>
              </div>
            </div>
          </div>

          <div class="schedule-cta">
            <router-link to="/contacto" class="btn-schedule">Contactar</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { setPageMeta } from '@/utils/seo'
import { track } from '@/utils/track'
import { currentMonthYear } from '@/utils/date'

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      pricingPlans: [],
      scheduleSlots: [],
      pricingObserver: null,
      updatedAt: currentMonthYear()
    }
  },
  created() {
    setPageMeta(
      'Clases de piano y preparación a las pruebas de acceso al Conservatorio en Córdoba | Tu Aula Musical',
      'Clases individuales de piano y preparación a las pruebas de acceso al Conservatorio en Córdoba: Enseñanzas Básicas, Profesionales y Superiores. También refuerzo de Lenguaje Musical, Bachillerato de Artes y EVAU (opción Música).'
    )
  },
  mounted() {
    // Initialize WOW.js for animations
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init()
    }
    // Carga dinámica desde JSON público
    fetch('/data/pricing.json')
      .then(r => r.json())
      .then(data => { this.pricingPlans = data })
      .catch(() => {
        // fallback mínimo por si falla la carga
        this.pricingPlans = [
          { id: 1, link: '/piano', name: 'Piano + Lenguaje Musical', price: 80, period: '4 horas/mes · 20€/hora', featured: true, features: ['Matrícula 20€: incluye dos libros físicos propios', 'Clases individuales de Piano + Lenguaje Musical de una hora a la semana', 'Desde nivel inicial hasta avanzado', 'Para niños/as, adolescentes o adultos', 'Acceso a la plataforma con dos libros online gratuitos (2.º y 3.er mes)'] },
          { id: 2, link: '/pruebas-acceso-conservatorio-profesional', name: 'Preparación a elegir: pruebas de acceso al Conservatorio (Enseñanzas Básicas o Profesionales)', price: 120, period: '6 horas/mes · 20€/hora', additionalOption: 'Opción 4 horas: 80€/mes', featured: false, features: ['Matrícula: 20€ (Básicas) / 35€ (Profesionales), incluye uno o dos libros físicos propios según la preparación', 'Clases individuales de la preparación elegida de una hora y media a la semana', 'Opciones: pruebas de acceso a Enseñanzas Básicas de cualquier especialidad instrumental, pruebas de acceso a 3.º de Enseñanzas Básicas de Educación Vocal o pruebas de acceso a Enseñanzas Profesionales de Canto o Piano', 'Recomendable para niños/as de 8 a 16 años', 'Acceso a la plataforma con dos libros online gratuitos (2.º y 3.er mes)'] },
          { id: 3, link: '/pruebas-acceso-conservatorio-superior', name: 'Preparación a elegir: pruebas de acceso al Conservatorio (Enseñanzas Superiores), EVAU (opción Música) o Bachillerato de Artes', price: 150, period: '6 horas/mes · 25€/hora', additionalOption: 'Opción 4 horas: 100€/mes', featured: false, badge: 'Nueva asignatura', features: ['Matrícula 35€, incluye dos libros físicos propios', 'Clases individuales de la preparación elegida de una hora y media a la semana', 'Para adolescentes y adultos', 'Clases de refuerzo de Análisis Musical de 1.º y 2.º de Enseñanzas Superiores disponibles', 'Clases de Bachillerato de Artes disponibles: Lenguaje y Práctica Musical, Análisis Musical, Coro y Técnica Vocal'] }
        ]
      })

    // Horarios libres: en un JSON aparte para poder cambiarlos sin tocar el código
    fetch('/data/schedule.json')
      .then(r => r.json())
      .then(data => { this.scheduleSlots = data })
      .catch(() => { this.scheduleSlots = [] })

    this.observePricingSection()
  },
  beforeUnmount() {
    if (this.pricingObserver) {
      this.pricingObserver.disconnect()
    }
  },
  methods: {
    observePricingSection() {
      if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

      const target = document.getElementById('pricing')
      if (!target) return

      this.pricingObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            track('pricing_view', { origin: 'Home' })
            this.pricingObserver.disconnect()
          }
        })
      }, { threshold: 0.3 })

      this.pricingObserver.observe(target)
    }
  }
}
</script>

<style>
@import '../assets/css/home.css';
@import '../assets/css/pricing.css';
</style>
