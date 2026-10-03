<template>
  <section class="class-pricing" ref="root">
    <h2 class="class-pricing-title">{{ loadedPlans.length > 1 ? 'Precios' : 'Precio' }}</h2>

    <div v-if="loadedPlans.length" class="class-pricing-cards">
      <div v-for="item in loadedPlans" :key="item.plan.id" class="class-pricing-card">
        <span v-if="item.label" class="plan-label">{{ item.label }}</span>
        <div class="class-pricing-plan">
          <span class="plan-name">{{ item.title || item.plan.name }}</span>
          <span v-if="item.plan.choiceLabel" class="plan-choice">{{ item.plan.choiceLabel }}</span>
          <span class="plan-amount">{{ item.plan.price }}€</span>
          <span class="plan-period">{{ item.plan.period }}</span>
          <span v-if="item.additionalOption" class="plan-option">{{ item.additionalOption }}</span>
        </div>
        <ul v-if="item.plan.features.length" class="class-pricing-features">
          <li v-for="(feature, index) in item.plan.features" :key="index">
            <i class="fas fa-check"></i>
            <span v-if="typeof feature === 'object'" class="feature-text">{{ feature.text + '. ' }}<template v-if="feature.link !== $route.path"><router-link :to="feature.link" class="feature-link">Info aquí</router-link></template></span>
            <template v-else>{{ feature }}</template>
          </li>
        </ul>
      </div>
    </div>

    <p class="class-pricing-note">
      Consulta el resto de asignaturas y lo que incluye cada una en la
      <router-link to="/precios" class="class-pricing-link">página de precios</router-link>.
    </p>
    <p class="class-pricing-updated">Precios actualizados a {{ updatedAt }}.</p>
  </section>
</template>

<script>
import { track } from '@/utils/track'
import { currentMonthYear } from '@/utils/date'

export default {
  name: 'ClassPricing',
  props: {
    // Cada elemento es el nombre de un plan de pricing.json, o un objeto
    // { name, label, title, additionalOption } para presentar opciones locales
    plans: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      loadedPlans: [],
      observer: null,
      updatedAt: currentMonthYear()
    }
  },
  mounted() {
    fetch('/data/pricing.json')
      .then(r => r.json())
      .then(available => {
        this.loadedPlans = this.plans
          .map(entry => {
            const { name, label, title, additionalOption } = typeof entry === 'string' ? { name: entry, label: '', title: '', additionalOption: '' } : entry
            const plan = available.find(p => p.name === name)
            return plan ? { plan, label, title, additionalOption: additionalOption || plan.additionalOption } : null
          })
          .filter(Boolean)
      })
      .catch(() => {
        // Si falla la carga, la sección se queda solo con el enlace a /precios
        this.loadedPlans = []
      })

    this.observePricing()
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  },
  methods: {
    observePricing() {
      if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return

      this.observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            track('pricing_view', { origin: this.$route?.name || this.$route?.path || 'unknown' })
            this.observer.disconnect()
          }
        })
      }, { threshold: 0.3 })

      this.observer.observe(this.$refs.root)
    }
  }
}
</script>

<style scoped>
.class-pricing {
  margin: 15px 0 60px;
  text-align: center;
}

.class-pricing-title {
  font-size: 33px;
  color: var(--primary-turquoise);
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0 0 30px;
}

.class-pricing-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 30px;
}

.class-pricing-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background: #ffffff;
  border: 2px solid var(--primary-turquoise);
  border-radius: 8px;
  padding: 35px 45px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  flex: 0 1 420px;
}

.plan-label {
  background: #e6f0f2;
  color: #133a44;
  border-radius: 8px;
  padding: 6px 18px;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.plan-name {
  display: block;
  font-size: 24px;
  color: var(--primary-turquoise);
  font-family: 'Playfair Display', Georgia, serif;
}

.plan-choice {
  display: block;
  margin-top: 8px;
  color: #326d6b;
  font-size: 14px;
  font-weight: 700;
}

.plan-amount {
  display: block;
  font-size: 48px;
  color: #000;
  font-weight: 200;
  font-family: 'Playfair Display', Georgia, serif;
}

.plan-period {
  display: block;
  font-size: 18px;
  color: #666;
  font-weight: 600;
}

.plan-option {
  display: inline-block;
  max-width: 100%;
  margin-top: 12px;
  padding: 9px 13px;
  border-left: 3px solid var(--primary-turquoise);
  border-radius: 4px;
  background: #e6f0f2;
  color: #133a44;
  font-size: 15px;
  font-weight: 700;
}

.class-pricing-features {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}

.class-pricing-features li {
  padding: 8px 0;
  color: #666;
  font-size: 16px;
  text-align: justify;
  text-justify: inter-word;
}

.class-pricing-features i {
  color: var(--primary-turquoise);
  margin-right: 12px;
  width: 20px;
}

/* main.css da color a todos los <span>: aquí debe ser el gris de la lista */
.feature-text {
  color: inherit;
}

.feature-link {
  color: var(--primary-turquoise);
  font-weight: 600;
  text-decoration: underline;
  white-space: nowrap;
}

.feature-link:hover {
  color: var(--accent-terracotta);
}

.class-pricing-note {
  margin: 25px 0 0;
  color: #666;
  font-size: 16px;
}

.class-pricing-link {
  color: var(--primary-turquoise);
  text-decoration: none;
  font-weight: 600;
}

.class-pricing-link:hover {
  text-decoration: underline;
}

.class-pricing-updated {
  margin: 8px 0 0;
  color: #999;
  font-size: 14px;
  font-style: italic;
}

@media screen and (max-width: 768px) {
  .class-pricing-title {
    font-size: 29px;
  }

  .class-pricing-card {
    padding: 30px 25px;
  }

  .plan-amount {
    font-size: 40px;
  }
}
</style>
