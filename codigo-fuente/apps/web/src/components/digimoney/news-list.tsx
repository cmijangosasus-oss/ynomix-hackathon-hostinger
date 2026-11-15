import { ArrowUpRight, Clock } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import { digimoneyNews } from '@/data/free-pages';

const strings: Record<Locale, { eyebrow: string; heading: string; sub: string; read: (source: string) => string }> = {
	es: { eyebrow: 'NOTICIAS RECIENTES', heading: 'Lo último sobre blockchain.', sub: 'Cinco noticias con su tema,\nfuente y antigüedad.', read: source => `Leer en ${source}` },
	en: { eyebrow: 'RECENT NEWS', heading: 'The latest on blockchain.', sub: 'Five stories with their topic,\nsource and age.', read: source => `Read on ${source}` },
};

export function NewsList() {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="section" id="noticias">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<ul className="news-list">
				{digimoneyNews[locale].map(item => (
					<li key={item.headline} className="news-item">
						<div className="news-item-top">
							<span className="news-topic">{item.topic}</span>
							<span className="news-age"><Clock size={13} /> {item.age}</span>
						</div>
						<h3>{item.headline}</h3>
						<a className="text-link" href={item.url} target="_blank" rel="noopener noreferrer">{s.read(item.source)} <ArrowUpRight size={16} /></a>
					</li>
				))}
			</ul>
		</section>
	);
}
