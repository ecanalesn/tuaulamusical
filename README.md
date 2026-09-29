# 🎵 Tu Aula Musical - Plataforma de Clases de Música

> Sitio web informativo/de marketing desarrollado con Vue.js para una academia de música en Córdoba, España.

---

## 📋 Descripción del Proyecto

**Tu Aula Musical** es un sitio web que permite a los usuarios conocer y contactar para diferentes clases de música (piano, preparación de las pruebas de acceso al Conservatorio en Enseñanzas Básicas, Educación Vocal, Profesionales y Superiores, refuerzo de Lenguaje Musical, y Bachillerato de Artes o EVAU) de manera intuitiva y eficiente. Es un sitio estático (sin backend, sin autenticación ni base de datos), desplegado como SPA en Netlify.

### ✨ Características Principales

- **Interfaz responsive** adaptada a todos los dispositivos
- **Sistema de contacto y matrícula** mediante formularios
- **Catálogo de clases disponibles** (piano, pruebas de acceso al Conservatorio de Básicas a Superiores, refuerzo de Lenguaje Musical, Bachillerato de Artes o EVAU)
- **Página de precios** con planes cargados desde un JSON estático, más el precio del plan correspondiente en cada página de clase
- **Formulario de matrícula** con selección de asignatura y de horas al mes
- **Integración con WhatsApp** para contacto directo
- **Integración con Netlify Forms** para el procesamiento de formularios
- **Consentimiento de cookies** (Consent Mode v2) con banner propio antes de cargar cualquier etiqueta de analítica
- **Medición de eventos de negocio** (WhatsApp, formularios, teléfono, visualización de precios) vía Google Tag Manager
- **SEO por ruta**: título/meta description y URL canónica propios en cada vista, sitemap, y datos estructurados (JSON-LD) para MusicSchool y LocalBusiness, más FAQPage solo en Preguntas Frecuentes
- **Navegación fluida** entre páginas mediante Vue Router

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Vue 3 (Options API), Vue Router 4, generado con Vue CLI (webpack)
- **Estilos**: CSS3 con diseño responsive (una hoja de estilos por vista, sin scoping). Paleta azul petróleo con acentos dorados definida con variables en `main.css`; tipografías Playfair Display (títulos) y Lora (texto)
- **Formularios**: Netlify Forms (envío vía `fetch` + formularios espejo estáticos)
- **Analítica**: Google Tag Manager + Google Analytics 4, con Consent Mode v2 (consentimiento por defecto denegado, actualizado al aceptar/rechazar cookies) y medición de eventos de negocio (ver [docs/plan-medicion.md](docs/plan-medicion.md))
- **Recursos externos vía CDN**: Google Fonts, Font Awesome 6, animate.css
- **Despliegue**: Netlify

## 📦 Requisitos Previos

- Node.js (LTS)
- npm o yarn
- Git

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/ecanalesn/tuaulamusical.git
cd tuaulamusical
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run serve
```
Servidor de desarrollo en `http://localhost:8080` (abre el navegador automáticamente).

### 4. Construir para producción
```bash
npm run build
```
Genera el build de producción en `dist/`.

### 5. Probar build localmente
```bash
npx serve -s dist -l 8080
```

### 6. Lint
```bash
npm run lint
```

> No hay suite de tests ni test runner configurado en este repositorio.

## 🌐 Despliegue en Netlify

El proyecto está configurado para despliegue automático en Netlify:

1. **Conectar repositorio** a Netlify
2. **Configuración automática**:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Formularios configurados** (Netlify Forms, con formularios espejo estáticos en `public/index.html`):
   - Formulario de contacto (`Contact.vue`)
   - Formulario de matrícula (`Enrollment.vue`)
4. **Despliegue automático** en cada push a main

## 📁 Estructura del Proyecto

```
public/
├── data/
│   ├── pricing.json     # Planes de precios (consumidos por Prices.vue, Home.vue y ClassPricing.vue en runtime)
│   └── schedule.json    # Horarios libres mostrados en Home.vue (editable sin recompilar)
├── index.html           # Formularios espejo de Netlify, JSON-LD (MusicSchool, LocalBusiness), meta tags por defecto
├── sitemap.xml          # Rutas indexables (se mantiene a mano)
├── _redirects            # Fallback SPA + redirecciones 301 de URLs antiguas (Netlify)
└── .htaccess              # Fallback SPA + redirects legacy (Apache, vestigial en Netlify)
src/
├── components/           # Componentes reutilizables
│   ├── AppHeader.vue     # Navegación principal (fixed)
│   ├── AppFooter.vue     # Pie de página
│   ├── Modal.vue         # Feedback de envío de formularios
│   ├── ClassPricing.vue  # Precio del plan correspondiente en cada página de clase
│   ├── WhatsAppButton.vue
│   └── CookieConsent.vue # Banner de cookies (Consent Mode v2)
├── views/                # Páginas principales (routing plano, vista = página)
│   ├── Home.vue
│   ├── Piano.vue
│   ├── ConservatoryTests.vue    # Pruebas Conservatorio (?nivel=basicas | ?nivel=superiores)
│   ├── MusicalLanguage.vue      # Refuerzo de Lenguaje Musical
│   ├── ArtsBaccalaureateEVAU.vue  # Bachillerato de Artes o EVAU (/bachillerato-artes-evau)
│   ├── Contact.vue              # Contacto
│   ├── Enrollment.vue           # Matrícula
│   ├── FrequentlyAskedQuestions.vue  # Preguntas Frecuentes (genera su JSON-LD FAQPage)
│   ├── Prices.vue               # Precios
│   └── VirtualClassroom.vue     # Aula Virtual
├── router/               # Configuración de rutas (slugs en español, vistas en inglés)
├── utils/
│   ├── seo.js            # setPageMeta(): título/meta description por vista; setCanonical(): URL canónica por ruta
│   ├── track.js          # track(): helper de eventos de negocio al dataLayer (GTM/GA4)
│   └── date.js           # currentMonthYear(): "mes de año" para los avisos de actualización
├── assets/css/           # Una hoja de estilos por vista + estilos globales
└── App.vue               # Shell: AppHeader + router-view + AppFooter + WhatsAppButton
```

## 📊 Analítica y medición

Integración con **Google Tag Manager** (`GTM-M3Z9Z4HC`) + **Google Analytics 4**, con consentimiento gestionado por **Consent Mode v2**:

- **Consentimiento por defecto denegado**: definido en `public/index.html`, en el `<head>`, antes de cargar GTM — sin esto, cualquier etiqueta dispararía sin esperar la decisión del usuario.
- **Banner propio de cookies** (`CookieConsent.vue`, sin librerías de terceros): al aceptar o rechazar, llama a `gtag('consent', 'update', ...)` y persiste la elección en `localStorage`.
- **`page_view` virtual**: como es una SPA, no hay recarga de página en cada navegación — `router/index.js` empuja el evento al `dataLayer` en cada cambio de ruta (`router.afterEach`), con el `page_title` ya actualizado (`nextTick`).
- **Eventos de negocio** vía el helper `src/utils/track.js`: clic en WhatsApp, envío de formularios (contacto/matrícula), clic en teléfono y visualización de la sección de precios.
- Todas las etiquetas de evento en GTM llevan la comprobación de consentimiento adicional de `analytics_storage`: sin consentimiento, no se envía nada a GA4.
- Detalle de cada evento (dónde se dispara, parámetros, qué mide) en [docs/plan-medicion.md](docs/plan-medicion.md).

## 🔧 Configuración

- **Netlify Forms**: formularios espejo estáticos en `public/index.html`; al añadir un campo hay que replicarlo también en el componente Vue correspondiente.
- **Vue Router**: rutas configuradas para SPA, con slugs en español y scroll al inicio forzado en cada navegación.
- **Responsive Design**: breakpoints optimizados para móviles y desktop.

---

**Desarrollado por**: Estefanía Canales
**Fecha**: 29/09/2026
