// Helper de tracking para eventos de negocio (GTM / GA4).
// Empuja un objeto plano al dataLayer; las etiquetas GA4 correspondientes
// se configuran en GTM con un activador de Evento personalizado por cada
// `event` y la comprobación adicional de consentimiento de analytics_storage,
// así que si el usuario ha rechazado cookies, GTM no dispara nada aunque
// el evento llegue al dataLayer.
export function track(event, params = {}) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}
