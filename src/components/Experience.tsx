import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export const Experience = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useInView();

  return (
    <section id="experience" ref={ref} className={`animate-section ${isVisible ? 'animate-visible' : ''}`}>
      <h2 className="section-title">{t.experience.title}</h2>
      <div className="experience-list">
        {t.experience.items.map((item, index) => (
          <article key={item.id} className="experience-item">
            <span className="project-num">0{index + 1}</span>
            <div className="experience-header">
              <h3 className="experience-company">{item.company}</h3>
              <span className="experience-period">{item.period}</span>
            </div>
            <h4 className="experience-role">{item.role}</h4>
            <p className="experience-description">{item.description}</p>
            <div className="experience-technologies">
              {item.technologies.map((tech: string) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
