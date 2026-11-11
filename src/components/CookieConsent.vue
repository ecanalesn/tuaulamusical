<template>
  <div v-if="visible" class="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
    <div class="cookie-content">
      <p>
        Utilizamos cookies propias y de terceros para analizar el uso de la web y mejorar tu experiencia.
        Puedes aceptarlas o rechazarlas; si rechazas, no se utilizan cookies de analítica.
      </p>
      <div class="cookie-actions">
        <button type="button" class="btn-cookie btn-reject" @click="reject">Rechazar</button>
        <button type="button" class="btn-cookie btn-accept" @click="accept">Aceptar</button>
      </div>
    </div>
  </div>
</template>

<script>
const STORAGE_KEY = 'tam_cookie_consent'

export default {
  name: 'CookieConsent',
  data() {
    return {
      visible: false
    }
  },
  mounted() {
    // Al prerenderizar en el build no hay visitante: el banner no debe quedar en el HTML
    if (window.__PRERENDER_INJECTED) return

    let stored = null
    try {
      stored = localStorage.getItem(STORAGE_KEY)
    } catch (e) {
      // localStorage no disponible: mostramos el banner igualmente, pero la elección no persistirá
    }
    this.visible = stored !== 'granted' && stored !== 'denied'
  },
  methods: {
    accept() {
      this.setConsent('granted')
    },
    reject() {
      this.setConsent('denied')
    },
    setConsent(state) {
      try {
        localStorage.setItem(STORAGE_KEY, state)
      } catch (e) {
        // si no se puede persistir, el banner volverá a salir en la próxima visita
      }

      if (typeof window.gtag === 'function') {
        window.gtag('consent', 'update', {
          ad_storage: state,
          ad_user_data: state,
          ad_personalization: state,
          analytics_storage: state
        })
      }

      this.visible = false
    }
  }
}
</script>

<style scoped>
.cookie-banner {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2000;
  background: #133a44;
  color: #f5f5f5;
  padding: 16px 20px;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.2);
}

.cookie-content {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.cookie-content p {
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  flex: 1 1 auto;
  min-width: 260px;
  /* main.css da color oscuro a todos los <p>: aquí debe ser claro */
  color: #f5f5f5;
}

.cookie-actions {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.btn-cookie {
  padding: 10px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.btn-reject {
  background: transparent;
  border-color: #f5f5f5;
  color: #f5f5f5;
}

.btn-reject:hover {
  background: rgba(255, 255, 255, 0.1);
}

.btn-accept {
  background: #ffffff;
  color: #133a44;
}

.btn-accept:hover {
  background: #e6f0f2;
}

@media screen and (max-width: 600px) {
  .cookie-content {
    flex-direction: column;
    align-items: stretch;
  }

  .cookie-content p {
    min-width: 0;
  }

  .cookie-actions {
    justify-content: flex-end;
  }
}
</style>
