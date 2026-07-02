import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export const Contact = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useInView();

  return (
    <section id="contact" ref={ref} className={`animate-section ${isVisible ? 'animate-visible' : ''}`}>
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="contact-intro">{t.contact.intro}</p>
      
      <div className="contact-cards">
        <a href={`mailto:${personalInfo.email}`} className="contact-card">
          <span className="contact-card-icon">@</span>
          <div className="contact-card-content">
            <span className="contact-card-label">Email</span>
            <span className="contact-card-value">{personalInfo.email}</span>
          </div>
          <span className="contact-card-arrow">→</span>
        </a>
        
        <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="contact-card">
          <span className="contact-card-icon">GH</span>
          <div className="contact-card-content">
            <span className="contact-card-label">GitHub</span>
            <span className="contact-card-value">/{personalInfo.github}</span>
          </div>
          <span className="contact-card-arrow">→</span>
        </a>
        
        <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-card">
          <span className="contact-card-icon">IN</span>
          <div className="contact-card-content">
            <span className="contact-card-label">LinkedIn</span>
            <span className="contact-card-value">/{personalInfo.linkedin}</span>
          </div>
          <span className="contact-card-arrow">→</span>
        </a>
      </div>
    </section>
  );
};
