import { useEffect, useRef, type ReactNode } from 'react';

interface ProjectMediaProps {
  video?: string;
  image?: string;
  images?: string[];
  title: string;
  demoLink?: string;
  sectionVisible?: boolean;
}

export const ProjectMedia = ({ video, image, images, title, demoLink, sectionVisible }: ProjectMediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (sectionVisible && videoRef.current && !hasStarted.current) {
      hasStarted.current = true;
      videoRef.current.play();
    }
  }, [sectionVisible]);

  const content: ReactNode | null = video ? (
    <video
      ref={videoRef}
      src={video}
      poster={image}
      loop
      muted
      playsInline
      className="project-image"
      onError={(e) => {
        (e.target as HTMLVideoElement).style.display = 'none';
      }}
    />
  ) : images?.length ? (
    <div className="project-image project-image-gallery" role="group" aria-label={`${title} screenshots`}>
      {images.map((src, index) => (
        <img key={src} src={src} alt={`${title} ${index + 1}`} loading="lazy" />
      ))}
    </div>
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
