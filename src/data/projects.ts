import myTasksImg from '../assets/projects/mytasks.webp'
import deleaturImg from '../assets/projects/deleatur.webp'

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink?: string;
  demoLink?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 4,
    title: 'Deleatur',
    description: 'Sitio web profesional para servicios de corrección, transcripción y normalización de textos con CMS headless.',
    technologies: ['React', 'JavaScript', 'CSS', 'Decap CMS'],
    demoLink: 'https://deleaturservicioseditoriales.vercel.app/',
    image: deleaturImg,
  },
  {
    id: 1,
    title: 'Todo App',
    description: 'Todo application with localStorage persistence for data.',
    technologies: ['React', 'TypeScript', 'localStorage'],
    githubLink: 'https://github.com/adrianmarceloledesma/todo-app',
    demoLink: 'https://mytasksargentina.netlify.app',
    image: myTasksImg,
  },
  {
    id: 2,
    title: 'Trivia Game',
    description: 'Fun trivia game to test your knowledge with React and TypeScript.',
    technologies: ['React', 'TypeScript', 'react-router-dom', 'REST API'],
    githubLink: 'https://github.com/adrianmarceloledesma/trivia-game',
    demoLink: 'https://trivia-game2026-kohl.vercel.app/',
    image: 'https://raw.githubusercontent.com/adrianmarceloledesma/trivia-game/master/preview.png',
  },
  {
    id: 3,
    title: 'Historian Chatbot',
    description: 'AI-powered chatbot that answers historical questions with accuracy and humor, built with React and Python, using Llama 3.3 via Groq API.',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI', 'REST API'],
    githubLink: 'https://github.com/adrianmarceloledesma/historian-chatbot',
    demoLink: 'https://historian-chatbot-brown.vercel.app/',
    image: 'https://raw.githubusercontent.com/adrianmarceloledesma/historian-chatbot/main/preview.png'
  },
];

export const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  'Git',
  'Python',
  'FastAPI',
  'REST API',
];

export const personalInfo = {
  name: 'Marcelo Ledesma',
  title: 'Web Developer',
  bio: 'Web Developer with experience in React, JavaScript, and TypeScript. Passionate about building responsive, user-friendly web applications.',
  email: 'adrianmarceloledesma@gmail.com',
  github: 'adrianmarceloledesma',
  linkedin: 'adrianmarceloledesma',
};
