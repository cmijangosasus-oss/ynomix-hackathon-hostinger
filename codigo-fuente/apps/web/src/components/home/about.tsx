import { ArrowUpRight, MapPin } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import { trialLink } from '@/data/products';

const strings: Record<Locale, {
	eyebrow: string;
	title: [string, string];
	founderLocation: string;
	body: string[];
	emailLink: string;
	ctaEyebrow: string;
	ctaTitle: string;
	ctaText: string;
	ctaButton: string;
}> = {
	es: {
		eyebrow: 'QUIÉN ESTÁ DETRÁS',
		title: ['Finanzas con propósito.', 'Una persona detrás.'],
		founderLocation: 'Bogotá, Colombia',
		body: [
			'YnomiX es una iniciativa de Carlos Mijangos, con experiencia en análisis financiero y gestión comercial. Su enfoque es acercar herramientas digitales a quienes quieren entender mejor el uso de su dinero y dar seguimiento a sus metas.',
			'Para personas, grupos y familias, el punto de partida es el mismo: contar con información clara para decidir. Si tienes preguntas sobre los productos, puedes escribir directamente a soporte.',
		],
		emailLink: 'Hablemos: soporte@ynomix.com',
		ctaEyebrow: 'TU PRÓXIMO PASO',
		ctaTitle: 'Empieza por entender tu dinero.',
		ctaText: 'Conoce Qadrax durante 15 días gratis y decide con calma.',
		ctaButton: 'Probar Qadrax 15 días gratis',
	},
	en: {
		eyebrow: 'WHO IS BEHIND IT',
		title: ['Finance with purpose.', 'One person behind it.'],
		founderLocation: 'Bogotá, Colombia',
		body: [
			'YnomiX is an initiative by Carlos Mijangos, with experience in financial analysis and commercial management. His focus is bringing digital tools to those who want to better understand how they use their money and track their goals.',
			'For individuals, groups and families, the starting point is the same: having clear information to decide. If you have questions about the products, you can write directly to support.',
		],
		emailLink: 'Let us talk: soporte@ynomix.com',
		ctaEyebrow: 'YOUR NEXT STEP',
		ctaTitle: 'Start by understanding your money.',
		ctaText: 'Try Qadrax for 15 days free and decide calmly.',
		ctaButton: 'Try Qadrax 15 days free',
	},
};

export function About() {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="about-section section" id="quien-esta-detras">
			<div className="about-main">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.title[0]}<br />{s.title[1]}</h2>
				</div>
				<div className="about-copy">
					<p className="founder-name">Carlos Mijangos</p>
					<p className="founder-location"><MapPin size={15} /> {s.founderLocation}</p>
					{s.body.map(p => <p key={p}>{p}</p>)}
					<a className="text-link" href="mailto:soporte@ynomix.com">{s.emailLink} <ArrowUpRight size={17} /></a>
				</div>
			</div>
			<div className="closing-cta">
				<div>
					<span className="eyebrow">{s.ctaEyebrow}</span>
					<h2>{s.ctaTitle}</h2>
					<p>{s.ctaText}</p>
				</div>
				<a className="button primary" href={trialLink[locale]}>{s.ctaButton} <ArrowUpRight size={19} /></a>
			</div>
		</section>
	);
}
