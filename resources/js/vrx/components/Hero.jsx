import { useEffect, useRef } from 'react';
import { playHeroIntro } from '../animations/heroAnimations.js';
import { products } from '../data/products.js';
import HeroVisual from './HeroVisual.jsx';

const pillars = [
    {
        title: 'Built for your workflow',
        text: 'Not generic tools — software shaped around how your team actually operates.',
    },
    {
        title: 'Stable in production',
        text: 'Tested, deployed, and running in live environments every day.',
    },
    {
        title: 'We stay after launch',
        text: 'Training, fixes, and updates — we don\'t disappear after go-live.',
    },
];

export default function Hero() {
    const ref = useRef(null);

    useEffect(() => {
        const cleanup = playHeroIntro(ref.current);
        return () => {
            if (typeof cleanup === 'function') cleanup();
        };
    }, []);

    return (
        <section id="home" className="hero" ref={ref}>
            <div className="hero-shell">
                <header className="hero-copy">
                    <h1 className="hero-title">
                        We build software that <span>runs your business</span>
                    </h1>
                    <p className="hero-desc">
                        Bynnas makes POS, restaurant, pharmacy, fleet, and portal systems.
                        We build them, deploy them, train your staff, and keep them running.
                    </p>
                    <div className="hero-actions">
                        <a className="cta cta--primary" href="#suite">
                            See our products
                        </a>
                        <a className="cta cta--ghost" href="#what-we-do">
                            How we work
                        </a>
                    </div>
                </header>

                <div className="hero-stage">
                    <HeroVisual />
                </div>
            </div>

            <div className="hero-foot">
                <div className="hero-metrics">
                    {pillars.map((item) => (
                        <article key={item.title} className="hero-metric">
                            <div>
                                <strong>{item.title}</strong>
                                <span>{item.text}</span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
