<template>
  <div class="courses-page">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Matrícula</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="enrollment-form-container">
          <p class="enrollment-intro">Este formulario es para formalizar tu matrícula una vez que ya hemos hablado y hemos acordado el día y la hora de tus clases. Si necesitas más información, <router-link to="/contacto">contáctame aquí</router-link>.</p>
          <form class="enrollment-form" name="enrollment" method="POST" netlify data-netlify="true" @submit.prevent="submitForm">
            <input type="hidden" name="form-name" value="enrollment" />
            <div class="form-section">
              <label for="studentName">Nombre y apellidos del alumno/a *</label>
              <input 
                type="text" 
                id="studentName" 
                name="studentName"
                v-model="form.studentName" 
                placeholder="Tu respuesta" 
                required
              >
            </div>

            <div class="form-section">
              <label for="age">Edad *</label>
              <input 
                type="number" 
                id="age" 
                name="age"
                v-model="form.age" 
                placeholder="Tu respuesta" 
                required
              >
            </div>
			
            <div class="form-section">
              <label for="email">Correo *</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                v-model="form.email" 
                placeholder="Tu dirección de correo electrónico" 
                required
              >
            </div>
			
			<div class="form-section">
              <label for="phone">Teléfono de contacto *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                v-model="form.phone"
                placeholder="Tu número de teléfono"
                required
              >
            </div>

            <div class="form-section">
              <label for="parentName">Nombre del padre/madre/tutor si es menor de edad</label>
              <input
                type="text"
                id="parentName"
                name="parentName"
                v-model="form.parentName"
                placeholder="Tu respuesta"
              >
            </div>

            <div class="form-section">
              <label for="parentPhone">Teléfono del padre/madre/tutor (si es distinto al de contacto)</label>
              <input
                type="tel"
                id="parentPhone"
                name="parentPhone"
                v-model="form.parentPhone"
                placeholder="Número de teléfono del padre/madre/tutor"
              >
            </div>

            <div class="form-section">
              <label>Selecciona la asignatura: *</label>
              <div class="radio-group">
                <label class="radio-option">
                  <input
                    type="radio"
                    name="selectedPlan"
                    v-model="form.selectedPlan"
                    value="Solo Piano: 72€/mes"
                    required
                  >
                  <span>Solo Piano: 72€/mes</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    name="selectedPlan"
                    v-model="form.selectedPlan"
                    value="Piano + Lenguaje Musical: 80€/mes"
                    required
                  >
                  <span>Piano + Lenguaje Musical: 80€/mes</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    name="selectedPlan"
                    v-model="form.selectedPlan"
                    value="Preparación pruebas de acceso a Enseñanzas Básicas o Profesionales: 120€/mes (6 horas) o 80€/mes (4 horas)"
                    required
                  >
                  <span>Preparación pruebas de acceso a Enseñanzas Básicas o Profesionales: 120€/mes (6 horas) o 80€/mes (4 horas)</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    name="selectedPlan"
                    v-model="form.selectedPlan"
                    value="Preparación pruebas de acceso a Enseñanzas Superiores: 150€/mes (6 horas) o 100€/mes (4 horas)"
                    required
                  >
                  <span>Preparación pruebas de acceso a Enseñanzas Superiores: 150€/mes (6 horas) o 100€/mes (4 horas)</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    name="selectedPlan"
                    v-model="form.selectedPlan"
                    value="Refuerzo de Lenguaje Musical: 120€/mes (6 horas) o 80€/mes (4 horas)"
                    required
                  >
                  <span>Refuerzo de Lenguaje Musical: 120€/mes (6 horas) o 80€/mes (4 horas)</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    name="selectedPlan"
                    v-model="form.selectedPlan"
                    value="Bachillerato de Artes o EVAU: 150€/mes (6 horas) o 100€/mes (4 horas)"
                    required
                  >
                  <span>Bachillerato de Artes o EVAU: 150€/mes (6 horas) o 100€/mes (4 horas)</span>
                </label>
              </div>
            </div>

            <div class="form-section">
              <label>Selecciona las horas al mes: *</label>
              <div class="radio-group">
                <label class="radio-option">
                  <input
                    type="radio"
                    name="hoursPerMonth"
                    v-model="form.hoursPerMonth"
                    value="4 horas/mes"
                    required
                  >
                  <span>4 horas/mes</span>
                </label>
                <label class="radio-option">
                  <input
                    type="radio"
                    name="hoursPerMonth"
                    v-model="form.hoursPerMonth"
                    value="6 horas/mes"
                    required
                  >
                  <span>6 horas/mes</span>
                </label>
              </div>
            </div>

            <div class="form-section">
              <label>Horario: *</label>
              <input 
                type="text" 
                v-model="form.selectedSchedule" 
                placeholder="Escribe aquí tus horas disponibles (ej: Lunes 18:00-19:00, Miércoles 17:00-18:00)"
                required
              >
            </div>
            <div class="form-section">
              <label for="startDate">Fecha de inicio *</label>
              <div class="date-input-container">
                <input 
                  type="date" 
                  id="startDate" 
                  v-model="form.startDate" 
                  required
                >
              </div>
            </div>

            <div class="form-actions">
              <button type="submit" class="btn-submit">Enviar formulario</button>
            </div>
          </form>
        </div>
      </div>
    </section>
    
    <Modal 
      :isVisible="showModal" 
      title="Matrícula enviada" 
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
  name: 'Enrollment',
  components: {
    Modal
  },
  data() {
    return {
      isSubmitting: false,
      showModal: false,
      modalMessage: '',
      form: {
        email: '',
        studentName: '',
        parentName: '',
        age: '',
        phone: '',
        parentPhone: '',
        hoursPerMonth: '',
        selectedPlan: '',
        selectedSchedule: '',
        startDate: ''
      }
    }
  },
  created() {
    setPageMeta(
      'Matrícula | Tu Aula Musical',
      'Formulario de matrícula de Tu Aula Musical en Córdoba: Piano, Lenguaje Musical, Bachillerato de Artes, EVAU y preparación para pruebas de acceso al Conservatorio (Educación Vocal, Canto, Enseñanzas Superiores y Flamencología).'
    )
  },
  methods: {
    async submitForm() {
      this.isSubmitting = true
      
      try {
        // Create FormData for Netlify Forms
        const formData = new FormData()
        formData.append('form-name', 'enrollment')
        formData.append('email', this.form.email)
        formData.append('studentName', this.form.studentName)
        formData.append('parentName', this.form.parentName)
        formData.append('age', this.form.age)
        formData.append('phone', this.form.phone)
        formData.append('parentPhone', this.form.parentPhone)
        formData.append('selectedPlan', this.form.selectedPlan)
        formData.append('hoursPerMonth', this.form.hoursPerMonth)
        formData.append('selectedSchedule', this.form.selectedSchedule)
        formData.append('startDate', this.form.startDate)
        
        // Submit to Netlify Forms
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        track('form_submit', {
          form_name: 'enrollment',
          hours_per_month: this.form.hoursPerMonth,
          selected_plan: this.form.selectedPlan
        })

        this.modalMessage = 'Tu solicitud ha sido registrada. En breve me pondré en contacto contigo.'
        this.showModal = true

        // Reset form
        this.form = {
          email: '',
          studentName: '',
          parentName: '',
          age: '',
          phone: '',
          parentPhone: '',
          hoursPerMonth: '',
          selectedPlan: '',
          selectedSchedule: '',
          startDate: ''
        }
      } catch (error) {
        console.error('Error:', error)
        this.modalMessage = 'Error al enviar la matrícula. Por favor, inténtalo de nuevo.'
        this.showModal = true
      } finally {
        this.isSubmitting = false
      }
    }
  }
}
</script>

<style>
@import '../assets/css/enrollment.css';
</style>
