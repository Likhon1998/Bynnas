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
              { href: '#what-we-do', label: 'What we do' },
              { href: '#process', label: 'Process' },
              { href: '#mission', label: 'Mission' },
              { href: '#suite', label: 'Products' },
              { href: '#achievements', label: 'Achievements' },
              { href: '#contact', label: 'Contact' },
          ]
        : [
              { href: '#/', label: 'Home' },
              { href: '#suite', label: 'Products' },
              { href: '#contact', label: 'Contact' },
          ];

    const [active, setActive] = useState(links[0].href);

    useEffect(() => {
        if (!home) return undefined;
        const ids = links.map((item) => item.href.slice(1)).filter((id) => id && !id.startsWith('/'));
        const seen = new Map();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    seen.set(entry.target.id, entry.isIntersecting && entry.intersectionRatio > 0);
                });
                const current = ids.find((id) => seen.get(id));
                if (current) setActive(`#${current}`);
            },
            { rootMargin: '-28% 0px -55% 0px', threshold: [0, 0.15, 0.4] },
        );
        ids.forEach((id) => {
            const node = document.getElementById(id);
            if (node) observer.observe(node);
        });
        return () => observer.disconnect();
    }, [home]);

    return (
        <nav className="vrx-nav" aria-label="Primary">
            <span className="vrx-nav__bar" aria-hidden="true" />
            <ul className="vrx-nav__list">
                {links.map((item) => (
                    <li key={item.label}>
                        <a
                            href={item.href}
                            className={active === item.href ? 'is-active' : undefined}
                            onClick={(event) => {
                                event.preventDefault();
                                setActive(item.href);
                                goTo(item.href);
                            }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
