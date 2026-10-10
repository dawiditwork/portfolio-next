"use client";

export default function Header({
  menuOpen,
  setMenuOpen,
  c,
  activeSection,
  language,
  changeLanguage,
}) {
  return (
    <header className="site-header-v3">
      <a
        className="brand-v3"
        href="#home"
        aria-label="Home"
      >
        DF<span>/</span>DEV
      </a>

      <nav className={menuOpen ? "nav-v3 open" : "nav-v3"}>
        {[
          ["about", c.nav[0]],
          ["projects", c.nav[1]],
          ["experience", c.nav[2]],
          ["contact", c.nav[3]],
        ].map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={activeSection === id ? "active" : ""}
            aria-current={activeSection === id ? "page" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="header-actions-v3">
        <div
          className="language-switch-v3"
          aria-label="Language"
        >
          {["en", "de"].map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={language === value}
              onClick={() => changeLanguage(value)}
            >
              {value.toUpperCase()}
            </button>
          ))}
        </div>

        <a className="header-contact-v3" href="#contact">
          {language === "de" ? "Kontakt" : "Let's talk"}
          <span>↗</span>
        </a>

        <button
          className="menu-button-v3"
          type="button"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}