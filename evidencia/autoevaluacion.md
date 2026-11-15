# Autoevaluación contra la rúbrica SEO y AEO

Fecha de la revisión: 15 de noviembre de 2026. Sitio: https://ynomix.com (8 páginas: inicio, 5 productos, Acerca de y Política de privacidad). Cada criterio se valora con 0, 1 o 2 puntos. Las verificaciones se hicieron sobre el HTML publicado con scripts propios, con Lighthouse móvil y con el AI Visibility Checker de Hostinger.

## SEO

| # | Criterio | Estado | Evidencia |
|---|---|---|---|
| 1 | Título único de 50–60 caracteres | Cumple | Siete de las 8 páginas tienen título propio de 50 a 58 caracteres; la Política de privacidad tiene 31 ("Política de privacidad | YnomiX"). Inicio: "YnomiX: herramientas digitales para manejar tu dinero" (53). |
| 2 | Descripción de 140–160 y etiquetas para compartir | Cumple | Descripciones de 143 a 157 caracteres en las 8 páginas, con og:title, og:description y og:image. |
| 3 | Estructura de encabezados | Cumple | Un solo H1 por página y de 4 a 9 H2 en las 8; sin saltos de nivel (Lighthouse: orden de encabezados correcto). |
| 4 | Tema claro y contenido suficiente | Cumple | Entre 359 y 1.048 palabras por página; el tema aparece en el título, el H1 y el primer párrafo. |
| 5 | Indexable | Cumple | Sin noindex en las páginas reales; canonical en las 8; HTTPS; `lang="es"`. |
| 6 | robots.txt y sitemap.xml | Cumple | Ambos existen; el sitemap lista las 8 páginas con `<lastmod>` y el robots.txt permite el sitio (`User-agent: *` con `Allow: /`). Ver `archivos-publicos/`. |
| 7 | Imágenes | Cumple | Las páginas del sitio no usan etiquetas `<img>` con contenido; la única imagen es la ilustración de la página 404 (`assets/ynomix-404.webp`, 14 KB), con texto alternativo, dimensiones fijas y carga diferida. El peso total de la página inicial es de 175 KiB. |
| 8 | Velocidad (Lighthouse móvil) | Cumple | Medición final del 15 de nov. (sitio ya terminado): rendimiento 93, accesibilidad 100, buenas prácticas 100, SEO 100, LCP 2.6 s, CLS 0.023, TBT 0 ms (`lighthouse-movil-inicio-2026-11-15.html`). La medición del 14 de nov. había dado 98 / LCP 2.0 s / CLS 0 (`lighthouse-movil-2026-11-14.html`); la diferencia viene de una página inicial más larga (FAQ ampliada) y de la variación normal entre corridas. |
| 9 | Móvil | Cumple | Meta viewport presente; Lighthouse aprueba el tamaño de los elementos táctiles (`target-size`). |
| 10 | Enlaces y URLs | Cumple | Las 8 URLs responden 200, son cortas y en minúsculas; las URLs que no existen devuelven un 404 real (con `noindex`); el menú y los botones llevan a páginas internas; sin textos "clic aquí". |

## AEO

| # | Criterio | Estado | Evidencia |
|---|---|---|---|
| 1 | Respuesta directa arriba | Cumple | Cada página abre con un párrafo que dice qué es, para quién y qué ofrece. |
| 2 | Encabezados en forma de pregunta | Cumple | H2 como "¿Cuánto cuesta Qadrax?" con la respuesta debajo. |
| 3 | Preguntas frecuentes | Cumple | Sección visible de FAQ en el inicio (8 preguntas) y en las 5 páginas de producto; el marcado FAQPage coincide con el texto visible en las 6. |
| 4 | Datos estructurados | Cumple | JSON-LD con Organization, WebSite, FAQPage, SoftwareApplication, BreadcrumbList y AboutPage, coherente con el contenido visible. |
| 5 | Contenido legible sin JavaScript | Cumple | El texto principal ya viene en el HTML inicial (comprobado con `curl`). |
| 6 | Acceso para bots de IA | Cumple, con una nota | `llms.txt` publicado. El robots.txt permite los rastreadores de búsqueda y de respuestas (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot y otros) y declara `Content-Signal: search=yes, ai-input=yes, ai-train=no`. Solo bloquea los agentes de entrenamiento de modelos (GPTBot, ClaudeBot, Google-Extended, entre otros), por defecto de la plataforma y no editable desde el AI Builder (confirmado por el soporte de Hostinger). El AI Visibility Checker de Hostinger da **20/20 en permiso de rastreo**, incluido "AI crawlers are not blocked" 7/7. Ver `decisiones.md` y `evidencia/`. |
| 7 | Formato fácil de extraer | Cumple | Párrafos cortos, listas, tablas de precios y pasos numerados. |
| 8 | Identidad clara y consistente | Cumple | Mismo nombre, ubicación y correo en todas las páginas y en el schema. `sameAs` enlaza los dos perfiles oficiales que existen (YouTube y X) y el pie del sitio los muestra; sin teléfono público, que no se inventa. |
| 9 | Datos concretos | Cumple | Precios en USD, días de prueba, días de envío de InfoX y fecha de actualización de las tasas en ConvertiX. |
| 10 | Señales de confianza | Cumple | Sección "Quién está detrás", página Acerca de y contacto, Política de privacidad, fecha de actualización. Sin testimonios inventados. |

## Otras comprobaciones

- **Google Search Console:** propiedad verificada, sitemap enviado e indexación solicitada.
- **Bing Webmaster Tools:** sitio importado; sitemap con 7 URLs descubiertas. Un primer Site Scan terminó con 0 errores y 0 advertencias, pero solo recorrió 2 páginas porque los botones de producto eran enlaces `mailto:`; se corrigió y se volvió a lanzar. El segundo Site Scan (15 de noviembre de 2026) recorrió las **7 páginas** con **0 errores y 0 advertencias**.
- **Google Business Profile:** creado y verificado.
- **Lighthouse móvil (inicio, 15 de nov.):** 93 / 100 / 100 / 100 (rendimiento, accesibilidad, buenas prácticas, SEO); el contraste de las listas ya quedó resuelto (antes 94); Acerca de 93 en rendimiento y 100 en accesibilidad, buenas prácticas y SEO (15 de nov.).
- **AI Visibility Checker de Hostinger (marcador):**

| Medición | Puntaje | Detalle |
|---|---|---|
| Primera, 15 nov. 10:40 | 73 / 100 (C) | Hallabilidad 10/16: sitemap sin `lastmod` y 404 falsos con código 200 |
| Después de corregir, 15 nov. 10:58 | 79 / 100 (B) | Hallabilidad 16/16; permiso de rastreo 20/20; legibilidad 18/18 |
| Después de agregar `sameAs` (YouTube y X), 15 nov. 12:19 | **81 / 100 (B)** | Significado estructurado 13/14; las demás categorías sin cambio |

  Lo que queda sin puntos es deliberado: `telephone` (no hay teléfono público; no se inventa), Markdown a pedido, WebMCP y MCP Server Card (el sitio no tiene un servidor MCP; publicar una tarjeta sería falso). Informes en `evidencia/`.
- **Preguntas contestadas por una IA con solo el sitio publicado:** 12 de 13 del mapa de preguntas. La que falta es cómo pagar con tarjeta: hoy no existe ese flujo y no se publica hasta que exista (primer punto del roadmap).
- **Estado de los productos:** Qadrax, AddiX e InfoX están en lista de espera (Qadrax en pruebas internas); el sitio lo dice en las páginas y en los botones, y la prueba gratuita de 15 días comienza cuando se abre el acceso de cada persona.
