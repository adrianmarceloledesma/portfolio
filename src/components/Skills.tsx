import { skills } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiPython,
  SiFastapi,
} from 'react-icons/si';

const skillIcons: Record<string, React.ReactNode> = {
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
  Git: <SiGit />,
  Python: <SiPython />,
  FastAPI: <SiFastapi />,
};

export const Skills = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useInView();

  return (
    <section id="skills">
      <div ref={ref} className={`inner animate-section ${isVisible ? 'animate-visible' : ''}`}>
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">
              {skillIcons[skill] && <span className="skill-icon">{skillIcons[skill]}</span>}
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
