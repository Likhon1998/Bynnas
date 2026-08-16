function Wave() {
    const line = 'M8 58 C28 52, 40 70, 58 46 C76 22, 92 64, 112 38 C132 12, 148 48, 168 28 C188 8, 206 42, 226 24 C246 8, 266 36, 292 20';
    const fill = `${line} L292 82 L8 82 Z`;
    return (
        <div className="hud-wave">
            <p className="hud-kicker">live ops</p>
            <svg className="spark" viewBox="0 0 300 90" fill="none">
                <defs>
                    <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.28" />
                        <stop offset="100%" stopColor="#00e5ff" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d="M8 22 H292 M8 45 H292 M8 68 H292" className="spark-axis" />
                <path d={fill} fill="url(#waveFill)" />
                <path className="spark-line" d={line} data-spark />
                <circle cx="168" cy="28" r="2.4" className="spark-dot" />
                <circle cx="226" cy="24" r="2.4" className="spark-dot" />
                <circle cx="292" cy="20" r="2.4" className="spark-dot" />
            </svg>
        </div>
    );
}

const meters = [
    { label: 'load', value: 28 },
    { label: 'sync', value: 53 },
    { label: 'uptime', value: 55 },
];

export default function DataVisualization() {
    return (
        <div className="hud-data" aria-hidden="true">
            <Wave />
            <div className="hud-meters">
                {meters.map((item) => (
                    <div className="meter" key={item.label}>
                        <div className="meter-track">
                            <span className="meter-fill" data-bar style={{ height: `${item.value}%` }} />
                        </div>
                        <strong className="meter-val">{item.value}</strong>
                        <span className="meter-label">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
