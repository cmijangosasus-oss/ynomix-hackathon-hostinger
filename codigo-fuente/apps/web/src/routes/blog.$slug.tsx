import { data } from 'react-router';
import type { Route } from './+types/blog.$slug';
import { seo, siteOriginFrom, absoluteUrl } from '@/lib/seo';
import { blogArticleBySlug } from '@/data/blog';
import { BlogArticle } from '@/components/blog/blog-article';

export function meta({ matches, location, params }: Route.MetaArgs) {
	const origin = siteOriginFrom(matches);
	const article = blogArticleBySlug(params.slug);
	if (!article) {
		return seo({ matches, location }, { title: 'Artículo no encontrado | YnomiX', description: 'El artículo que buscas no existe o se movió.', noindex: true });
	}
	return seo({ matches, location }, {
		title: article.title,
		description: article.metaDescription,
		image: 'https://images.hostinger.com/b99ae3ca-b659-4117-9d33-00646825d1bd/e69dd672-e1a2-4380-8fb4-455162e72dea.png',
		type: 'article',
		jsonLd: [
			{
				'@context': 'https://schema.org',
				'@type': 'Article',
				headline: article.title,
				description: article.metaDescription,
				inLanguage: 'es',
				datePublished: article.datePublished,
				dateModified: article.dateModified,
				author: { '@type': 'Person', name: 'Carlos Mijangos' },
				publisher: {
					'@type': 'Organization',
					name: 'YnomiX',
					logo: { '@type': 'ImageObject', url: 'https://images.hostinger.com/b99ae3ca-b659-4117-9d33-00646825d1bd/e69dd672-e1a2-4380-8fb4-455162e72dea.png' },
				},
				mainEntityOfPage: absoluteUrl(origin, article.path),
			},
			{
				'@context': 'https://schema.org',
				'@type': 'BreadcrumbList',
				itemListElement: [
					{ '@type': 'ListItem', position: 1, name: 'Inicio', item: absoluteUrl(origin, '/') },
					{ '@type': 'ListItem', position: 2, name: 'Blog', item: absoluteUrl(origin, '/blog') },
					{ '@type': 'ListItem', position: 3, name: article.title, item: absoluteUrl(origin, article.path) },
				],
			},
		],
	});
}

export function loader({ params }: Route.LoaderArgs) {
	const article = blogArticleBySlug(params.slug);
	if (!article) {
		throw data('Artículo no encontrado', { status: 404 });
	}
	return { article };
}

export default function BlogArticleRoute({ loaderData }: Route.ComponentProps) {
	return (
		<main>
			<section className="hero" id="inicio">
				<div className="blog-wrap">
					<BlogArticle article={loaderData.article} />
				</div>
			</section>
		</main>
	);
}
