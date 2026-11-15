import { ArrowUpRight } from 'lucide-react';
import { chrome } from '@/data/chrome';

export function SiteFooter() {
	const t = chrome.es;
	return (
		<footer className="site-footer">
			<div className="footer-main">
				<div>
					<a className="wordmark" href="/" aria-label="YnomiX">
						Ynomi<span>X</span><i />
					</a>
					<p>{t.footerTagline}</p>
				</div>
				<div>
					<p className="footer-label">{t.footerExplore}</p>
					<a href="/qadrax">Qadrax <ArrowUpRight size={15} /></a>
					<a href="/addix">AddiX <ArrowUpRight size={15} /></a>
					<a href="/infox">InfoX <ArrowUpRight size={15} /></a>
					<a href="/convertix">ConvertiX <ArrowUpRight size={15} /></a>
					<a href="/digimoney">DigiMoneY <ArrowUpRight size={15} /></a>
				</div>
				<div>
					<p className="footer-label">{t.footerContact}</p>
					<a href="mailto:soporte@ynomix.com">soporte@ynomix.com <ArrowUpRight size={15} /></a>
					<p>Bogotá, Colombia</p>
					<a href="/acerca-de">{t.navAbout} <ArrowUpRight size={15} /></a>
				</div>
			</div>
			<div className="footer-bottom">
				<p>{t.footerBottom}</p>
				<a href="/">{t.backToTop}</a>
				<p>{t.footerRights}</p>
			</div>
		</footer>
	);
}
