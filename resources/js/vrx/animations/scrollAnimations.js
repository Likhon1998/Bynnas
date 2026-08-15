import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
    gsap.from('.process-kicker', {
        scrollTrigger: { trigger: '.process', start: 'top 80%' },
        opacity: 0,
        y: 16,
        duration: 0.8,
    });

    const connector = document.querySelector('.process-connector');
    if (connector && typeof connector.getTotalLength === 'function') {
        const len = connector.getTotalLength();
        if (len) {
            connector.style.strokeDasharray = `${len}`;
            connector.style.strokeDashoffset = `${len}`;
            gsap.to(connector, {
                strokeDashoffset: 0,
                duration: 1.8,
                ease: 'none',
                scrollTrigger: { trigger: '.process', start: 'top 70%', end: 'center 40%', scrub: 0.6 },
            });
        }
    }

    gsap.from('.process-card', {
        scrollTrigger: { trigger: '.process', start: 'top 72%' },
        opacity: 0,
        y: 24,
        stagger: 0.18,
        duration: 0.9,
    });

    gsap.from('[data-divider]', {
        scrollTrigger: { trigger: '[data-divider]', start: 'top 85%' },
        opacity: 0,
        y: 12,
        duration: 0.8,
        stagger: 0.2,
    });

    document.querySelectorAll('.experience').forEach((section) => {
        gsap.from(section.querySelectorAll('.experience__copy, .cta, .experience__product, .experience__crystal, .experience__portrait'), {
            scrollTrigger: { trigger: section, start: 'top 75%' },
            opacity: 0,
            y: 28,
            duration: 1,
            stagger: 0.12,
        });
    });

    document.querySelectorAll('[data-spark]').forEach((path) => {
        if (typeof path.getTotalLength !== 'function') return;
        const len = path.getTotalLength();
        if (!len) return;
        path.style.strokeDasharray = `${len}`;
        path.style.strokeDashoffset = `${len}`;
        gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.6,
            scrollTrigger: { trigger: '.hud-data', start: 'top 85%' },
        });
    });

    gsap.from('[data-ring]', {
        scrollTrigger: { trigger: '.hud-data', start: 'top 85%' },
        strokeDashoffset: (i, el) => el.getAttribute('stroke-dasharray'),
        duration: 1.4,
        stagger: 0.15,
        ease: 'power2.out',
    });

    gsap.from('[data-mission]', {
        scrollTrigger: { trigger: '.mission', start: 'top 80%' },
        opacity: 0,
        y: 20,
        stagger: 0.12,
        duration: 0.85,
    });

    gsap.from('[data-achieve]', {
        scrollTrigger: { trigger: '.achievements', start: 'top 80%' },
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
    });

    gsap.from('[data-product]', {
        scrollTrigger: { trigger: '.products', start: 'top 78%' },
        opacity: 0,
        y: 22,
        stagger: 0.1,
        duration: 0.8,
    });

    gsap.from('.footer__inner > *', {
        scrollTrigger: { trigger: '.footer', start: 'top 90%' },
        opacity: 0,
        y: 16,
        stagger: 0.1,
        duration: 0.7,
    });
}
