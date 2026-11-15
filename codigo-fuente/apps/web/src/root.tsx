import {
	data,
	isRouteErrorResponse,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
	useLocation,
} from 'react-router';
import type { Route } from './+types/root';
import stylesheet from '@/index.css?url';
import { siteOrigin } from '@/lib/site-origin.server';
import { localeFromPath, LocaleProvider } from '@/lib/i18n';
import { chrome } from '@/data/chrome';
import { HorizonsPreviewScripts } from './horizons-preview-scripts';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';

export const links: Route.LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet, precedence: 'default' },
	{ rel: 'icon', href: '/favicon.png', type: 'image/png' },
	{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
	{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
	{
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;700&display=swap',
	},
];

export function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);

	return data(
		{ origin },
		{ headers: { Link: `<${origin}/sitemap.xml>; rel="sitemap"; type="application/xml", <${origin}/llms.txt>; rel="describedby"; type="text/plain"` } },
	);
}

export function headers({ loaderHeaders }: Route.HeadersArgs) {
	return loaderHeaders;
}

export function Layout({ children }: { children: React.ReactNode }) {
	const locale = localeFromPath(useLocation().pathname);
	return (
		<html lang={locale} suppressHydrationWarning>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="google-site-verification" content="hkZnAbrKtd7rpb5d1FHWlDQOCtNK-VIrVlHeJwSvcf8" />
				<Meta />
				<Links />
				<HorizonsPreviewScripts />
			</head>
			<body suppressHydrationWarning>
				<LocaleProvider value={locale}>
					<a className="skip-link" href="#inicio">{chrome[locale].skipLink}</a>
					<SiteHeader />
					<div id="root">{children}</div>
					<SiteFooter />
				</LocaleProvider>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	const isClientErrorResponse = isRouteErrorResponse(error) && error.status < 500;

	if (import.meta.env.DEV && !isClientErrorResponse) {
		return null;
	}

	let message = 'Oops!';
	let details = 'An unexpected error occurred.';

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details = error.status === 404 ? 'The requested page could not be found.' : error.statusText || details;
	}

	return (
		<main>
			<h1>{message}</h1>
			<p>{details}</p>
		</main>
	);
}
