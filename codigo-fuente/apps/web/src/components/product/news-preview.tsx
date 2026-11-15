import { ArrowUpRight, Newspaper } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import { infoxNewsExample } from '@/data/product-pages';

const strings: Record<Locale, { eyebrow: string; heading: string; sub: string; link: string }> = {
	es: { eyebrow: 'ASÍ SE VE UN INFORME', heading: 'Una noticia resumida, de ejemplo.', sub: 'Así condensa InfoX lo esencial\npara tu bolsillo.', link: 'Anotarme en la lista de Qadrax' },
	en: { eyebrow: 'WHAT A REPORT LOOKS LIKE', heading: 'A summarized news story, as an example.', sub: 'This is how InfoX condenses the essentials\nfor your wallet.', link: 'Get the full report with Qadrax' },
};

export function NewsPreview() {
	const locale = useLocale();
	const s = strings[locale];
	const example = infoxNewsExample[locale];
	return (
		<section className="section" id="ejemplo">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<article className="news-preview">
				<div className="news-top">
					<span className="news-icon"><Newspaper size={22} strokeWidth={1.6} /></span>
					<span className="news-meta">{example.source} · {example.date}</span>
				</div>
				<h3>{example.headline}</h3>
				<p>{example.summary}</p>
				<a className="text-link" href="/qadrax">
					{s.link} <ArrowUpRight size={17} />
				</a>
			</article>
		</section>
	);
}
