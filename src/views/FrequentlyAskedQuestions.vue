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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FrequentlyAskedQuestions',
  data() {
    return {
      faqs: [
        {
          question: '¿En qué mes puedo empezar y cuál es el horario?',
          answer: 'Puedes comenzar las clases en cualquier mes del año. El horario disponible es de lunes a jueves, de 16:00 a 20:00. Si necesitas un horario diferente, no dudes en comentarlo para buscar una opción que se ajuste a ti. En caso de que una clase coincida con un festivo nacional, se recuperará en otro día de la misma semana.',
          isOpen: false
        },
        {
          question: '¿Puedo probar una clase?',
          answer: 'Sí, puedes probar una clase individual por 25€. Si decides continuar con las clases regulares, este importe se descontará de tu primera mensualidad, quedando el precio de la clase de prueba en 15€.',
          isOpen: false
        },
        {
          question: '¿Cuál es la forma de pago?',
          answer: 'El pago de la mensualidad debe realizarse antes de comenzar las clases, en efectivo. Si te inscribes a mitad de mes, el segundo mes se cobrará únicamente la parte proporcional correspondiente.',
          isOpen: false
        },
        {
          question: '¿Qué incluye la matrícula?',
          answer: 'La matrícula incluye los libros y material didáctico que se proporcionan a partir de la segunda clase, así como acceso completo a la plataforma online desde el segundo mes, con contenidos interactivos y recursos adicionales. Si necesitas algún libro adicional en formato PDF, tendrá un coste de 6€.',
          isOpen: false
        },
        {
          question: '¿Si no puedo asistir una semana, pierdo la clase?',
          answer: 'Si no puedes asistir a una clase, deberás avisar con al menos 24 horas de antelación para poder recuperarla durante la misma semana. Si no avisas con suficiente tiempo, la clase se acumulará para la siguiente semana (asistirás dos veces esa semana). Si no asistes sin previo aviso, se perderá la clase. Si faltas dos o más veces en un mes sin justificación, se anulará el horario reservado.',
          isOpen: false
        },
        {
          question: '¿Ofreces bonos regalo para clases?',
          answer: 'Sí, dispongo de bonos regalo que incluyen una tarjeta personalizada. Puedes adquirirlos para regalar clases a partir de un mes (60€). Si necesitas más información, no dudes en contactarme.',
          isOpen: false
        }
      ]
    }
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
