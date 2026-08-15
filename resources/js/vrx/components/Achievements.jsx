import { achievements } from '../data/products.js';
import ai from '../assets/images/hero-ai-core.png';
import pos from '../assets/images/product-pos.png';
import core from '../assets/images/hero-luxury-core.png';
import hands from '../assets/images/footer-ops-hands.png';

const marks = { ai, pos, core, hands };

export default function Achievements() {
    return (
        <section id="achievements" className="experience achievements">
            <span className="section-divider__mark" aria-hidden="true" />
            <p className="process-kicker">achievements</p>
            <div className="achieve-grid">
                {achievements.map((item, i) => (
                    <article
                        key={item.label}
                        className={`achieve-card achieve-card--${item.mark}`}
                        data-achieve
                    >
                        <span className="product-panel__c product-panel__c--tl" />
                        <span className="product-panel__c product-panel__c--tr" />
                        <span className="product-panel__c product-panel__c--bl" />
                        <span className="product-panel__c product-panel__c--br" />
                        <img
                            className="achieve-card__mark"
                            src={marks[item.mark]}
                            alt=""
                            aria-hidden="true"
                            style={{ animationDelay: `${i * 1.1}s` }}
                        />
                        <span className="achieve-card__shine" aria-hidden="true" />
                        <div className="achieve-card__copy">
                            <span className="achieve-value">{item.value}</span>
                            <h3>{item.label}</h3>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
