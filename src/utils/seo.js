export function setPageMeta(title, description) {
  document.title = title

  const setContent = (selector, value) => {
    const el = document.querySelector(selector)
    if (el) el.setAttribute('content', value)
  }

  setContent('meta[name="description"]', description)
  setContent('meta[property="og:title"]', title)
  setContent('meta[property="og:description"]', description)
  setContent('meta[name="twitter:title"]', title)
  setContent('meta[name="twitter:description"]', description)
}

const SITE_URL = 'https://tuaulamusical.com'

// URL canónica de la ruta actual (y og:url). Solo se conserva la query que
// cambia el contenido de la página: ?nivel=superiores en Pruebas Conservatorio.
export function setCanonical(route) {
  const keepLevel = route.path === '/pruebas-conservatorio' && route.query.nivel === 'superiores'
  const url = SITE_URL + route.path + (keepLevel ? '?nivel=superiores' : '')

  const link = document.querySelector('link[rel="canonical"]')
  if (link) link.setAttribute('href', url)
  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) ogUrl.setAttribute('content', url)
}
