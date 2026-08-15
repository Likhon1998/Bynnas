function Ring({ value }) {
    const r = 26;
    const c = 2 * Math.PI * r;
    const offset = c - (value / 100) * c;
    return (
        <div className="ring">
            <svg viewBox="0 0 68 68">
                <circle cx="34" cy="34" r={r} className="ring-bg" />
                <circle
                    cx="34"
                    cy="34"
                    r={r}
                    className="ring-fg"
                    strokeDasharray={c}
                    strokeDashoffset={offset}
                    data-ring
                />
            </svg>
            <span>{value}</span>
        </div>
    );
}

function Spark({ d, dots }) {
    return (
        <svg className="spark" viewBox="0 0 300 90" fill="none">
            <path d="M8 8 H292 M8 82 H292 M8 8 V82" className="spark-axis" />
            <path className="spark-line" d={d} data-spark />
            {dots.map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="2.1" className="spark-dot" />
            ))}
        </svg>
    );
}

export default function DataVisualization() {
    return (
        <div className="hud-data" aria-hidden="true">
            <Spark
                d="M16 62 L44 58 L70 70 L96 28 L122 48 L150 22 L178 44 L206 16 L234 40 L262 34 L288 48"
                dots={[
                    [96, 28],
                    [150, 22],
                    [206, 16],
                ]}
            />
            <Spark
                d="M16 54 L48 50 L74 64 L102 30 L132 56 L160 20 L190 46 L218 26 L250 52 L288 42"
                dots={[
                    [102, 30],
                    [160, 20],
                    [218, 26],
                ]}
            />
            <div className="rings">
                <Ring value={28} />
                <Ring value={53} />
                <Ring value={55} />
            </div>
        </div>
    );
}
