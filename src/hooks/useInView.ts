import { useEffect, useRef, useState, type RefObject } from 'react';

export const useInView = (options?: IntersectionObserverInit): { ref: RefObject<HTMLDivElement | null>; isVisible: boolean } => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const merged: IntersectionObserverInit = { threshold: 0.3, ...options };

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      merged
    );

    observer.observe(element);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isVisible };
};
