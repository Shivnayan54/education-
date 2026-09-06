import { useState, useEffect, useRef } from 'react';

export default function useInView(options = {}) {
  const { threshold = 0.15, triggerOnce = true } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (triggerOnce) {
          observer.unobserve(node);
        }
      } else if (!triggerOnce) {
        setInView(false);
      }
    }, { threshold });

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold, triggerOnce]);

  return [ref, inView];
}
