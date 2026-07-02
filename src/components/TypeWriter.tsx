import { useState, useEffect } from 'react';

interface TypeWriterProps {
  strings: string[];
}

export const TypeWriter = ({ strings }: TypeWriterProps) => {
  const [displayText, setDisplayText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[stringIndex] || '';

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentString.length) {
            setDisplayText(currentString.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentString.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setStringIndex((prev) => (prev + 1) % strings.length);
          }
        }
      },
      isDeleting ? 25 : 70
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, stringIndex, strings]);

  return (
    <span>
      {displayText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};
