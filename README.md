# 🎵 Tu Aula Musical - Plataforma de Clases de Música

> Aplicación web desarrollada con Vue.js para gestión de clases particulares de música.

---

## 📋 Descripción del Proyecto

**Tu Aula Musical** es una plataforma web completa que permite a los usuarios conocer y contactar para diferentes tipos de clases de música de manera intuitiva y eficiente.

### ✨ Características Principales

- **Interfaz responsive** adaptada a todos los dispositivos
- **Sistema de contacto completo** con formularios de matrícula
- **Catálogo interactivo** de clases disponibles
- **Integración con WhatsApp** para contacto directo
- **Integración con servicios externos** (Netlify Forms)
- **Navegación fluida** entre páginas

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Vue.js 3, Vue Router 4
- **Estilos**: CSS3 con diseño responsive
- **Formularios**: Integración con Netlify Forms
- **Despliegue**: Netlify

## 📦 Requisitos Previos

- Node.js 14+
- npm o yarn
- Git

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone [URL_DEL_REPOSITORIO]
cd tu-aula-musical
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run serve
```

### 4. Construir para producción
```bash
npm run build
```

### 5. Probar build localmente
```bash
npx serve -s dist -l 8080
```

## 🌐 Despliegue en Netlify

El proyecto está configurado para despliegue automático en Netlify:

1. **Conectar repositorio** a Netlify
2. **Configuración automática**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 14+
3. **Formularios configurados**:
   - Formulario de contacto: Guarda automáticamente en Netlify Forms
   - Formulario de matrícula: Guarda automáticamente en Netlify Forms
4. **Despliegue automático** en cada push a main

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── AppHeader.vue   # Navegación principal
│   ├── AppFooter.vue   # Pie de página
│   └── WhatsAppButton.vue
├── views/              # Páginas principales
│   ├── Home.vue        # Página principal
│   ├── Piano.vue       # Clases de piano
│   ├── Canto.vue       # Clases de canto
│   ├── MusicaMovimiento.vue # Clases de música y movimiento
│   ├── PruebasConservatorio.vue # Preparación para conservatorio
│   ├── Contacto.vue    # Formulario de contacto
│   ├── Matricula.vue   # Formulario de matrícula
│   └── PreguntasFrecuentes.vue # FAQ
├── router/             # Configuración de rutas
├── assets/             # Recursos estáticos
│   └── css/
└── App.vue            # Componente principal
```

## 🔧 Configuración

- **Netlify Forms**: Configurado para procesamiento automático de formularios
- **Vue Router**: Rutas configuradas para SPA
- **Responsive Design**: Breakpoints optimizados para móviles y desktop

---

**Desarrollado por**: Estefanía Canales  
**Fecha**: 30/09/2025

