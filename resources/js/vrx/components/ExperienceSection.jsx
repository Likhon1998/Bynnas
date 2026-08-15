import pos from '../assets/images/product-pos.png';
import operator from '../assets/images/ops-woman.png';
import DataVisualization from './DataVisualization.jsx';

function Frame({ tone, children }) {
    return (
        <div className={`tech-frame tech-frame--${tone}`}>
            <span className="tech-frame__c tech-frame__c--tl" />
            <span className="tech-frame__c tech-frame__c--tr" />
            <span className="tech-frame__c tech-frame__c--bl" />
            <span className="tech-frame__c tech-frame__c--br" />
            {children}
        </div>
    );
}

export default function ExperienceSection() {
    return (
        <section id="why" className="experience experience--headset">
            <div className="experience__layout">
                <Frame tone="cyan">
                    <img className="experience__product floaty" src={pos} alt="Bynnas POS terminal" />
                </Frame>
                <div className="experience__copy">
                    <p className="experience__eyebrow">commerce systems</p>
                    <h2>Built for shops that cannot stop</h2>
                    <p>
                        BynnasWebpos runs the counter. Bynnas Restora runs the floor. Billing,
                        kitchen, and stock stay in one quiet, reliable stack.
                    </p>
                    <a className="cta cta--cyan" href="#suite">
                        products
                    </a>
                    <DataVisualization />
                </div>
                <img className="experience__ghost" src={operator} alt="" aria-hidden="true" />
            </div>
        </section>
    );
}
