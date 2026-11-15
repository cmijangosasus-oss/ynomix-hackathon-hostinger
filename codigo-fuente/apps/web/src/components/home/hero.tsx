import { ArrowUpRight, ArrowDown, Check } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import { trialLink } from '@/data/products';

const strings: Record<Locale, {
	eyebrow: string;
	note: string;
	h1: [string, string, string];
	description: string;
	primary: string;
	secondary: string;
	footnote: string;
	stats: { value: string; unit: string; label: string }[];
}> = {
	es: {
		eyebrow: 'FINANZAS CON MÁS CLARIDAD',
		note: 'Para ti. Para tu grupo. Para tu familia.',
		h1: ['YnomiX: herramientas para ', 'entender y manejar', ' tu dinero'],
		description: 'Tu dinero, con perspectiva. Qadrax registra cómo lo usas; AddiX monitorea tus ahorros e inversiones; InfoX resume las noticias financieras. ConvertiX y DigiMoneY son gratuitos.',
		primary: 'Probar Qadrax 15 días gratis',
		secondary: 'Ver todos los productos',
		footnote: 'Herramientas independientes. Un propósito en común.',
		stats: [
			{ value: '15', unit: 'días', label: 'Para probar Qadrax gratis' },
			{ value: '5', unit: '', label: 'Herramientas para tu dinero' },
			{ value: '2', unit: 'reportes', label: 'Cada semana · martes y viernes' },
			{ value: '2', unit: 'gratis', label: 'ConvertiX y DigiMoneY' },
		],
	},
	en: {
		eyebrow: 'FINANCE WITH MORE CLARITY',
		note: 'For you. For your group. For your family.',
		h1: ['YnomiX: tools to ', 'understand and manage', ' your money'],
		description: 'Your money, in perspective. Qadrax tracks how you use it; AddiX monitors your savings and investments; InfoX summarizes financial news. ConvertiX and DigiMoneY are free.',
		primary: 'Try Qadrax 15 days free',
		secondary: 'View all products',
		footnote: 'Independent tools. One shared purpose.',
		stats: [
			{ value: '15', unit: 'days', label: 'To try Qadrax free' },
			{ value: '5', unit: '', label: 'Tools for your money' },
			{ value: '2', unit: 'reports', label: 'Each week · Tuesday and Friday' },
			{ value: '2', unit: 'free', label: 'ConvertiX and DigiMoneY' },
		],
	},
};

export function Hero() {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="hero" id="inicio">
			<div className="hero-topline">
				<span className="eyebrow"><i />{s.eyebrow}</span>
				<span className="hero-note">{s.note}</span>
			</div>
			<h1>{s.h1[0]}<em>{s.h1[1]}</em>{s.h1[2]}</h1>
			<p className="hero-description">{s.description}</p>
			<div className="hero-actions">
				<a className="button primary" href={trialLink[locale]}>{s.primary} <ArrowUpRight size={19} /></a>
				<a className="button secondary" href="#productos">{s.secondary} <ArrowDown size={18} /></a>
			</div>
			<p className="hero-footnote"><Check size={15} /> {s.footnote}</p>
			<div className="stats">
				{s.stats.map(stat => (
					<div key={stat.label}>
						<strong>{stat.value}{stat.unit && <span>{stat.unit}</span>}</strong>
						<p>{stat.label}</p>
					</div>
				))}
			</div>
		</section>
	);
}
