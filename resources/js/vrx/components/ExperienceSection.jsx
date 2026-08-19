import { whatWeDo } from '../data/products.js';

const services = [
    {
        id: 'build',
        num: '01',
        title: 'Custom Software',
        kicker: 'Development',
        text: 'We write software shaped around your business — not a template you have to fight with.',
        accent: '#06b6d4',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M8 12l2 2 4-4" />
            </svg>
        ),
    },
    {
        id: 'integrate',
        num: '02',
        title: 'Integration',
        kicker: 'Connectivity',
        text: 'We connect your POS, portal, pharmacy, and fleet tools so they all talk to each other.',
        accent: '#7c3aed',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="6" cy="12" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="18" cy="18" r="2" />
                <path d="M8 12h4m0-4.5 2.5 4.5-2.5 4.5" />
            </svg>
        ),
    },
    {
        id: 'deploy',
        num: '03',
        title: 'Deployment',
        kicker: 'Infrastructure',
        text: 'We host it, configure it, and make sure everything is running when your doors open.',
        accent: '#10b981',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 3L3 8v8l9 5 9-5V8z" />
                <path d="M12 3v18M3 8l9 5 9-5" />
            </svg>
        ),
    },
    {
        id: 'support',
        num: '04',
        title: 'Training & Support',
        kicker: 'After Go-Live',
        text: 'We train your people on the live system and stay available for fixes and updates.',
        accent: '#ec4899',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
            </svg>
        ),
    },
];

export default function ExperienceSection() {
    return (
        <section id="what-we-do" className="experience">
            <div className="experience__wrap">

                <header className="experience__head">
                    <span className="section-kicker">What we do</span>
                    <h2 className="experience__title">
                        Full cycle — from first line of code<br />to training your staff
                    </h2>
                    <p className="experience__sub">
                        We handle everything. You focus on running your business.
                    </p>
                </header>

                <div className="svc-grid">
                    {services.map((s) => (
                        <a key={s.id} href={`#/do/${s.id}`} className="svc-card" style={{ '--sa': s.accent }}>
                            <div className="svc-card__top">
                                <span className="svc-card__num">{s.num}</span>
                                <span className="svc-card__icon">{s.icon}</span>
                            </div>
                            <span className="svc-card__kicker">{s.kicker}</span>
                            <h3 className="svc-card__title">{s.title}</h3>
                            <p className="svc-card__text">{s.text}</p>
                            <span className="svc-card__cta">
                                Learn more
                                <svg viewBox="0 0 16 16" width="12" height="12">
                                    <path d="M3 8h10M9 4l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                                </svg>
                            </span>
                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}
