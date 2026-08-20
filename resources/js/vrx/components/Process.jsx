const copy = [
    { n: '01', title: 'Understand', text: 'We sit with your team and learn what they actually need.' },
    { n: '02', title: 'Plan', text: 'We design the system — screens, roles, data, integrations.' },
    { n: '03', title: 'Build', text: 'Development and testing happen with your input, not in isolation.' },
    { n: '04', title: 'Deploy', text: 'We set up hosting, migrate data, and go live with you.' },
    { n: '05', title: 'Train', text: 'Your staff learn on the real system, not a slide deck.' },
    { n: '06', title: 'Support', text: 'Updates, fixes, and a call when something needs attention.' },
];

export default function Process() {
    return (
        <section id="process" className="process">
            <div className="process-copy">
                <span className="section-kicker">How we deliver</span>
                <h2>Clear steps. No surprises.</h2>
                <p>
                    Same process every time. You know what is happening, when it is
                    happening, and who is responsible.
                </p>
            </div>
            <ol className="process-timeline">
                {copy.map((step) => (
                    <li key={step.n} className="process-step">
                        <span className="process-step__marker" aria-hidden="true">
                            <span className="process-step__icon" />
                        </span>
                        <div className="process-step__body">
                            <span className="process-step__n">{step.n}</span>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </section>
    );
}
