import { useState } from 'react';
import { ArrowUpRight, MapPin, Mail, Copy, Check } from 'lucide-react';
import { useLocale } from '@/lib/i18n';
import { aboutData } from '@/data/about';
import { trialLink } from '@/data/products';

export function AboutPage() {
	const locale = useLocale();
	const d = aboutData[locale];
	const [copied, setCopied] = useState(false);
	const copyEmail = () => {
		if (typeof navigator === 'undefined' || !navigator.clipboard) return;
		navigator.clipboard.writeText('soporte@ynomix.com').then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		}).catch(() => {});
	};
	return (
		<>
			<section className="hero" id="inicio">
				<div className="hero-topline">
					<span className="eyebrow"><i />{d.eyebrow}</span>
				</div>
				<h1>{d.h1}</h1>
				<p className="hero-description">{d.intro}</p>
			</section>

			<section className="section" id="mision">
				<div className="section-heading">
					<div>
						<p className="eyebrow">{d.missionEyebrow}</p>
						<h2>{d.missionTitle}</h2>
					</div>
				</div>
				<div className="about-copy">
					{d.mission.map(p => <p key={p}>{p}</p>)}
				</div>
			</section>

			<section className="about-section section" id="fundador">
				<div className="about-main">
					<div>
						<p className="eyebrow">{d.founderEyebrow}</p>
						<h2>{d.founderTitle}</h2>
					</div>
					<div className="about-copy">
						<p className="founder-name">{d.founderName}</p>
						<p className="founder-location"><MapPin size={15} /> {d.founderLocation}</p>
						{d.founder.map(p => <p key={p}>{p}</p>)}
					</div>
				</div>
			</section>

			<section className="section" id="contacto">
				<div className="section-heading">
					<div>
						<p className="eyebrow">{d.contactEyebrow}</p>
						<h2>{d.contactTitle}</h2>
					</div>
				</div>
				<div className="contact-grid">
					<div className="contact-card">
						<span className="contact-icon"><Mail size={22} strokeWidth={1.6} /></span>
						<span className="contact-label">{d.emailLabel}</span>
						<span className="contact-value">soporte@ynomix.com</span>
						<span className="contact-desc">{d.contactText}</span>
						<div className="contact-actions">
							<button type="button" className={`contact-copy${copied ? ' copied' : ''}`} onClick={copyEmail}>
								{copied ? <><Check size={15} /> {d.copiedLabel}</> : <><Copy size={15} /> {d.copyButton}</>}
							</button>
							<a className="text-link" href="mailto:soporte@ynomix.com">{d.mailtoLabel} <ArrowUpRight size={15} /></a>
						</div>
					</div>
					<div className="contact-card">
						<span className="contact-icon"><MapPin size={22} strokeWidth={1.6} /></span>
						<span className="contact-label">{d.locationLabel}</span>
						<span className="contact-value">{d.location}</span>
					</div>
				</div>
			</section>

			<section className="about-section section">
				<div className="closing-cta">
					<div>
						<span className="eyebrow">{d.ctaEyebrow}</span>
						<h2>{d.ctaTitle}</h2>
						<p>{d.ctaText}</p>
					</div>
					<a className="button primary" href={trialLink[locale]}>{d.ctaButton} <ArrowUpRight size={19} /></a>
				</div>
			</section>
		</>
	);
}
