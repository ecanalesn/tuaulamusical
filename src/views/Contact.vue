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
            <h2>Información de Contacto</h2>                   
            <div class="contact-item">
              <i class="fas fa-clock"></i>
              <div>
                <h4>Horario de clases (cita previa)</h4>
                <p>Lunes a Jueves: 16:00 a 20:00</p>
              </div>
            </div>
            
            <div class="contact-item">
              <i class="fas fa-phone"></i>
              <div>
                <h4>Teléfono</h4>
                <p>616 47 15 34</p>
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
            <h2>Envíame un Mensaje</h2>
            <form name="contact" method="POST" data-netlify="true" @submit.prevent="submitForm">
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
                  placeholder="tu@email.com"
                >
              </div>
              
              <div class="form-group">
                <label for="phone">Teléfono</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  v-model="form.phone"
                  placeholder="Tu número de teléfono"
                >
              </div>
              
              <div class="form-group">
                <label for="subject">Asunto *</label>
                <select id="subject" name="subject" v-model="form.subject" required>
                  <option value="">Selecciona un asunto</option>
                  <option value="clases">Información sobre las clases</option>
                  <option value="cursos">Información sobre los cursos online</option>
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
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data() {
    return {
      isSubmitting: false,
      form: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    }
  },
  methods: {
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
        
        alert('¡Mensaje enviado con éxito! En breve me pondré en contacto contigo')
        
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
        alert('Error al enviar el mensaje. Por favor, inténtalo de nuevo.')
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
