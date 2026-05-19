import { json, error } from "@sveltejs/kit";
import { dev } from "$app/environment";

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 2;
const HONEYPOT_DELAY_MS = 500;
const ALLOWED_ORIGINS = ['https://zaitsev.sh', 'http://localhost:5173'];

const requests = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
    const now = Date.now();
    const recent = (requests.get(ip) ?? []).filter(t => now - t < RATE_WINDOW_MS);
    if (recent.length >= RATE_MAX) return true;
    recent.push(now);
    requests.set(ip, recent);
    return false;
}

export async function GET({ request, getClientAddress }) {
    const referer = request.headers.get('referer') ?? '';
    const allowed = dev || ALLOWED_ORIGINS.some(o => referer.startsWith(o));
    if (!allowed) error(403, 'Forbidden');

    if (rateLimited(getClientAddress())) error(429, 'Too many requests');

    await new Promise(r => setTimeout(r, HONEYPOT_DELAY_MS));

    return json({
        local: "cv",
        domain: "zaitsev.sh",
    });
}
