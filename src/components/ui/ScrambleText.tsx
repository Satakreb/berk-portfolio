"use client";

import { useEffect, useState } from "react";

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
}

const CHARS = "!<>-_\\\\/[]{}—=+*^?#________";

export default function ScrambleText({
  text,
  className = "",
  duration = 1500,
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    let frame = 0;
    const totalFrames = Math.round(duration / 30); // 30ms per frame
    const textArray = text.split("");
    let timeoutId: NodeJS.Timeout;

    const animate = () => {
      let result = "";
      for (let i = 0; i < textArray.length; i++) {
        // If this character's turn has come, show the real character
        if (frame >= (totalFrames / textArray.length) * i) {
          result += textArray[i];
        } else {
          // Otherwise, show a random character
          result += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplayText(result);

      if (frame < totalFrames) {
        frame++;
        timeoutId = setTimeout(animate, 30);
      } else {
        setIsAnimating(false);
      }
    };

    timeoutId = setTimeout(animate, 30);

    return () => clearTimeout(timeoutId);
  }, [text, duration]);

  return (
    <span className={className}>
      {displayText}
      {isAnimating && (
        <span className="inline-block w-[0.5em] h-[1em] bg-accent ml-1 align-middle animate-pulse" />
      )}
    </span>
  );
}
