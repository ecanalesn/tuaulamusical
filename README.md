# 🎵 Tu Aula Musical: Web de Clases Particulares de Música

[![Netlify](https://img.shields.io/badge/Netlify-desplegado-00c7b7)](https://tuaulamusical.com)
![Vue 3](https://img.shields.io/badge/Vue-3-42b883)
![Vue Router 4](https://img.shields.io/badge/Vue%20Router-4-42b883)
![Vue CLI 5](https://img.shields.io/badge/Vue%20CLI-5-35495e)
![Google Tag Manager](https://img.shields.io/badge/GTM%20%2B%20GA4-Consent%20Mode%20v2-246fdb)

> 🌐 [**Ver la web**](https://tuaulamusical.com): desplegada en Netlify.
>
> 📊 [**Ver el plan de medición**](docs/plan-medicion.md): eventos de negocio, dónde se disparan, sus parámetros y qué objetivo miden.

## 📋 Descripción del Proyecto
Tu Aula Musical es la web de mi proyecto de **clases particulares de música** en Córdoba: piano, preparación de las pruebas de acceso al Conservatorio (de Enseñanzas Básicas a Superiores), refuerzo de Lenguaje Musical y Bachillerato de Artes o EVAU. Su objetivo es presentar la oferta de clases y los precios, resolver las dudas más habituales y convertir las visitas en contactos y matrículas.

> [!NOTE]
> Es una single-page app sin backend: los precios y los horarios se cargan desde ficheros JSON y los formularios se procesan con Netlify Forms. Para que los buscadores reciban el contenido completo, cada página se **prerenderiza** como HTML propio durante el build.

## ✨ Características Principales
- 🎹 **Catálogo de Clases**: una página por tipo de clase, con su plan de precios correspondiente.
- 💶 **Precios y Horarios Editables**: planes y horas libres cargados desde `pricing.json` y `schedule.json`, que se actualizan sin recompilar.
- 📝 **Formularios de Contacto y Matrícula**: con Netlify Forms, selección de asignatura y horas al mes, validación y confirmación de envío.
- 💬 **Contacto Directo**: botón flotante de WhatsApp y enlaces de teléfono.
- 🎓 **Aula Virtual**: acceso a la plataforma Moodle donde el alumnado tiene sus contenidos.
- 🔍 **SEO por Ruta**: páginas prerenderizadas, título, meta description y URL canónica propios en cada vista, sitemap y datos estructurados JSON-LD (MusicSchool, LocalBusiness y FAQPage).
- 🍪 **Consentimiento de Cookies**: banner propio con Consent Mode v2 y consentimiento denegado por defecto.
- 📊 **Medición de Conversiones**: eventos de negocio en GA4 a través de Google Tag Manager.
- ↪️ **Redirecciones 301**: las URL antiguas se redirigen a las nuevas para conservar el posicionamiento.
- 📱 **Diseño Responsive**: adaptado a móvil, tablet y escritorio.

## 🛠️ Tecnologías Utilizadas
- **Frontend**: Vue 3 (Options API) y Vue Router 4, con Vue CLI 5 (webpack)
- **Estilos**: CSS3 con variables y una hoja por vista; tipografías Playfair Display y Lora
- **SEO**: prerenderizado con Puppeteer (`@prerenderer/webpack-plugin`), JSON-LD, sitemap y URL canónicas
- **Analítica**: Google Tag Manager y Google Analytics 4 con Consent Mode v2
- **Formularios**: Netlify Forms (envío con `fetch` y formularios espejo estáticos)
- **Recursos externos**: Google Fonts, Font Awesome 6 y animate.css por CDN
- **Calidad de código**: ESLint (estándar de Vue)
- **Despliegue**: Netlify
- **Control de versiones**: Git

## 📦 Requisitos Previos
- Node.js (LTS) y npm
- Git

## 📁 Estructura del Proyecto
```text
tuaulamusical/
├── docs/
│   └── plan-medicion.md     # Plan de medición: eventos, parámetros y objetivos
├── public/
│   ├── data/
│   │   ├── pricing.json     # Planes de precios
│   │   └── schedule.json    # Horarios libres de la portada
│   ├── index.html           # Consent Mode por defecto, JSON-LD y formularios espejo de Netlify
│   ├── sitemap.xml          # Rutas indexables
│   ├── robots.txt
│   ├── _redirects           # Fallback de la SPA y redirecciones 301 (Netlify)
│   └── .htaccess            # Equivalente para Apache
├── src/
│   ├── components/          # Cabecera, pie, precios por clase, WhatsApp, modal y banner de cookies
│   ├── views/               # Una vista por página (portada, clases, precios, FAQ, contacto, matrícula, aula virtual)
│   ├── router/              # Rutas con slugs en español y page_view virtual en cada navegación
│   ├── utils/
│   │   ├── seo.js           # Título, meta description y URL canónica por vista
│   │   ├── track.js         # Envío de eventos de negocio al dataLayer
│   │   └── date.js          # Mes y año para los avisos de actualización
│   ├── assets/css/          # Estilos globales y una hoja por vista
│   └── App.vue              # Cabecera, vista activa, pie y botón de WhatsApp
└── vue.config.js            # Prerenderizado de las rutas en el build
```

## 🗄️ Datos
No hay base de datos. Los precios y los horarios están en `public/data/` y se cargan al abrir la página, así que se pueden cambiar sin volver a compilar. Los textos de cada clase están en su vista, y las rutas que se prerenderizan están en `vue.config.js`, que debe estar en sintonía con `src/router/index.js` y `public/sitemap.xml`.

## 📊 Analítica y Medición
- **Consentimiento denegado por defecto**: se define en el `<head>` de `public/index.html`, antes de cargar GTM, para que ninguna etiqueta se dispare sin la decisión del usuario.
- **Banner de cookies propio**: sin librerías de terceros. Al aceptar o rechazar actualiza el consentimiento y guarda la elección en el navegador.
- **Páginas vistas virtuales**: al ser una SPA no hay recarga entre páginas, así que el router envía un `page_view` al dataLayer en cada navegación, con el título ya actualizado.
- **Eventos de negocio**: clic en WhatsApp, envío de los formularios de contacto y matrícula, clic en el teléfono y visualización de los precios, que se detecta al entrar en pantalla.
- **Comprobación de consentimiento**: todas las etiquetas de evento en GTM exigen `analytics_storage`; sin consentimiento no se envía nada a GA4.

El detalle de cada evento está en el [plan de medición](docs/plan-medicion.md).

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
Web disponible en `http://localhost:8080`.

### 4. Generar la build de producción
```bash
npm run build      # genera dist/ con cada página prerenderizada como HTML propio
npm run lint       # revisión del código con ESLint
```

## 🌐 Despliegue en Netlify
Netlify ejecuta `npm run build` y publica la carpeta `dist`. Durante el build, Puppeteer prerenderiza cada ruta y la guarda como HTML propio (`piano.html`, `precios.html`…), y `_redirects` se encarga del fallback de la SPA y de las redirecciones 301 de las URL antiguas.

Los formularios de contacto y matrícula tienen una copia estática en `public/index.html` para que Netlify los detecte; si se añade un campo, hay que replicarlo también en el componente Vue.

**Desarrollado por**: Estefanía Canales
**Fecha**: 11/11/2026
