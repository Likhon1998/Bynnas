const themes = {
    restors: { a: '#dbeafe', b: '#2563eb', c: '#93c5fd' },
    webpos: { a: '#ccfbf1', b: '#0d9488', c: '#5eead4' },
    port: { a: '#e0e7ff', b: '#4f46e5', c: '#a5b4fc' },
    pharma: { a: '#fce7f3', b: '#db2777', c: '#f9a8d4' },
    bus: { a: '#fef3c7', b: '#d97706', c: '#fcd34d' },
};

export default function ProductIllustration({ id }) {
    const t = themes[id] || themes.port;

    if (id === 'restors') {
        return (
            <svg viewBox="0 0 400 320" className="product-illustration" aria-hidden="true">
                <rect width="400" height="320" rx="20" fill={t.a} />
                <rect x="40" y="48" width="140" height="90" rx="12" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                <circle cx="70" cy="78" r="14" fill={t.b} opacity="0.15" />
                <rect x="90" y="68" width="70" height="8" rx="4" fill={t.c} />
                <rect x="90" y="84" width="50" height="6" rx="3" fill="#e2e8f0" />
                <rect x="200" y="48" width="160" height="200" rx="12" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                {[0, 1, 2, 3].map((i) => (
                    <rect key={i} x="220" y={68 + i * 42} width="120" height="28" rx="8" fill={i === 0 ? t.b : t.a} opacity={i === 0 ? 1 : 0.6} />
                ))}
                <rect x="40" y="160" width="140" height="88" rx="12" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                <circle cx="110" cy="204" r="24" fill={t.b} opacity="0.12" />
                <path d="M98 204 L108 214 L124 196" stroke={t.b} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            </svg>
        );
    }

    if (id === 'webpos') {
        return (
            <svg viewBox="0 0 400 320" className="product-illustration" aria-hidden="true">
                <rect width="400" height="320" rx="20" fill={t.a} />
                <rect x="80" y="40" width="240" height="160" rx="16" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                <rect x="100" y="60" width="200" height="100" rx="8" fill={t.a} />
                <rect x="120" y="80" width="80" height="10" rx="5" fill={t.b} opacity="0.3" />
                <rect x="120" y="100" width="120" height="8" rx="4" fill="#e2e8f0" />
                <rect x="120" y="116" width="90" height="8" rx="4" fill="#e2e8f0" />
                <rect x="100" y="180" width="60" height="8" rx="4" fill={t.c} />
                <rect x="180" y="220" width="140" height="48" rx="12" fill={t.b} />
                <rect x="200" y="236" width="100" height="16" rx="8" fill="#fff" opacity="0.9" />
            </svg>
        );
    }

    if (id === 'port') {
        return (
            <svg viewBox="0 0 400 320" className="product-illustration" aria-hidden="true">
                <rect width="400" height="320" rx="20" fill={t.a} />
                <rect x="32" y="40" width="336" height="48" rx="10" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                <circle cx="60" cy="64" r="10" fill={t.b} />
                <rect x="80" y="58" width="100" height="12" rx="6" fill="#e2e8f0" />
                <rect x="32" y="108" width="100" height="180" rx="12" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                {[0, 1, 2, 3].map((i) => (
                    <rect key={i} x="48" y={124 + i * 38} width="68" height="24" rx="6" fill={t.a} />
                ))}
                <rect x="148" y="108" width="220" height="88" rx="12" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                <path d="M168 168 L200 140 L240 155 L280 120 L320 145" stroke={t.b} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                <rect x="148" y="212" width="104" height="76" rx="12" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                <rect x="268" y="212" width="100" height="76" rx="12" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                <rect x="164" y="232" width="72" height="8" rx="4" fill={t.b} opacity="0.4" />
                <rect x="284" y="232" width="68" height="8" rx="4" fill={t.b} opacity="0.4" />
            </svg>
        );
    }

    if (id === 'pharma') {
        return (
            <svg viewBox="0 0 400 320" className="product-illustration" aria-hidden="true">
                <rect width="400" height="320" rx="20" fill={t.a} />
                <rect x="60" y="50" width="120" height="220" rx="14" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                {[0, 1, 2, 4, 5].map((i) => (
                    <rect key={i} x="80" y={70 + i * 34} width="80" height="22" rx="6" fill={t.a} />
                ))}
                <rect x="220" y="50" width="120" height="220" rx="14" fill="#fff" stroke={t.c} strokeWidth="1.5" />
                <rect x="260" y="90" width="40" height="80" rx="20" fill="none" stroke={t.b} strokeWidth="2" />
                <path d="M280 110 V150 M260 130 H300" stroke={t.b} strokeWidth="2" strokeLinecap="round" />
                <rect x="240" y="200" width="80" height="40" rx="10" fill={t.b} opacity="0.15" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 400 320" className="product-illustration" aria-hidden="true">
            <rect width="400" height="320" rx="20" fill={t.a} />
            <path d="M60 200 Q120 120 200 160 T340 140" stroke={t.b} strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.4" />
            <rect x="80" y="180" width="100" height="50" rx="10" fill="#fff" stroke={t.c} strokeWidth="1.5" />
            <circle cx="105" cy="218" r="10" fill={t.b} opacity="0.2" />
            <circle cx="155" cy="218" r="10" fill={t.b} opacity="0.2" />
            <rect x="220" y="160" width="100" height="50" rx="10" fill={t.b} />
            <rect x="240" y="176" width="60" height="18" rx="6" fill="#fff" opacity="0.85" />
            <circle cx="200" cy="100" r="28" fill={t.b} opacity="0.12" />
            <circle cx="200" cy="100" r="14" fill={t.b} />
        </svg>
    );
}
