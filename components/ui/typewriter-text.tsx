"use client";

import React, { useState, useRef, useEffect } from "react";

interface TypewriterTextProps {
  label: string;
  className?: string;
  onComplete?: () => void;
  animated?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  label,
  className,
  onComplete,
  animated = true,
}) => {
  const [text, setText] = useState("");
  const currentCharIndex = useRef(0);
  const hasAnimated = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset animation state when label changes
    if (hasAnimated.current) {
      hasAnimated.current = false;
      currentCharIndex.current = 0;
      setText("");
    }

    if (!hasAnimated.current) {
      hasAnimated.current = true;

      if (animated) {
        const animateTyping = () => {
          const nextChar = label.slice(0, currentCharIndex.current + 1);
          setText(nextChar);
          currentCharIndex.current++;

          if (currentCharIndex.current < label.length) {
            timeoutRef.current = setTimeout(animateTyping, 100);
          } else {
            onComplete?.();
          }
        };

        animateTyping();
      } else {
        // If not animated, show the full text immediately
        setText(label);
        onComplete?.();
      }
    }

    // Cleanup function to clear timeout when component unmounts
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [label, animated, onComplete]);

  return (
    <p
      className={`${className} text-highlight text-shadow-highlight min-h-[3rem] self-center text-[2.5rem] font-bold tracking-[-0.05em] duration-300 ease-in-out text-shadow-lg/25 sm:text-[2.5rem] md:text-[3rem] lg:text-[4.5rem]`}
    >
      {text}
    </p>
  );
};

export default TypewriterText;
