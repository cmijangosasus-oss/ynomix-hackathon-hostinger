# YnomiX — plataforma de herramientas para manejar tu dinero

Sitio publicado: **https://ynomix.com** (español) · Hecho con **Hostinger AI Builder** para el Hackathon Hostinger.

YnomiX es la plataforma web de **Carlos Mijangos** (Bogotá, Colombia) que reúne cinco productos digitales de finanzas personales y familiares. Contacto: soporte@ynomix.com.

## Productos

| Producto | Qué hace | Precio |
|---|---|---|
| [Qadrax](https://ynomix.com/qadrax) | Trazabilidad del uso del dinero de personas, grupos y familias | 15 días de prueba; 25 USD por 6 meses o 39 USD al año |
| [AddiX](https://ynomix.com/addix) | Monitorea ahorros, inversiones e ingresos | 15 días de prueba; 15 USD por 6 meses o 25 USD al año |
| [InfoX](https://ynomix.com/infox) | Informes de noticias financieras resumidas con IA, martes y viernes | Incluido con Qadrax de pago |
| [ConvertiX](https://ynomix.com/convertix) | Conversor de divisas (USD, EUR, COP, MXN) con fecha de actualización | Gratis |
| [DigiMoneY](https://ynomix.com/digimoney) | Noticias y recursos para aprender blockchain | Gratis |

Además: [Acerca de y contacto](https://ynomix.com/acerca-de).

## Qué hay en este repositorio

```
prompts/              prompts usados con Hostinger AI y los ajustes posteriores
evidencia/            autoevaluación SEO/AEO, resumen de Lighthouse y el informe completo
archivos-publicos/    copia de robots.txt, sitemap.xml y llms.txt publicados (14 nov 2026)
decisiones.md         decisiones de diseño y limitaciones conocidas
assets/               logos de YnomiX
```

## Resultados principales (inicio, Lighthouse móvil, 15 nov 2026, sitio final)

| Rendimiento | LCP | CLS | Accesibilidad | Buenas prácticas | SEO |
|---|---|---|---|---|---|
| 93 | 2.6 s | 0.023 | 100 | 100 | 100 |

Además, el AI Visibility Checker de Hostinger dio 81/100 (B) tras las correcciones (73 al inicio, 79 después del 404 y el sitemap). Informes en `evidencia/`.

Detalle criterio por criterio en [evidencia/autoevaluacion.md](evidencia/autoevaluacion.md).

## Cómo se construyó

1. Análisis de sitios de referencia (Stripe, Yahoo Finance, Bloomberg Latinoamérica) para decidir estructura y tono.
2. Prompts cortos y por etapas en Hostinger AI Builder: inicio, productos de pago, productos gratuitos, SEO técnico, datos estructurados y verificación.
3. Iteraciones de ajuste: sitio solo en español, una sola fuente tipográfica, enlaces internos entre todas las páginas, botones que llevan a las páginas de cada producto.
4. Verificación con scripts propios sobre el HTML publicado, Lighthouse móvil, Google Search Console y Bing Webmaster Tools.

## Limitaciones conocidas

- Los productos de pago están en etapa de lista de espera; el sitio no muestra testimonios ni cifras de usuarios que no existan.
- El `robots.txt` lo genera y protege Hostinger AI Builder y no se puede editar: bloquea rastreadores de entrenamiento (GPTBot, ClaudeBot, Google-Extended) y permite los de búsqueda y respuestas. Ver [decisiones.md](decisiones.md).
- Los perfiles de YouTube, Instagram y TikTok aún no existen, por eso no se enlazan.

## Código de la página

- **`codigo-fuente/`**: proyecto original exportado desde Hostinger Horizons (React Router + Vite + Tailwind, TypeScript). Es el código con el que se construyó y publicó el sitio. Se retiró únicamente el archivo `.env` (solo contenía comentarios, sin claves).
- **`sitio-html/`**: copia del código **publicado** (HTML de las 8 páginas y CSS/JS compilados descargados de `ynomix.com` el 15 de noviembre de 2026), como evidencia de lo que recibe el navegador.
