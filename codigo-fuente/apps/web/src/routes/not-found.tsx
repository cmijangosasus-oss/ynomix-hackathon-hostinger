import { data } from 'react-router';
import type { Route } from './+types/not-found';
import { seo } from '@/lib/seo';
import { chrome } from '@/data/chrome';
import { NotFoundContent } from '@/components/not-found';

export function loader() {
	return data(null, { status: 404 });
}

export function meta({ matches, location }: Route.MetaArgs) {
	return seo({ matches, location }, {
		title: 'Página no encontrada | YnomiX',
		description: chrome.es.notFoundText,
		noindex: true,
	});
}

export default function NotFound() {
	return <NotFoundContent />;
}
