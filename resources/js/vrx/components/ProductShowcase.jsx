import { products } from '../data/products.js';

const codes = {
    restors: '01',
    webpos: '02',
    port: '03',
    pharma: '04',
    bus: '05',
};

const marks = {
    restors: 'HOSP',
    webpos: 'POS',
    port: 'PORT',
    pharma: 'RX',
    bus: 'FLEET',
};

function Glyph({ id }) {
    if (id === 'webpos') {
        return (
            <svg viewBox="0 0 48 48" className="product-glyph">
                <rect x="8" y="10" width="32" height="22" fill="none" stroke="currentColor" strokeWidth="1.1" />
                <path d="M14 36 H34 M24 32 V36" fill="none" stroke="currentColor" strokeWidth="1.1" />
                <path d="M14 18 H34 M14 24 H26" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
        );
    }
    if (id === 'restors') {
        return (
            <svg viewBox="0 0 48 48" className="product-glyph">
                <circle cx="16" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="1.1" />
                <circle cx="32" cy="18" r="5" fill="none" stroke="currentColor" strokeWidth="1.1" />
                <path d="M8 34 H40 M12 26 H36" fill="none" stroke="currentColor" strokeWidth="1.1" />
            </svg>
        );
    }
    if (id === 'port') {
        return (
            <svg viewBox="0 0 48 48" className="product-glyph">
                <circle cx="24" cy="24" r="10" fill="none" stroke="currentColor" strokeWidth="1.1" />
                <circle cx="24" cy="24" r="3" fill="currentColor" />
                <path d="M24 8 V14 M24 34 V40 M8 24 H14 M34 24 H40" fill="none" stroke="currentColor" strokeWidth="1.1" />
            </svg>
        );
    }
    if (id === 'pharma') {
        return (
            <svg viewBox="0 0 48 48" className="product-glyph">
                <rect x="18" y="8" width="12" height="32" rx="6" fill="none" stroke="currentColor" strokeWidth="1.1" />
                <path d="M24 16 V28 M18 22 H30" fill="none" stroke="currentColor" strokeWidth="1.1" />
            </svg>
        );
    }
    return (
        <svg viewBox="0 0 48 48" className="product-glyph">
            <rect x="8" y="14" width="32" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.1" />
            <circle cx="16" cy="32" r="3" fill="none" stroke="currentColor" strokeWidth="1.1" />
            <circle cx="32" cy="32" r="3" fill="none" stroke="currentColor" strokeWidth="1.1" />
        </svg>
    );
}

export default function ProductShowcase() {
    return (
        <section id="suite" className="products">
            <span className="section-divider__mark" aria-hidden="true" />
            <p className="process-kicker">products</p>
            <div className="products-grid">
                {products.map((item) => (
                    <a key={item.id} href={`#/products/${item.id}`} className={`product-panel${item.featured ? ' product-panel--featured' : ''}`} data-product>
                        <span className="product-panel__c product-panel__c--tl" />
                        <span className="product-panel__c product-panel__c--tr" />
                        <span className="product-panel__c product-panel__c--bl" />
                        <span className="product-panel__c product-panel__c--br" />
                        <header className="product-panel__head">
                            <span>{codes[item.id]}</span>
                            <span>{marks[item.id]}</span>
                        </header>
                        <Glyph id={item.id} />
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}
