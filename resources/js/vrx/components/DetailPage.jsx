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
    webpos:  { label: 'Webpos',  accent: '#8b5cf6' },
    port:    { label: 'Port',    accent: '#06b6d4' },
    pharma:  { label: 'Pharma',  accent: '#10b981' },
    bus:     { label: 'Bus',     accent: '#6366f1' },
    build:     { label: 'Build',     accent: '#06b6d4' },
    integrate: { label: 'Connect',   accent: '#7c3aed' },
    deploy:    { label: 'Deploy',    accent: '#10b981' },
    support:   { label: 'Support',   accent: '#ec4899' },
};

const tabIcons = {
    restors: <svg viewBox="0 0 24 24"><path d="M4 11h16v8H4zM7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    webpos:  <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 21h8" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    port:    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M12 4v16M4 12h16" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    pharma:  <svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    bus:     <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="7" cy="18" r="1.5" /><circle cx="17" cy="18" r="1.5" /></svg>,
    build:     <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    integrate: <svg viewBox="0 0 24 24"><circle cx="6" cy="12" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="18" cy="6" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="18" cy="18" r="2" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    deploy:    <svg viewBox="0 0 24 24"><path d="M12 3L3 8v8l9 5 9-5V8z" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    support:   <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
};

function tabLabel(sib) {
    return tabMeta[sib.id]?.label || sib.title.replace('Bynnas ', '').replace('Bus ', '');
}

export default function DetailPage({ kind, item, siblings }) {
    const ref = useRef(null);
    const face = faces[item.face];
    const prefix = kind === 'product' ? '#/products/' : '#/do/';
    const backHref = kind === 'product' ? '#suite' : '#what-we-do';
    const backLabel = kind === 'product' ? 'All products' : 'All services';

    useEffect(() => {
        window.scrollTo(0, 0);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || !ref.current) return undefined;
        const ctx = gsap.context(() => {
            gsap.from('.detail-page .detail-shell > *', {
                y: 16,
                opacity: 0,
                duration: 0.55,
                stagger: 0.07,
                ease: 'power2.out',
            });
        }, ref);
        return () => ctx.revert();
    }, [item.id]);

    return (
        <section className="detail-page" ref={ref}>
            <div className="detail-shell">
                <a className="detail-back" href={backHref}>
                    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
                        <path d="M13 8H3M7 4L3 8l4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {backLabel}
                </a>

                <header className="detail-intro">
                    <span className="section-kicker">{item.kicker}</span>
                    <h1>{item.title}</h1>
                    <p className="detail-tagline">{item.text}</p>
                </header>

                <nav className={`detail-tabs detail-tabs--${siblings.length}`} aria-label="Browse related">
                    {siblings.map((sib) => {
                        const meta = tabMeta[sib.id] || { accent: '#7c3aed' };
                        return (
                            <a
                                key={sib.id}
                                href={`${prefix}${sib.id}`}
                                className={sib.id === item.id ? 'is-active' : undefined}
                                style={{ '--tab': meta.accent }}
                            >
                                <span className="detail-tabs__icon">{tabIcons[sib.id]}</span>
                                <span className="detail-tabs__name">{tabLabel(sib)}</span>
                            </a>
                        );
                    })}
                </nav>

                {face && (
                    <figure className="detail-hero">
                        <img src={face} alt="" className="detail-hero__img" />
                        <div className="detail-hero__shade" />
                    </figure>
                )}

                <p className="detail-lead">{item.lead}</p>

                <div className="detail-highlights">
                    {(item.sections || []).map((block, i) => (
                        <article key={block.title} className="detail-highlight">
                            <span className="detail-highlight__n">{String(i + 1).padStart(2, '0')}</span>
                            <h2>{block.title}</h2>
                            <p>{block.text}</p>
                        </article>
                    ))}
                </div>

                <div className="detail-features">
                    <h3 className="detail-features__label">What you get</h3>
                    <ul className="detail-tags">
                        {item.points.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </div>

                <div className="detail-cta">
                    <div>
                        <h2>Want this for your team?</h2>
                        <p>Tell us how you work today. We will show you how this fits.</p>
                    </div>
                    <a className="cta cta--primary" href="#contact">Get in touch</a>
                </div>
            </div>
        </section>
    );
}
