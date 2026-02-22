<template>
  <header class="header-wrap">
    <div class="header-container">
      <!-- Logo Section -->
      <div class="logo-section">
        <router-link to="/" class="logo-link">
          <div class="logo-container">
            <img src="/images/logo.png" alt="Tu Aula Musical Logo" class="logo-img">
          </div>
        </router-link>
      </div>
      
      <!-- Navigation Section -->
      <nav class="main-navigation">
        <ul class="nav-menu" :class="{ active: menuOpen }">
          <li class="nav-item">
            <router-link to="/" class="nav-link" @click="closeMenu">Inicio</router-link>
          </li>
          <li class="nav-item has-dropdown" @mouseenter="showDropdown" @mouseleave="hideDropdown">
            <a href="#" class="nav-link" @click.prevent>Clases</a>
            <ul class="dropdown-menu" :class="{ show: dropdownOpen }" @mouseenter="showDropdown" @mouseleave="hideDropdown">
              <li class="dropdown-item">
                <router-link to="/musica-y-movimiento" class="dropdown-link" @click="closeMenu">Música y Movimiento</router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/piano" class="dropdown-link" @click="closeMenu">Piano</router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/canto" class="dropdown-link" @click="closeMenu">Canto</router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/lenguaje-musical" class="dropdown-link" @click="closeMenu">Lenguaje Musical</router-link>
              </li>
              <li class="dropdown-item">
                <router-link to="/pruebas-conservatorio" class="dropdown-link" @click="closeMenu">Pruebas Conservatorio</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/precios" class="nav-link" @click="closeMenu">Precios</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/preguntas-frecuentes" class="nav-link" @click="closeMenu">Preguntas Frecuentes</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/matricula" class="nav-link" @click="closeMenu">Matrícula</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/aula-virtual" class="nav-link" @click="closeMenu">Aula Virtual</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contacto" class="nav-link" @click="closeMenu">Contacto</router-link>
          </li>
        </ul>
        
        <!-- Hamburger Menu Toggle -->
        <div class="nav-toggle" @click="toggleMenu" :class="{ active: menuOpen }">
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuOpen: false,
      dropdownOpen: false,
      dropdownTimeout: null
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      // Close dropdown when toggling menu
      if (this.menuOpen) {
        this.dropdownOpen = false
      }
    },
    showDropdown() {
      if (this.dropdownTimeout) {
        clearTimeout(this.dropdownTimeout)
        this.dropdownTimeout = null
      }
      this.dropdownOpen = true
    },
    hideDropdown() {
      this.dropdownTimeout = setTimeout(() => {
        this.dropdownOpen = false
      }, 150)
    },
    closeMenu() {
      this.menuOpen = false
      this.dropdownOpen = false
    }
  },
  mounted() {
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.main-navigation')) {
        this.menuOpen = false
        this.dropdownOpen = false
      }
    })
    
    // Close menu when window is resized to desktop
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        this.menuOpen = false
        this.dropdownOpen = false
      }
    })
  }
}
</script>

<style scoped>
.header-wrap {
  background-color: var(--background-white);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  padding-bottom: 20px;
  margin-bottom: 0;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
}

.logo-section {
  display: flex;
  align-items: center;
  margin-left: -15px; /* Slightly more to the left */
}

.logo-img {
  height: 110px;
  width: auto;
  object-fit: contain;
  filter: brightness(1.0) contrast(1.05);
  transition: all 0.3s ease;
  image-rendering: -webkit-optimize-contrast;
  image-rendering: auto;
}

.logo-link:hover .logo-img {
  transform: none;
}

.logo-link {
  text-decoration: none;
  display: block;
}

.main-navigation {
  display: flex;
  align-items: center;
  width: auto;
  justify-content: flex-end;
  margin-top: 0;
  position: relative;
}

.nav-toggle {
  display: none; /* Hidden on desktop */
  flex-direction: column;
  cursor: pointer;
  gap: 5px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.hamburger-line {
  width: 25px;
  height: 3px;
  background-color: var(--dark-text);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.nav-toggle.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(6px, 6px);
}

.nav-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.nav-toggle.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(6px, -6px);
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  flex-wrap: nowrap;
  border-top: 1px dotted #ddd;
  border-bottom: 1px dotted #ddd;
  padding: 8px 0;
  position: relative;
}

.nav-item {
  position: relative;
  margin: 0;
}

.nav-link {
  color: #333;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 18px;
  padding: 3px;
  display: block;
  transition: 0.5s;
  text-decoration: none;
  position: relative;
  margin: 0 12px;
  text-transform: uppercase;
}

.nav-link:hover {
  color: var(--primary-turquoise);
  text-decoration: none;
}


.nav-link.router-link-active {
  color: var(--primary-turquoise);
  font-weight: 500;
}





.dropdown-menu {
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 8px 0;
  min-width: 220px;
  z-index: 101;
  border-radius: 6px;
  top: calc(100% + 10px);
  left: 0;
  border: 1px solid #eee;
  margin-top: 5px;
}

.has-dropdown:hover .dropdown-menu,
.dropdown-menu.show {
  display: block;
}

.has-dropdown .dropdown-menu:hover {
  display: block;
}

.dropdown-item {
  padding: 0;
}

.dropdown-link {
  color: #333;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  font-size: 14px;
  display: block;
  padding: 10px 20px;
  white-space: nowrap;
  transition: all 0.3s ease;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.dropdown-link:hover {
  color: white;
  background-color: var(--primary-turquoise);
  text-decoration: none;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .nav-link {
    font-size: 16px;
    margin: 0 10px;
  }
}

@media (max-width: 1024px) {
  .header-container {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px 0 15px;
  }
  
  .logo-section {
    order: 1;
  }
  
  .main-navigation {
    order: 2;
    margin-top: 0;
    width: auto;
    position: relative;
  }
  
  .nav-toggle {
    display: flex;
    z-index: 1001; /* Above mobile menu */
  }

  .nav-menu {
    flex-direction: column;
    position: fixed;
    top: 80px; /* Height of the header */
    left: 0;
    width: 100%;
    height: calc(100vh - 80px); /* Fill remaining screen */
    background-color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    padding: 20px 0;
    display: none;
    border: none;
    z-index: 1000;
    overflow-y: auto;
    border-top: 1px solid #eee;
  }

  .nav-menu.active {
    display: flex;
  }

  .nav-item {
    margin: 0;
    text-align: left;
    border-bottom: 1px solid #eee;
    width: 100%;
  }

  .nav-item:last-child {
    border-bottom: none;
  }

  .nav-link {
    padding: 15px 20px;
    font-size: 16px;
    display: block;
    width: 100%;
    text-align: left;
    text-decoration: none;
  }

  .dropdown-menu {
    position: static;
    box-shadow: none;
    width: 100%;
    padding: 0;
    background-color: #f8f9fa;
    border-radius: 0;
    border: none;
    border-top: 1px solid #eee;
    margin-top: 0;
  }

  .dropdown-item {
    padding: 0;
  }

  .dropdown-link {
    padding: 12px 40px;
    font-size: 14px;
    display: block;
    width: 100%;
    text-align: left;
    text-decoration: none;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 8px 10px 0 10px;
  }
  
  .logo-img {
    height: 95px;
  }
  
  .nav-toggle {
    right: -5px;
  }
  
  .hamburger-line {
    width: 20px;
    height: 2px;
  }
  
  .nav-link {
    padding: 12px 15px;
    font-size: 15px;
  }
  
  .dropdown-link {
    padding: 10px 30px;
    font-size: 13px;
  }
}


</style>

