export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="footer__inner">
                <div className="footer__brand">
                    <p className="footer__word">BYNNAS</p>
                    <p className="footer__web">
                        Bynnas IT Solutions provides operational software for retail,
                        hospitality, pharmacy, and transport organizations.
                    </p>
                </div>
                <div className="footer__links">
                    <div className="footer__col">
                        <h3>Solutions</h3>
                        <a href="#what-we-do">Custom Software</a>
                        <a href="#what-we-do">System Integration</a>
                        <a href="#what-we-do">Cloud Deployment</a>
                        <a href="#what-we-do">Support &amp; Training</a>
                    </div>
                    <div className="footer__col">
                        <h3>Products</h3>
                        <a href="#/products/restors">Restora</a>
                        <a href="#/products/webpos">Webpos</a>
                        <a href="#/products/port">Bynnas Port</a>
                        <a href="#/products/pharma">Bynnas Pharma</a>
                    </div>
                    <div className="footer__col">
                        <h3>Company</h3>
                        <a href="#process">Process</a>
                        <a href="#achievements">Achievements</a>
                        <a href="#clients">Clients</a>
                    </div>
                    <div className="footer__col">
                        <h3>Contact</h3>
                        <a className="footer__mail" href="mailto:bynnasit@gmail.com">
                            bynnasit@gmail.com
                        </a>
                        <a href="https://bynnas.com">bynnas.com</a>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p className="footer__copy">© {new Date().getFullYear()} BYNNAS IT SOLUTIONS</p>
                    <ul className="footer__social">
                        <li><a href="https://linkedin.com" aria-label="LinkedIn">in</a></li>
                        <li><a href="https://facebook.com" aria-label="Facebook">f</a></li>
                        <li><a href="https://x.com" aria-label="Twitter">𝕏</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
