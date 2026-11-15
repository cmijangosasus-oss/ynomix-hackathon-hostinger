import { useLocale, type Locale } from '@/lib/i18n';
import type { ProductPageData } from '@/data/product-pages';

const strings: Record<Locale, { eyebrow: string; label: (name: string) => string }> = {
	es: { eyebrow: 'SIN RODEOS', label: name => `${name} en pocas palabras` },
	en: { eyebrow: 'NO BEATING AROUND THE BUSH', label: name => `${name} in a few words` },
};

export function ProductQuestion({ data }: { data: ProductPageData }) {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="answers-section section" aria-label={s.label(data.name)}>
			<div className="answers-intro">
				<p className="eyebrow">{s.eyebrow}</p>
				<p className="intro-title">{data.question.heading}</p>
			</div>
			<div className="answer-list">
				<article>
					<span className="answer-number">01</span>
					<div>
						<h2>{data.question.heading}</h2>
						<p>{data.question.answer}</p>
					</div>
				</article>
			</div>
		</section>
	);
}
