import { FiServer } from 'react-icons/fi';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiPython,
  SiFastapi,
  SiMysql,
  SiJira,
} from 'react-icons/si';
import { type ReactNode } from 'react';
import { skills } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

const n8nIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
    <circle cx="5" cy="12" r="3"/>
    <circle cx="12" cy="5" r="3"/>
    <circle cx="12" cy="19" r="3"/>
    <circle cx="19" cy="12" r="3"/>
    <line x1="7.5" y1="10.5" x2="10.5" y2="6.5"/>
    <line x1="7.5" y1="13.5" x2="10.5" y2="17.5"/>
    <line x1="13.5" y1="6.5" x2="16.5" y2="10.5"/>
    <line x1="13.5" y1="17.5" x2="16.5" y2="13.5"/>
  </svg>
);

const skillIcons: Record<string, ReactNode> = {
  React: <SiReact />,
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  HTML: <SiHtml5 />,
  CSS: <SiCss />,
  Git: <SiGit />,
  Python: <SiPython />,
  FastAPI: <SiFastapi />,
  'REST API': <FiServer />,
  n8n: n8nIcon,
  MySQL: <SiMysql />,
  Jira: <SiJira />,
};

export const Skills = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useInView();

  return (
    <section id="skills" ref={ref} className={`animate-section ${isVisible ? 'animate-visible' : ''}`}>
      <h2 className="section-title">{t.skills.title}</h2>
      <div className="skills-surface">
        <div className="skill-cards">
        {skills.map((skill, i) => (
          <div key={skill} className="skill-card" style={{ transitionDelay: `${i * 0.03}s` }}>
            <span className="skill-card-icon">
              {skillIcons[skill] || <SiJavascript />}
            </span>
            <span className="skill-card-name">{skill}</span>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};