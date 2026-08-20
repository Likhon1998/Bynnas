import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation.jsx';
import Hero from './components/Hero.jsx';
import Process from './components/Process.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import ProductShowcase from './components/ProductShowcase.jsx';
import MissionVision from './components/MissionVision.jsx';
import Achievements from './components/Achievements.jsx';
import Clients from './components/Clients.jsx';
import DetailPage from './components/DetailPage.jsx';
import Footer from './components/Footer.jsx';
import Atmosphere from './components/Atmosphere.jsx';
import { parseHash } from './components/FeatureIcon.jsx';
import { products, whatWeDo } from './data/products.js';
import { initScrollAnimations } from './animations/scrollAnimations.js';
import { initParallax } from './animations/parallax.js';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
    const rootRef = useRef(null);
    const [route, setRoute] = useState(() => parseHash());

    useEffect(() => {
        const onHash = () => {
            const next = parseHash();
            const hash = window.location.hash || '';
            setRoute(next);
            const isAppPath = next.type !== 'home' || hash === '#/' || hash === '#' || hash === '';
            if (isAppPath) {
                window.scrollTo(0, 0);
            }
        };
        window.addEventListener('hashchange', onHash);
        return () => window.removeEventListener('hashchange', onHash);
    }, []);

    useEffect(() => {
        if (route.type !== 'home') return undefined;
        const hash = window.location.hash || '';
        if (!hash || hash.startsWith('#/')) return undefined;
        const id = hash.slice(1);
        const frame = window.requestAnimationFrame(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        return () => window.cancelAnimationFrame(frame);
    }, [route]);

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (route.type !== 'home') return undefined;
        const ctx = gsap.context(() => {
            if (!reduced) {
                initScrollAnimations();
                initParallax();
            }
        }, rootRef);
        return () => ctx.revert();
    }, [route]);

    const product = route.type === 'product' ? products.find((p) => p.id === route.slug) : null;
    const service = route.type === 'do' ? whatWeDo.find((p) => p.id === route.slug) : null;

    return (
        <div ref={rootRef} className="vrx-page">
            <Atmosphere />
            <Navigation home={route.type === 'home'} />
            <main>
                {route.type === 'home' && (
                    <>
                        <Hero />
                        <ProductShowcase />
                        <ExperienceSection />
                        <Process />
                        <MissionVision />
                        <Achievements />
                        <Clients />
                    </>
                )}
                {product && <DetailPage kind="product" item={product} siblings={products} />}
                {service && <DetailPage kind="do" item={service} siblings={whatWeDo} />}
                {route.type !== 'home' && !product && !service && (
                    <section className="detail-page">
                        <div className="detail-shell detail-shell--empty">
                            <span className="section-kicker">404</span>
                            <h1>Page not found</h1>
                            <p className="detail-lead">That link does not match a product or service.</p>
                            <a className="cta cta--primary" href="#/">
                                Return to home
                            </a>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}
