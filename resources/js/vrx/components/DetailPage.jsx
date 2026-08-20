import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import restora from '../assets/images/restora-face.png';
import webpos from '../assets/images/webpos-face.png';
import pos from '../assets/images/product-pos.png';
import core from '../assets/images/hero-luxury-core.png';
import ai from '../assets/images/hero-ai-core.png';
import ops from '../assets/images/ops-woman.png';
import hands from '../assets/images/footer-ops-hands.png';

const faces = { restora, webpos, pos, core, ai, ops, hands };

const tabMeta = {
    restors: { label: 'Restora', accent: '#f59e0b' },
    webpos: { label: 'Webpos', accent: '#8b5cf6' },
    port: { label: 'Port', accent: '#06b6d4' },
    pharma: { label: 'Pharma', accent: '#10b981' },
    bus: { label: 'Bus', accent: '#6366f1' },
    build: { label: 'Build', accent: '#06b6d4' },
    integrate: { label: 'Connect', accent: '#7c3aed' },
    deploy: { label: 'Deploy', accent: '#10b981' },
    support: { label: 'Support', accent: '#ec4899' },
};

const tabIcons = {
    restors: <svg viewBox="0 0 24 24"><path d="M4 11h16v8H4zM7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    webpos: <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 21h8" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    port: <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M12 4v16M4 12h16" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    pharma: <svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    bus: <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="7" cy="18" r="1.5" /><circle cx="17" cy="18" r="1.5" /></svg>,
    build: <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    integrate: <svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="18" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="18" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    deploy: <svg viewBox="0 0 24 24"><path d="M12 3L3 8v8l9 5 9-5V8z" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    support: <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
};

const sectionIcons = [
    <svg key="0" viewBox="0 0 24 24"><path d="M4 11h16v8H4zM7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    <svg key="1" viewBox="0 0 24 24"><path d="M12 3c3 2 5 5 5 9H7c0-4 2-7 5-9zM8 14h8v7H8z" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    <svg key="2" viewBox="0 0 24 24"><path d="M13 2L4 14h7l-1 8 10-14h-7l1-6z" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
];

const orderCopy = {
    restors: {
        hook: 'Turn more tables. Lose fewer tickets.',
        cta: 'Request Restora',
        win: 'Orders hit the kitchen the moment they are placed — so your floor can grab every rush without chaos.',
    },
    webpos: {
        hook: 'Faster checkout. Cleaner close.',
        cta: 'Request Webpos',
        win: 'Every sale is captured at the counter — stock and reports stay accurate without end-of-day guesswork.',
    },
    port: {
        hook: 'One truth for the whole operation.',
        cta: 'Request Port',
        win: 'When every branch feeds one dashboard, management can grab the real numbers and act the same day.',
    },
    pharma: {
        hook: 'Dispense with confidence.',
        cta: 'Request Pharma',
        win: 'Batches, expiry, and prescriptions stay linked — so every dispense is tracked and audit-ready.',
    },
    bus: {
        hook: 'Routes, tickets, and fleet in sync.',
        cta: 'Request Bus',
        win: 'Dispatch and finance see the same picture — so every booking and departure is easy to grab and run.',
    },
};

function tabLabel(sib) {
    return tabMeta[sib.id]?.label || sib.title.replace('Bynnas ', '').replace('Bus ', '');
}

function contactHref(productName) {
    const subject = encodeURIComponent(`Order inquiry: ${productName}`);
    const body = encodeURIComponent(
        `Hi Bynnas team,\n\nI want to get ${productName} for my business.\n\nBusiness name:\nLocation:\nTeam size:\n\nThanks.`,
    );
    return `mailto:bynnasit@gmail.com?subject=${subject}&body=${body}`;
}

export default function DetailPage({ kind, item, siblings }) {
    const ref = useRef(null);
    const face = faces[item.face];
    const prefix = kind === 'product' ? '#/products/' : '#/do/';
    const backHref = kind === 'product' ? '#suite' : '#what-we-do';
    const backLabel = kind === 'product' ? 'All products' : 'All services';
    const meta = tabMeta[item.id] || { accent: '#7c3aed', label: item.title };
    const hook = orderCopy[item.id] || {
        hook: 'Built for teams that cannot afford downtime.',
        cta: kind === 'product' ? 'Request this product' : 'Talk to us',
        win: item.lead,
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || !ref.current) return undefined;
        const ctx = gsap.context(() => {
            gsap.from('.detail-page .detail-shell > *', {
                y: 18,
                opacity: 0,
                duration: 0.55,
                stagger: 0.06,
                ease: 'power2.out',
            });
        }, ref);
        return () => ctx.revert();
    }, [item.id]);

    return (
        <section className="detail-page" ref={ref} style={{ '--pd': meta.accent }}>
            <div className="detail-shell">
                <div className="detail-topbar">
                    <a className="detail-back" href={backHref}>
                        <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                            <path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {backLabel}
                    </a>

                    <nav className="detail-switch" aria-label="Switch product">
                        {siblings.map((sib) => {
                            const tab = tabMeta[sib.id] || { accent: '#7c3aed' };
                            return (
                                <a
                                    key={sib.id}
                                    href={`${prefix}${sib.id}`}
                                    className={`detail-switch__chip${sib.id === item.id ? ' is-active' : ''}`}
                                    style={{ '--tab': tab.accent }}
                                    title={tabLabel(sib)}
                                >
                                    <span className="detail-switch__icon">{tabIcons[sib.id]}</span>
                                    <span className="detail-switch__name">{tabLabel(sib)}</span>
                                </a>
                            );
                        })}
                    </nav>
                </div>

                <div className="detail-hero-panel">
                    <div className="detail-hero-panel__copy">
                        <span className="detail-kicker">{item.kicker}</span>
                        <h1>{item.title}</h1>
                        <p className="detail-hook">{hook.hook}</p>
                        <p className="detail-tagline">{item.text}</p>
                        <p className="detail-win">{hook.win}</p>
                        <div className="detail-actions">
                            <a className="detail-actions__primary" href={contactHref(item.title)}>
                                {hook.cta}
                                <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a className="detail-actions__ghost" href="#contact">
                                Talk to sales
                            </a>
                        </div>
                        <ul className="detail-proof">
                            <li>Live demo available</li>
                            <li>Trained on your floor</li>
                            <li>Support after go-live</li>
                        </ul>
                    </div>

                    {face && (
                        <figure className="detail-hero-panel__media">
                            <img src={face} alt={item.title} />
                            <figcaption>
                                <strong>{meta.label}</strong>
                                <span>Ready for your operation</span>
                            </figcaption>
                        </figure>
                    )}
                </div>

                <div className="detail-band">
                    <p>{item.lead}</p>
                </div>

                <div className="detail-section-head">
                    <span className="section-kicker">Why it wins</span>
                    <h2>The features that pay for themselves</h2>
                    <p>Focus on the outcomes that matter when the floor is busy and every order counts.</p>
                </div>

                <div className="detail-highlights">
                    {(item.sections || []).map((block, i) => (
                        <article key={block.title} className="detail-highlight" style={{ '--hi': meta.accent }}>
                            <div className="detail-highlight__top">
                                <span className="detail-highlight__n">{String(i + 1).padStart(2, '0')}</span>
                                <span className="detail-highlight__icon">{sectionIcons[i % sectionIcons.length]}</span>
                            </div>
                            <h3>{block.title}</h3>
                            <p>{block.text}</p>
                        </article>
                    ))}
                </div>

                <div className="detail-features">
                    <div className="detail-section-head detail-section-head--left">
                        <span className="section-kicker">Capabilities</span>
                        <h2>What you get in the box</h2>
                    </div>
                    <ul className="detail-tags">
                        {item.points.map((point) => (
                            <li key={point}>
                                <span className="detail-tags__check" aria-hidden="true">
                                    <svg viewBox="0 0 16 16" width="12" height="12">
                                        <path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="detail-order">
                    <div className="detail-order__copy">
                        <span className="detail-order__eyebrow">Ready when you are</span>
                        <h2>Want this running on your floor?</h2>
                        <p>
                            Send a request from this page. We will confirm fit, timeline, and next steps —
                            so your order does not get lost in a long email chain.
                        </p>
                    </div>
                    <div className="detail-order__actions">
                        <a className="detail-actions__primary" href={contactHref(item.title)}>
                            {hook.cta}
                            <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                                <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                        <a className="detail-order__mail" href="mailto:bynnasit@gmail.com">
                            bynnasit@gmail.com
                        </a>
                    </div>
                </div>
            </div>

            <div className="detail-sticky" aria-label="Quick request">
                <div className="detail-sticky__inner">
                    <div>
                        <strong>{item.title}</strong>
                        <span>Request pricing &amp; demo</span>
                    </div>
                    <a href={contactHref(item.title)}>{hook.cta}</a>
                </div>
            </div>
        </section>
    );
}
