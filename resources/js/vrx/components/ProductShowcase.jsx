import { useState } from 'react';
import { products } from '../data/products.js';

import restora from '../assets/images/restora-face.png';
import webpos from '../assets/images/webpos-face.png';
import pos from '../assets/images/product-pos.png';
import core from '../assets/images/hero-luxury-core.png';
import ops from '../assets/images/ops-woman.png';

const meta = {
    restors: { industry: 'Hospitality',  accent: '#f59e0b', img: restora, short: 'Restora' },
    webpos:  { industry: 'Retail & POS', accent: '#8b5cf6', img: webpos,  short: 'Webpos' },
    port:    { industry: 'Operations',   accent: '#06b6d4', img: core,    short: 'Port' },
    pharma:  { industry: 'Pharmacy',     accent: '#10b981', img: pos,     short: 'Pharma' },
    bus:     { industry: 'Transport',    accent: '#6366f1', img: ops,     short: 'Bus' },
};

const icons = {
    restors: <svg viewBox="0 0 24 24"><path d="M4 11h16v8H4zM7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    webpos:  <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M8 21h8" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    port:    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M12 4v16M4 12h16" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    pharma:  <svg viewBox="0 0 24 24"><rect x="9" y="3" width="6" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" /><path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>,
    bus:     <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" /><circle cx="7" cy="18" r="1.5" /><circle cx="17" cy="18" r="1.5" /></svg>,
};

export default function ProductShowcase() {
    const [active, setActive] = useState(0);
    const item  = products[active];
    const { industry, accent, img } = meta[item.id];

    return (
        <section id="suite" className="suite">
            <header className="suite__header">
                <h2>Our products</h2>
                <p>Five systems. One connected platform. Pick what you need.</p>
            </header>

            <div className="pcard" style={{ '--pa': accent }}>

                {/* ── Left sidebar ── */}
                <div className="pcard__sidebar">
                    <p className="pcard__sidebar-label">Products</p>
                    {products.map((p, i) => (
                        <button
                            key={p.id}
                            type="button"
                            className={`pcard__tab${active === i ? ' active' : ''}`}
                            onClick={() => setActive(i)}
                            style={{ '--tab': meta[p.id].accent }}
                        >
                            <span className="pcard__tab-icon">
                                {icons[p.id]}
                            </span>
                            <div>
                                <span className="pcard__tab-name">{meta[p.id].short}</span>
                                <span className="pcard__tab-cat">{meta[p.id].industry}</span>
                            </div>
                            <span className="pcard__tab-pip" />
                        </button>
                    ))}
                </div>

                {/* ── Main panel ── */}
                <div className="pcard__main">

                    {/* Image — full bleed, right half */}
                    <div className="pcard__photo">
                        <img src={img} alt={item.title} className="pcard__photo-img" />
                        {/* Left-to-right fade so text is readable */}
                        <div className="pcard__photo-mask" style={{ '--pa': accent }} />
                        {/* Floating accent badge */}
                        <span className="pcard__photo-badge" style={{ background: accent }}>
                            {industry}
                        </span>
                    </div>

                    {/* Content — left half, floats over image fade */}
                    <div className="pcard__copy">
                        <h3 className="pcard__name">{item.title}</h3>
                        <p className="pcard__desc">{item.text}</p>

                        <ul className="pcard__features">
                            {item.points.slice(0, 6).map((pt) => (
                                <li key={pt}>
                                    <svg viewBox="0 0 12 12" width="12" height="12" style={{ color: accent }}>
                                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {pt}
                                </li>
                            ))}
                        </ul>

                        <div className="pcard__actions">
                            <a
                                className="pcard__btn"
                                href={`#/products/${item.id}`}
                                style={{ background: accent }}
                            >
                                Explore {item.title.replace('Bynnas ', '')}
                                <svg viewBox="0 0 16 16" width="14" height="14"><path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                            </a>
                            <a className="pcard__link" href={`#/products/${item.id}`}>View all features</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
