import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ProjectMediaProps {
  video?: string;
  playbackRate?: number;
  expandableVideo?: boolean;
  expandLabel: string;
  closeLabel: string;
  image?: string;
  images?: string[];
  title: string;
  demoLink?: string;
  sectionVisible?: boolean;
}

export const ProjectMedia = ({ video, image, images, title, demoLink, sectionVisible, playbackRate = 1, expandableVideo, expandLabel, closeLabel }: ProjectMediaProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [startAt, setStartAt] = useState(0);

  useEffect(() => {
    const preview = videoRef.current;
    if (preview) {
      preview.playbackRate = playbackRate;
      if (dialogOpen) preview.pause();
      else if (sectionVisible) void preview.play().catch(() => {});
    }
  }, [sectionVisible, playbackRate, dialogOpen]);

  const content: ReactNode | null = video ? (
    <video
      ref={videoRef}
      src={video}
      poster={image ?? images?.[0]}
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

  if (expandableVideo && video) {
    return (
      <>
        <button type="button" className="project-video-trigger" aria-label={`${expandLabel}: ${title}`}
          onClick={() => { setStartAt(videoRef.current?.currentTime ?? 0); setDialogOpen(true); }}>
          {content}
          <span className="project-video-expand">{expandLabel}</span>
        </button>
        {dialogOpen && (
          <dialog className="project-video-dialog" aria-label={`${title} - ${expandLabel}`}
            ref={(dialog) => { if (dialog && !dialog.open) dialog.showModal(); }}
            onClose={() => setDialogOpen(false)}
            onClick={(event) => { if (event.target === event.currentTarget) event.currentTarget.close(); }}>
            <div className="project-video-dialog-header">
              <span>{title}</span>
              <button type="button" className="project-video-close" aria-label={closeLabel}
                onClick={(event) => event.currentTarget.closest('dialog')?.close()}>
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <video src={video} controls autoPlay muted playsInline loop className="project-video-large"
              onLoadedMetadata={(event) => {
                event.currentTarget.playbackRate = playbackRate;
                event.currentTarget.currentTime = startAt;
              }} />
          </dialog>
        )}
      </>
    );
  }

  return demoLink ? (
    <a href={demoLink} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  ) : (
    content
  );
};
