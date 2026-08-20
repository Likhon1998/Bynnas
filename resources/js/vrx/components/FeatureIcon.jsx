export function FeatureIcon({ type }) {
    if (type === 'cube') {
        return (
            <svg viewBox="0 0 32 32" className="feat-icon feat-icon--cyan">
                <path d="M16 4 L28 10 V22 L16 28 L4 22 V10 Z" fill="none" stroke="currentColor" strokeWidth="1.15" />
                <path d="M16 4 V16 L4 10 M16 16 L28 10 M16 16 V28" fill="none" stroke="currentColor" strokeWidth="1.15" />
            </svg>
        );
    }
    if (type === 'phone') {
        return (
            <svg viewBox="0 0 32 32" className="feat-icon feat-icon--magenta">
                <rect x="10" y="4" width="12" height="24" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.15" />
                <circle cx="16" cy="24.2" r="1" fill="currentColor" />
            </svg>
        );
    }
    if (type === 'headset') {
        return (
            <svg viewBox="0 0 32 32" className="feat-icon feat-icon--rose">
                <path d="M6 10 H26 V22 H6 Z" fill="none" stroke="currentColor" strokeWidth="1.15" />
                <path d="M10 22 V26 H22 V22" fill="none" stroke="currentColor" strokeWidth="1.15" />
            </svg>
        );
    }
    if (type === 'bus') {
        return (
            <svg viewBox="0 0 32 32" className="feat-icon feat-icon--cyan">
                <rect x="5" y="8" width="22" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.15" />
                <circle cx="10" cy="22" r="2" fill="none" stroke="currentColor" strokeWidth="1.15" />
                <circle cx="22" cy="22" r="2" fill="none" stroke="currentColor" strokeWidth="1.15" />
            </svg>
        );
    }
    return (
        <svg viewBox="0 0 32 32" className="feat-icon feat-icon--teal">
            <rect x="7" y="6" width="18" height="20" rx="1.4" fill="none" stroke="currentColor" strokeWidth="1.15" />
            <path d="M11 12 H21 M11 16 H21 M11 20 H17" fill="none" stroke="currentColor" strokeWidth="1.05" />
        </svg>
    );
}

export function parseHash() {
    const raw = (window.location.hash || '').replace(/^#\/?/, '');
    const [kind, slug] = raw.split('/').filter(Boolean);
    if (kind === 'products' && slug) {
        const alias = slug === 'restora' ? 'restors' : slug;
        return { type: 'product', slug: alias };
    }
    if (kind === 'do' && slug) return { type: 'do', slug };
    if (kind === 'blog' && slug) return { type: 'blog', slug };
    if (kind === 'blog') return { type: 'blog-list' };
    return { type: 'home' };
}
