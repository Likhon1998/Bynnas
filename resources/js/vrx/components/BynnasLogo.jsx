import { useId } from 'react';

export default function BynnasLogo({ size = 'hero' }) {
    const uid = useId().replace(/:/g, '');
    const stroke = `bynnasStroke-${uid}`;
    const glow = `bynnasGlow-${uid}`;

    return (
        <div className={`bynnas-logo bynnas-logo--${size}`} aria-label="Bynnas">
            <svg className="bynnas-logo__mark" viewBox="0 0 200 200" fill="none">
                <defs>
                    <linearGradient id={stroke} x1="20" y1="20" x2="180" y2="180">
                        <stop stopColor="#7AF0FF" />
                        <stop offset="0.48" stopColor="#C9B8FF" />
                        <stop offset="1" stopColor="#E56BFF" />
                    </linearGradient>
                    <filter id={glow} x="-30%" y="-30%" width="160%" height="160%">
                        <feGaussianBlur stdDeviation="2.4" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <path
                    className="logo-draw logo-hex"
                    d="M100 18 L168 57 L168 143 L100 182 L32 143 L32 57 Z"
                    stroke={`url(#${stroke})`}
                    strokeWidth="1.15"
                    filter={`url(#${glow})`}
                />
                <path
                    className="logo-draw logo-hex-inner"
                    d="M100 42 L148 70 L148 130 L100 158 L52 130 L52 70 Z"
                    stroke={`url(#${stroke})`}
                    strokeWidth="0.7"
                    opacity="0.55"
                />
                <path
                    className="logo-draw logo-b"
                    d="M78 68 H108 C126 68 136 78 136 90 C136 99 131 105 122 108 C132 111 140 119 140 132 C140 146 128 154 108 154 H78 V68 Z M92 80 V96 H106 C114 96 120 92 120 87 C120 82 114 80 106 80 H92 Z M92 108 V142 H108 C118 142 126 137 126 130 C126 122 118 108 108 108 H92 Z"
                    stroke={`url(#${stroke})`}
                    strokeWidth="1.35"
                    strokeLinejoin="round"
                    filter={`url(#${glow})`}
                />
            </svg>
            <p className="bynnas-logo__word">
                {'BYNNAS'.split('').map((ch, i) => (
                    <span key={i} className="logo-letter">
                        {ch}
                    </span>
                ))}
            </p>
            <p className="bynnas-logo__tag">IT SOLUTIONS</p>
        </div>
    );
}
