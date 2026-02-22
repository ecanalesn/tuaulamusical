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
          <form class="enrollment-form" name="enrollment" method="POST" netlify data-netlify="true" @submit.prevent="submitForm">
            <input type="hidden" name="form-name" value="enrollment" />
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
              <label>Selecciona la clase: *</label>
              <div class="radio-group">
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name="selectedClass"
                    v-model="form.selectedClass" 
                    value="Música y movimiento"
                    required
                  >
                  <span>Música y movimiento</span>
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name="selectedClass"
                    v-model="form.selectedClass" 
                    value="Piano"
                    required
                  >
                  <span>Piano</span>
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name="selectedClass"
                    v-model="form.selectedClass" 
                    value="Canto"
                    required
                  >
                  <span>Canto</span>
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name="selectedClass"
                    v-model="form.selectedClass" 
                    value="Lenguaje Musical"
                    required
                  >
                  <span>Lenguaje Musical</span>
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name="selectedClass"
                    v-model="form.selectedClass" 
                    value="Preparación a las pruebas de acceso (Enseñanzas Básicas)"
                    required
                  >
                  <span>Preparación a las pruebas de acceso (Enseñanzas Básicas)</span>
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name="selectedClass"
                    v-model="form.selectedClass" 
                    value="Preparación a las pruebas de acceso (Enseñanzas Profesionales)"
                    required
                  >
                  <span>Preparación a las pruebas de acceso (Enseñanzas Profesionales)</span>
                </label>
              </div>
            </div>

            <div class="form-section">
              <label>Selecciona el plan: *</label>
              <div class="radio-group">
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name="selectedPlan"
                    v-model="form.selectedPlan" 
                    value="Andante (60€/mes)"
                    required
                  >
                  <span>Andante (60€/mes)</span>
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name="selectedPlan"
                    v-model="form.selectedPlan" 
                    value="Moderato (65€/mes)"
                    required
                  >
                  <span>Moderato (65€/mes)</span>
                </label>
                <label class="radio-option">
                  <input 
                    type="radio" 
                    name="selectedPlan"
                    v-model="form.selectedPlan" 
                    value="Allegro (90€/mes)"
                    required
                  >
                  <span>Allegro (90€/mes)</span>
                </label>
              </div>
            </div>

            <div class="form-section">
              <label>Horario: *</label>
              <input 
                type="text" 
                v-model="form.selectedSchedule" 
                placeholder="Escribe aquí tus horas disponibles (ej: Lunes 16:00-17:00, Martes 18:00-19:00)"
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
        selectedClass: '',
        selectedPlan: '',
        selectedSchedule: '',
        customSchedule: '',
        startDate: ''
      }
    }
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
        formData.append('selectedClass', this.form.selectedClass)
        formData.append('selectedPlan', this.form.selectedPlan)
        formData.append('selectedSchedule', this.form.selectedSchedule)
        formData.append('startDate', this.form.startDate)
        
        // Submit to Netlify Forms
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        })
        
        this.modalMessage = 'Tu solicitud ha sido registrada. En breve me pondré en contacto contigo.'
        this.showModal = true
        
        // Reset form
        this.form = {
          email: '',
          studentName: '',
          parentName: '',
          age: '',
          selectedClass: '',
          selectedPlan: '',
          selectedSchedule: '',
          customSchedule: '',
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