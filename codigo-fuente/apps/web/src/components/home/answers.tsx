import { useLocale, type Locale } from '@/lib/i18n';
import { questions } from '@/data/products';

const strings: Record<Locale, { eyebrow: string; title: [string, string]; sub: string; label: string }> = {
	es: { eyebrow: 'SIN RODEOS', title: ['Entenderlo es', 'el primer paso.'], sub: 'Lo esencial sobre YnomiX,\nen respuestas directas.', label: 'YnomiX en pocas palabras' },
	en: { eyebrow: 'NO BEATING AROUND THE BUSH', title: ['Understanding is', 'the first step.'], sub: 'The essentials about YnomiX,\nin direct answers.', label: 'YnomiX in a few words' },
};

export function Answers() {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="answers-section section" aria-label={s.label}>
			<div className="answers-intro">
				<p className="eyebrow">{s.eyebrow}</p>
				<p className="intro-title">{s.title[0]}<br />{s.title[1]}</p>
				<p>{s.sub}</p>
			</div>
			<div className="answer-list">
				{questions[locale].map((item, index) => (
					<article key={item.question}>
						<span className="answer-number">0{index + 1}</span>
						<div>
							<h2>{item.question}</h2>
							<p>{item.answer}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
