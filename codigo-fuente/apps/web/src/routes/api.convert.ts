import { json, withApi } from '@/lib/api.server';

/**
 * Free, keyless exchange-rate source: open.er-api.com (the open-access mirror
 * of open exchange rates). Returns daily rates with a `time_last_update_utc`
 * timestamp. Cached in-memory for one hour so many visitors share one upstream
 * call.
 */
const RATES_URL = 'https://open.er-api.com/v6/latest/USD';
const CACHE_TTL_MS = 60 * 60 * 1000;
const SUPPORTED = ['USD', 'EUR', 'COP', 'MXN'] as const;

type RatesBody = {
	rates: Record<string, number>;
	updatedAt: string;
};

let cache: { at: number; body: RatesBody } | null = null;

export const action = withApi(async () => {
	if (cache && Date.now() - cache.at < CACHE_TTL_MS) {
		return json(cache.body);
	}

	const upstream = await fetch(RATES_URL);

	if (!upstream.ok) {
		throw new Error(`rates api failed: ${upstream.status} ${upstream.statusText}`);
	}

	const data = (await upstream.json()) as {
		rates?: Record<string, number>;
		time_last_update_utc?: string;
	};

	const rates: Record<string, number> = {};
	for (const code of SUPPORTED) {
		const value = data.rates?.[code];
		if (typeof value !== 'number') {
			throw new Error(`rates api missing rate for ${code}`);
		}
		rates[code] = value;
	}

	const body: RatesBody = {
		rates,
		updatedAt: data.time_last_update_utc ?? new Date().toISOString(),
	};

	cache = { at: Date.now(), body };

	return json(body);
});
