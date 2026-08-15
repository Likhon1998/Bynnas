import { useEffect, useRef } from 'react';
import heroCore from '../assets/images/hero-ai-core.png';
import { playHeroIntro } from '../animations/heroAnimations.js';
import { whatWeDo } from '../data/products.js';
import { FeatureIcon } from './FeatureIcon.jsx';

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
            <header className="hero-copy">
                <h1 className="hero-title">
                    we are <span>BYNNAS</span>
                </h1>
                <p className="hero-sub">IT solutions company</p>
                <p className="hero-desc">
                    Bynnas is a software solutions company. We build, integrate, deploy, and
                    support systems for retail, restaurants, pharmacy, portals, and transport.
                </p>
            </header>

            <p className="services-kicker" id="what-we-do">
                what we do
            </p>

            <div className="hero-stage">
                <svg className="hero-hud" viewBox="0 0 1200 760" aria-hidden="true">
                    <path className="hud-line" d="M250 150 L470 300 L540 340" />
                    <path className="hud-line" d="M950 150 L730 300 L660 340" />
                    <path className="hud-line" d="M250 610 L470 460 L540 420" />
                    <path className="hud-line" d="M950 610 L730 460 L660 420" />
                    <circle cx="250" cy="150" r="2.2" fill="#00e5ff" />
                    <circle cx="950" cy="150" r="2.2" fill="#e600a9" />
                    <circle cx="250" cy="610" r="2.2" fill="#ff5a7a" />
                    <circle cx="950" cy="610" r="2.2" fill="#3de0c5" />
                </svg>

                <div className="hero-figure-wrap">
                    <div className="hero-aura" aria-hidden="true" />
                    <div className="hero-grid-glow" aria-hidden="true" />
                    <img className="hero-figure hero-figure--core" src={heroCore} alt="Bynnas living AI core" />
                    <span className="hero-sheen" aria-hidden="true" />
                    <div className="hero-core-glow" />
                </div>

                {whatWeDo.map((f) => (
                    <a key={f.id} href={`#/do/${f.id}`} className={`feature feature--${f.pos}`} data-feature>
                        <FeatureIcon type={f.icon} />
                        <div>
                            <h2>{f.title}</h2>
                            <p>{f.text}</p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
