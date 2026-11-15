import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),
	route('qadrax', 'routes/qadrax.tsx'),
	route('addix', 'routes/addix.tsx'),
	route('infox', 'routes/infox.tsx'),
	route('convertix', 'routes/convertix.tsx'),
	route('digimoney', 'routes/digimoney.tsx'),
	route('acerca-de', 'routes/about.tsx'),
	route('api/convert', 'routes/api.convert.ts'),
	route('llms.txt', 'routes/llms.txt.ts'),
	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
	route('api/health', 'routes/api.health.ts'),
	route('api/*', 'routes/api.$.ts'),
	route('*', 'routes/not-found.tsx'),
] satisfies RouteConfig;
