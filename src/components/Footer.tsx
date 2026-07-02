import { personalInfo } from '../data/projects';

export const Footer = () => {

  return (
    <footer>
      <div className="footer-brand">
        <span className="footer-logo">ML</span>
        <p className="footer-tagline">{personalInfo.title}</p>
      </div>
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name}</p>
      </div>
    </footer>
  );
};