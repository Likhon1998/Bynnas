import gsap from 'gsap';

export function playHeroIntro(root) {
    if (!root) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return () => {};

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.from('.hero-copy > *', { y: 22, opacity: 0, duration: 0.8, stagger: 0.08 })
        .from('.hero-stage', { y: 20, scale: 0.98, opacity: 0, duration: 1.1 }, '-=0.55');

    return () => {
        tl.kill();
        gsap.set('.hero-copy > *, .hero-stage', {
            clearProps: 'opacity,transform',
        });
    };
}
