import { useLanguage } from '../context/LanguageContext';
import { TypeWriter } from './TypeWriter';
import heroImg from '../assets/hero/hero.webp';

const esStrings = [
  'Creo aplicaciones web con React y TypeScript',
  'Construyo interfaces limpias y funcionales',
  'Transformo diseños en código',
  'Siempre aprendiendo nuevas tecnologías',
];

const enStrings = [
  'I build web apps with React and TypeScript',
  'I craft clean and functional interfaces',
  'I turn designs into code',
  'Always learning new technologies',
];

export const Hero = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="home">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-name">
            {t.hero.greeting} <span>Marcelo</span>
          </h1>
          <p className="hero-role">{t.hero.role}</p>
          <p className="hero-typewriter">
            <TypeWriter strings={lang === 'es' ? esStrings : enStrings} />
          </p>
        </div>
        <div className="hero-visual">
          <img
            src={heroImg}
            alt=""
            className="hero-image"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};
