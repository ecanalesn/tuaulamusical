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

// URL canónica de la ruta actual (y og:url). Ninguna página depende de la
// query, así que se descarta siempre.
export function setCanonical(route) {
  const url = SITE_URL + route.path

  const link = document.querySelector('link[rel="canonical"]')
  if (link) link.setAttribute('href', url)
  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) ogUrl.setAttribute('content', url)
}
