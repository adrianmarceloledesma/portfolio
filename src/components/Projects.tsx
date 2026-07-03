import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export const Projects = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useInView();

  return (
    <section id="projects" ref={ref} className={`animate-section ${isVisible ? 'animate-visible' : ''}`}>
      <h2 className="section-title">{t.projects.title}</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={project.id} className="project-card" style={{ transitionDelay: `${index * 0.1}s` }}>
            {project.image && (
              project.demoLink ? (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              )
            )}
            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{t.projects.items.find((item) => item.id === project.id)?.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link github">GitHub</a>
              )}
              {project.demoLink && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="project-link demo">Demo</a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
