import { useEffect, useRef, useState } from 'react';
import { products } from '../data/products.js';

const productMeta = {
    restors: {
        short: 'Restora',
        accent: '#f59e0b',
        blurb: 'Restaurants & kitchens',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 11h16v8H4zM7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
    webpos: {
        short: 'Webpos',
        accent: '#8b5cf6',
        blurb: 'Retail & billing',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M8 21h8M12 17v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
    port: {
        short: 'Port',
        accent: '#06b6d4',
        blurb: 'Ops dashboard',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 4v16M4 12h16" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
        ),
    },
    pharma: {
        short: 'Pharma',
        accent: '#10b981',
        blurb: 'Pharmacy ops',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="9" y="3" width="6" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
        ),
    },
    bus: {
        short: 'Bus',
        accent: '#6366f1',
        blurb: 'Fleet & tickets',
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="6" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="7.5" cy="18" r="1.4" fill="currentColor" />
                <circle cx="16.5" cy="18" r="1.4" fill="currentColor" />
            </svg>
        ),
    },
};

const productLinks = products.map((p) => {
    const meta = productMeta[p.id] || { short: p.title, accent: '#7c3aed', blurb: p.kicker, icon: null };
    return {
        id: p.id,
        href: `#/products/${p.id === 'restors' ? 'restora' : p.id}`,
        short: meta.short,
        blurb: meta.blurb,
        accent: meta.accent,
        icon: meta.icon,
    };
});

const sectionLinks = [
    { href: '#what-we-do', label: 'What We Do' },
    { href: '#process', label: 'Process' },
    { href: '#suite', label: 'Products', dropdown: true },
    { href: '#achievements', label: 'Achievements' },
    { href: '#clients', label: 'Clients' },
    { href: '#/blog', label: 'Blog' },
    { href: '#contact', label: 'Contact' },
];

export function goTo(href) {
    if (href.startsWith('#/')) {
        window.location.hash = href;
        return;
    }

    const id = href.replace(/^#/, '');
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (window.location.hash !== href) {
            history.replaceState(null, '', href);
        }
        return;
    }

    // Section is on the home page — navigate home, then scroll
    window.location.hash = href;
}

function activeFromHash(home) {
    const hash = window.location.hash || '';
    if (hash.startsWith('#/blog')) return 'Blog';
    if (hash.startsWith('#/products/')) return 'Products';
    if (!home) return 'What We Do';
    return 'What We Do';
}

export default function Navigation({ home }) {
    const [active, setActive] = useState(() => activeFromHash(home));
    const [open, setOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const dropRef = useRef(null);

    useEffect(() => {
        setActive(activeFromHash(home));
        setProductsOpen(false);
    }, [home]);

    useEffect(() => {
        const onHash = () => setActive(activeFromHash(home));
        window.addEventListener('hashchange', onHash);
        return () => window.removeEventListener('hashchange', onHash);
    }, [home]);

    useEffect(() => {
        if (!home) return undefined;
        const idToLabel = {
            'what-we-do': 'What We Do',
            process: 'Process',
            suite: 'Products',
            achievements: 'Achievements',
            clients: 'Clients',
            contact: 'Contact',
        };
        const ids = Object.keys(idToLabel);
        const seen = new Map();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    seen.set(entry.target.id, entry.isIntersecting && entry.intersectionRatio > 0);
                });
                const current = ids.find((id) => seen.get(id));
                if (current) setActive(idToLabel[current]);
            },
            { rootMargin: '-28% 0px -55% 0px', threshold: [0, 0.15, 0.4] },
        );
        ids.forEach((id) => {
            const node = document.getElementById(id);
            if (node) observer.observe(node);
        });
        return () => observer.disconnect();
    }, [home]);

    useEffect(() => {
        document.body.classList.toggle('nav-lock', open);
        return () => document.body.classList.remove('nav-lock');
    }, [open]);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth > 767) {
                setOpen(false);
            }
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    useEffect(() => {
        const onPointer = (event) => {
            if (!dropRef.current?.contains(event.target)) setProductsOpen(false);
        };
        const onKey = (event) => {
            if (event.key === 'Escape') setProductsOpen(false);
        };
        document.addEventListener('pointerdown', onPointer);
        document.addEventListener('keydown', onKey);
        return () => {
            document.removeEventListener('pointerdown', onPointer);
            document.removeEventListener('keydown', onKey);
        };
    }, []);

    const navigate = (href, label) => {
        setActive(label);
        setOpen(false);
        setProductsOpen(false);
        goTo(href);
    };

    return (
        <nav className={`vrx-nav${open ? ' is-open' : ''}`} aria-label="Primary">
            <div className="vrx-nav__mobile-top">
                <a
                    className="vrx-nav__brand"
                    href="#/"
                    onClick={(event) => {
                        event.preventDefault();
                        setOpen(false);
                        setProductsOpen(false);
                        goTo(home ? '#home' : '#/');
                    }}
                >
                    <span className="vrx-nav__hex" aria-hidden="true">
                        <svg viewBox="0 0 32 32">
                            <defs>
                                <linearGradient id="hexg" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0%" stopColor="#22d3ee" />
                                    <stop offset="50%" stopColor="#818cf8" />
                                    <stop offset="100%" stopColor="#f472b6" />
                                </linearGradient>
                            </defs>
                            <path d="M16 3 L28 10 V22 L16 29 L4 22 V10 Z" fill="url(#hexg)" />
                        </svg>
                    </span>
                    <span className="vrx-nav__word">BYNNAS</span>
                </a>
                <button
                    type="button"
                    className="vrx-nav__toggle"
                    aria-expanded={open}
                    aria-controls="vrx-nav-panel"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    onClick={() => {
                        setOpen((v) => !v);
                        setProductsOpen(false);
                    }}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>

            <ul id="vrx-nav-panel" className="vrx-nav__list">
                {sectionLinks.map((item) => {
                    if (item.dropdown) {
                        return (
                            <li
                                key={item.label}
                                className={`vrx-nav__item vrx-nav__item--drop${productsOpen ? ' is-open' : ''}`}
                                ref={dropRef}
                            >
                                <button
                                    type="button"
                                    className={`vrx-nav__drop-btn${active === 'Products' ? ' is-active' : ''}`}
                                    aria-expanded={productsOpen}
                                    aria-haspopup="true"
                                    onClick={() => setProductsOpen((v) => !v)}
                                >
                                    Products
                                    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true">
                                        <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <div className="vrx-nav__menu" role="menu">
                                    <a
                                        href="#suite"
                                        role="menuitem"
                                        className="vrx-nav__menu-all"
                                        onClick={(event) => {
                                            event.preventDefault();
                                            navigate('#suite', 'Products');
                                        }}
                                    >
                                        <span className="vrx-nav__menu-ico vrx-nav__menu-ico--all" aria-hidden="true">
                                            <svg viewBox="0 0 24 24">
                                                <rect x="3" y="3" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                                                <rect x="14" y="3" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                                                <rect x="3" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                                                <rect x="14" y="14" width="7" height="7" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                                            </svg>
                                        </span>
                                        <span className="vrx-nav__menu-copy">
                                            <strong>All products</strong>
                                            <span>Browse the full suite</span>
                                        </span>
                                    </a>
                                    <div className="vrx-nav__menu-list">
                                        {productLinks.map((product) => (
                                            <a
                                                key={product.href}
                                                href={product.href}
                                                role="menuitem"
                                                style={{ '--pi': product.accent }}
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    navigate(product.href, 'Products');
                                                }}
                                            >
                                                <span className="vrx-nav__menu-ico" aria-hidden="true">
                                                    {product.icon}
                                                </span>
                                                <span className="vrx-nav__menu-copy">
                                                    <strong>{product.short}</strong>
                                                    <span>{product.blurb}</span>
                                                </span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        );
                    }

                    return (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={active === item.label ? 'is-active' : undefined}
                                onClick={(event) => {
                                    event.preventDefault();
                                    navigate(item.href, item.label);
                                }}
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                })}
            </ul>

            <a
                className="vrx-nav__cta"
                href="#contact"
                onClick={(event) => {
                    event.preventDefault();
                    navigate('#contact', 'Contact');
                }}
            >
                Contact Us
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </nav>
    );
}
