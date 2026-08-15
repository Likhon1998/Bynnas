function hexPoints(cx, cy, r) {
    return Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 180) * (60 * i - 90);
        return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
    }).join(' ');
}

const nodes = [
    { n: '01', x: 80, y: 78, glow: true },
    { n: '02', x: 280, y: 188, glow: false },
    { n: '03', x: 480, y: 78, glow: true },
    { n: '04', x: 680, y: 188, glow: true },
    { n: '05', x: 880, y: 78, glow: true },
    { n: '06', x: 1080, y: 188, glow: true },
];

const copy = [
    { n: '01', title: 'Discover', text: 'We map your counters, kitchens, stores, fleets, and teams before we write a line of code.' },
    { n: '02', title: 'Architect', text: 'Modules, roles, and data flows are designed around how Bynnas products will actually be used.' },
    { n: '03', title: 'Integrate', text: 'POS, restaurant, portal, pharmacy, and bus systems are connected and tested with your staff.' },
    { n: '04', title: 'Launch', text: 'Go-live support, training, and a stable production suite you can run every day.' },
    { n: '05', title: 'Train', text: 'Your team learns the live system — counters, kitchens, pharmacy desks, and fleet ops included.' },
    { n: '06', title: 'Support', text: 'We stay after go-live with updates, monitoring, and a partner you can call when it matters.' },
];

export default function Process() {
    return (
        <section id="process" className="process">
            <p className="process-kicker">process</p>
            <div className="process-diagram">
                <svg className="process-svg" viewBox="0 0 1180 270" fill="none" aria-hidden="true">
                    <defs>
                        <linearGradient id="procGrad" x1="80" y1="78" x2="1080" y2="188">
                            <stop stopColor="#E600A9" />
                            <stop offset="0.45" stopColor="#6428FF" />
                            <stop offset="1" stopColor="#00BFFF" />
                        </linearGradient>
                        <filter id="hexGlow" x="-40%" y="-40%" width="180%" height="180%">
                            <feGaussianBlur stdDeviation="3.2" result="b" />
                            <feMerge>
                                <feMergeNode in="b" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <path
                        className="process-connector"
                        d="M80 78 L280 188 L480 78 L680 188 L880 78 L1080 188"
                        stroke="url(#procGrad)"
                        strokeWidth="1.35"
                    />
                    {nodes.map((node, i) => (
                        <g key={i} filter={node.glow ? 'url(#hexGlow)' : undefined}>
                            <polygon
                                points={hexPoints(node.x, node.y, 34)}
                                className={node.glow ? 'hex-on' : 'hex-off'}
                            />
                            {node.n ? (
                                <text x={node.x} y={node.y + 4} textAnchor="middle" className="hex-num">
                                    {node.n}
                                </text>
                            ) : null}
                        </g>
                    ))}
                </svg>
                <div className="process-labels">
                    {copy.map((step) => (
                        <article key={step.n} className="process-card">
                            <h3>
                                {step.n} {step.title}
                            </h3>
                            <p>{step.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
