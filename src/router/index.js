import { createRouter, createWebHistory } from 'vue-router'
import { nextTick } from 'vue'
import { setCanonical } from '../utils/seo'
import Home from '../views/Home.vue'
import Piano from '../views/Piano.vue'
import MusicalLanguage from '../views/MusicalLanguage.vue'
import ConservatoryTests from '../views/ConservatoryTests.vue'
import ArtsBaccalaureateEVAU from '../views/ArtsBaccalaureateEVAU.vue'
import Contact from '../views/Contact.vue'
import Enrollment from '../views/Enrollment.vue'
import FrequentlyAskedQuestions from '../views/FrequentlyAskedQuestions.vue'
import VirtualClassroom from '../views/VirtualClassroom.vue'
import Prices from '../views/Prices.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/musica-y-movimiento',
    redirect: '/piano'
  },
  {
    path: '/piano',
    name: 'Piano',
    component: Piano
  },
  {
    path: '/lenguaje-musical',
    name: 'LenguajeMusical',
    component: MusicalLanguage
  },
  {
    path: '/pruebas-conservatorio',
    name: 'PruebasConservatorio',
    component: ConservatoryTests
  },
  {
    path: '/bachillerato-artes-evau',
    name: 'ArtsBaccalaureateEVAU',
    component: ArtsBaccalaureateEVAU
  },
  {
    // Dirección antigua (en inglés): Netlify ya hace un 301 en _redirects
    path: '/arts-baccalaureate-evau',
    redirect: '/bachillerato-artes-evau'
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contact
  },
  {
    path: '/matricula',
    name: 'Matricula',
    component: Enrollment
  },
  {
    path: '/preguntas-frecuentes',
    name: 'PreguntasFrecuentes',
    component: FrequentlyAskedQuestions
  },
  {
    path: '/aula-virtual',
    name: 'VirtualClassroom',
    component: VirtualClassroom
  },
  {
    path: '/precios',
    name: 'Precios',
    component: Prices
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      // Return top: 0 to ensure instantaneous scroll to top
      return { top: 0 }
    }
  }
})

// Extra layer of certainty: scroll to top after each navigation
router.afterEach((to) => {
  window.scrollTo(0, 0)
  setCanonical(to)

  // Empuja un evento page_view al dataLayer en cada navegación (la SPA no
  // recarga la página, así que GTM no lo detecta solo). nextTick espera a que
  // la vista destino haya fijado su propio document.title en su hook created().
  // Objeto plano (no gtag(...)) para que lo recoja un trigger de Evento
  // personalizado "page_view" en GTM, no el formato interno de gtag.js.
  nextTick(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'page_view',
      page_path: to.fullPath,
      page_location: window.location.href,
      page_title: document.title
    })
  })
})

export default router
