import type { Route } from './+types/privacidad';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { privacyData } from '@/data/privacy';
import { PrivacyPage } from '@/components/privacy/privacy-page';

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	const path = '/privacidad';
	return seo({ matches, location }, {
		title: privacyData.metaTitle,
		description: privacyData.metaDescription,
		image: 'https://images.hostinger.com/b99ae3ca-b659-4117-9d33-00646825d1bd/e69dd672-e1a2-4380-8fb4-455162e72dea.png',
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'WebPage',
				url: absoluteUrl(origin, path),
				name: privacyData.metaTitle,
				description: privacyData.metaDescription,
				inLanguage: 'es',
				publisher: {
					'@type': 'Organization',
					name: 'YnomiX',
					email: 'soporte@ynomix.com',
					founder: { '@type': 'Person', name: 'Carlos Mijangos' },
					address: { '@type': 'PostalAddress', addressLocality: 'Bogotá', addressCountry: 'CO' },
					sameAs: ['https://www.youtube.com/@ynomix', 'https://x.com/YnomiX'],
				},
			},
			{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl(origin, '/') },
					{ '@type': 'ListItem', position: 2, name: 'Política de privacidad', item: absoluteUrl(origin, path) },
				],
			},
		],
	});
}

export default function PrivacidadRoute() {
	return <main><PrivacyPage /></main>;
}
