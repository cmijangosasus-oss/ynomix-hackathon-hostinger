import type { Route } from './+types/blog';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { BlogList } from '@/components/blog/blog-list';

const META = {
	title: 'Blog | YnomiX',
	description: 'Guías prácticas para entender y manejar tu dinero en el día a día.',
};

export function meta({ matches, location }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	const path = '/blog';
	return seo({ matches, location }, {
		title: META.title,
		description: META.description,
		image: 'https://images.hostinger.com/b99ae3ca-b659-4117-9d33-00646825d1bd/e69dd672-e1a2-4380-8fb4-455162e72dea.png',
		jsonLd: [
			{ '@context': 'https://schema.org', '@type': 'Blog', name: 'Blog de YnomiX', url: absoluteUrl(origin, path), description: META.description, inLanguage: 'es' },
			{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl(origin, '/') },
					{ '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl(origin, path) },
				],
			},
		],
	});
}

export default function BlogPage() {
	return (
		<main>
			<section className="hero" id="inicio">
				<div className="hero-topline">
					<span className="eyebrow"><i />BLOG</span>
				</div>
				<h1>Blog de YnomiX</h1>
				<p className="hero-description">Guías prácticas para entender y manejar tu dinero en el día a día.</p>
			</section>
			<BlogList />
		</main>
	);
}
