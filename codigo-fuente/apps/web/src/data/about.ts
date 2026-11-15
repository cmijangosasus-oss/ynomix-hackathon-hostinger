import type { Locale } from '@/lib/i18n';

export const socialLinks: { label: string; href: string }[] = [];

export const aboutData: Record<Locale, {
	metaTitle: string;
	metaDescription: string;
	eyebrow: string;
	h1: string;
	intro: string;
	missionEyebrow: string;
	missionTitle: string;
	mission: string[];
	founderEyebrow: string;
	founderTitle: string;
	founderName: string;
	founderLocation: string;
	founder: string[];
	contactEyebrow: string;
	contactTitle: string;
	contactText: string;
	emailLabel: string;
	email: string;
	copyButton: string;
	copiedLabel: string;
	mailtoLabel: string;
	socialLabel: string;
	locationLabel: string;
	location: string;
	ctaEyebrow: string;
	ctaTitle: string;
	ctaText: string;
	ctaButton: string;
}> = {
	es: {
		metaTitle: 'Acerca de YnomiX y contacto con Carlos Mijangos en Bogotá',
		metaDescription:
			'Conoce a Carlos Mijangos, fundador de YnomiX en Bogotá, la misión de la plataforma y cómo contactar a soporte@ynomix.com. Herramientas para tu dinero.',
		eyebrow: 'ACERCA DE YNOMIX',
		h1: 'Finanzas con propósito, detrás de cada herramienta.',
		intro:
			'YnomiX es una iniciativa independiente liderada por Carlos Mijangos desde Bogotá, Colombia. Su propósito es acercar herramientas digitales a quienes quieren entender mejor el uso de su dinero y dar seguimiento a sus metas, ya sea de forma personal, grupal o familiar.',
		missionEyebrow: 'NUESTRA MISIÓN',
		missionTitle: 'Más claridad para tu dinero.',
		mission: [
			'La misión de YnomiX es simple: que cualquier persona, grupo o familia pueda contar con información clara para decidir sobre su dinero. Cada herramienta responde a una necesidad distinta, pero comparten el mismo punto de partida: entender antes de actuar.',
			'Creemos que entender en qué se va el dinero, monitorear los ahorros e inversiones y mantenerse informado con noticias resumidas no debería ser complicado. Por eso diseñamos productos enfocados, con precios transparentes y una prueba gratuita para empezar sin compromiso.',
		],
		founderEyebrow: 'QUIÉN ESTÁ DETRÁS',
		founderTitle: 'Una persona detrás de YnomiX.',
		founderName: 'Carlos Mijangos',
		founderLocation: 'Bogotá, Colombia',
		founder: [
			'Carlos Mijangos es el fundador de YnomiX, con experiencia en análisis financiero y gestión comercial. Su enfoque es acercar herramientas digitales a quienes quieren entender mejor el uso de su dinero y dar seguimiento a sus metas.',
			'Para personas, grupos y familias, el punto de partida es el mismo: contar con información clara para decidir. Si tienes preguntas sobre los productos, puedes escribir directamente a soporte.',
		],
		contactEyebrow: 'CONTACTO',
		contactTitle: 'Hablemos de lo que necesitas.',
		contactText: 'Escribe a soporte para resolver dudas sobre los productos, la prueba de Qadrax, el acceso a ConvertiX y DigiMoneY, o el período que mejor se ajuste a ti.',
		emailLabel: 'CORREO',
		email: 'soporte@ynomix.com',
		copyButton: 'Copiar correo',
		copiedLabel: 'Copiado',
		mailtoLabel: 'Escribir desde mi programa de correo',
		socialLabel: 'REDES',
		locationLabel: 'UBICACIÓN',
		location: 'Bogotá, Colombia',
		ctaEyebrow: 'TU PRÓXIMO PASO',
		ctaTitle: 'Empieza por entender tu dinero.',
		ctaText: 'Conoce Qadrax durante 15 días gratis y decide con calma.',
		ctaButton: 'Probar Qadrax 15 días gratis',
	},
	en: {
		metaTitle: 'About YnomiX and contact with Carlos Mijangos in Bogotá',
		metaDescription:
			'Meet Carlos Mijangos, founder of YnomiX in Bogotá, the platform mission and how to contact soporte@ynomix.com. Tools for individuals, groups and families.',
		eyebrow: 'ABOUT YNOMIX',
		h1: 'Finance with purpose, behind every tool.',
		intro:
			'YnomiX is an independent initiative led by Carlos Mijangos from Bogotá, Colombia. Its goal is to bring digital tools to those who want to better understand how they use their money and track their goals, whether personally, as a group or as a family.',
		missionEyebrow: 'OUR MISSION',
		missionTitle: 'More clarity for your money.',
		mission: [
			'The mission of YnomiX is simple: that any individual, group or family can have clear information to decide about their money. Each tool answers a different need, but they share the same starting point: understand before acting.',
			'We believe that understanding where your money goes, monitoring savings and investments, and staying informed with summarized news should not be complicated. That is why we design focused products, with transparent prices and a free trial to start with no commitment.',
		],
		founderEyebrow: 'WHO IS BEHIND IT',
		founderTitle: 'One person behind YnomiX.',
		founderName: 'Carlos Mijangos',
		founderLocation: 'Bogotá, Colombia',
		founder: [
			'Carlos Mijangos is the founder of YnomiX, with experience in financial analysis and commercial management. His focus is bringing digital tools to those who want to better understand how they use their money and track their goals.',
			'For individuals, groups and families, the starting point is the same: having clear information to decide. If you have questions about the products, you can write directly to support.',
		],
		contactEyebrow: 'CONTACT',
		contactTitle: 'Let us talk about what you need.',
		contactText: 'Write to support to resolve questions about the products, the Qadrax trial, access to ConvertiX and DigiMoneY, or the period that best fits you.',
		emailLabel: 'EMAIL',
		email: 'soporte@ynomix.com',
		copyButton: 'Copy email',
		copiedLabel: 'Copied',
		mailtoLabel: 'Write from my email app',
		socialLabel: 'SOCIAL',
		locationLabel: 'LOCATION',
		location: 'Bogotá, Colombia',
		ctaEyebrow: 'YOUR NEXT STEP',
		ctaTitle: 'Start by understanding your money.',
		ctaText: 'Try Qadrax for 15 days free and decide calmly.',
		ctaButton: 'Try Qadrax 15 days free',
	},
};
