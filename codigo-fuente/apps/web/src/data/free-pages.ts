import type { Locale } from '@/lib/i18n';
import type { ProductPageData } from './product-pages';

export type FreeSlug = 'convertix' | 'digimoney';

const home = (locale: Locale) => (locale === 'en' ? '/en' : '/');

export const freePages: Record<Locale, Record<FreeSlug, ProductPageData>> = {
	es: {
		convertix: {
			slug: 'convertix',
			path: '/convertix',
			name: 'ConvertiX',
			eyebrow: 'CONVERSIÓN DE DIVISAS GRATUITA',
			h1: 'ConvertiX: convierte divisas con tasas actualizadas cada día',
			intro:
				'ConvertiX es la calculadora de divisas gratuita de YnomiX. Convierte entre dólares, pesos colombianos, pesos mexicanos y euros con tasas actualizadas cada día. Es una herramienta sin costo para consultar el valor de una moneda antes de viajar, comprar o enviar dinero al extranjero.',
			tag: 'Gratis',
			waitlistLink: '#calculadora',
			waitlistLabel: 'Convertir ahora',
			benefits: [],
			steps: [],
			pricing: [],
			question: {
				heading: '¿Para quién es ConvertiX?',
				answer:
					'ConvertiX es para cualquier persona que necesite consultar el valor de una divisa: quien viaja, compra en el extranjero o envía dinero a otro país. Es una herramienta gratuita y rápida para ver cuánto vale una moneda en otra, con tasas actualizadas cada día.',
			},
			faqs: [
				{ question: '¿ConvertiX tiene algún costo?', answer: 'No. ConvertiX es una herramienta gratuita de YnomiX. Puedes convertir entre USD, COP, MXN y EUR las veces que necesites, sin registro ni pago.' },
				{ question: '¿Cada cuánto se actualizan las tasas?', answer: 'Las tasas se actualizan cada día. Junto al resultado verás la fecha de la última actualización para que sepas qué tan reciente es la información que estás consultando.' },
				{ question: '¿Puedo usar ConvertiX para transacciones reales?', answer: 'ConvertiX es una herramienta de consulta. Las tasas son referenciales y pueden diferir de las que aplique tu banco o servicio, así que confirma el tipo de cambio antes de cualquier operación.' },
			],
			related: [
				{ label: 'Qadrax', href: '/qadrax', description: 'Registro del uso del dinero.' },
				{ label: 'AddiX', href: '/addix', description: 'Monitorea ahorros e inversiones.' },
				{ label: 'Inicio', href: '/', description: 'Volver al inicio de YnomiX.' },
			],
			metaTitle: 'ConvertiX: conversor de divisas con tasas diarias | YnomiX',
			metaDescription:
				'ConvertiX es el conversor de divisas gratis de YnomiX. Convierte USD, COP, MXN y EUR con tasas actualizadas cada día. Sin costo y sin registro.',
		},
		digimoney: {
			slug: 'digimoney',
			path: '/digimoney',
			name: 'DigiMoneY',
			eyebrow: 'BLOCKCHAIN, NOTICIAS Y RECURSOS',
			h1: 'DigiMoneY: aprende sobre blockchain con noticias y recursos',
			intro:
				'DigiMoneY es el espacio gratuito de YnomiX para aprender sobre blockchain. Reúne noticias recientes y recursos para entender cómo funciona esta tecnología, sin ser asesoría de inversión. Es información educativa para quien quiere acercarse al mundo cripto con criterio y claridad.',
			tag: 'Gratis',
			waitlistLink: '/digimoney',
			waitlistLabel: 'Explorar DigiMoneY',
			benefits: [],
			steps: [],
			pricing: [],
			question: {
				heading: '¿Qué vas a encontrar en DigiMoneY?',
				answer:
					'En DigiMoneY encuentras una lista de noticias recientes sobre blockchain, cada una con su tema, fuente y antigüedad, más una selección de lugares para aprender. Es contenido educativo para acercarte a esta tecnología con criterio, no asesoría de inversión.',
			},
			faqs: [
				{ question: '¿DigiMoneY es asesoría de inversión?', answer: 'No. DigiMoneY ofrece información educativa sobre blockchain y noticias del sector. No es asesoría financiera ni una recomendación de comprar, vender o invertir en ningún activo.' },
				{ question: '¿DigiMoneY tiene costo?', answer: 'No. DigiMoneY es un recurso gratuito de YnomiX. Puedes consultar las noticias y la lista de lugares para aprender sin registro ni pago.' },
				{ question: '¿De dónde salen las noticias de DigiMoneY?', answer: 'Las noticias provienen de fuentes públicas del sector blockchain. Cada noticia muestra su fuente y un enlace para que leas el contenido original directamente en su sitio.' },
			],
			related: [
				{ label: 'Qadrax', href: '/qadrax', description: 'Registro del uso del dinero.' },
				{ label: 'AddiX', href: '/addix', description: 'Monitorea ahorros e inversiones.' },
				{ label: 'Inicio', href: '/', description: 'Volver al inicio de YnomiX.' },
			],
			metaTitle: 'DigiMoneY: blockchain, noticias y recursos | YnomiX',
			metaDescription:
				'DigiMoneY es el espacio gratis de YnomiX para aprender blockchain: noticias recientes con fuente y recursos. Información educativa, no asesoría de inversión.',
		},
	},
	en: {
		convertix: {
			slug: 'convertix',
			path: '/en/convertix',
			name: 'ConvertiX',
			eyebrow: 'FREE CURRENCY CONVERSION',
			h1: 'ConvertiX: convert currencies with rates updated every day',
			intro:
				'ConvertiX is the free currency calculator from YnomiX. Convert between dollars, Colombian pesos, Mexican pesos and euros with rates updated every day. It is a no-cost tool to check the value of a currency before traveling, buying or sending money abroad.',
			tag: 'Free',
			waitlistLink: '#calculadora',
			waitlistLabel: 'Convert now',
			benefits: [],
			steps: [],
			pricing: [],
			question: {
				heading: 'Who is ConvertiX for?',
				answer:
					'ConvertiX is for anyone who needs to check the value of a currency: people who travel, buy abroad or send money to another country. It is a free and fast tool to see how much one currency is worth in another, with rates updated every day.',
			},
			faqs: [
				{ question: 'Does ConvertiX cost anything?', answer: 'No. ConvertiX is a free tool from YnomiX. You can convert between USD, COP, MXN and EUR as many times as you need, with no sign-up or payment.' },
				{ question: 'How often are the rates updated?', answer: 'Rates are updated every day. Next to the result you will see the date of the last update so you know how recent the information you are checking is.' },
				{ question: 'Can I use ConvertiX for real transactions?', answer: 'ConvertiX is a reference tool. Rates are indicative and may differ from those applied by your bank or service, so confirm the exchange rate before any transaction.' },
			],
			related: [
				{ label: 'Qadrax', href: '/en/qadrax', description: 'Tracking how you use your money.' },
				{ label: 'AddiX', href: '/en/addix', description: 'Monitor savings and investments.' },
				{ label: 'Home', href: home('en'), description: 'Back to the YnomiX home.' },
			],
			metaTitle: 'ConvertiX: currency converter with daily rates | YnomiX',
			metaDescription:
				'ConvertiX is the free currency converter from YnomiX. Convert USD, COP, MXN and EUR with rates updated every day. No cost, no sign-up, use it anytime.',
		},
		digimoney: {
			slug: 'digimoney',
			path: '/en/digimoney',
			name: 'DigiMoneY',
			eyebrow: 'BLOCKCHAIN, NEWS AND RESOURCES',
			h1: 'DigiMoneY: learn about blockchain with news and resources',
			intro:
				'DigiMoneY is the free space from YnomiX to learn about blockchain. It brings together recent news and resources to understand how this technology works, and is not investment advice. It is educational information for anyone who wants to approach the crypto world with judgment and clarity.',
			tag: 'Free',
			waitlistLink: '/digimoney',
			waitlistLabel: 'Explore DigiMoneY',
			benefits: [],
			steps: [],
			pricing: [],
			question: {
				heading: 'What will you find in DigiMoneY?',
				answer:
					'In DigiMoneY you will find a list of recent blockchain news, each with its topic, source and age, plus a selection of places to learn. It is educational content to approach this technology with judgment, not investment advice.',
			},
			faqs: [
				{ question: 'Is DigiMoneY investment advice?', answer: 'No. DigiMoneY offers educational information about blockchain and industry news. It is not financial advice or a recommendation to buy, sell or invest in any asset.' },
				{ question: 'Does DigiMoneY cost anything?', answer: 'No. DigiMoneY is a free resource from YnomiX. You can read the news and the list of places to learn with no sign-up or payment.' },
				{ question: 'Where do the DigiMoneY news come from?', answer: 'The news comes from public sources in the blockchain industry. Each story shows its source and a link so you can read the original content directly on its site.' },
			],
			related: [
				{ label: 'Qadrax', href: '/en/qadrax', description: 'Tracking how you use your money.' },
				{ label: 'AddiX', href: '/en/addix', description: 'Monitor savings and investments.' },
				{ label: 'Home', href: home('en'), description: 'Back to the YnomiX home.' },
			],
			metaTitle: 'DigiMoneY: blockchain, news and resources | YnomiX',
			metaDescription:
				'DigiMoneY is the free space from YnomiX to learn blockchain: recent news with source and resources. Educational information, not investment advice.',
		},
	},
};

type NewsItem = { topic: string; headline: string; source: string; age: string; url: string };

/** Recent example news shown on the DigiMoneY page. */
export const digimoneyNews: Record<Locale, NewsItem[]> = {
	es: [
		{ topic: 'Bitcoin', headline: 'Bitcoin alcanza un nuevo máximo histórico de capitalización', source: 'CoinDesk', age: 'hace 1 día', url: 'https://www.coindesk.com' },
		{ topic: 'Ethereum', headline: 'Ethereum completa una nueva actualización de su red', source: 'Cointelegraph', age: 'hace 2 días', url: 'https://cointelegraph.com' },
		{ topic: 'Regulación', headline: 'Avanza un marco regulatorio para criptoactivos en Latinoamérica', source: 'Decrypt', age: 'hace 3 días', url: 'https://decrypt.co' },
		{ topic: 'DeFi', headline: 'El sector DeFi supera los 100 mil millones en valor bloqueado', source: 'Bitcoin Magazine', age: 'hace 4 días', url: 'https://bitcoinmagazine.com' },
		{ topic: 'Blockchain', headline: 'Bancos exploran tokens para pagos transfronterizos', source: 'CoinDesk', age: 'hace 5 días', url: 'https://www.coindesk.com' },
	],
	en: [
		{ topic: 'Bitcoin', headline: 'Bitcoin reaches a new all-time high in market capitalization', source: 'CoinDesk', age: '1 day ago', url: 'https://www.coindesk.com' },
		{ topic: 'Ethereum', headline: 'Ethereum completes a new network upgrade', source: 'Cointelegraph', age: '2 days ago', url: 'https://cointelegraph.com' },
		{ topic: 'Regulation', headline: 'A regulatory framework for crypto assets advances in Latin America', source: 'Decrypt', age: '3 days ago', url: 'https://decrypt.co' },
		{ topic: 'DeFi', headline: 'The DeFi sector surpasses 100 billion in locked value', source: 'Bitcoin Magazine', age: '4 days ago', url: 'https://bitcoinmagazine.com' },
		{ topic: 'Blockchain', headline: 'Banks explore tokens for cross-border payments', source: 'CoinDesk', age: '5 days ago', url: 'https://www.coindesk.com' },
	],
};

type LearnItem = { title: string; description: string; url: string };

/** Public resources to learn about blockchain. */
export const digimoneyLearn: Record<Locale, LearnItem[]> = {
	es: [
		{ title: 'Bitcoin.org', description: 'Lee el documento técnico original de Bitcoin y entiende sus bases.', url: 'https://bitcoin.org/es/' },
		{ title: 'Ethereum.org', description: 'Aprende cómo funciona Ethereum y los contratos inteligentes.', url: 'https://ethereum.org/es/learn/' },
		{ title: 'Binance Academy', description: 'Cursos gratuitos sobre blockchain y criptomonedas en español.', url: 'https://academy.binance.com/es' },
		{ title: 'MIT OpenCourseWare', description: 'Curso abierto de Blockchain y dinero del MIT.', url: 'https://ocw.mit.edu' },
		{ title: 'Coursera', description: 'Cursos de blockchain impartidos por universidades.', url: 'https://www.coursera.org' },
	],
	en: [
		{ title: 'Bitcoin.org', description: 'Read the original Bitcoin whitepaper and understand its foundations.', url: 'https://bitcoin.org/' },
		{ title: 'Ethereum.org', description: 'Learn how Ethereum and smart contracts work.', url: 'https://ethereum.org/learn/' },
		{ title: 'Binance Academy', description: 'Free courses on blockchain and cryptocurrencies.', url: 'https://academy.binance.com' },
		{ title: 'MIT OpenCourseWare', description: 'Open MIT course on Blockchain and Money.', url: 'https://ocw.mit.edu' },
		{ title: 'Coursera', description: 'Blockchain courses taught by universities.', url: 'https://www.coursera.org' },
	],
};
