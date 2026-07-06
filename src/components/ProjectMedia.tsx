import { type ReactNode } from 'react';

interface ProjectMediaProps {
  video?: string;
  image?: string;
  title: string;
  demoLink?: string;
}

export const ProjectMedia = ({ video, image, title, demoLink }: ProjectMediaProps) => {
  const content: ReactNode | null = video ? (
    <video
      src={video}
      poster={image}
      autoPlay
      loop
      muted
      playsInline
      className="project-image"
      onError={(e) => {
        (e.target as HTMLVideoElement).style.display = 'none';
      }}
    />
  ) : image ? (
    <img
      src={image}
      alt={title}
      className="project-image"
      onError={(e) => {
        (e.target as HTMLImageElement).style.display = 'none';
      }}
    />
  ) : null;

  if (!content) return null;

  return demoLink ? (
    <a href={demoLink} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};
