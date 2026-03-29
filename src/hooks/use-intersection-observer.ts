
import { useEffect, useState, useRef, RefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  root?: Element | null;
}

export function useIntersectionObserver<T extends Element>(
  options: IntersectionObserverOptions = {},
  once = true
): [RefObject<T>, boolean] {
  const { threshold = 0.1, rootMargin = '0px', root = null } = options;
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      setIsIntersecting(entry.isIntersecting);

      // If once is true and the element has intersected, unobserve it
      if (once && entry.isIntersecting && observerRef.current) {
        observerRef.current.unobserve(entry.target);
      }
    };

    observerRef.current = new IntersectionObserver(callback, {
      threshold,
      rootMargin,
      root,
    });

    observerRef.current.observe(ref.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, root, once]);

  return [ref, isIntersecting];
}
