import { useEffect } from 'react';
import gsap from 'gsap';

function stars(count, seed) {
    return Array.from({ length: count }, (_, i) => {
        const x = ((i * 97 + seed * 13) % 1440);
        const y = ((i * 173 + seed * 41) % 3600);
        return { x, y, r: i % 7 === 0 ? 1.6 : 1.05 };
    });
}

export default function Atmosphere() {
    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduced) return;
        gsap.from('.atm-layer', { opacity: 0, duration: 1.8, ease: 'power2.out' });
    }, []);

    const s1 = stars(42, 3);
    const s2 = stars(28, 11);

    return (
        <div className="atmosphere" aria-hidden="true">
            <div className="atm-layer atm-base" />
            <div className="atm-layer atm-nebula atm-nebula-a" />
            <div className="atm-layer atm-nebula atm-nebula-b" />
            <div className="atm-layer atm-glow atm-glow-blue" data-parallax="0.12" />
            <div className="atm-layer atm-glow atm-glow-violet" data-parallax="0.18" />
            <div className="atm-layer atm-glow atm-glow-magenta" data-parallax="0.22" />
            <svg className="atm-layer atm-network" data-parallax="0.08" viewBox="0 0 1440 3600" preserveAspectRatio="xMidYMin slice">
                <g stroke="rgba(140,120,255,0.16)" strokeWidth="0.55" fill="none">
                    <path d="M70 90 L190 60 L310 140 L450 90 L590 180 L740 110 L880 200 L1030 130 L1180 210 L1360 90" />
                    <path d="M120 90 L190 220 L310 140 L280 300 L450 90 L520 260" />
                    <path d="M40 520 L200 470 L340 560 L500 490 L640 580 L800 510 L960 600 L1140 530 L1320 610" />
                    <path d="M90 980 L240 920 L390 1010 L560 940 L720 1040 L900 970 L1080 1080 L1260 1000" />
                    <path d="M70 1540 L250 1470 L410 1570 L590 1500 L760 1600 L940 1530 L1120 1630 L1320 1550" />
                    <path d="M110 2140 L280 2070 L450 2170 L640 2100 L820 2200 L1000 2130 L1200 2240" />
                    <path d="M80 2740 L260 2670 L440 2770 L640 2700 L840 2800 L1060 2730 L1260 2840" />
                    <path d="M60 3300 L240 3230 L430 3340 L640 3260 L860 3370 L1080 3290 L1300 3400" />
                </g>
                <g fill="rgba(0,191,255,0.42)">
                    {s1.map((p, i) => (
                        <circle key={`a${i}`} cx={p.x} cy={p.y} r={p.r} />
                    ))}
                </g>
                <g fill="rgba(230,0,169,0.28)">
                    {s2.map((p, i) => (
                        <circle key={`b${i}`} cx={p.x} cy={p.y} r={p.r} />
                    ))}
                </g>
            </svg>
            <div className="atm-particles" data-parallax="0.25" />
        </div>
    );
}
