import type { Route } from './+types/digimoney';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { localeFromPath, useLocale } from '@/lib/i18n';
import { freePages } from '@/data/free-pages';
import { DigimoneyHero } from '@/components/digimoney/digimoney-hero';
import { NewsList } from '@/components/digimoney/news-list';
import { LearnList } from '@/components/digimoney/learn-list';
import { ProductQuestion } from '@/components/product/product-question';
import { ProductFaq } from '@/components/product/product-faq';
import { ProductLinks } from '@/components/product/product-links';

export function meta({ matches, location }: Route.MetaArgs) {
	const locale = localeFromPath(location.pathname);
	const origin = siteOriginFrom(matches);
	const data = freePages[locale].digimoney;
	return seo({ matches, location }, {
		title: data.metaTitle,
		description: data.metaDescription,
		image: 'https://images.hostinger.com/b99ae3ca-b659-4117-9d33-00646825d1bd/e69dd672-e1a2-4380-8fb4-455162e72dea.png',
		jsonLd: [
			{ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'DigiMoneY', applicationCategory: 'EducationApplication', operatingSystem: 'Web', url: absoluteUrl(origin, data.path), isAccessibleForFree: true, description: data.intro, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
			{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl(origin, '/') },
				{ '@type': 'ListItem', position: 2, name: 'DigiMoneY', item: absoluteUrl(origin, data.path) },
			] },
			{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: data.faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
		],
	});
}

export default function DigimoneyPage() {
	const locale = useLocale();
	const data = freePages[locale].digimoney;
	return (
		<main>
			<DigimoneyHero data={data} />
			<NewsList />
			<LearnList />
			<ProductQuestion data={data} />
			<ProductFaq data={data} />
			<ProductLinks data={data} />
		</main>
	);
}
