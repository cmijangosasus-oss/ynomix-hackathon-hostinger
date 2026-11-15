import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import { digimoneyLearn } from '@/data/free-pages';

const strings: Record<Locale, { eyebrow: string; heading: string; sub: string; note: string }> = {
	es: { eyebrow: 'DÓNDE APRENDER', heading: 'Lugares para formarte en blockchain.', sub: 'Recursos públicos para empezar\ncon criterio y a tu ritmo.', note: 'Información educativa: DigiMoneY no es asesoría de inversión ni recomienda comprar, vender o invertir en ningún activo.' },
	en: { eyebrow: 'WHERE TO LEARN', heading: 'Places to learn about blockchain.', sub: 'Public resources to start\nwith judgment and at your pace.', note: 'Educational information: DigiMoneY is not investment advice and does not recommend buying, selling or investing in any asset.' },
};

export function LearnList() {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="section" id="aprender">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<div className="related-grid">
				{digimoneyLearn[locale].map(item => (
					<a className="related-card" key={item.title} href={item.url} target="_blank" rel="noopener noreferrer">
						<span className="related-label">{item.title}</span>
						<span className="related-desc">{item.description}</span>
						<span className="related-arrow"><ArrowUpRight size={18} /></span>
					</a>
				))}
			</div>
			<p className="section-note"><GraduationCap size={14} /> {s.note}</p>
		</section>
	);
}
