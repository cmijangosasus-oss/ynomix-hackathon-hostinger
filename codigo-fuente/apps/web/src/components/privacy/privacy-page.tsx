import { useState } from 'react';
import { ArrowUpRight, MapPin, Mail, Copy, Check } from 'lucide-react';
import { privacyData } from '@/data/privacy';
import { trialLink } from '@/data/products';

export function PrivacyPage() {
	const d = privacyData;
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

			{d.sections.map(section => (
				<section className="section" id={section.id} key={section.id}>
					<div className="section-heading">
						<div>
							<p className="eyebrow">{section.eyebrow}</p>
							<h2>{section.title}</h2>
						</div>
					</div>
					<div className="about-copy">
						{section.paragraphs.map(p => <p key={p}>{p}</p>)}
					</div>
				</section>
			))}

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
						<span className="contact-value">{d.email}</span>
						<span className="contact-desc">{d.contactText}</span>
						<div className="contact-actions">
							<button type="button" className={`contact-copy${copied ? ' copied' : ''}`} onClick={copyEmail}>
								{copied ? <><Check size={15} /> Copiado</> : <><Copy size={15} /> Copiar correo</>}
							</button>
						</div>
					</div>
					<div className="contact-card">
						<span className="contact-icon"><MapPin size={22} strokeWidth={1.6} /></span>
						<span className="contact-label">{d.responsableLabel}</span>
						<span className="contact-value">{d.responsableName}</span>
						<span className="contact-desc">{d.location}</span>
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
					<a className="button primary" href={trialLink.es}>{d.ctaButton} <ArrowUpRight size={19} /></a>
				</div>
			</section>
		</>
	);
}
