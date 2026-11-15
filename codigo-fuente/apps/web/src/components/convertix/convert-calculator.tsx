import { useEffect, useState } from 'react';
import { ArrowLeftRight, RefreshCw, AlertCircle, Check } from 'lucide-react';
import { useLocale, type Locale } from '@/lib/i18n';
import { formatNumber, formatDate } from '@/lib/intl-format';

const CURRENCIES: Record<Locale, { code: string; label: string }[]> = {
	es: [
		{ code: 'USD', label: 'USD — Dólar estadounidense' },
		{ code: 'EUR', label: 'EUR — Euro' },
		{ code: 'COP', label: 'COP — Peso colombiano' },
		{ code: 'MXN', label: 'MXN — Peso mexicano' },
	],
	en: [
		{ code: 'USD', label: 'USD — US dollar' },
		{ code: 'EUR', label: 'EUR — Euro' },
		{ code: 'COP', label: 'COP — Colombian peso' },
		{ code: 'MXN', label: 'MXN — Mexican peso' },
	],
};

type RatesBody = { rates: Record<string, number>; updatedAt: string };
type Status = 'loading' | 'ready' | 'error';

const strings: Record<Locale, {
	eyebrow: string; heading: string; sub: string;
	amountLabel: string; amountAria: string; fromLabel: string; toLabel: string;
	swapAria: string; loading: string; error: string; retry: string; updated: string;
}> = {
	es: {
		eyebrow: 'CALCULADORA DE DIVISAS', heading: 'Convierte entre USD, COP, MXN y EUR.',
		sub: 'Escribe un monto, elige las divisas\ny revisa la fecha de actualización.',
		amountLabel: 'Monto', amountAria: 'Monto a convertir', fromLabel: 'De', toLabel: 'A',
		swapAria: 'Invertir divisas', loading: 'Cargando tasas actualizadas…',
		error: 'No pudimos cargar las tasas.', retry: 'Reintentar', updated: 'Actualizado',
	},
	en: {
		eyebrow: 'CURRENCY CALCULATOR', heading: 'Convert between USD, COP, MXN and EUR.',
		sub: 'Enter an amount, choose the currencies\nand check the update date.',
		amountLabel: 'Amount', amountAria: 'Amount to convert', fromLabel: 'From', toLabel: 'To',
		swapAria: 'Swap currencies', loading: 'Loading updated rates…',
		error: 'We could not load the rates.', retry: 'Retry', updated: 'Updated',
	},
};

export function ConvertCalculator() {
	const locale = useLocale();
	const s = strings[locale];
	const currencies = CURRENCIES[locale];
	const [rates, setRates] = useState<RatesBody | null>(null);
	const [status, setStatus] = useState<Status>('loading');
	const [amount, setAmount] = useState('100');
	const [from, setFrom] = useState<string>('USD');
	const [to, setTo] = useState<string>('EUR');
	const [reload, setReload] = useState(0);

	useEffect(() => {
		let cancelled = false;
		fetch('/api/convert', { method: 'POST' })
			.then(res => (res.ok ? res.json() : null))
			.then((data: RatesBody | null) => {
				if (cancelled) return;
				if (data?.rates) { setRates(data); setStatus('ready'); } else { setStatus('error'); }
			})
			.catch(() => { if (!cancelled) setStatus('error'); });
		return () => { cancelled = true; };
	}, [reload]);

	const numericAmount = Number.parseFloat(amount.replace(',', '.')) || 0;
	const fromRate = rates?.rates[from];
	const toRate = rates?.rates[to];
	const result = fromRate && toRate ? (numericAmount * toRate) / fromRate : null;

	return (
		<section className="section" id="calculadora">
			<div className="section-heading">
				<div>
					<p className="eyebrow">{s.eyebrow}</p>
					<h2>{s.heading}</h2>
				</div>
				<p>{s.sub}</p>
			</div>
			<div className="convert-card">
				<div className="convert-grid">
					<div className="convert-field">
						<label className="convert-label" htmlFor="convert-amount">{s.amountLabel}</label>
						<input id="convert-amount" className="convert-input" type="text" inputMode="decimal" value={amount} onChange={e => setAmount(e.target.value)} aria-label={s.amountAria} />
					</div>
					<div className="convert-field">
						<label className="convert-label" htmlFor="convert-from">{s.fromLabel}</label>
						<select id="convert-from" className="convert-select" value={from} onChange={e => setFrom(e.target.value)}>
							{currencies.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
						</select>
					</div>
					<button type="button" className="convert-swap" aria-label={s.swapAria} onClick={() => { setFrom(to); setTo(from); }}>
						<ArrowLeftRight size={18} />
					</button>
					<div className="convert-field">
						<label className="convert-label" htmlFor="convert-to">{s.toLabel}</label>
						<select id="convert-to" className="convert-select" value={to} onChange={e => setTo(e.target.value)}>
							{currencies.map(c => <option key={c.code} value={c.code}>{c.label}</option>)}
						</select>
					</div>
				</div>
				<div className="convert-result">
					{status === 'loading' && <p className="convert-status"><RefreshCw size={15} /> {s.loading}</p>}
					{status === 'error' && (
						<p className="convert-status convert-status-error">
							<AlertCircle size={15} /> {s.error}{' '}
							<button type="button" className="convert-retry" onClick={() => setReload(n => n + 1)}>{s.retry}</button>
						</p>
					)}
					{status === 'ready' && result !== null && rates && (
						<>
							<div className="convert-result-value">
								{formatNumber(result, { locale, minimumFractionDigits: 2, maximumFractionDigits: 2 })} {to}
							</div>
							<p className="convert-result-meta">
								<Check size={14} />
								{formatNumber(numericAmount, { locale, maximumFractionDigits: 2 })} {from} · {s.updated}: {formatDate(rates.updatedAt, { locale })}
							</p>
						</>
					)}
				</div>
			</div>
		</section>
	);
}
