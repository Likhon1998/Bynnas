export default function DashboardPreview({ accent = '#7c3aed' }) {
    return (
        <svg className="dash-preview" viewBox="0 0 360 280" fill="none" aria-hidden="true">
            <rect width="360" height="280" rx="14" fill="#f9fafb" />
            <rect x="16" y="16" width="72" height="248" rx="10" fill="#fff" stroke="#e5e7eb" />
            <rect x="28" y="32" width="48" height="10" rx="5" fill={accent} opacity="0.2" />
            <rect x="28" y="56" width="48" height="8" rx="4" fill="#e5e7eb" />
            <rect x="28" y="74" width="38" height="8" rx="4" fill="#e5e7eb" />
            <rect x="28" y="92" width="44" height="8" rx="4" fill="#e5e7eb" />
            <rect x="28" y="110" width="32" height="8" rx="4" fill="#e5e7eb" />
            <rect x="100" y="16" width="244" height="72" rx="12" fill="#fff" stroke="#e5e7eb" />
            <rect x="116" y="32" width="80" height="8" rx="4" fill="#d1d5db" />
            <rect x="116" y="48" width="140" height="24" rx="6" fill={accent} opacity="0.1" />
            <circle cx="308" cy="52" r="16" fill={accent} opacity="0.15" />
            <path d="M116 96 H328" stroke="#f3f4f6" />
            <rect x="100" y="100" width="148" height="96" rx="12" fill="#fff" stroke="#e5e7eb" />
            <path d="M118 168 C140 150, 160 176, 182 146 C204 116, 226 158, 248 132" stroke={accent} strokeWidth="2.2" fill="none" />
            <path d="M118 176 H248" stroke="#e5e7eb" />
            <rect x="260" y="100" width="84" height="96" rx="12" fill="#fff" stroke="#e5e7eb" />
            <circle cx="302" cy="148" r="26" stroke="#e5e7eb" strokeWidth="8" />
            <circle cx="302" cy="148" r="26" stroke={accent} strokeWidth="8" strokeDasharray="90 164" strokeLinecap="round" />
            <rect x="100" y="208" width="244" height="56" rx="12" fill="#fff" stroke="#e5e7eb" />
            <rect x="116" y="224" width="90" height="8" rx="4" fill="#e5e7eb" />
            <rect x="116" y="240" width="160" height="8" rx="4" fill="#f3f4f6" />
            <rect x="292" y="224" width="36" height="24" rx="8" fill={accent} />
        </svg>
    );
}
