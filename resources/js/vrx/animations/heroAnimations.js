import gsap from 'gsap';

export function playHeroIntro(root) {
    if (!root) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return () => {};

    const lines = root.querySelectorAll('.hud-line');
    lines.forEach((line) => {
        if (typeof line.getTotalLength !== 'function') return;
        const len = line.getTotalLength();
        if (!len) return;
        line.style.strokeDasharray = `${len}`;
        line.style.strokeDashoffset = `${len}`;
    });

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.from('.hero-title', { y: 28, opacity: 0, duration: 1.1 })
        .from('.hero-sub', { y: 16, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-desc', { y: 12, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.services-kicker', { opacity: 0, duration: 0.6 }, '-=0.5')
        .from('.hero-figure-wrap', { scale: 1.06, opacity: 0, duration: 1.4 }, '-=0.9')
        .to('.hud-line', { strokeDashoffset: 0, duration: 1.2, stagger: 0.12 }, '-=0.8')
        .from('[data-feature]', { y: 18, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=0.7');

    return () => tl.kill();
}
