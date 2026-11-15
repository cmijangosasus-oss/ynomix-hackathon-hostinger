# Decisiones y limitaciones

## Solo español
La rúbrica no exige dos idiomas. Se publicó solo en español para mantener un contenido consistente y evitar páginas traducidas a medias. Se retiraron las páginas en inglés y las referencias hreflang.

## Sin testimonios ni cifras inventadas
Los productos de pago están en lista de espera. La confianza se apoya en quién está detrás (Carlos Mijangos, Bogotá), la sección Acerca de, precios reales y la fecha de actualización.

## Redes sociales
Los perfiles de YouTube, Instagram y TikTok todavía no existen. Se quitaron los enlaces de las páginas y el campo `sameAs` del JSON-LD quedó vacío, en lugar de enlazar a páginas de búsqueda que parezcan perfiles.

## ConvertiX
La calculadora consulta un servicio interno del sitio (`/api/convert`) que devuelve las tasas de USD, EUR, COP y MXN junto con la fecha de actualización, que se muestra junto al resultado. Es una referencia informativa, no una cotización de compra o venta.

## Botones y enlaces
Los botones de producto llevaban a enlaces `mailto:`, que en equipos sin programa de correo abren un cuadro de diálogo. Se cambiaron para llevar a la página de cada producto, y todas las páginas se enlazan entre sí. Un primer escaneo de Bing Site Scan solo encontró 2 páginas por este motivo; se corrigió y se volvió a lanzar el escaneo.

## robots.txt (limitación de la plataforma)
Hostinger AI Builder genera el `robots.txt` y la ruta está protegida: no se pueden añadir reglas. El archivo publicado:
- permite los rastreadores de búsqueda y respuestas de IA (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, DuckAssistBot y otros), con `Content-Signal: search=yes, ai-input=yes`;
- bloquea los rastreadores de entrenamiento GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, meta-externalagent, Amazonbot y Bytespider, con `ai-train=no`.

La documentación de Hostinger indica que el AI Builder "permite todos los rastreadores", lo que no coincide con el archivo real. Se pidió al agente de IA de Hostinger cambiarlo (respondió que la ruta está protegida) y se escaló el caso al soporte humano. Respuesta del soporte humano de Hostinger (15 nov 2026): no hay un bloqueo total a nivel de servidor para GPTBot; existe un límite de 20 solicitudes cada 30 segundos, compartido por todos los sitios del servidor y que no se puede desactivar por dominio. El `robots.txt` publicado sigue indicando que esos rastreadores no accedan y el AI Builder no permite editar esa ruta. La respuesta se refiere a GPTBot; no menciona límites para ClaudeBot ni Google-Extended.

Este criterio queda registrado como "a medias" en la autoevaluación.

## Datos de identidad (iguales en todas las páginas y en el JSON-LD)
YnomiX · Carlos Mijangos · Bogotá, Colombia · soporte@ynomix.com
