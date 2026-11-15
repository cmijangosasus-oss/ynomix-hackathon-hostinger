import { Check } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import type { ProductPageData } from '@/data/product-pages';

const strings: Record<Locale, { eyebrow: string; heading: (name: string) => string; sub: (name: string) => string }> = {
	es: { eyebrow: 'QUÉ OBTIENES', heading: name => `Beneficios de ${name}.`, sub: name => `Lo esencial que ${name} hace\npor tu dinero.` },
	en: { eyebrow: 'WHAT YOU GET', heading: name => `Benefits of ${name}.`, sub: name => `The essentials ${name} delivers\nfor your money.` },
};

export function ProductBenefits({ data }: { data: ProductPageData }) {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="section" id="beneficios">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading(data.name)}</h2>
				</div>
				<p>{s.sub(data.name)}</p>
			</div>
			<ul className="benefits-list">
				{data.benefits.map(benefit => (
					<li key={benefit}>
						<span className="benefit-check"><Check size={16} strokeWidth={2.4} /></span>
						<span>{benefit}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
