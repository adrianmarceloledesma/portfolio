import { skills } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export const Skills = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useInView();

  return (
    <section id="skills">
      <div ref={ref} className={`inner animate-section ${isVisible ? 'animate-visible' : ''}`}>
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <span key={skill} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
