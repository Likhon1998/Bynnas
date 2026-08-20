import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
    gsap.from('.process-copy > *', {
        scrollTrigger: { trigger: '.process', start: 'top 82%' },
        opacity: 0,
        y: 16,
        duration: 0.7,
        stagger: 0.08,
    });

    gsap.from('.process-step', {
        scrollTrigger: { trigger: '.process', start: 'top 78%' },
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
    });

    gsap.from('.service-card', {
        scrollTrigger: { trigger: '.experience', start: 'top 80%' },
        opacity: 0,
        y: 20,
        duration: 0.7,
        stagger: 0.08,
    });

    gsap.from('.suite-card', {
        scrollTrigger: { trigger: '.suite', start: 'top 82%' },
        opacity: 0,
        y: 18,
        duration: 0.7,
    });

    gsap.from('[data-mission]', {
        scrollTrigger: { trigger: '.mission', start: 'top 84%' },
        opacity: 0,
        y: 16,
        duration: 0.7,
    });

    gsap.from('[data-achieve]', {
        scrollTrigger: { trigger: '.achievements', start: 'top 84%' },
        opacity: 0,
        y: 16,
        stagger: 0.1,
        duration: 0.7,
    });

    gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: '.clients', start: 'top 88%' },
        opacity: 0,
        y: 10,
        stagger: 0.08,
        duration: 0.6,
        ease: 'power2.out',
    });

    gsap.from('.bcard', {
        scrollTrigger: { trigger: '.blog', start: 'top 85%' },
        opacity: 0,
        y: 18,
        stagger: 0.08,
        duration: 0.65,
        ease: 'power2.out',
    });

    gsap.from('.footer__inner > *', {
        scrollTrigger: { trigger: '.footer', start: 'top 90%' },
        opacity: 0,
        y: 12,
        stagger: 0.1,
        duration: 0.6,
    });
}
