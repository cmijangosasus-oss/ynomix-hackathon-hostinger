import type { Route } from './+types/about';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { localeFromPath } from '@/lib/i18n';
import { aboutData } from '@/data/about';
import { AboutPage } from '@/components/about/about-page';

export function meta({ matches, location }: Route.MetaArgs) {
	const locale = localeFromPath(location.pathname);
	const origin = siteOriginFrom(matches);
	const d = aboutData[locale];
	const path = '/acerca-de';
	return seo({ matches, location }, {
		title: d.metaTitle,
		description: d.metaDescription,
		image: 'https://images.hostinger.com/b99ae3ca-b659-4117-9d33-00646825d1bd/e69dd672-e1a2-4380-8fb4-455162e72dea.png',
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'AboutPage',
				url: absoluteUrl(origin, path),
				name: d.metaTitle,
				description: d.metaDescription,
				inLanguage: locale,
				mainEntity: {
					'@type': 'Organization',
					name: 'YnomiX',
					email: 'soporte@ynomix.com',
					founder: { '@type': 'Person', name: 'Carlos Mijangos' },
					address: { '@type': 'PostalAddress', addressLocality: 'Bogotá', addressCountry: 'CO' },
				},
			},
			{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl(origin, '/') },
					{ '@type': 'ListItem', position: 2, name: 'Acerca de y contacto', item: absoluteUrl(origin, path) },
				],
			},
		],
	});
}

export default function AboutRoute() {
	return <main><AboutPage /></main>;
}
