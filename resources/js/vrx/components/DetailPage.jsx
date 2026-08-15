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

export default function DetailPage({ kind, item, siblings }) {
    const ref = useRef(null);
    const featured = Boolean(item.featured);
    const face = faces[item.face];

    useEffect(() => {
        window.scrollTo(0, 0);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced || !ref.current) return undefined;
        const ctx = gsap.context(() => {
            gsap.from('.detail-page .detail-kicker, .detail-page h1, .detail-page .detail-lead, .detail-page .detail-block, .detail-page .detail-point, .detail-page .cta, .detail-page .detail-face', {
                y: 18,
                opacity: 0,
                duration: 0.75,
                stagger: 0.07,
                ease: 'power2.out',
            });
        }, ref);
        return () => ctx.revert();
    }, [item.id]);

    const prefix = kind === 'product' ? '#/products/' : '#/do/';

    return (
        <section className={`detail-page experience${featured ? ' detail-page--featured' : ''}`} ref={ref}>
            <header className="detail-head">
                <span className="section-divider__mark" aria-hidden="true" />
                <p className="detail-kicker">{item.kicker}</p>
                <h1>{item.title}</h1>
                <p className="detail-lead">{item.lead}</p>
            </header>

            <div className="detail-layout">
                <div className={`detail-face tech-frame ${featured ? 'tech-frame--gold' : 'tech-frame--cyan'}`}>
                    <span className="tech-frame__c tech-frame__c--tl" />
                    <span className="tech-frame__c tech-frame__c--tr" />
                    <span className="tech-frame__c tech-frame__c--bl" />
                    <span className="tech-frame__c tech-frame__c--br" />
                    {face ? (
                        <img
                            src={face}
                            alt={item.title}
                            className={`detail-face__img${item.face === 'restora' || item.face === 'webpos' ? ' detail-face__img--shot' : ''}`}
                        />
                    ) : (
                        <FeatureIcon type={item.icon} />
                    )}
                    {featured && <span className="detail-face__seal">featured product</span>}
                </div>

                <div className="detail-copy">
                    {(item.sections || []).map((block) => (
                        <article key={block.title} className="detail-block">
                            <p className="experience__eyebrow">{block.title}</p>
                            <p>{block.text}</p>
                        </article>
                    ))}
                    <ul className="detail-points">
                        {item.points.map((point) => (
                            <li key={point} className="detail-point">
                                {point}
                            </li>
                        ))}
                    </ul>
                    <a className={`cta ${featured ? 'cta--gold' : 'cta--cyan'}`} href="#/">
                        back to suite
                    </a>
                </div>
            </div>

            <nav className="detail-siblings" aria-label="More">
                {siblings.map((sib) => (
                    <a
                        key={sib.id}
                        href={`${prefix}${sib.id}`}
                        className={sib.id === item.id ? 'is-active' : ''}
                    >
                        {sib.title}
                    </a>
                ))}
            </nav>
        </section>
    );
}
