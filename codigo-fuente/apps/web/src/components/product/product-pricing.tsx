import { ArrowUpRight } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import type { ProductPageData } from '@/data/product-pages';

const strings: Record<Locale, {
	eyebrow: (name: string) => string;
	heading: [string, string];
	sub: string;
	headers: [string, string, string];
	caption: (name: string) => string;
	bottom: (name: string) => string;
}> = {
	es: {
		eyebrow: name => `PRECIOS DE ${name.toUpperCase()}`,
		heading: ['Elige tu período.', 'Conoce su precio.'],
		sub: 'Todos los valores están\nen dólares estadounidenses (USD).',
		headers: ['Período', 'Precio', 'Lo que debes saber'],
		caption: name => `Precios de ${name} en USD`,
		bottom: name => `${name} está en lista de espera. Solicita tu acceso cuando estés listo.`,
	},
	en: {
		eyebrow: name => `${name.toUpperCase()} PRICING`,
		heading: ['Choose your period.', 'Know its price.'],
		sub: 'All values are in\nUS dollars (USD).',
		headers: ['Period', 'Price', 'What you should know'],
		caption: name => `${name} prices in USD`,
		bottom: name => `${name} is on the waitlist. Request your access when you are ready.`,
	},
};

export function ProductPricing({ data }: { data: ProductPageData }) {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="pricing-section section" id="precios-producto">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow(data.name)}</p>
					<h2>{s.heading[0]}<br />{s.heading[1]}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<div className="table-scroll">
				<table>
					<caption className="sr-only">{s.caption(data.name)}</caption>
					<thead>
						<tr>
							<th scope="col">{s.headers[0]}</th>
							<th scope="col">{s.headers[1]}</th>
							<th scope="col">{s.headers[2]}</th>
						</tr>
					</thead>
					<tbody>
						{data.pricing.map(row => (
							<tr key={row.plan}>
								<th scope="row">{row.plan}</th>
								<td>{row.price}</td>
								<td>{row.note}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="pricing-bottom">
				<p>{s.bottom(data.name)}</p>
				<a className="text-link" href={data.waitlistLink}>{data.waitlistLabel} <ArrowUpRight size={17} /></a>
			</div>
		</section>
	);
}
