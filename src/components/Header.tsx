import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <nav>
        <button 
          className="lang-toggle"
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
        >
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
        <a href="#" className="nav-logo">ML</a>
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#hero" onClick={closeMenu}>{t.nav.home}</a></li>
          <li><a href="#skills" onClick={closeMenu}>{t.nav.skills}</a></li>
          <li><a href="#projects" onClick={closeMenu}>{t.nav.projects}</a></li>
          <li><a href="#contact" onClick={closeMenu}>{t.nav.contact}</a></li>
        </ul>
      </nav>
      <div className={`mobile-overlay ${menuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
    </header>
  );
};
