# Prompts iniciales para Hostinger AI Builder

Se usaron en este orden, por etapas. Aquí aparece el texto ajustado a la versión final del sitio (solo español, sin enlaces de redes). Los cambios posteriores a la verificación están en `02-ajustes-posteriores.md`.

## Prompt 1: página de inicio

```
Crea la página de inicio de YnomiX, una plataforma de productos digitales de finanzas personales y familiares, en español (lang="es"). Titular del sitio: Carlos Mijangos, Bogotá, Colombia. Contacto: soporte@ynomix.com. Estilo: sobrio y confiable, fondo claro, un color de marca verde azulado y un acento, mucho espacio en blanco, tarjetas, tipografía legible y pocas imágenes livianas.

Estructura, en este orden:
1. Un solo H1: "YnomiX: herramientas para entender y manejar tu dinero". Debajo, esta respuesta directa: "YnomiX es la plataforma de Carlos Mijangos, desde Bogotá, Colombia, que reúne herramientas digitales para personas, grupos y familias que quieren manejar mejor su dinero. Qadrax registra en qué se usa tu dinero, AddiX monitorea ahorros e inversiones, InfoX resume las noticias que afectan tu bolsillo, y ConvertiX y DigiMoneY son gratis."
2. Dos botones: principal "Probar Qadrax 15 días gratis" y secundario "Ver todos los productos".
3. Cifras grandes y reales: 15 días de prueba, 5 herramientas, 2 reportes de noticias por semana (martes y viernes), 2 herramientas gratis.
4. Tarjetas de los 5 productos (Qadrax, AddiX, InfoX, ConvertiX, DigiMoneY), cada una con una etiqueta ("Prueba 15 días", "Incluido en Qadrax", "Gratis") y un enlace con texto descriptivo, nunca "clic aquí".
5. Tabla de precios en USD: Qadrax 25 por 6 meses o 39 al año; AddiX 15 por 6 meses o 25 al año; InfoX incluido para clientes de pago de Qadrax; ConvertiX y DigiMoneY gratis.
6. Cuatro H2 en forma de pregunta, cada uno con su respuesta en 2 o 3 frases justo debajo: "¿Qué es YnomiX?", "¿Cuánto cuesta Qadrax?", "¿Cómo funciona la prueba de 15 días?", "¿Cuándo llegan los reportes de InfoX?".
7. Sección de preguntas frecuentes visible con 6 preguntas y respuestas cortas, incluida "¿Qué diferencia hay entre Qadrax y AddiX?" (Qadrax registra en qué se usa el dinero; AddiX monitorea ahorros e inversiones; funcionan por separado).
8. Sección "Quién está detrás": Carlos Mijangos, Bogotá, Colombia, con experiencia en análisis financiero y gestión comercial.
9. Pie de página con correo soporte@ynomix.com, ubicación y "Última actualización: [fecha de hoy]".

Título de la página de 50 a 60 caracteres y meta description de 140 a 160 caracteres, con og:title, og:description y og:image. Todo el texto debe estar en el HTML inicial. Mínimo 400 palabras útiles. No inventes testimonios, cifras de usuarios ni logos de clientes.
```

## Prompt 2: páginas de Qadrax, AddiX e InfoX

```
Ahora crea tres páginas de producto con el mismo estilo del inicio, menú y pie de página compartidos. Cada una tiene un solo H1, una respuesta directa de 40 a 60 palabras en las primeras frases (qué es, para quién, qué ofrece), beneficios en lista, pasos numerados "Cómo empezar en 3 pasos", una tabla de precios, un H2 en forma de pregunta con su respuesta, 3 preguntas frecuentes, un botón de lista de espera y enlaces internos descriptivos a los otros productos y al inicio. Título de 50 a 60 caracteres y meta description de 140 a 160 caracteres por página.

1. Qadrax (URL /qadrax). H1: "Qadrax: sabe en qué se va tu dinero". App para la trazabilidad del uso del dinero de personas, grupos y familias. Prueba de 15 días; 25 USD por 6 meses o 39 USD al año. Menciona que los clientes de pago reciben los reportes de InfoX.
2. AddiX (URL /addix). H1: "AddiX: monitorea ahorros, inversiones y todo lo que suma a tus ingresos". Para personas, grupos o familias. Prueba de 15 días; 15 USD por 6 meses o 25 USD al año. Aclara que funciona por separado de Qadrax.
3. InfoX (URL /infox). H1: "InfoX: las noticias que afectan tu bolsillo, resumidas". Explica que la IA resume las noticias y envía un informe los martes y los viernes, para no tener que leerlo todo. Se incluye con Qadrax de pago. Muestra una sola noticia resumida de ejemplo como vista previa, con su fuente y la fecha, y un botón "Obtener el reporte completo con Qadrax".

No inventes testimonios ni cifras de usuarios. Los productos están en lista de espera.
```

## Prompt 3: páginas gratuitas ConvertiX y DigiMoneY

```
Crea dos páginas gratuitas con el mismo estilo, con un solo H1, una respuesta directa de 40 a 60 palabras al inicio, un H2 en forma de pregunta con respuesta, 3 preguntas frecuentes, título de 50 a 60 caracteres y meta description de 140 a 160 caracteres.

1. ConvertiX (URL /convertix). H1: "ConvertiX: convierte divisas con tasas actualizadas cada día". Calculadora de conversión con USD, COP, MXN y EUR como mínimo, y la fecha de la última actualización visible junto al resultado ("Actualizado: [fecha]"). Etiqueta "Gratis".
2. DigiMoneY (URL /digimoney). H1: "DigiMoneY: aprende sobre blockchain con noticias y recursos". Lista de 5 noticias recientes, cada una con etiqueta de tema, fuente y antigüedad ("hace 1 día"), con enlaces descriptivos a la fuente; y una lista de lugares para aprender. Etiqueta "Gratis".

Añade enlaces internos a Qadrax, a AddiX y al inicio. No presentes DigiMoneY como asesoría de inversión: incluye una nota breve de que es información educativa.
```

## Prompt 4: SEO técnico, URLs limpias y página 404

```
Ahora necesito el SEO técnico del sitio, sin cambiar el diseño:
1. Crea la página "Acerca de y contacto" (URL /acerca-de) con quién es Carlos Mijangos, la misión de YnomiX, soporte@ynomix.com y Bogotá, Colombia.
2. URLs limpias, cortas y en minúsculas: /qadrax, /addix, /infox, /convertix, /digimoney y /acerca-de. Sin números ni parámetros.
3. Una página 404 sencilla con el menú y enlaces a los 5 productos.
4. Revisa que cada página tenga canonical correcto, HTTPS, lang en <html>, meta viewport, sin noindex y un solo H1; que el menú funcione y no haya enlaces internos rotos ni textos como "clic aquí".
5. Todas las imágenes con alt descriptivo, en WebP, con ancho y alto definidos y carga diferida fuera de la primera pantalla.
6. Reduce scripts y fuentes para lograr Lighthouse móvil de 80 o más, LCP menor a 2,5 s y CLS menor a 0,1.
```

## Prompt 5: datos estructurados y llms.txt

```
Agrega JSON-LD de schema.org válido en el HTML inicial, igual al contenido visible:
1. Inicio: Organization (name YnomiX, url, logo, description igual a la visible, founder Person Carlos Mijangos, address Bogotá, Colombia, email soporte@ynomix.com), WebSite y FAQPage con las mismas preguntas y respuestas de las preguntas frecuentes.
2. Qadrax y AddiX: SoftwareApplication con offers en USD (Qadrax 25 por 6 meses y 39 por año; AddiX 15 por 6 meses y 25 por año), con availability PreOrder.
3. ConvertiX y DigiMoneY: SoftwareApplication con precio 0 USD.
4. Todas las páginas internas: BreadcrumbList.
No incluyas calificaciones, reseñas ni datos que no aparezcan en la página.

Además, crea un archivo llms.txt en la raíz con un resumen de YnomiX, los 5 productos con una línea cada uno y enlaces a cada página.
```

## Prompt 6: verificación contra la rúbrica

```
Revisa el sitio publicado y dime, criterio por criterio, si cumple (Cumple, A medias o No cumple) y qué corregir.
SEO: título único de 50 a 60 caracteres; meta description de 140 a 160 con og:title, og:description y og:image; un solo H1 y encabezados en orden; tema en título, H1 y primer párrafo con unas 300 palabras útiles o más; sin noindex, con canonical, HTTPS y lang; robots.txt y sitemap.xml; alt en imágenes y peso liviano; Lighthouse móvil de 80 o más, LCP menor a 2,5 s y CLS menor a 0,1; meta viewport y botones táctiles; menú funcional, sin enlaces 404 y sin "clic aquí".
AEO: respuesta directa arriba; H2 en forma de pregunta; FAQ visible; JSON-LD válido y coherente; texto en el HTML inicial; robots.txt sin bloquear bots de IA y llms.txt; formato fácil de extraer; identidad consistente en toda la página y el schema; datos concretos; señales de confianza (quién está detrás, fecha de actualización, acerca de).
Corrige lo que no cumpla.
```
