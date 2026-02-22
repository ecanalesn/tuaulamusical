<template>
  <div class="home">
            <!-- Hero Section -->
            <section class="home-hero-section">
              <div class="hero-image">
                <img src="/images/cover.png" alt="Tu Aula Musical" class="hero-img" fetchpriority="high" loading="eager">
                <div class="hero-text">
                  <h1 class="hero-title">En Tu Aula Musical</h1>
                  <h2 class="hero-subtitle">tú talento descubrirás</h2>
                  <h3 class="hero-services">Clases de piano, canto<br>y lenguaje musical</h3>
                </div>
              </div>
            </section>

    <!-- El Aula -->
    <section class="aula-section wow fadeInUp" id="el-aula">
      <div class="container">
        <div class="aula-header">
          <h2 class="aula-title">El Aula</h2>
          <div class="aula-description">
            <p>Tu Aula Musical es un servicio de clases individuales y personalizadas impartidas en local ubicado en Córdoba (España). Utilizo una metodología propia, inspirada en los métodos de Bastien y John Thompson.</p>
            <p>He diseñado cursos preparatorios para las Enseñanzas Profesionales de Música, así como un sistema de aprendizaje de piano accesible para todas las edades, estructurado en cinco niveles.</p>
            <p>Este enfoque se complementa con recursos interactivos en la plataforma de formación online, permitiéndote aprender a tu propio ritmo mientras disfrutas de la música.</p>
          </div>
      </div>
      
        <div class="metodologia-section">
          <h3 class="metodologia-title">Metodología ISE</h3>
          <div class="metodologia-container">
            <div class="metodologia-content">
              <div class="ise-timeline">
                <div class="ise-step" data-step="1">
                  <div class="step-circle">
                    <span class="step-number">1</span>
                  </div>
                  <div class="step-content">
              <h4>Interpretar</h4>
              <p>Transmitir y conectar con la música a través de la técnica aprendida.</p>
              </div>
                </div>
                <div class="ise-step" data-step="2">
                  <div class="step-circle">
                    <span class="step-number">2</span>
                  </div>
                  <div class="step-content">
              <h4>Sentir</h4>
                <p>Disfrutar del proceso de aprendizaje y potenciar la creatividad con recursos interactivos.</p>
              </div>
                </div>
                <div class="ise-step" data-step="3">
                  <div class="step-circle">
                    <span class="step-number">3</span>
                  </div>
                  <div class="step-content">
              <h4>Escuchar</h4>
                <p>Desarrollar el oído musical para reconocer sonidos y mejorar la interpretación.</p>
              </div>
            </div>
        </div>
            </div>
            <div class="metodologia-image">
               <img src="/images/methodology.png" alt="Metodología Musical" class="methodology-img">
            </div>
            </div>
          </div>
        
        <!-- Clases Creativas Section -->
        <div class="clases-creativas-section">
          <h3 class="clases-title">Clases</h3>
          <div class="clases-grid">
            <div class="clase-card" data-step="1">
              <router-link to="/musica-y-movimiento" class="clase-link">
                <div class="clase-icon">🎵</div>
                <h4>Música y Movimiento</h4>
                <p>Desarrollo musical desde los 4 años</p>
              </router-link>
      </div>
            <div class="clase-card" data-step="2">
              <router-link to="/piano" class="clase-link">
                <div class="clase-icon">🎹</div>
                <h4>Piano</h4>
                <p>Interpretación musical y técnica pianística</p>
            </router-link>
          </div>
            <div class="clase-card" data-step="3">
              <router-link to="/canto" class="clase-link">
                <div class="clase-icon">🎤</div>
                <h4>Canto</h4>
                <p>Técnica vocal y expresión artística</p>
            </router-link>
          </div>
            <div class="clase-card" data-step="4">
              <router-link to="/lenguaje-musical" class="clase-link">
                <div class="clase-icon">📚</div>
                <h4>Lenguaje Musical</h4>
                <p>Refuerzo para Enseñanzas Profesionales</p>
            </router-link>
          </div>
            <div class="clase-card" data-step="5">
              <router-link to="/pruebas-conservatorio" class="clase-link">
                <div class="clase-icon">🎓</div>
                <h4>Pruebas Conservatorio</h4>
                <p>Preparación para las pruebas a Enseñanzas Básicas y Profesionales</p>
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
            Elige el plan que mejor se adapte a ti. Clases individuales, hechas a tu medida y con seguimiento continuo. Todas las opciones incluyen libros propios y acceso a la plataforma con material complementario.
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
  name: 'Home',
  components: {},
  data() {
    return {
      pricingPlans: []
    }
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
          { id: 1, name: 'Semicorchea', price: 60, period: 'Mensual', featured: false, features: [] },
          { id: 2, name: 'Corchea', price: 65, period: 'Mensual', featured: true, features: [] },
          { id: 3, name: 'Blanca', price: 90, period: 'Mensual', featured: false, features: [] }
        ]
      })
  }
}
</script>

<style>
@import '../assets/css/home.css';
@import '../assets/css/pricing.css';
</style>
