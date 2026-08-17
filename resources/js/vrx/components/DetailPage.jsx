import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import restora from '../assets/images/restora-face.png';
import webpos from '../assets/images/webpos-face.png';
import pos from '../assets/images/product-pos.png';
import core from '../assets/images/hero-luxury-core.png';
import ai from '../assets/images/hero-ai-core.png';
import ops from '../assets/images/ops-woman.png';
import hands from '../assets/images/footer-ops-hands.png';
import { FeatureIcon } from './FeatureIcon.jsx';

const faces = { restora, webpos, pos, core, ai, ops, hands };

function heroClass(face) {
    if (face === 'restora' || face === 'webpos') return ' detail-hero--wide';
    if (face === 'ops') return ' detail-hero--portrait';
    return '';
}

export default function DetailPage({ kind, item, siblings }) {
    const ref = useRef(null);
    const featured = Boolean(item.featured);
    const face = faces[item.face];
    const prefix = kind === 'product' ? '#/products/' : '#/do/';

    useEffect(() => {
        window.scrollTo(0, 0);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || !ref.current) return undefined;
        const ctx = gsap.context(() => {
            gsap.from('.detail-page .detail-shell > *', {
                y: 18,
                opacity: 0,
                duration: 0.65,
                stagger: 0.08,
                ease: 'power2.out',
            });
        }, ref);
        return () => ctx.revert();
    }, [item.id]);

    return (
        <section className={`detail-page experience${featured ? ' detail-page--featured' : ''}`} ref={ref}>
            <div className="detail-shell">
                <header className="detail-intro">
                    <span className="section-divider__mark" aria-hidden="true" />
                    <p className="detail-kicker">{item.kicker}</p>
                    <h1>{item.title}</h1>
                    <p className="detail-tagline">{item.text}</p>
                </header>

                <div className="detail-toolbar">
                    <a className={`cta detail-back ${featured ? 'cta--gold' : 'cta--cyan'}`} href="#suite">
                        all products
                    </a>
                    <nav className="detail-tabs" aria-label="Browse">
                        {siblings.map((sib) => (
                            <a
                                key={sib.id}
                                href={`${prefix}${sib.id}`}
                                className={sib.id === item.id ? 'is-active' : undefined}
                            >
                                {sib.title}
                            </a>
                        ))}
                    </nav>
                </div>

                <figure className={`detail-hero${heroClass(item.face)}`}>
                    {featured && <figcaption className="detail-hero__badge">Featured</figcaption>}
                    <div className="detail-hero__chrome" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className="detail-hero__screen">
                        {face ? (
                            <img src={face} alt={item.title} className="detail-hero__img" />
                        ) : (
                            <FeatureIcon type={item.icon} />
                        )}
                    </div>
                </figure>

                <p className="detail-lead">{item.lead}</p>

                <div className="detail-grid">
                    <div className="detail-highlights">
                        {(item.sections || []).map((block) => (
                            <article key={block.title} className="detail-highlight">
                                <span className="detail-highlight__dot" aria-hidden="true" />
                                <h2>{block.title}</h2>
                                <p>{block.text}</p>
                            </article>
                        ))}
                    </div>

                    <div className="detail-features">
                        <h3 className="detail-features__label">Capabilities</h3>
                        <ul className="detail-tags">
                            {item.points.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
}
