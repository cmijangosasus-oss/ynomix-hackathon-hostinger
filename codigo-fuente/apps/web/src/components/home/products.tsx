import { ArrowUpRight, Wallet, ChartNoAxesCombined, Newspaper, ArrowRightLeft, Fingerprint, type LucideIcon } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import { products } from '@/data/products';

const icons: Record<'wallet' | 'chart' | 'news' | 'convert' | 'digital', LucideIcon> = {
	wallet: Wallet,
	chart: ChartNoAxesCombined,
	news: Newspaper,
	convert: ArrowRightLeft,
	digital: Fingerprint,
};

const productPath: Record<string, string> = {
	Qadrax: '/qadrax',
	AddiX: '/addix',
	InfoX: '/infox',
	ConvertiX: '/convertix',
	DigiMoneY: '/digimoney',
};

const strings: Record<Locale, { eyebrow: string; heading: [string, string]; sub: string; note: string; noteLink: string }> = {
	es: {
		eyebrow: 'UN ECOSISTEMA, CINCO HERRAMIENTAS',
		heading: ['Una herramienta para', 'cada parte de tu dinero.'],
		sub: 'No necesitas hacerlo todo a la vez.\nEmpieza por lo que hoy te importa.',
		note: '¿No sabes por cuál empezar?',
		noteLink: 'Hablemos de lo que necesitas',
	},
	en: {
		eyebrow: 'ONE ECOSYSTEM, FIVE TOOLS',
		heading: ['One tool for', 'each part of your money.'],
		sub: 'You do not need to do it all at once.\nStart with what matters to you today.',
		note: 'Not sure where to start?',
		noteLink: 'Let us talk about what you need',
	},
};

export function Products() {
	const locale = useLocale();
	const s = strings[locale];
	const list = products[locale];
	return (
		<section className="products-section section" id="productos">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading[0]}<br />{s.heading[1]}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<div className="product-grid">
				{list.map(product => {
					const Icon = icons[product.icon];
					return (
						<article className={`product-card product-${product.icon}`} key={product.name}>
							<div className="card-top">
								<span className="product-icon"><Icon size={25} strokeWidth={1.6} /></span>
								<span className="tag">{product.name === 'AddiX' ? (locale === 'en' ? 'From USD 15' : 'Desde USD 15') : product.tag}</span>
							</div>
							<div>
								<h3>{product.name}</h3>
								<p className="product-purpose">{product.purpose}</p>
								<p className="product-description">{product.description}</p>
							</div>
							<a href={productPath[product.name]}>{product.link}<ArrowUpRight size={17} /></a>
						</article>
					);
				})}
			</div>
			<p className="section-note">{s.note} <a href="#productos">{s.noteLink} <ArrowUpRight size={15} /></a></p>
		</section>
	);
}
