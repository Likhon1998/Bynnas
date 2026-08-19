import akhiLogo from '../assets/images/client-akhitelecom.png';

const quotes = [
    {
        text: 'They built our restaurant management system from scratch. Staff picked it up in two days — we have not looked back since.',
        by: 'Operations Manager',
        company: 'Hospitality Group',
        initial: 'O',
        color: '#f59e0b',
    },
    {
        text: 'Our pharmacy needed something very specific. Bynnas understood that and delivered exactly what we asked for, on schedule.',
        by: 'Head of IT',
        company: 'Pharmacy Chain',
        initial: 'H',
        color: '#10b981',
    },
    {
        text: 'Solid work, on time, and they actually pick up the phone when something breaks. That alone is worth more than any feature list.',
        by: 'Fleet Operations Lead',
        company: 'Transport Company',
        initial: 'F',
        color: '#6366f1',
    },
];

const Stars = () => (
    <div className="tcard__stars">
        {[...Array(5)].map((_, i) => (
            <svg key={i} viewBox="0 0 16 16" width="14" height="14" fill="#f59e0b">
                <path d="M8 1l1.8 3.7 4.2.6-3 2.9.7 4.1L8 10.4l-3.7 1.9.7-4.1-3-2.9 4.2-.6z" />
            </svg>
        ))}
    </div>
);

export default function Clients() {
    return (
        <section id="clients" className="clients">
            <div className="section-wrap">

                {/* Header */}
                <div className="clients__head">
                    <span className="section-kicker">Client Stories</span>
                    <h2 className="clients__title">Trusted by teams<br />that rely on their software</h2>
                    <p className="clients__sub">
                        Real feedback from real operators — not cherry-picked marketing quotes.
                    </p>
                </div>

                {/* Testimonial cards */}
                <div className="tcards">
                    {quotes.map((q) => (
                        <article key={q.company} className="tcard" style={{ '--tc': q.color }}>
                            {/* Large decorative quote mark */}
                            <svg className="tcard__qmark" viewBox="0 0 40 32" fill="none">
                                <path d="M0 32V19.2C0 8.533 5.333 2.133 16 0l2.4 3.2C12.267 4.8 9.2 8.533 8.8 14.4H16V32H0Zm24 0V19.2C24 8.533 29.333 2.133 40 0l2.4 3.2C36.267 4.8 33.2 8.533 32.8 14.4H40V32H24Z"
                                    fill="currentColor" />
                            </svg>

                            <Stars />
                            <p className="tcard__text">{q.text}</p>

                            <div className="tcard__author">
                                <span className="tcard__avatar" style={{ background: q.color }}>
                                    {q.initial}
                                </span>
                                <div>
                                    <strong className="tcard__name">{q.by}</strong>
                                    <span className="tcard__company">{q.company}</span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Logo strip */}
                <div className="clients__logos">
                    <p className="clients__logos-label">Our clients include</p>
                    <div className="clients__logos-row">
                        <div className="clogo">
                            <img src={akhiLogo} alt="AKHI TELECOM" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
