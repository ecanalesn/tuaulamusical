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
          <form class="enrollment-form" name="enrollment" method="POST" data-netlify="true" @submit.prevent="submitForm">
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
  </div>
</template>

<script>
export default {
  name: 'Enrollment',
  data() {
    return {
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
    submitForm() {
      // Here the form submission would be processed
      console.log('Form submitted:', this.form)
      alert('¡Matrícula enviada correctamente! En breve me pondré en contacto contigo.')
    }
  }
}
</script>

<style>
@import '../assets/css/enrollment.css';
</style>