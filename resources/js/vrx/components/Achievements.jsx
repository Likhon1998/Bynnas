import { achievements } from '../data/products.js';

export default function Achievements() {
    return (
        <section id="achievements" className="achievements">
            <div className="achieve-grid">
                {achievements.map((item) => (
                    <article key={item.label} className="achieve-card" data-achieve>
                        <span className="achieve-value">{item.value}</span>
                        <h3>{item.label}</h3>
                    </article>
                ))}
            </div>
        </section>
    );
}
