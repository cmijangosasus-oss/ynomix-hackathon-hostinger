import type { Route } from './+types/llms.txt';
import { siteOrigin } from '@/lib/site-origin.server';

/**
 * llms.txt (llmstxt.org): a plain-text map of the site for AI assistants.
 * Lists YnomiX, its five products and the about page, each with a one-line
 * description and an absolute link. Built from the same origin as the sitemap.
 */
export function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);

	const lines = [
		'# YnomiX',
		'',
		'> Plataforma de productos digitales para entender y manejar el dinero de personas, grupos y familias. Cinco herramientas: Qadrax, AddiX, InfoX, ConvertiX y DigiMoneY.',
		'',
		'## Páginas',
		`- [YnomiX — Inicio](${origin}/): Herramientas para entender y manejar tu dinero. Prueba Qadrax 15 días gratis.`,
		`- [Qadrax](${origin}/qadrax): Trazabilidad del uso de tu dinero. USD 25 por 6 meses o USD 39 al año; incluye InfoX.`,
		`- [AddiX](${origin}/addix): Monitorea ahorros, inversiones e ingresos. USD 15 por 6 meses o USD 25 al año.`,
		`- [InfoX](${origin}/infox): Noticias financieras resumidas con IA, los martes y viernes. Incluido con Qadrax de pago.`,
		`- [ConvertiX](${origin}/convertix): Conversor de divisas gratuito con tasas actualizadas cada día (USD, COP, MXN, EUR).`,
		`- [DigiMoneY](${origin}/digimoney): Espacio gratuito para aprender blockchain con noticias y recursos educativos.`,
		`- [Acerca de y contacto](${origin}/acerca-de): Carlos Mijangos, fundador en Bogotá, Colombia. Contacto: soporte@ynomix.com.`,
		`- [Política de privacidad](${origin}/privacidad): Qué datos recibe YnomiX, para qué se usan y cómo ejercer tus derechos.`,
	];

	return new Response(`${lines.join('\n')}\n`, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
