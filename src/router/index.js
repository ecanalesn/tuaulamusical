import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MusicMovement from '../views/MusicMovement.vue'
import Singing from '../views/Singing.vue'
import Piano from '../views/Piano.vue'
import MusicalLanguage from '../views/MusicalLanguage.vue'
import ConservatoryTests from '../views/ConservatoryTests.vue'
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
    name: 'MusicaMovimiento',
    component: MusicMovement
  },
  {
    path: '/canto',
    name: 'Canto',
    component: Singing
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
router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
