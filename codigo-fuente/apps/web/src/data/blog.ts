/**
 * Blog content for YnomiX. Spanish-only.
 * Each article is a list of content blocks so the page renders without a
 * markdown dependency; the visible text matches the requested copy exactly.
 */

export type BlogBlock =
	| { type: 'p'; text: string }
	| { type: 'h2'; text: string }
	| { type: 'p-link'; before: string; link: { label: string; href: string }; after: string };

export type BlogArticle = {
	slug: string;
	path: string;
	title: string;
	h1: string;
	metaDescription: string;
	author: string;
	publishedLabel: string;
	updatedLabel: string;
	datePublished: string;
	dateModified: string;
	summary: string;
	blocks: BlogBlock[];
};

export const blogArticles: BlogArticle[] = [
	{
		slug: 'como-saber-en-que-se-va-tu-dinero',
		path: '/blog/como-saber-en-que-se-va-tu-dinero',
		title: 'Cómo saber en qué se va tu dinero cada mes: 5 pasos',
		h1: 'Cómo saber en qué se va tu dinero cada mes: 5 pasos',
		metaDescription:
			'Guía práctica en 5 pasos para saber en qué se va tu dinero cada mes: define un periodo, anota cada gasto, clasifica, compara y conecta con una meta.',
		author: 'Carlos Mijangos, fundador de YnomiX, Bogotá',
		publishedLabel: 'Publicado el 15 de noviembre de 2026',
		updatedLabel: 'Actualizado el 15 de noviembre de 2026',
		datePublished: '2026-11-15',
		dateModified: '2026-11-15',
		summary:
			'Un método simple y constante, en cinco pasos, para dejar de llegar a fin de mes sin saber a dónde se fue el dinero.',
		blocks: [
			{ type: 'p', text: 'Mucha gente llega a fin de mes sin saber a dónde se fue el dinero. La buena noticia es que no hace falta una hoja de cálculo complicada: basta con un método simple y constante.' },
			{ type: 'h2', text: '¿Por qué cuesta tanto saber en qué se va el dinero?' },
			{ type: 'p', text: 'Los gastos pequeños y frecuentes (el café, el transporte, las suscripciones) pasan desapercibidos. Sumados, pesan, pero como cada uno es chico, casi nadie los anota.' },
			{ type: 'h2', text: 'Paso 1: define un periodo de revisión' },
			{ type: 'p', text: 'Elige un periodo fijo, por ejemplo cada mes o cada semana, para mirar tus números. Sin un día de revisión, el registro se abandona.' },
			{ type: 'h2', text: 'Paso 2: anota cada gasto e ingreso' },
			{ type: 'p', text: 'Registra el monto, la fecha y para qué fue. Hazlo el mismo día, aunque sean pocos segundos. Anotar a mano ayuda a ser consciente de cada gasto.' },
			{ type: 'h2', text: 'Paso 3: clasifica en pocas categorías' },
			{ type: 'p', text: 'Usa entre cinco y siete categorías, como vivienda, comida, transporte, deudas, ahorro y otros. Demasiadas categorías vuelven el método pesado.' },
			{ type: 'h2', text: 'Paso 4: compara lo que planeaste con lo que gastaste' },
			{ type: 'p', text: 'Al final del periodo, mira qué categoría creció más y decide un ajuste concreto y pequeño para el siguiente periodo.' },
			{ type: 'h2', text: 'Paso 5: conecta el registro con una meta' },
			{ type: 'p', text: 'Ahorrar para algo concreto (un viaje, un fondo de emergencia) es más fácil que ahorrar "lo que sobre".' },
			{ type: 'h2', text: '¿Cómo ayuda Qadrax?' },
			{
				type: 'p-link',
				before: 'Qadrax es la herramienta de YnomiX para llevar este registro y ver la trazabilidad del uso de tu dinero. Funciona en celular, computador o tableta, requiere una cuenta de Google y guarda tus datos en tu propio Google Drive; no se conecta a tus cuentas bancarias. Hoy está en lista de espera y puedes anotarte en ',
				link: { label: 'https://ynomix.com/qadrax', href: 'https://ynomix.com/qadrax' },
				after: '.',
			},
		],
	},
];

export const blogArticleBySlug = (slug: string): BlogArticle | undefined =>
	blogArticles.find(article => article.slug === slug);
