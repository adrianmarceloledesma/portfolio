import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen = ({ onFinish }: LoadingScreenProps) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      const timer = setTimeout(onFinish, 600);
      return () => clearTimeout(timer);
    }
  }, [fadeOut, onFinish]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        background: 'var(--bg)',
        transition: 'opacity 0.6s ease',
        opacity: fadeOut ? 0 : 1,
      }}
    >
      <span
        style={{
          fontSize: '3rem',
          fontWeight: 800,
          color: 'var(--blue)',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.05em',
        }}
      >
        ML
      </span>
      <div
        style={{
          width: 32,
          height: 32,
          border: '2px solid var(--border)',
          borderTopColor: 'var(--blue)',
          borderRadius: '50%',
          animation: 'spin 0.8s linear infinite',
        }}
      />
    </div>
  );
};
