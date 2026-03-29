
import React from 'react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

type AnimationType = 'fade-up' | 'fade-in' | 'scale-in' | 'slide-in';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  className,
  threshold = 0.1
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-0 translate-y-10 transition-all duration-700 ease-out';
      case 'fade-in':
        return 'opacity-0 transition-opacity duration-700 ease-out';
      case 'scale-in':
        return 'opacity-0 scale-95 transition-all duration-700 ease-out';
      case 'slide-in':
        return 'opacity-0 -translate-x-10 transition-all duration-700 ease-out';
      default:
        return 'opacity-0 translate-y-10 transition-all duration-700 ease-out';
    }
  };

  const getVisibleClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'opacity-100 translate-y-0';
      case 'fade-in':
        return 'opacity-100';
      case 'scale-in':
        return 'opacity-100 scale-100';
      case 'slide-in':
        return 'opacity-100 translate-x-0';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        getAnimationClass(),
        isVisible && getVisibleClass(),
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
