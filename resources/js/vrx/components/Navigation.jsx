export default function Navigation({ home }) {
    const links = home
        ? [
              { href: '#what-we-do', label: 'What we do' },
              { href: '#suite', label: 'Products' },
              { href: '#mission', label: 'Mission' },
              { href: '#achievements', label: 'Achievements' },
              { href: '#contact', label: 'Contact' },
          ]
        : [
              { href: '#/', label: 'Home' },
              { href: '#/', label: 'Products' },
              { href: '#contact', label: 'Contact' },
          ];

    return (
        <nav className="vrx-nav" aria-label="Primary">
            <span className="vrx-nav__bar" aria-hidden="true" />
            <ul className="vrx-nav__list">
                {links.map((item) => (
                    <li key={item.label}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
