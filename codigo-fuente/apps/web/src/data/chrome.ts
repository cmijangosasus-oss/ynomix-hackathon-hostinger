import type { Locale } from '@/lib/i18n';

/** Localized labels for the shared site chrome (header, footer, 404, language switch). */
export const chrome: Record<Locale, {
	navProducts: string;
	navPricing: string;
	navFaq: string;
	navAbout: string;
	headerCta: string;
	skipLink: string;
	footerTagline: string;
	footerContact: string;
	footerExplore: string;
	footerBottom: string;
	backToTop: string;
	footerRights: string;
	langSwitchLabel: string;
	langSwitchTo: string;
	notFoundTitle: string;
	notFoundText: string;
	notFoundCta: string;
	notFoundProducts: string;
}> = {
	es: {
		navProducts: 'Productos',
		navPricing: 'Precios',
		navFaq: 'Preguntas frecuentes',
		navAbout: 'Acerca de y contacto',
		headerCta: 'Prueba Qadrax',
		skipLink: 'Ir al contenido',
		footerTagline: 'Más claridad para tu dinero.',
		footerContact: 'CONTACTO',
		footerExplore: 'EXPLORA LAS PLATAFORMAS',
		footerBottom: 'YnomiX · Carlos Mijangos',
		backToTop: 'Volver arriba ↑',
		footerRights: 'Herramientas para personas, grupos y familias.',
		langSwitchLabel: 'Idioma',
		langSwitchTo: 'English',
		notFoundTitle: '404',
		notFoundText: 'La página que buscas no existe o se movió. Vuelve al inicio o explora las herramientas de YnomiX.',
		notFoundCta: 'Volver al inicio',
		notFoundProducts: 'Explora las herramientas',
	},
	en: {
		navProducts: 'Products',
		navPricing: 'Pricing',
		navFaq: 'FAQ',
		navAbout: 'About and contact',
		headerCta: 'Try Qadrax',
		skipLink: 'Skip to content',
		footerTagline: 'More clarity for your money.',
		footerContact: 'CONTACT',
		footerExplore: 'EXPLORE THE PLATFORMS',
		footerBottom: 'YnomiX · Carlos Mijangos',
		backToTop: 'Back to top ↑',
		footerRights: 'Tools for individuals, groups and families.',
		langSwitchLabel: 'Language',
		langSwitchTo: 'Español',
		notFoundTitle: '404',
		notFoundText: 'The page you are looking for does not exist or has moved. Go back to the home or explore the YnomiX tools.',
		notFoundCta: 'Back to home',
		notFoundProducts: 'Explore the tools',
	},
};
