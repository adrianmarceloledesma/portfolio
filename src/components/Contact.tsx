import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';
import { personalInfo } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';
import { useInView } from '../hooks/useInView';

export const Contact = () => {
  const { t } = useLanguage();
  const { ref, isVisible } = useInView();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section id="contact" ref={ref} className={`animate-section ${isVisible ? 'animate-visible' : ''}`}>
      <h2 className="section-title">{t.contact.title}</h2>
      <p className="contact-intro">{t.contact.intro}</p>

      <div className="contact-inner">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-field">
              <label className="form-label" htmlFor="name">{t.contact.form.name}</label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="email">{t.contact.form.email}</label>
              <input
                className="form-input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="subject">{t.contact.form.subject}</label>
            <input
              className="form-input"
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-field">
            <label className="form-label" htmlFor="message">{t.contact.form.message}</label>
            <textarea
              className="form-textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="form-submit">{t.contact.form.send}</button>
        </form>

        <div className="contact-links">
          <a href={`mailto:${personalInfo.email}`} className="contact-item" style={{ transitionDelay: '0.9s' }}>
            <span className="contact-icon"><FiMail size={16} /></span>
            <div>
              <span className="contact-item-label">Email</span>
              <span className="contact-item-value">{personalInfo.email}</span>
            </div>
          </a>
          <a href={`https://github.com/${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="contact-item" style={{ transitionDelay: '1s' }}>
            <span className="contact-icon"><FaGithub size={16} /></span>
            <div>
              <span className="contact-item-label">GitHub</span>
              <span className="contact-item-value">/{personalInfo.github}</span>
            </div>
          </a>
          <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="contact-item" style={{ transitionDelay: '1.1s' }}>
            <span className="contact-icon"><FaLinkedin size={16} /></span>
            <div>
              <span className="contact-item-label">LinkedIn</span>
              <span className="contact-item-value">/{personalInfo.linkedin}</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};