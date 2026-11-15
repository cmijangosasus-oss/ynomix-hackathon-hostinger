import { ArrowUpRight, ArrowDown, Check } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import type { ProductPageData } from '@/data/product-pages';

const strings: Record<Locale, { secondary: string; footnote: string }> = {
	es: { secondary: 'Ver beneficios', footnote: 'Producto en lista de espera · YnomiX' },
	en: { secondary: 'View benefits', footnote: 'Waitlist product · YnomiX' },
};

export function ProductHero({ data }: { data: ProductPageData }) {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="hero product-hero" id="inicio-producto">
			<div className="hero-topline">
				<span className="eyebrow"><i />{data.eyebrow}</span>
				<span className="hero-note">{data.tag}</span>
			</div>
			<h1>{data.h1}</h1>
			<p className="hero-description">{data.intro}</p>
			<a className="hero-doubt" href="/acerca-de#contacto">¿Dudas? Escríbenos</a>
			<div className="hero-actions">
				<a className="button primary" href={data.waitlistLink}>{data.waitlistLabel} <ArrowUpRight size={19} /></a>
				<a className="button secondary" href="#beneficios">{s.secondary} <ArrowDown size={18} /></a>
			</div>
			<p className="hero-footnote"><Check size={15} /> {s.footnote}</p>
		</section>
	);
}
