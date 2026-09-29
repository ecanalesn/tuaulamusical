<template>
  <div class="courses-page">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Preguntas Frecuentes</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="faq-content">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <i class="fas fa-chevron-down" :class="{ 'rotated': faq.isOpen }"></i>
            </div>
            <div class="faq-answer" :class="{ 'open': faq.isOpen }">
              <div class="faq-answer-content">
                <p v-html="faq.answer"></p>
                <ul v-if="faq.items" class="faq-list">
                  <li v-for="(item, i) in faq.items" :key="i">
                    <strong>{{ item.label }}:</strong> {{ item.text }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { setPageMeta } from '@/utils/seo'

export default {
  name: 'FrequentlyAskedQuestions',
  created() {
    setPageMeta(
      'Preguntas Frecuentes | Tu Aula Musical',
      'Resuelve tus dudas sobre horarios, precios, matrícula y forma de pago de las clases de música de Tu Aula Musical en Córdoba.'
    )
  },
  data() {
    return {
      faqs: [
        {
          question: '¿En qué mes puedo empezar y cuál es el horario?',
          answer: 'Puedes empezar en cualquier mes del año. El horario disponible es de lunes a jueves, de 16:30 a 20:30. Si alguna clase coincide con un festivo nacional, se recupera otro día de la misma semana.',
          isOpen: false
        },
        {
          question: '¿Puedo probar una clase?',
          answer: 'Sí, puedes probar una clase individual por 30€. Si después decides continuar, te descuento ese importe de la primera mensualidad, así que la clase de prueba te sale al mismo precio que una clase normal.',
          isOpen: false
        },
        {
          question: '¿Cuál es la forma de pago?',
          answer: 'Condiciones de pago:',
          items: [
            { label: 'Forma de pago', text: 'Únicamente en efectivo.' },
            { label: 'Primera clase', text: 'Se abona la mensualidad completa, independientemente de cuándo comiences.' },
            { label: 'Segunda clase', text: 'Se abona la matrícula y se entregan los libros.' },
            { label: 'Segundo mes', text: 'Se cobra de forma proporcional según el día del mes en que realizaste el primer pago completo.' },
            { label: 'Tercer mes', text: 'A partir de aquí la mensualidad se paga completa, siempre a primeros de mes.' }
          ],
          isOpen: false
        },
        {
          question: '¿Qué incluye la matrícula?',
          answer: 'La matrícula incluye dos libros físicos propios, que se entregan a partir de la segunda clase. Las asignaturas con plataforma incluyen acceso y dos libros online gratuitos, disponibles durante el segundo y tercer mes. La opción Solo Piano de 72€/mes no incluye acceso a la plataforma. Si más adelante necesitas algún libro extra para el curso siguiente, tiene un coste de 8€.',
          isOpen: false
        },
        {
          question: 'Si no puedo asistir una semana, ¿pierdo la clase?',
          answer: 'Si no puedes venir a una clase, avísame con al menos 24 horas de antelación para poder recuperarla esa misma semana. Si avisas más tarde, la clase se acumula para la semana siguiente (esa semana tendrás dos clases). Si faltas sin avisar, se pierde la clase. Y si faltas dos o más veces en un mes sin justificar, se anula el horario reservado.',
          isOpen: false
        },
        {
          question: '¿Ofreces bonos regalo para clases?',
          answer: 'Sí, tengo bonos regalo que incluyen una tarjeta personalizada. Puedes comprarlos para regalar clases a partir de un mes (72€, más 20€ de matrícula). Si quieres más información, escríbeme.',
          isOpen: false
        }
      ]
    }
  },
  mounted() {
    // FAQPage solo en esta página y generado desde `faqs`, para que lo que lee
    // Google coincida siempre con lo que se muestra
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'faq-schema'
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: this.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: [faq.answer, ...(faq.items || []).map(item => `${item.label}: ${item.text}`)].join(' ')
        }
      }))
    })
    document.head.appendChild(script)
  },
  beforeUnmount() {
    const script = document.getElementById('faq-schema')
    if (script) script.remove()
  },
  methods: {
    toggleFaq(index) {
      this.faqs[index].isOpen = !this.faqs[index].isOpen
    }
  }
}
</script>

<style>
@import '../assets/css/frequently-asked-questions.css';
</style>
