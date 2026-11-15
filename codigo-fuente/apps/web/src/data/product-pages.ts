import type { Locale } from '@/lib/i18n';

export type ProductSlug = 'qadrax' | 'addix' | 'infox' | 'convertix' | 'digimoney';

export type ProductPageData = {
	slug: ProductSlug;
	/** Path used in internal links and the URL. */
	path: string;
	name: string;
	eyebrow: string;
	h1: string;
	/** Direct answer, 40–60 words: what it is, for whom, what it offers. */
	intro: string;
	tag: string;
	/** Mailto link for the waitlist button. */
	waitlistLink: string;
	waitlistLabel: string;
	benefits: string[];
	steps: { title: string; detail: string }[];
	pricing: { plan: string; price: string; note: string }[];
	question: { heading: string; answer: string };
	faqs: { question: string; answer: string }[];
	/** Other products to link to, plus the home link. */
	related: { label: string; href: string; description: string }[];
	metaTitle: string;
	metaDescription: string;
};

const home = (locale: Locale) => (locale === 'en' ? '/en' : '/');

export const productPages: Record<Locale, Record<'qadrax' | 'addix' | 'infox', ProductPageData>> = {
	es: {
		qadrax: {
			slug: 'qadrax',
			path: '/qadrax',
			name: 'Qadrax',
			eyebrow: 'TRAZABILIDAD DEL USO DE TU DINERO',
			h1: 'Qadrax: sabe en qué se va tu dinero',
			intro:
				'Qadrax es la app de YnomiX para la trazabilidad del uso del dinero de personas, grupos y familias. Registra tus movimientos, te muestra tus hábitos de gasto y te ayuda a decidir con más claridad. Está pensada para quien quiere entender a dónde va su dinero cada mes.',
			tag: 'Prueba 15 días',
			waitlistLink: '/acerca-de#contacto',
			waitlistLabel: 'Unirme a la lista de espera',
			benefits: [
				'Registro claro de cada movimiento y categoría de gasto.',
				'Vista de tus hábitos para identificar en qué gastas más.',
				'Uso personal, grupal o familiar con la misma herramienta.',
				'Los clientes de pago reciben los reportes de InfoX incluidos.',
			],
			steps: [
				{ title: 'Solicita tu prueba de 15 días', detail: 'Escríbenos a soporte y te indicamos cómo activar tu acceso de prueba sin costo.' },
				{ title: 'Registra tus movimientos', detail: 'Anota tus ingresos y gastos en categorías para que Qadrax los organice por ti.' },
				{ title: 'Revisa tus hábitos y decide', detail: 'Observa los patrones que aparecen y toma decisiones con más perspectiva.' },
			],
			pricing: [
				{ plan: 'Prueba de 15 días', price: 'Gratis', note: 'Conoce Qadrax antes de decidir.' },
				{ plan: '6 meses', price: 'USD 25', note: 'Incluye los reportes de InfoX.' },
				{ plan: '1 año', price: 'USD 39', note: 'Incluye los reportes de InfoX.' },
			],
			question: {
				heading: '¿Para quién es Qadrax?',
				answer:
					'Qadrax es para personas, grupos y familias que quieren entender en qué se va su dinero. Sirve tanto para llevar un control personal como para organizar los gastos compartidos de un grupo o un hogar, con una vista clara de los hábitos de uso.',
			},
			faqs: [
				{ question: '¿Qadrax incluye InfoX?', answer: 'Sí. Los clientes de pago de Qadrax reciben los reportes de InfoX incluidos, sin costo adicional.' },
				{ question: '¿Puedo usar Qadrax con mi familia?', answer: 'Sí. Qadrax está pensado para uso personal, grupal o familiar, para que varios puedan llevar el registro juntos.' },
				{ question: '¿La prueba de 15 días tiene algún costo?', answer: 'No. La prueba de Qadrax es gratuita durante 15 días para que decidas si se ajusta a tus necesidades.' },
			],
			related: [
				{ label: 'AddiX', href: '/addix', description: 'Monitorea ahorros e inversiones.' },
				{ label: 'InfoX', href: '/infox', description: 'Noticias financieras resumidas.' },
				{ label: 'Inicio', href: '/', description: 'Volver al inicio de YnomiX.' },
			],
			metaTitle: 'Qadrax: trazabilidad del uso de tu dinero | YnomiX',
			metaDescription:
				'Qadrax es la app de YnomiX para registrar el uso de tu dinero. Prueba 15 días gratis, 25 USD por 6 meses o 39 USD al año. Incluye los reportes de InfoX.',
		},
		addix: {
			slug: 'addix',
			path: '/addix',
			name: 'AddiX',
			eyebrow: 'AHORROS, INVERSIONES E INGRESOS',
			h1: 'AddiX: monitorea ahorros, inversiones y todo lo que suma a tus ingresos',
			intro:
				'AddiX es la herramienta de YnomiX para monitorear ahorros, inversiones y todo lo que suma a tus ingresos. Funciona para personas, grupos o familias que siguen metas financieras. Es independiente de Qadrax: puedes usarla por separado, con sus propios precios y su propio seguimiento.',
			tag: 'Prueba 15 días',
			waitlistLink: '/acerca-de#contacto',
			waitlistLabel: 'Unirme a la lista de espera',
			benefits: [
				'Seguimiento de ahorros, inversiones e ingresos en un solo lugar.',
				'Metas financieras con seguimiento para personas, grupos o familias.',
				'Funciona por separado de Qadrax, con sus propios precios.',
				'Vista clara de lo que estás construyendo a lo largo del tiempo.',
			],
			steps: [
				{ title: 'Solicita tu prueba de 15 días', detail: 'Escríbenos a soporte y te explicamos cómo activar AddiX durante la prueba gratuita.' },
				{ title: 'Carga tus ahorros e inversiones', detail: 'Registra tus cuentas, metas y movimientos para que AddiX los monitoree.' },
				{ title: 'Da seguimiento a tus metas', detail: 'Revisa tu progreso y ajusta tus decisiones según lo que veas.' },
			],
			pricing: [
				{ plan: 'Prueba de 15 días', price: 'Gratis', note: 'Conoce AddiX antes de decidir.' },
				{ plan: '6 meses', price: 'USD 15', note: 'Producto independiente de Qadrax.' },
				{ plan: '1 año', price: 'USD 25', note: 'Producto independiente de Qadrax.' },
			],
			question: {
				heading: '¿Necesito Qadrax para usar AddiX?',
				answer:
					'No. AddiX es un producto independiente de Qadrax y funciona por separado, con sus propios precios. Puedes usar AddiX aunque no uses Qadrax, y elegir la herramienta que mejor responda a lo que necesitas hoy.',
			},
			faqs: [
				{ question: '¿AddiX funciona junto con Qadrax?', answer: 'No es necesario. AddiX es independiente de Qadrax y puedes usarlo por separado, con sus propios precios.' },
				{ question: '¿AddiX sirve para un grupo o una familia?', answer: 'Sí. AddiX está pensado para personas, grupos o familias que quieren dar seguimiento a sus ahorros e inversiones.' },
				{ question: '¿Cuánto cuesta AddiX?', answer: 'AddiX cuesta USD 15 por 6 meses o USD 25 al año, con una prueba gratuita de 15 días antes de decidir.' },
			],
			related: [
				{ label: 'Qadrax', href: '/qadrax', description: 'Registro del uso del dinero.' },
				{ label: 'InfoX', href: '/infox', description: 'Noticias financieras resumidas.' },
				{ label: 'Inicio', href: '/', description: 'Volver al inicio de YnomiX.' },
			],
			metaTitle: 'AddiX: monitorea tus ahorros e inversiones | YnomiX',
			metaDescription:
				'AddiX monitorea ahorros, inversiones e ingresos para personas, grupos y familias. Funciona por separado de Qadrax. Prueba 15 días gratis, desde USD 15.',
		},
		infox: {
			slug: 'infox',
			path: '/infox',
			name: 'InfoX',
			eyebrow: 'NOTICIAS FINANCIERAS RESUMIDAS',
			h1: 'InfoX: las noticias que afectan tu bolsillo, resumidas',
			intro:
				'InfoX resume con IA las noticias financieras que afectan tu bolsillo y te envía un informe los martes y los viernes, para que no tengas que leerlo todo. Está pensado para personas, grupos y familias que quieren estar informados sin perder tiempo. Se incluye con Qadrax de pago.',
			tag: 'Incluido en Qadrax',
			waitlistLink: '/qadrax',
			waitlistLabel: 'Obtener el reporte completo con Qadrax',
			benefits: [
				'Resumen con IA de las noticias financieras más relevantes.',
				'Dos informes por semana: los martes y los viernes.',
				'Información que afecta tu bolsillo, sin tener que leerlo todo.',
				'Incluido con Qadrax de pago, sin costo adicional.',
			],
			steps: [
				{ title: 'Activa Qadrax de pago', detail: 'InfoX se incluye con Qadrax de pago, así que empieza por activar tu acceso a Qadrax.' },
				{ title: 'Recibe los informes', detail: 'Cada martes y viernes te llega un resumen con las noticias financieras destacadas.' },
				{ title: 'Decide con información', detail: 'Usa lo resumido para complementar el registro de tu dinero y decidir con calma.' },
			],
			pricing: [
				{ plan: 'Con Qadrax de pago', price: 'Incluido', note: 'Dos reportes semanales: martes y viernes.' },
				{ plan: 'Sin Qadrax', price: '—', note: 'InfoX se incluye con Qadrax de pago.' },
			],
			question: {
				heading: '¿Cómo resume InfoX las noticias?',
				answer:
					'InfoX usa IA para seleccionar y resumir las noticias financieras que pueden afectar tu bolsillo, y te las envía en un informe los martes y los viernes. Así te mantienes informado de lo esencial sin tener que leer todas las fuentes por tu cuenta.',
			},
			faqs: [
				{ question: '¿InfoX tiene costo adicional?', answer: 'No. InfoX está incluido para los clientes de pago de Qadrax, sin costo adicional.' },
				{ question: '¿Cuándo llegan los informes de InfoX?', answer: 'InfoX envía dos informes por semana: uno el martes y otro el viernes.' },
				{ question: '¿Puedo usar InfoX sin Qadrax?', answer: 'InfoX se incluye con Qadrax de pago. Para recibir los reportes necesitas un acceso de pago a Qadrax.' },
			],
			related: [
				{ label: 'Qadrax', href: '/qadrax', description: 'Activa Qadrax para recibir InfoX.' },
				{ label: 'AddiX', href: '/addix', description: 'Monitorea ahorros e inversiones.' },
				{ label: 'Inicio', href: '/', description: 'Volver al inicio de YnomiX.' },
			],
			metaTitle: 'InfoX: noticias financieras resumidas cada semana | YnomiX',
			metaDescription:
				'InfoX resume con IA las noticias financieras que afectan tu bolsillo y envía informes los martes y viernes. Incluido con Qadrax de pago, sin costo adicional.',
		},
	},
	en: {
		qadrax: {
			slug: 'qadrax',
			path: '/en/qadrax',
			name: 'Qadrax',
			eyebrow: 'TRACKING HOW YOU USE YOUR MONEY',
			h1: 'Qadrax: know where your money goes',
			intro:
				'Qadrax is the YnomiX app for tracking how individuals, groups and families use their money. It records your transactions, shows your spending habits and helps you decide with more clarity. It is built for anyone who wants to understand where their money goes each month.',
			tag: '15-day trial',
			waitlistLink: '/acerca-de#contacto',
			waitlistLabel: 'Join the waitlist',
			benefits: [
				'Clear record of every transaction and spending category.',
				'A view of your habits to identify where you spend the most.',
				'Personal, group or family use with the same tool.',
				'Paying customers receive the InfoX reports included.',
			],
			steps: [
				{ title: 'Request your 15-day trial', detail: 'Write to support and we will tell you how to activate your free trial access.' },
				{ title: 'Record your transactions', detail: 'Log your income and expenses in categories so Qadrax can organize them for you.' },
				{ title: 'Review your habits and decide', detail: 'Watch the patterns that appear and make decisions with more perspective.' },
			],
			pricing: [
				{ plan: '15-day trial', price: 'Free', note: 'Get to know Qadrax before deciding.' },
				{ plan: '6 months', price: 'USD 25', note: 'Includes the InfoX reports.' },
				{ plan: '1 year', price: 'USD 39', note: 'Includes the InfoX reports.' },
			],
			question: {
				heading: 'Who is Qadrax for?',
				answer:
					'Qadrax is for individuals, groups and families who want to understand where their money goes. It works for personal tracking as well as for organizing the shared expenses of a group or a household, with a clear view of spending habits.',
			},
			faqs: [
				{ question: 'Does Qadrax include InfoX?', answer: 'Yes. Paying Qadrax customers receive the InfoX reports included, at no extra cost.' },
				{ question: 'Can I use Qadrax with my family?', answer: 'Yes. Qadrax is designed for personal, group or family use, so several people can track together.' },
				{ question: 'Does the 15-day trial cost anything?', answer: 'No. The Qadrax trial is free for 15 days so you can decide whether it fits your needs.' },
			],
			related: [
				{ label: 'AddiX', href: '/en/addix', description: 'Monitor savings and investments.' },
				{ label: 'InfoX', href: '/en/infox', description: 'Summarized financial news.' },
				{ label: 'Home', href: home('en'), description: 'Back to the YnomiX home.' },
			],
			metaTitle: 'Qadrax: track how you use your money each month | YnomiX',
			metaDescription:
				'Qadrax is the YnomiX app to track how you use your money. 15-day free trial, USD 25 for 6 months or USD 39 per year. Includes the InfoX reports.',
		},
		addix: {
			slug: 'addix',
			path: '/en/addix',
			name: 'AddiX',
			eyebrow: 'SAVINGS, INVESTMENTS AND INCOME',
			h1: 'AddiX: monitor savings, investments and everything that adds to your income',
			intro:
				'AddiX is the YnomiX tool to monitor savings, investments and everything that adds to your income. It works for individuals, groups or families pursuing financial goals. It is independent of Qadrax: you can use it on its own, with its own prices and its own tracking.',
			tag: '15-day trial',
			waitlistLink: '/acerca-de#contacto',
			waitlistLabel: 'Join the waitlist',
			benefits: [
				'Tracking of savings, investments and income in one place.',
				'Financial goals with tracking for individuals, groups or families.',
				'Works separately from Qadrax, with its own prices.',
				'A clear view of what you are building over time.',
			],
			steps: [
				{ title: 'Request your 15-day trial', detail: 'Write to support and we will explain how to activate AddiX during the free trial.' },
				{ title: 'Load your savings and investments', detail: 'Log your accounts, goals and transactions so AddiX can monitor them.' },
				{ title: 'Track your goals', detail: 'Review your progress and adjust your decisions based on what you see.' },
			],
			pricing: [
				{ plan: '15-day trial', price: 'Free', note: 'Get to know AddiX before deciding.' },
				{ plan: '6 months', price: 'USD 15', note: 'Standalone product, separate from Qadrax.' },
				{ plan: '1 year', price: 'USD 25', note: 'Standalone product, separate from Qadrax.' },
			],
			question: {
				heading: 'Do I need Qadrax to use AddiX?',
				answer:
					'No. AddiX is a standalone product independent of Qadrax and works on its own, with its own prices. You can use AddiX even if you do not use Qadrax, and choose the tool that best fits what you need today.',
			},
			faqs: [
				{ question: 'Does AddiX work together with Qadrax?', answer: 'It does not need to. AddiX is independent of Qadrax and you can use it on its own, with its own prices.' },
				{ question: 'Is AddiX useful for a group or a family?', answer: 'Yes. AddiX is designed for individuals, groups or families who want to track their savings and investments.' },
				{ question: 'How much does AddiX cost?', answer: 'AddiX costs USD 15 for 6 months or USD 25 per year, with a free 15-day trial before deciding.' },
			],
			related: [
				{ label: 'Qadrax', href: '/en/qadrax', description: 'Tracking how you use your money.' },
				{ label: 'InfoX', href: '/en/infox', description: 'Summarized financial news.' },
				{ label: 'Home', href: home('en'), description: 'Back to the YnomiX home.' },
			],
			metaTitle: 'AddiX: monitor your savings and investments | YnomiX',
			metaDescription:
				'AddiX monitors savings, investments and income for individuals, groups and families. Works separately from Qadrax. 15-day free trial, from USD 15.',
		},
		infox: {
			slug: 'infox',
			path: '/en/infox',
			name: 'InfoX',
			eyebrow: 'SUMMARIZED FINANCIAL NEWS',
			h1: 'InfoX: the news that affects your wallet, summarized',
			intro:
				'InfoX uses AI to summarize the financial news that affects your wallet and sends you a report on Tuesdays and Fridays, so you do not have to read everything. It is built for individuals, groups and families who want to stay informed without losing time. It is included with paid Qadrax.',
			tag: 'Included with Qadrax',
			waitlistLink: '/qadrax',
			waitlistLabel: 'Get the full report with Qadrax',
			benefits: [
				'AI summary of the most relevant financial news.',
				'Two reports per week: on Tuesdays and Fridays.',
				'Information that affects your wallet, without reading everything.',
				'Included with paid Qadrax, at no extra cost.',
			],
			steps: [
				{ title: 'Activate paid Qadrax', detail: 'InfoX is included with paid Qadrax, so start by activating your Qadrax access.' },
				{ title: 'Receive the reports', detail: 'Every Tuesday and Friday you get a summary of the top financial news.' },
				{ title: 'Decide with information', detail: 'Use the summaries to complement your money tracking and decide calmly.' },
			],
			pricing: [
				{ plan: 'With paid Qadrax', price: 'Included', note: 'Two weekly reports: Tuesday and Friday.' },
				{ plan: 'Without Qadrax', price: '—', note: 'InfoX is included with paid Qadrax.' },
			],
			question: {
				heading: 'How does InfoX summarize the news?',
				answer:
					'InfoX uses AI to select and summarize the financial news that may affect your wallet, and sends it to you in a report on Tuesdays and Fridays. That way you stay informed of what matters without having to read every source yourself.',
			},
			faqs: [
				{ question: 'Does InfoX cost extra?', answer: 'No. InfoX is included for paying Qadrax customers, at no extra cost.' },
				{ question: 'When do the InfoX reports arrive?', answer: 'InfoX sends two reports per week: one on Tuesday and one on Friday.' },
				{ question: 'Can I use InfoX without Qadrax?', answer: 'InfoX is included with paid Qadrax. To receive the reports you need paid access to Qadrax.' },
			],
			related: [
				{ label: 'Qadrax', href: '/en/qadrax', description: 'Activate Qadrax to receive InfoX.' },
				{ label: 'AddiX', href: '/en/addix', description: 'Monitor savings and investments.' },
				{ label: 'Home', href: home('en'), description: 'Back to the YnomiX home.' },
			],
			metaTitle: 'InfoX: summarized financial news every week | YnomiX',
			metaDescription:
				'InfoX uses AI to summarize the financial news that affects your wallet and sends reports on Tuesdays and Fridays. Included with paid Qadrax.',
		},
	},
};

/** Example news preview shown on the InfoX page. Clearly marked as an example. */
export const infoxNewsExample: Record<Locale, { headline: string; summary: string; source: string; date: string }> = {
	es: {
		headline: 'Ejemplo de noticia resumida por InfoX',
		summary:
			'Un resumen de unas tres o cuatro líneas que muestra cómo InfoX condensa una noticia financiera relevante para tu bolsillo: el contexto, lo que cambia y por qué puede importarte, sin que tengas que leer la nota completa.',
		source: 'Fuente de ejemplo',
		date: 'Ejemplo · martes',
	},
	en: {
		headline: 'Example of a news story summarized by InfoX',
		summary:
			'A summary of about three or four lines showing how InfoX condenses a relevant financial news story for your wallet: the context, what changes and why it may matter to you, without having to read the full article.',
		source: 'Example source',
		date: 'Example · Tuesday',
	},
};
