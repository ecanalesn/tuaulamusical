# Plan de medición — Tu Aula Musical

GTM: `GTM-M3Z9Z4HC`. Todos los eventos se envían al `dataLayer` (ver `src/utils/track.js` y `src/router/index.js`) y se recogen en GTM con un activador de Evento personalizado por cada uno, con la comprobación adicional de consentimiento `analytics_storage` activada. Sin consentimiento, el evento llega al dataLayer pero la etiqueta GA4 no dispara.

| Evento | Dónde se dispara | Parámetros | Objetivo de negocio que mide |
|---|---|---|---|
| `page_view` | `router.afterEach` (todas las rutas), tras `nextTick` para capturar el título ya actualizado | `page_path`, `page_location`, `page_title` | Qué páginas se visitan y en qué orden; entender el recorrido antes de contactar o matricularse |
| `whatsapp_click` | Botón flotante de WhatsApp, al pulsar "Abrir chat" | `origin` (ruta desde la que se abrió) | Intención de contacto directo por WhatsApp; qué páginas generan más consultas informales |
| `form_submit` | Envío del formulario de Contacto (tras el POST a Netlify) | `form_name: 'contact'`, `subject` | Volumen y motivo de consultas (clases, precios, matrícula); lead cualificado por interés declarado |
| `form_submit` | Envío del formulario de Matrícula (tras el POST a Netlify) | `form_name: 'enrollment'`, `selected_plan`, `hours_per_month` | Conversión final (matrícula); qué asignatura y cuántas horas al mes se eligen más, para priorizar oferta |
| `phone_click` | Enlace `tel:` en el footer (todas las páginas) y en Contacto | `origin` (ruta desde la que se pulsó) | Intención de contacto directo por teléfono; canal alternativo al formulario/WhatsApp |
| `pricing_view` | Sección de precios de Home (`#pricing`), página de Precios, y bloque de precio de cada página de clase (`ClassPricing.vue`). En Home y en las páginas de clase, la primera vez que entra en el viewport (`IntersectionObserver`, umbral 30%); en Precios, al cargar la página | `origin` (`Home`, `Precios` o el nombre de la ruta de la clase) | Interés real en precios (no solo clics en el menú "Precios"); paso previo típico a matrícula. `origin` indica desde qué clase llega ese interés |

## Notas

- Los eventos de `form_submit` comparten nombre pero se distinguen por `form_name`; en GTM basta una sola etiqueta GA4 con `event_name` fijo y ese parámetro reenviado, o dos etiquetas si se quiere separar el reporting desde el origen.
- `page_view` no usa el evento automático de la etiqueta Google (`send_page_view: false` en la config): la primera carga la cubre la propia etiqueta de configuración, y las navegaciones internas de la SPA las cubre este evento virtual.
- `pricing_view` se dispara como máximo una vez por página visitada, pero puede llegar varias veces en una misma sesión si el visitante pasa por varias clases; usa `origin` para desglosarlo.
- Los parámetros deben registrarse en GTM como variables de capa de datos (`page_path`, `page_title`, `origin`, `form_name`, `subject`, `selected_plan`, `hours_per_month`) y añadirse como parámetros de evento en GA4 → Configurar → Definiciones personalizadas si se quieren usar en informes/exploraciones.
