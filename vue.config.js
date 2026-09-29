const { defineConfig } = require('@vue/cli-service')
const PrerendererWebpackPlugin = require('@prerenderer/webpack-plugin')

// Páginas que se generan como HTML propio en el build para que los buscadores
// reciban el contenido sin ejecutar JavaScript. Mantener en sintonía con las
// rutas de src/router/index.js y con public/sitemap.xml.
const PRERENDER_ROUTES = [
  '/',
  '/piano',
  '/pruebas-acceso-conservatorio-profesional',
  '/pruebas-acceso-conservatorio-superior',
  '/lenguaje-musical',
  '/bachillerato-artes-evau',
  '/precios',
  '/preguntas-frecuentes',
  '/matricula',
  '/contacto',
  '/aula-virtual'
]

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8080,
    open: true
  },
  configureWebpack: config => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      path: false,
      fs: false
    }

    if (process.env.NODE_ENV === 'production') {
      config.plugins.push(new PrerendererWebpackPlugin({
        routes: PRERENDER_ROUTES,
        renderer: '@prerenderer/renderer-puppeteer',
        rendererOptions: {
          // index.html y los componentes lo usan para no cargar GTM ni mostrar
          // el banner de cookies en el HTML generado
          injectProperty: '__PRERENDER_INJECTED',
          inject: {},
          // Deja tiempo a que carguen pricing.json y schedule.json
          renderAfterTime: 2000,
          timeout: 30000,
          maxConcurrentRoutes: 4,
          // Fuentes, Font Awesome, Maps, etc. no hacen falta para generar el HTML
          skipThirdPartyRequests: true
        },
        postProcess (renderedRoute) {
          // /piano -> piano.html (Netlify lo sirve en /piano, sin barra final,
          // que es la URL canónica). La portada se queda en index.html.
          if (renderedRoute.originalRoute !== '/') {
            renderedRoute.outputPath = renderedRoute.originalRoute.slice(1) + '.html'
          }
          return renderedRoute
        }
      }))
    }
  }
})
