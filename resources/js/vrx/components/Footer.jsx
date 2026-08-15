import hands from '../assets/images/footer-ops-hands.png';

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <img className="footer__hands" src={hands} alt="" aria-hidden="true" />
            <div className="footer__inner">
                <div className="footer__col">
                    <a href="mailto:hello@bynnas.com">hello@bynnas.com</a>
                    <a href="https://bynnas.com">BYNNAS.COM</a>
                </div>
                <p className="footer__copy">© {new Date().getFullYear()} BYNNAS — IT SOLUTIONS</p>
                <ul className="footer__social">
                    <li>
                        <a href="https://facebook.com" aria-label="Facebook">
                            f
                        </a>
                    </li>
                    <li>
                        <a href="https://x.com" aria-label="Twitter">
                            𝕏
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" aria-label="LinkedIn">
                            in
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
