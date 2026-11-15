# Autoevaluación contra la rúbrica SEO y AEO

Fecha de la revisión: 15 de noviembre de 2026. Sitio: https://ynomix.com (7 páginas). Cada criterio se valora con 0, 1 o 2 puntos. Las verificaciones se hicieron sobre el HTML publicado con scripts propios y con Lighthouse móvil.

## SEO

| # | Criterio | Estado | Evidencia |
|---|---|---|---|
| 1 | Título único de 50–60 caracteres | Cumple | Las 7 páginas tienen título propio de 50 a 58 caracteres. Inicio: "YnomiX: herramientas digitales para manejar tu dinero" (53). |
| 2 | Descripción de 140–160 y etiquetas para compartir | Cumple | Descripciones de 143 a 157 caracteres en las 7 páginas, con og:title, og:description y og:image. |
| 3 | Estructura de encabezados | Cumple | Un solo H1 por página y de 4 a 9 H2; sin saltos de nivel (Lighthouse: orden de encabezados correcto). |
| 4 | Tema claro y contenido suficiente | Cumple | Entre 350 y 948 palabras por página; el tema aparece en el título, el H1 y el primer párrafo. |
| 5 | Indexable | Cumple | Sin noindex; canonical en las 7 páginas; HTTPS; `lang="es"`. |
| 6 | robots.txt y sitemap.xml | Cumple | Ambos existen; el sitemap lista las 7 páginas y el robots.txt permite el sitio (`User-agent: *` con `Allow: /`). Ver `archivos-publicos/`. |
| 7 | Imágenes | Cumple | Las páginas no usan etiquetas `<img>` con contenido, así que no hay imágenes sin `alt`; el peso total de la página inicial es de 175 KiB. |
| 8 | Velocidad (Lighthouse móvil) | Cumple | Rendimiento 98, LCP 2.0 s, CLS 0. Informe completo en `lighthouse-movil-2026-11-14.html`. |
| 9 | Móvil | Cumple | Meta viewport presente; Lighthouse aprueba el tamaño de los elementos táctiles (`target-size`). |
| 10 | Enlaces y URLs | Cumple | Las 7 URLs responden 200, son cortas y en minúsculas; el menú y los botones llevan a páginas internas; sin textos "clic aquí". |

## AEO

| # | Criterio | Estado | Evidencia |
|---|---|---|---|
| 1 | Respuesta directa arriba | Cumple | Cada página abre con un párrafo que dice qué es, para quién y qué ofrece. |
| 2 | Encabezados en forma de pregunta | Cumple | H2 como "¿Cuánto cuesta Qadrax?" con la respuesta debajo. |
| 3 | Preguntas frecuentes | Cumple | Sección visible de FAQ en las páginas de producto y en el inicio. |
| 4 | Datos estructurados | Cumple | JSON-LD con Organization, WebSite, FAQPage, SoftwareApplication, BreadcrumbList y AboutPage, coherente con el contenido visible. |
| 5 | Contenido legible sin JavaScript | Cumple | El texto principal ya viene en el HTML inicial (comprobado con `curl`). |
| 6 | Acceso para bots de IA | **A medias** | `llms.txt` publicado (bonus). El robots.txt permite los rastreadores de búsqueda y respuestas (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot) pero bloquea GPTBot, ClaudeBot y Google-Extended por defecto de la plataforma; el AI Builder no permite editarlo. Caso escalado al soporte de Hostinger, que confirmó que no se puede cambiar desde el AI Builder. Ver `decisiones.md`. |
| 7 | Formato fácil de extraer | Cumple | Párrafos cortos, listas, tablas de precios y pasos numerados. |
| 8 | Identidad clara y consistente | Cumple | Mismo nombre, ubicación y correo en todas las páginas y en el schema. Sin enlaces a redes todavía, porque los perfiles no existen. |
| 9 | Datos concretos | Cumple | Precios en USD, días de prueba, días de envío de InfoX y fecha de actualización de las tasas en ConvertiX. |
| 10 | Señales de confianza | Cumple | Sección "Quién está detrás", página Acerca de y contacto, fecha de actualización. Sin testimonios inventados. |

## Otras comprobaciones

- **Google Search Console:** propiedad verificada, sitemap enviado e indexación solicitada.
- **Bing Webmaster Tools:** sitio importado; sitemap con 7 URLs descubiertas. Un primer Site Scan terminó con 0 errores y 0 advertencias, pero solo recorrió 2 páginas porque los botones de producto eran enlaces `mailto:`; se corrigió y se volvió a lanzar.
- **Google Business Profile:** creado y verificado.
- **Pendiente menor:** el contraste de color de los números de las listas (accesibilidad 94).
