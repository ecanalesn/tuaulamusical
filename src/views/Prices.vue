<template>
  <div class="prices-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Precios</h1>
      </div>
    </section>

    <!-- Precios Section -->
    <section class="pricing-section">
      <div class="container">
        <div class="section-heading text-center">
          <p class="section-description">
            Clases individuales con seguimiento personalizado de Piano, Lenguaje Musical, pruebas de acceso al Conservatorio, Bachillerato de Artes y EVAU.
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
  </div>
</template>

<script>
import { setPageMeta } from '@/utils/seo'
import { track } from '@/utils/track'
import { currentMonthYear } from '@/utils/date'

export default {
  name: 'Prices',
  data() {
    return {
      pricingPlans: [],
      updatedAt: currentMonthYear()
    }
  },
  created() {
    setPageMeta(
      'Precios de Clases de Música en Córdoba | Tu Aula Musical',
      'Consulta los precios de Piano, Lenguaje Musical, Bachillerato de Artes, EVAU y preparación para pruebas de acceso al Conservatorio Profesional y Superior en Tu Aula Musical, Córdoba.'
    )
  },
  mounted() {
    // Página dedicada a precios: a diferencia de la sección embebida en Home
    // (que usa IntersectionObserver porque hay que esperar a que se vea al
    // hacer scroll), aquí el usuario ya ha llegado a ver precios con solo
    // entrar a la página.
    track('pricing_view', { origin: 'Precios' })

    // Initialize WOW.js for animations if available
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
  }
}
</script>

<style scoped>
@import '../assets/css/prices.css';
@import '../assets/css/pricing.css';

.prices-page {
  min-height: 100vh;
}

.pricing-section {
  padding: 80px 0;
  background: var(--background-light);
}

.pricing-updated {
  margin: 15px 0 0;
  color: #999;
  font-size: 14px;
  font-style: italic;
}
</style>
