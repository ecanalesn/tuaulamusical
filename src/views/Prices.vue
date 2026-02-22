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
            Clases individuales, hechas a tu medida y con seguimiento continuo. Todas las opciones incluyen libros propios y acceso a la plataforma con material complementario.
          </p>
        </div>

        <div class="pricing-grid">
          <div 
            v-for="plan in pricingPlans" 
            :key="plan.id" 
            :class="['pricing-card', { 'featured': plan.featured }]"
          >
            <div v-if="plan.featured" class="popular-badge">Más Popular</div>
            <h3 class="card-title">{{ plan.name }}</h3>
            <div class="card-price">
              <span class="price-amount">{{ plan.price }}€</span>
              <span class="price-hours">{{ plan.period }}</span>
            </div>
            <ul class="card-features">
              <li v-for="(feature, index) in plan.features" :key="index">
                <i class="fas fa-check"></i> {{ feature }}
              </li>
            </ul>
            <div class="card-button">
              <router-link to="/contacto">MÁS INFORMACIÓN</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Prices',
  data() {
    return {
      pricingPlans: []
    }
  },
  mounted() {
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
          { id: 1, name: 'Semicorchea', price: 60, period: 'Mensual', featured: false, features: [] },
          { id: 2, name: 'Corchea', price: 65, period: 'Mensual', featured: true, features: [] },
          { id: 3, name: 'Blanca', price: 90, period: 'Mensual', featured: false, features: [] }
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
</style>
