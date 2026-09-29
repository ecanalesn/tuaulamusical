<template>
  <div class="courses-page">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Contacto</h1>
      </div>
    </section>

    <section class="contact-section">
      <div class="contact-container">
        <div class="contact-grid">
          <div class="contact-info">
            <h2>Información de contacto</h2>
            <div class="contact-item">
              <i class="fas fa-clock"></i>
              <div>
                <h4>Horario de clases (cita previa)</h4>
                <p>De lunes a jueves, de 16:30 a 20:30</p>
              </div>
            </div>
            
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div>
                <h4>Teléfono</h4>
                <p><a href="tel:+34616471534" class="contact-phone-link" @click="trackPhoneClick">616 47 15 34</a></p>
              </div>
            </div>
            
            <div class="contact-item">
              <i class="fas fa-map-marker-alt"></i>
              <div>
                <h4>Ubicación</h4>
                <p>Plaza de Andalucía, 7, 14013, Córdoba (España)</p>
              </div>
            </div>
            
            <div class="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.123456789!2d-4.780372!3d37.870166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94de00dd050ee988!2sPlaza%20de%20Andaluc%C3%ADa%2C%207%2C%2014013%20C%C3%B3rdoba!5e0!3m2!1ses!2ses!4v1634383020880!5m2!1ses!2ses"
                width="100%" 
                height="400" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div class="contact-form">
            <h2>Envíame un mensaje</h2>
            <p class="contact-intro">Si tienes alguna pregunta o necesitas más información, envíame un mensaje y te contestaré lo antes posible.</p>
            <form name="contact" method="POST" netlify data-netlify="true" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Nombre *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  v-model="form.name" 
                  required
                  placeholder="Tu nombre completo"
                >
              </div>
              
              <div class="form-group">
                <label for="email">Correo electrónico *</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  v-model="form.email" 
                  required
                  placeholder="Tu dirección de correo electrónico"
                >
              </div>
              
              <div class="form-group">
                <label for="phone">Teléfono *</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  v-model="form.phone"
                  required
                  placeholder="Tu número de teléfono"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Asunto *</label>
                <select id="subject" name="subject" v-model="form.subject" required>
                  <option value="">Selecciona un asunto</option>
                  <option value="clases">Información sobre las clases</option>
                  <option value="precios">Precios y horarios</option>
                  <option value="matricula">Matrícula</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Mensaje *</label>
                <textarea 
                  id="message" 
                  name="message"
                  v-model="form.message" 
                  required
                  rows="5"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              
              <button type="submit" class="btn-submit" :disabled="isSubmitting">
                {{ isSubmitting ? 'Enviando...' : 'Enviar mensaje' }}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <Modal 
      :isVisible="showModal" 
      title="Mensaje enviado" 
      :message="modalMessage" 
      @close="showModal = false" 
    />
  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'
import { setPageMeta } from '@/utils/seo'
import { track } from '@/utils/track'

export default {
  name: 'Contact',
  components: {
    Modal
  },
  data() {
    return {
      isSubmitting: false,
      showModal: false,
      modalMessage: '',
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  created() {
    setPageMeta(
      'Contacto | Tu Aula Musical',
      'Contacta con Tu Aula Musical en Córdoba para más información sobre Piano, Lenguaje Musical, Bachillerato de Artes, EVAU y preparación para pruebas de acceso al Conservatorio (Educación Vocal, Canto, Enseñanzas Superiores y Flamencología).'
    )
  },
  methods: {
    trackPhoneClick() {
      track('phone_click', { origin: 'Contacto' })
    },
    async submitForm() {
      this.isSubmitting = true
      
      try {
        // Create FormData for Netlify Forms
        const formData = new FormData()
        formData.append('form-name', 'contact')
        formData.append('name', this.form.name)
        formData.append('email', this.form.email)
        formData.append('phone', this.form.phone)
        formData.append('subject', this.form.subject)
        formData.append('message', this.form.message)
        
        // Submit to Netlify Forms
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        track('form_submit', { form_name: 'contact', subject: this.form.subject })

        this.modalMessage = '¡Gracias! En breve me pondré en contacto contigo.'
        this.showModal = true

        // Reset form
        this.form = {
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }
      } catch (error) {
        console.error('Error:', error)
        this.modalMessage = 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.'
        this.showModal = true
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style>
@import '../assets/css/contact.css';
</style>
