import { useLocale, type Locale } from '@/lib/i18n';
import { faqs } from '@/data/products';

const strings: Record<Locale, { eyebrow: string; heading: string; sub: string }> = {
	es: { eyebrow: 'ANTES DE EMPEZAR', heading: 'Las dudas, sobre la mesa.', sub: 'Seis respuestas para elegir\ncon más confianza.' },
	en: { eyebrow: 'BEFORE YOU START', heading: 'Questions on the table.', sub: 'Six answers to choose\nwith more confidence.' },
};

export function Faq() {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="faq-section section" id="preguntas">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<div className="faq-grid">
				{faqs[locale].map((item, index) => (
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
