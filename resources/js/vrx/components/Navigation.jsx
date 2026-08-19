import { useEffect, useState } from 'react';

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

    window.location.hash = href;
}

export default function Navigation({ home }) {
    const links = home
        ? [
              { href: '#what-we-do', label: 'What We Do' },
              { href: '#process', label: 'Process' },
              { href: '#suite', label: 'Products' },
              { href: '#achievements', label: 'Achievements' },
              { href: '#clients', label: 'Clients' },
              { href: '#contact', label: 'Contact' },
          ]
        : [
              { href: '#/', label: 'Home' },
              { href: '#suite', label: 'Products' },
              { href: '#contact', label: 'Contact' },
          ];

    const [active, setActive] = useState(links[0].label);
    const [open, setOpen] = useState(false);

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
            if (window.innerWidth > 767) setOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <nav className={`vrx-nav${open ? ' is-open' : ''}`} aria-label="Primary">
            <div className="vrx-nav__mobile-top">
                <a
                    className="vrx-nav__brand"
                    href="#home"
                    onClick={(event) => {
                        event.preventDefault();
                        setOpen(false);
                        if (home) goTo('#home');
                        else goTo('#/');
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
                    onClick={() => setOpen((v) => !v)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
            <ul id="vrx-nav-panel" className="vrx-nav__list">
                {links.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className={active === item.label ? 'is-active' : undefined}
                            onClick={(event) => {
                                event.preventDefault();
                                setActive(item.label);
                                setOpen(false);
                                goTo(item.href);
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
            <a className="vrx-nav__cta" href="#contact" onClick={(event) => {
                event.preventDefault();
                setOpen(false);
                goTo('#contact');
            }}>
                Contact Us
                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </a>
        </nav>
    );
}
