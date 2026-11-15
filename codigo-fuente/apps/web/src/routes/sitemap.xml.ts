import type { Route } from './+types/sitemap.xml';
import { siteOrigin } from '@/lib/site-origin.server';

/** Each public page (Spanish only). */
const PAGES = ['/', '/qadrax', '/addix', '/infox', '/convertix', '/digimoney', '/acerca-de', '/privacidad', '/blog', '/blog/como-saber-en-que-se-va-tu-dinero'];

function escapeXml(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export async function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);
	const entries = PAGES.map(path => `\t<url>\n\t\t<loc>${escapeXml(`${origin}${path}`)}</loc>\n\t\t<lastmod>2026-11-15</lastmod>\n\t</url>`).join('\n');

	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
