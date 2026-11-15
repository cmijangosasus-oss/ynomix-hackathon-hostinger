import { ArrowUpRight } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import { trialLink } from '@/data/products';

const strings: Record<Locale, {
	eyebrow: string;
	heading: [string, string];
	sub: string;
	caption: string;
	headers: [string, string, string, string];
	rows: { name: string; tag?: string; six?: string; year?: string; note: string; free?: boolean; included?: boolean }[];
	bottom: string;
	link: string;
}> = {
	es: {
		eyebrow: 'PRECIOS CLAROS, DECISIONES TRANQUILAS',
		heading: ['Elige tu herramienta.', 'Conoce su precio.'],
		sub: 'Todos los valores están en dólares\nestadounidenses (USD).',
		caption: 'Precios de las herramientas YnomiX en USD',
		headers: ['Herramienta', '6 meses', '1 año', 'Lo que debes saber'],
		rows: [
			{ name: 'Qadrax', tag: 'Prueba 15 días', six: 'USD 25', year: 'USD 39', note: 'Registro del uso del dinero + InfoX para clientes de pago' },
			{ name: 'AddiX', six: 'USD 15', year: 'USD 25', note: 'Ahorros e inversiones. Funciona por separado.' },
			{ name: 'InfoX', included: true, note: 'Dos reportes semanales: martes y viernes' },
			{ name: 'ConvertiX', free: true, note: 'Consulta las funciones y el acceso con soporte' },
			{ name: 'DigiMoneY', free: true, note: 'Consulta las funciones y el acceso con soporte' },
		],
		bottom: 'Primero conoce Qadrax. Después decide si es para ti.',
		link: 'Anotarme en la lista de Qadrax',
	},
	en: {
		eyebrow: 'CLEAR PRICES, CALM DECISIONS',
		heading: ['Choose your tool.', 'Know its price.'],
		sub: 'All values are in US\ndollars (USD).',
		caption: 'YnomiX tool prices in USD',
		headers: ['Tool', '6 months', '1 year', 'What you should know'],
		rows: [
			{ name: 'Qadrax', tag: '15-day trial', six: 'USD 25', year: 'USD 39', note: 'Money-use tracking + InfoX for paying customers' },
			{ name: 'AddiX', six: 'USD 15', year: 'USD 25', note: 'Savings and investments. Works separately.' },
			{ name: 'InfoX', included: true, note: 'Two weekly reports: Tuesday and Friday' },
			{ name: 'ConvertiX', free: true, note: 'Check features and access with support' },
			{ name: 'DigiMoneY', free: true, note: 'Check features and access with support' },
		],
		bottom: 'Get to know Qadrax first. Then decide if it is for you.',
		link: 'Request the 15 free days',
	},
};

export function Pricing() {
	const locale = useLocale();
	const s = strings[locale];
	return (
		<section className="pricing-section section" id="precios">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading[0]}<br />{s.heading[1]}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<div className="table-scroll">
				<table>
					<caption className="sr-only">{s.caption}</caption>
					<thead>
						<tr>
							<th scope="col">{s.headers[0]}</th>
							<th scope="col">{s.headers[1]}</th>
							<th scope="col">{s.headers[2]}</th>
							<th scope="col">{s.headers[3]}</th>
						</tr>
					</thead>
					<tbody>
						{s.rows.map(row => (
							<tr key={row.name}>
								<th scope="row">
									{row.name}
									{row.tag && <span className="small-tag">{row.tag}</span>}
								</th>
								{row.included ? (
									<td colSpan={2}>{locale === 'en' ? 'Included with paid Qadrax' : 'Incluido en Qadrax de pago'}</td>
								) : row.free ? (
									<td colSpan={2}><span className="free-price">{locale === 'en' ? 'Free' : 'Gratis'}</span></td>
								) : (
									<>
										<td>{row.six}</td>
										<td>{row.year}</td>
									</>
								)}
								<td>{row.note}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="pricing-bottom">
				<p>{s.bottom}</p>
				<a className="text-link" href={trialLink[locale]}>{s.link} <ArrowUpRight size={17} /></a>
			</div>
		</section>
	);
}
