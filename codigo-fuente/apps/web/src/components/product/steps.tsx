import { useLocale, type Locale } from '@/lib/i18n';
import type { ProductPageData } from '@/data/product-pages';

const strings: Record<Locale, { eyebrow: string; heading: (name: string) => string; sub: string }> = {
	es: { eyebrow: 'EMPIEZA EN 3 PASOS', heading: name => `Cómo empezar con ${name}.`, sub: 'Tres pasos para dar\nel primer movimiento.' },
	en: { eyebrow: 'START IN 3 STEPS', heading: name => `How to get started with ${name}.`, sub: 'Three steps to make\nyour first move.' },
};

export function ProductSteps({ data }: { data: ProductPageData }) {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="section steps-section" id="como-empezar">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading(data.name)}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<ol className="steps-list">
				{data.steps.map((step, index) => (
					<li key={step.title}>
						<span className="step-number">0{index + 1}</span>
						<div>
							<h3>{step.title}</h3>
							<p>{step.detail}</p>
						</div>
					</li>
				))}
			</ol>
		</section>
	);
}
