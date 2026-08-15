import pos from '../assets/images/product-pos.png';
import core from '../assets/images/hero-luxury-core.png';

export default function MissionVision() {
    return (
        <section id="mission" className="experience mission">
            <span className="section-divider__mark" aria-hidden="true" />
            <p className="process-kicker">purpose</p>
            <div className="mission-grid">
                <article className="mission-card tech-frame tech-frame--cyan" data-mission>
                    <span className="tech-frame__c tech-frame__c--tl" />
                    <span className="tech-frame__c tech-frame__c--tr" />
                    <span className="tech-frame__c tech-frame__c--bl" />
                    <span className="tech-frame__c tech-frame__c--br" />
                    <img className="mission-card__mark" src={pos} alt="" aria-hidden="true" />
                    <span className="mission-card__shine" aria-hidden="true" />
                    <div className="mission-card__copy">
                        <p className="experience__eyebrow">mission</p>
                        <h2>Make operations feel still</h2>
                        <p>
                            We build software that shops, restaurants, pharmacies, portals, and fleets
                            can run every day — precise, quiet, and always on.
                        </p>
                    </div>
                </article>
                <article className="mission-card tech-frame tech-frame--violet" data-mission>
                    <span className="tech-frame__c tech-frame__c--tl" />
                    <span className="tech-frame__c tech-frame__c--tr" />
                    <span className="tech-frame__c tech-frame__c--bl" />
                    <span className="tech-frame__c tech-frame__c--br" />
                    <img className="mission-card__mark mission-card__mark--core" src={core} alt="" aria-hidden="true" />
                    <span className="mission-card__shine" aria-hidden="true" />
                    <div className="mission-card__copy">
                        <p className="experience__eyebrow">vision</p>
                        <h2>One suite. One language.</h2>
                        <p>
                            A single Bynnas stack where commerce, hospitality, health, and transport
                            share data, training, and care — without noise.
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
}
