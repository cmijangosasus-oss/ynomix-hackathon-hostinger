# Ajustes posteriores (después de la verificación)

Cambios pedidos al constructor tras revisar el sitio publicado con scripts, Lighthouse, Search Console y Bing.

| Ajuste | Motivo |
|---|---|
| Dejar el sitio solo en español y quitar las páginas en inglés | La rúbrica no exige dos idiomas; evitar contenido duplicado y traducido a medias |
| Usar una sola familia tipográfica (Public Sans 400 y 700) con `display=swap` | Bajar el LCP de 2.8 s a 2.0 s |
| Cambiar los botones con `mailto:` por enlaces a las páginas de cada producto | Los `mailto:` abren un cuadro de diálogo en equipos sin programa de correo; además dejaban las páginas de producto sin enlaces entrantes |
| Que la página de inicio enlace a los cinco productos y a Acerca de | Que un rastreador llegue a todas las páginas siguiendo enlaces |
| Quitar los enlaces de YouTube, Instagram y TikTok y dejar `sameAs` vacío | Los perfiles todavía no existen |
| Añadir la etiqueta de verificación de Google Search Console | Verificación de propiedad |

## Texto del prompt de botones

```
Cambia todos los botones que hoy usan enlaces mailto para que lleven a las páginas internas del sitio:
- Todo botón o tarjeta de Qadrax lleva a /qadrax; los de AddiX a /addix; los de InfoX a /infox.
- En la página de ConvertiX, el botón de acceso cambia su texto a "Convertir ahora" y lleva a #calculadora.
- El botón de DigiMoneY cambia su texto a "Explorar DigiMoneY" y lleva a /digimoney.
- En /acerca-de deja una sección #contacto con soporte@ynomix.com como texto visible, un botón "Copiar correo" y un enlace secundario con mailto.
No agregues páginas nuevas. Publica de nuevo.
```
