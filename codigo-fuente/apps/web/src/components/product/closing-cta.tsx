import { ArrowUpRight } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import type { ProductPageData } from '@/data/product-pages';

const strings: Record<Locale, { eyebrow: string; heading: (name: string) => string; body: (name: string) => string }> = {
	es: { eyebrow: 'TU PRÓXIMO PASO', heading: name => `Empieza con ${name}.`, body: name => `${name} está en lista de espera. Solicita tu acceso y te indicamos los siguientes pasos.` },
	en: { eyebrow: 'YOUR NEXT STEP', heading: name => `Start with ${name}.`, body: name => `${name} is on the waitlist. Request your access and we will guide you through the next steps.` },
};

export function ProductClosing({ data }: { data: ProductPageData }) {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="about-section section">
			<div className="closing-cta">
				<div>
					<span className="eyebrow">{s.eyebrow}</span>
					<h2>{s.heading(data.name)}</h2>
					<p>{s.body(data.name)}</p>
				</div>
				<a className="button primary" href={data.waitlistLink}>{data.waitlistLabel} <ArrowUpRight size={19} /></a>
			</div>
		</section>
	);
}
