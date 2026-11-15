import { ArrowUpRight } from 'lucide-react';
import { products } from '@/data/products';
import { chrome } from '@/data/chrome';

export function NotFoundContent() {
	const t = chrome.es;
	const list = products.es;
	return (
		<main className="not-found">
			<section className="section not-found-section">
				<p className="eyebrow"><i />404</p>
				<h1>{t.notFoundTitle}</h1>
				<p className="not-found-text">{t.notFoundText}</p>
				<a className="button primary" href="/">{t.notFoundCta} <ArrowUpRight size={19} /></a>
			</section>
			<section className="section">
				<div className="section-heading">
					<div>
						<p className="eyebrow">{t.notFoundProducts}</p>
						<h2>Las cinco herramientas de YnomiX</h2>
					</div>
				</div>
				<div className="product-grid">
					{list.map(product => (
						<article className={`product-card product-${product.icon}`} key={product.name}>
							<div>
								<h3>{product.name}</h3>
								<p className="product-purpose">{product.purpose}</p>
								<p className="product-description">{product.description}</p>
							</div>
							<a href={`/${product.name.toLowerCase()}`}>{product.name} <ArrowUpRight size={17} /></a>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}
