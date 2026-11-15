import { ArrowUpRight, Youtube } from 'lucide-react';
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
					<a href="/privacidad">Política de privacidad <ArrowUpRight size={15} /></a>
					<div className="footer-socials">
						<a href="https://www.youtube.com/@ynomix" target="_blank" rel="noopener noreferrer" aria-label="YnomiX en YouTube">
							<Youtube size={15} strokeWidth={1.8} aria-hidden="true" />
							<span>YouTube</span>
						</a>
						<a href="https://x.com/YnomiX" target="_blank" rel="noopener noreferrer" aria-label="YnomiX en X">
							<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" focusable="false">
								<path fill="currentColor" d="M18.901 1.153h3.68l-8.04 9.19 9.46 12.504h-7.406l-5.8-7.584-6.638 7.584H.475l8.6-9.83L0 1.153h7.594l5.243 6.932zm-1.291 19.494h2.039L6.486 3.237h-2.19z" />
							</svg>
							<span>X</span>
						</a>
					</div>
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
