import type { Route } from './+types/infox';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { localeFromPath, useLocale } from '@/lib/i18n';
import { productPages } from '@/data/product-pages';
import { ProductHero } from '@/components/product/product-hero';
import { ProductBenefits } from '@/components/product/benefits';
import { ProductSteps } from '@/components/product/steps';
import { NewsPreview } from '@/components/product/news-preview';
import { ProductPricing } from '@/components/product/product-pricing';
import { ProductQuestion } from '@/components/product/product-question';
import { ProductFaq } from '@/components/product/product-faq';
import { ProductLinks } from '@/components/product/product-links';
import { ProductClosing } from '@/components/product/closing-cta';

export function meta({ matches, location }: Route.MetaArgs) {
	const locale = localeFromPath(location.pathname);
	const origin = siteOriginFrom(matches);
	const data = productPages[locale].infox;
	return seo({ matches, location }, {
		title: data.metaTitle,
		description: data.metaDescription,
		image: 'https://images.hostinger.com/b99ae3ca-b659-4117-9d33-00646825d1bd/e69dd672-e1a2-4380-8fb4-455162e72dea.png',
		jsonLd: [
			{ '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'InfoX', applicationCategory: 'FinanceApplication', operatingSystem: 'Web', url: absoluteUrl(origin, data.path), description: data.intro, isAccessibleForFree: false },
			{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
				{ '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl(origin, '/') },
				{ '@type': 'ListItem', position: 2, name: 'InfoX', item: absoluteUrl(origin, data.path) },
			] },
			{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: data.faqs.map(item => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) },
		],
	});
}

export default function InfoxPage() {
	const locale = useLocale();
	const data = productPages[locale].infox;
	return (
		<main>
			<ProductHero data={data} />
			<ProductBenefits data={data} />
			<ProductSteps data={data} />
			<NewsPreview />
			<ProductPricing data={data} />
			<ProductQuestion data={data} />
			<ProductFaq data={data} />
			<ProductLinks data={data} />
			<ProductClosing data={data} />
		</main>
	);
}
