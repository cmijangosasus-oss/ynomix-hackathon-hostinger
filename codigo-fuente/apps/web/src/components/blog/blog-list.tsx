import { ArrowUpRight, Clock } from 'lucide-react';
import { blogArticles } from '@/data/blog';

export function BlogList() {
	return (
		<section className="section" id="blog">
			<div className="section-heading">
				<div>
					<p className="eyebrow">ARTÍCULOS</p>
					<h2>Guías para tu dinero</h2>
				</div>
				<p>Cada artículo es una guía corta y práctica para entender y manejar tu dinero en el día a día.</p>
			</div>
			<ul className="news-list">
				{blogArticles.map(article => (
					<li key={article.slug} className="news-item">
						<div className="news-item-top">
							<span className="news-topic">Guía</span>
							<span className="news-age"><Clock size={13} /> 15 de noviembre de 2026</span>
						</div>
						<h3>{article.title}</h3>
						<p className="blog-summary">{article.summary}</p>
						<a className="text-link" href={article.path}>Leer el artículo <ArrowUpRight size={16} /></a>
					</li>
				))}
			</ul>
		</section>
	);
}
