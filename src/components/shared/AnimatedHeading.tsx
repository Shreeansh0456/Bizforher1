
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface AnimatedHeadingProps {
  text: string | string[];
  className?: string;
  duration?: number;
  animationType?: 'typewriter' | 'fade' | 'slide';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  text,
  className,
  duration = 3000,
  animationType = 'fade',
  tag = 'h2'
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver<HTMLHeadingElement>({ threshold: 0.2 });

  const textArray = typeof text === 'string' ? [text] : text;
  const currentText = textArray[currentTextIndex];

  // Handle text cycling for arrays
  useEffect(() => {
    if (textArray.length <= 1) return;

    const cycleTimeout = setTimeout(() => {
      setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
    }, duration);

    return () => clearTimeout(cycleTimeout);
  }, [textArray.length, duration, currentTextIndex]);

  const HeadingTag = tag;

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fade':
        return 'animate-fade-in';
      case 'slide':
        return 'animate-fade-in-right';
      default:
        return '';
    }
  };

  return React.createElement(
    HeadingTag,
    {
      ref,
      className: cn(
        'relative',
        isIntersecting && getAnimationClass(),
        className
      )
    },
    currentText
  );
};

export default AnimatedHeading;
