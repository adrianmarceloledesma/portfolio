import myTasksImg from '../img/mytasks.png' 

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
    id: 1,
    title: 'Todo App',
    description: 'Todo application with localStorage persistence for data.',
    technologies: ['React', 'TypeScript'],
    githubLink: 'https://github.com/adrianmarceloledesma/todo-app',
    demoLink: 'https://mytasksargentina.netlify.app',
    image: myTasksImg,
  },
  {
    id: 2,
    title: 'Trivia Game',
    description: 'Fun trivia game to test your knowledge with React and TypeScript.',
    technologies: ['React', 'TypeScript'],
    githubLink: 'https://github.com/adrianmarceloledesma/trivia-game',
    demoLink: 'https://trivia-game2026-kohl.vercel.app/',
    image: 'https://raw.githubusercontent.com/adrianmarceloledesma/trivia-game/master/preview.png',
  },
  {
    id: 3,
    title: 'Historian Chatbot',
    description: 'AI-powered chatbot that answers historical questions with accuracy and humor, using Llama 3.3 via Groq API.',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI'],
    githubLink: 'https://github.com/adrianmarceloledesma/historian-chatbot',
    demoLink: 'https://historian-chatbot-brown.vercel.app/',
    image: 'https://raw.githubusercontent.com/adrianmarceloledesma/historian-chatbot/main/preview.png'
  },
  {
    id: 4,
    title: 'Books Search',
    description: 'Book search engine - search by title or author with Google Books integration.',
    technologies: ['JavaScript'],
    githubLink: 'https://github.com/adrianmarceloledesma/Books-search',
    demoLink: 'https://adrianmarceloledesma.github.io/Books-search/',
    image: 'https://raw.githubusercontent.com/adrianmarceloledesma/Books-search/master/screenshot.png',
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
];

export const personalInfo = {
  name: 'Marcelo Ledesma',
  title: 'Web Developer',
  bio: 'Web Developer with experience in React, JavaScript, and TypeScript. Passionate about building responsive, user-friendly web applications.',
  email: 'adrianmarceloledesma@gmail.com',
  github: 'adrianmarceloledesma',
  linkedin: 'adrianmarceloledesma',
};
