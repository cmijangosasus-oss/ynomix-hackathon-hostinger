import type { Route } from './+types/home';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { localeFromPath, useLocale } from '@/lib/i18n';
import { Hero } from '@/components/home/hero';
import { Products } from '@/components/home/products';
import { Pricing } from '@/components/home/pricing';
import { Answers } from '@/components/home/answers';
import { Faq } from '@/components/home/faq';
import { About } from '@/components/home/about';
import { faqs } from '@/data/products';

const META = {
	es: {
		title: 'YnomiX: herramientas digitales para manejar tu dinero',
		description: 'Conoce Qadrax, AddiX e InfoX: herramientas para tus finanzas personales, grupales y familiares. Prueba Qadrax 15 días gratis y consulta los precios en USD.',
	},
	en: {
		title: 'YnomiX: digital tools to manage your money with ease',
		description: 'Meet Qadrax, AddiX and InfoX: tools for your personal, group and family finances. Try Qadrax 15 days free and check prices in USD. From Bogotá, Colombia.',
	},
};

export function meta({ matches, location }: Route.MetaArgs) {
	const locale = localeFromPath(location.pathname);
	const origin = siteOriginFrom(matches);
	const homeUrl = absoluteUrl(origin, '/');
	return seo({ matches, location }, {
		title: META[locale].title,
		description: META[locale].description,
		image: 'https://images.hostinger.com/b99ae3ca-b659-4117-9d33-00646825d1bd/e69dd672-e1a2-4380-8fb4-455162e72dea.png',
		jsonLd: [
			{ '@context': 'https://schema.org', '@type': 'WebSite', name: 'YnomiX', url: homeUrl, description: META[locale].description, inLanguage: locale },
			{ '@context': 'https://schema.org', '@type': 'Organization', name: 'YnomiX', url: homeUrl, logo: 'https://images.hostinger.com/b99ae3ca-b659-4117-9d33-00646825d1bd/e69dd672-e1a2-4380-8fb4-455162e72dea.png', description: META[locale].description, email: 'soporte@ynomix.com', founder: { '@type': 'Person', name: 'Carlos Mijangos' }, address: { '@type': 'PostalAddress', addressLocality: 'Bogotá', addressCountry: 'CO' }, sameAs: ['https://www.youtube.com/@ynomix', 'https://x.com/YnomiX'] },
			{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs[locale].map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
		],
	});
}

export default function HomePage() {
	return <main><Hero /><Products /><Pricing /><Answers /><Faq /><About /></main>;
}
