import { ArrowUpRight } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import type { ProductPageData } from '@/data/product-pages';

const strings: Record<Locale, { eyebrow: string; heading: string; sub: string }> = {
	es: { eyebrow: 'SIGUE EXPLORANDO', heading: 'Otras herramientas de YnomiX.', sub: 'Cada producto responde\na una necesidad distinta.' },
	en: { eyebrow: 'KEEP EXPLORING', heading: 'Other YnomiX tools.', sub: 'Each product answers\na different need.' },
};

export function ProductLinks({ data }: { data: ProductPageData }) {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="section" id="relacionados">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<div className="related-grid">
				{data.related.map(item => (
					<a className="related-card" key={item.href} href={item.href}>
						<span className="related-label">{item.label}</span>
						<span className="related-desc">{item.description}</span>
						<span className="related-arrow"><ArrowUpRight size={18} /></span>
					</a>
				))}
			</div>
		</section>
	);
}
