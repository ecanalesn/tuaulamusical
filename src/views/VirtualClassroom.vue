<template>
  <div class="virtual-classroom-page">
    <section class="hero-section">
      <div class="hero-banner">
        <h1>Aula Virtual</h1>
      </div>
    </section>

    <section class="content-section">
      <div class="container">
        <div class="virtual-classroom-container">
          <div class="classroom-info">
            <h1>Accede a tu Aula Virtual</h1>

            <p>Este es tu espacio de aprendizaje online. Aquí tienes materiales exclusivos, ejercicios interactivos, partituras digitales y recursos multimedia para seguir practicando entre clase y clase.</p>

            <p>Todo el contenido está organizado por niveles y asignaturas, para que accedas fácilmente a lo que necesitas en cada etapa de tu curso. Podrás descargar materiales, practicar con ejercicios y escuchar ejemplos musicales.</p>
            
            <div class="access-options">
              <div class="access-card">
                <div class="card-icon">
                  <i class="fas fa-graduation-cap"></i>
                </div>
                <h3>Estudiantes</h3>
                <p>Accede con tu cuenta de estudiante para consultar tus cursos, descargar materiales complementarios y realizar actividades interactivas.</p>
                <a href="https://tuaulamusical.moodiy.com/login/index.php" target="_blank" class="btn-access">
                  Iniciar sesión
                </a>
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
  name: 'VirtualClassroom',
  created() {
    setPageMeta(
      'Aula Virtual | Tu Aula Musical',
      'Accede a la plataforma online de Tu Aula Musical: materiales exclusivos, ejercicios interactivos, grabaciones y partituras digitales para complementar tus clases.'
    )
  }
}
</script>

<style>
@import '../assets/css/virtual-classroom.css';
</style>