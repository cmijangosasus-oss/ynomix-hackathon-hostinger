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
				{faqs[locale].map((item, index) => {
					const parts = item.link ? item.answer.split(item.link.label) : null;
					return (
						<article key={item.question}>
							<span className="faq-number">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
							<h3>{item.question}</h3>
							<p>
								{parts ? (
									<>
										{parts[0]}
										<a href={item.link!.href}>{item.link!.label}</a>
										{parts[1]}
									</>
								) : (
									item.answer
								)}
							</p>
						</article>
					);
				})}
			</div>
		</section>
	);
}
