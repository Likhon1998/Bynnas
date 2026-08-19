export default function HeroVisual() {
    return (
        <div className="hero-visual" aria-hidden="true">
            <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="gTop" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.85" />
                        <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="gLeft" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.22" />
                    </linearGradient>
                    <linearGradient id="gRight" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                    </linearGradient>
                    <linearGradient id="gCyan" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#67e8f9" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                    </linearGradient>
                    <filter id="softBlur" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="2.5" result="b" />
                        <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>
                <ellipse cx="240" cy="380" rx="110" ry="14" fill="#7c3aed" opacity="0.08" />
                <g filter="url(#softBlur)">
                    <path d="M240 60 L340 115 L240 170 L140 115 Z" fill="url(#gTop)" stroke="#fff" strokeOpacity="0.4" />
                    <path d="M140 115 L240 170 L240 280 L140 225 Z" fill="url(#gLeft)" stroke="#fff" strokeOpacity="0.2" />
                    <path d="M240 170 L340 115 L340 225 L240 280 Z" fill="url(#gRight)" stroke="#fff" strokeOpacity="0.25" />

                    <path d="M165 145 L230 182 L165 219 L100 182 Z" fill="url(#gRight)" opacity="0.88" stroke="#fff" strokeOpacity="0.3" />
                    <path d="M100 182 L165 219 L165 298 L100 261 Z" fill="url(#gLeft)" opacity="0.7" />
                    <path d="M165 219 L230 182 L230 261 L165 298 Z" fill="url(#gCyan)" opacity="0.55" />

                    <path d="M315 145 L380 182 L315 219 L250 182 Z" fill="url(#gCyan)" opacity="0.82" stroke="#fff" strokeOpacity="0.3" />
                    <path d="M250 182 L315 219 L315 298 L250 261 Z" fill="url(#gLeft)" opacity="0.65" />
                    <path d="M315 219 L380 182 L380 261 L315 298 Z" fill="url(#gRight)" opacity="0.5" />

                    <path d="M240 245 L300 279 L240 313 L180 279 Z" fill="url(#gTop)" opacity="0.78" stroke="#fff" strokeOpacity="0.28" />
                    <path d="M180 279 L240 313 L240 374 L180 340 Z" fill="url(#gLeft)" opacity="0.6" />
                    <path d="M240 313 L300 279 L300 340 L240 374 Z" fill="url(#gRight)" opacity="0.48" />
                </g>
            </svg>
        </div>
    );
}
