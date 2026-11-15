export interface PrivacySection {
	id: string;
	eyebrow: string;
	title: string;
	paragraphs: string[];
}

/**
 * Política de privacidad de YnomiX. Contenido en español, texto visible en el
 * HTML, sin enlaces mailto (el correo se muestra como texto, igual que en
 * /acerca-de). No incluye datos, certificaciones ni proveedores inventados.
 */
export const privacyData: {
	metaTitle: string;
	metaDescription: string;
	eyebrow: string;
	h1: string;
	intro: string;
	sections: PrivacySection[];
	contactEyebrow: string;
	contactTitle: string;
	contactText: string;
	emailLabel: string;
	email: string;
	locationLabel: string;
	location: string;
	responsableLabel: string;
	responsableName: string;
	ctaEyebrow: string;
	ctaTitle: string;
	ctaText: string;
	ctaButton: string;
} = {
	metaTitle: 'Política de privacidad | YnomiX',
	metaDescription:
		'Qué datos recibe YnomiX, para qué se usan y cómo ejercer tus derechos. Qadrax no se conecta a tu banco y tus registros quedan en tu Google Drive.',
	eyebrow: 'PRIVACIDAD',
	h1: 'Política de privacidad',
	intro:
		'Esta política explica qué datos recibe YnomiX, para qué los usamos y cómo puedes ejercer tus derechos. Es la versión inicial del 15 de noviembre de 2026.',
	sections: [
		{
			id: 'responsable',
			eyebrow: 'RESPONSABLE',
			title: 'Responsable del tratamiento',
			paragraphs: [
				'Carlos Mijangos, Bogotá, Colombia. Contacto: soporte@ynomix.com.',
			],
		},
		{
			id: 'datos',
			eyebrow: 'QUÉ DATOS RECIBIMOS',
			title: 'Qué datos recibimos',
			paragraphs: [
				'Recibimos tu nombre y correo electrónico cuando nos escribes para pedir información, anotarte en la lista de espera o solicitar acceso a un producto. A través de este sitio no pedimos otros datos personales.',
			],
		},
		{
			id: 'uso',
			eyebrow: 'PARA QUÉ LOS USAMOS',
			title: 'Para qué los usamos',
			paragraphs: [
				'Usamos tu nombre y correo para responder tu solicitud y gestionar tu acceso. Respondemos en un máximo de 48 horas. Conservamos tu nombre y correo solo el tiempo necesario para atender tu solicitud y la relación con el servicio.',
			],
		},
		{
			id: 'qadrax',
			eyebrow: 'QADRAX Y TUS DATOS FINANCIEROS',
			title: 'Qadrax y tus datos financieros',
			paragraphs: [
				'Qadrax no se conecta a cuentas bancarias ni te pide claves de ninguna entidad. Tú registras tus movimientos manualmente. Tus registros se guardan en el Google Drive de tu propia cuenta y YnomiX no conserva copia de tus datos financieros.',
			],
		},
		{
			id: 'cookies',
			eyebrow: 'COOKIES',
			title: 'Cookies',
			paragraphs: [
				'Este sitio no instala cookies de analítica, publicidad ni seguimiento. Si en el futuro se añaden, las describiremos aquí y te pediremos tu consentimiento.',
			],
		},
		{
			id: 'derechos',
			eyebrow: 'TUS DERECHOS',
			title: 'Tus derechos',
			paragraphs: [
				'Puedes pedir conocer, actualizar, rectificar o suprimir tus datos, y revocar tu autorización, escribiendo a soporte@ynomix.com.',
			],
		},
		{
			id: 'cambios',
			eyebrow: 'CAMBIOS',
			title: 'Cambios en esta política',
			paragraphs: [
				'Versión inicial del 15 de noviembre de 2026. Si cambia, se publica aquí.',
			],
		},
	],
	contactEyebrow: 'CONTACTO',
	contactTitle: '¿Tienes preguntas sobre tus datos?',
	contactText: 'Escribe a soporte para conocer, actualizar, rectificar o suprimir tus datos, o para revocar tu autorización.',
	emailLabel: 'CORREO',
	email: 'soporte@ynomix.com',
	locationLabel: 'UBICACIÓN',
	location: 'Bogotá, Colombia',
	responsableLabel: 'RESPONSABLE',
	responsableName: 'Carlos Mijangos',
	ctaEyebrow: 'TU PRÓXIMO PASO',
	ctaTitle: 'Empieza por entender tu dinero.',
	ctaText: 'Anótate en la lista de Qadrax y recibe 15 días gratis cuando se abra tu acceso.',
	ctaButton: 'Anotarme en la lista de Qadrax',
};
