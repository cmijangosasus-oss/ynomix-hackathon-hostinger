import { useLocale, type Locale } from '@/lib/i18n';
import type { ProductPageData } from '@/data/product-pages';

const strings: Record<Locale, { eyebrow: string; heading: (name: string) => string; sub: string }> = {
	es: { eyebrow: 'ANTES DE EMPEZAR', heading: name => `Preguntas sobre ${name}.`, sub: 'Tres respuestas para elegir\ncon más confianza.' },
	en: { eyebrow: 'BEFORE YOU START', heading: name => `Questions about ${name}.`, sub: 'Three answers to choose\nwith more confidence.' },
};

export function ProductFaq({ data }: { data: ProductPageData }) {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="faq-section section" id="preguntas-producto">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading(data.name)}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<div className="faq-grid">
				{data.faqs.map((item, index) => (
					<article key={item.question}>
						<span className="faq-number">0{index + 1}</span>
						<h3>{item.question}</h3>
						<p>{item.answer}</p>
					</article>
				))}
			</div>
		</section>
	);
}
