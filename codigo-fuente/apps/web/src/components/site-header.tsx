import { ArrowUpRight } from 'lucide-react';
import { chrome } from '@/data/chrome';
import { trialLink } from '@/data/products';

export function SiteHeader() {
	const t = chrome.es;
	return (
		<header className="site-header">
			<a className="wordmark" href="/" aria-label="YnomiX">
				Ynomi<span>X</span><i />
			</a>
			<nav aria-label="Navegación principal">
				<a href="/#productos">{t.navProducts}</a>
				<a href="/#precios">{t.navPricing}</a>
				<a href="/#preguntas">{t.navFaq}</a>
				<a href="/acerca-de">{t.navAbout}</a>
			</nav>
			<div className="header-actions">
				<a className="header-cta" href={trialLink.es}>
					{t.headerCta} <ArrowUpRight size={16} />
				</a>
			</div>
		</header>
	);
}
