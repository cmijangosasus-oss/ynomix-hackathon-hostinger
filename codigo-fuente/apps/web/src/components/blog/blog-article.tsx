import { ArrowUpRight } from 'lucide-react';
import type { BlogArticle, BlogBlock } from '@/data/blog';

function Block({ block }: { block: BlogBlock }) {
	if (block.type === 'h2') {
		return <h2>{block.text}</h2>;
	}
	if (block.type === 'p') {
		return <p>{block.text}</p>;
	}
	return (
		<p>
			{block.before}
			<a href={block.link.href} target="_blank" rel="noopener noreferrer">{block.link.label}</a>
			{block.after}
		</p>
	);
}

export function BlogArticle({ article }: { article: BlogArticle }) {
	return (
		<article className="blog-article">
			<header className="blog-article-header">
				<p className="eyebrow"><i />GUÍA PRÁCTICA</p>
				<h1>{article.h1}</h1>
				<p className="blog-author">{article.author}</p>
				<p className="blog-dates">
					{article.publishedLabel} · {article.updatedLabel}
				</p>
			</header>
			<div className="blog-content">
				{article.blocks.map((block, index) => <Block key={index} block={block} />)}
			</div>
			<div className="blog-article-actions">
				<a className="button primary" href="/qadrax">Anotarme en la lista de Qadrax <ArrowUpRight size={19} /></a>
				<a className="text-link" href="/blog">Volver al blog <ArrowUpRight size={16} /></a>
			</div>
		</article>
	);
}
