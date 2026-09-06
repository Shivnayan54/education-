import { useState, useEffect, useRef } from 'react';

export default function useCountUp(targetNumber, isVisible = true, duration = 2000) {
  const [count, setCount] = useState(0);
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    // Extract numeric value from string if needed
    const numericTarget = typeof targetNumber === 'number' 
      ? targetNumber 
      : parseInt(String(targetNumber).replace(/[^0-9]/g, ''), 10) || 0;

    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      
      // Easing out cubic curve for smooth slowing down at end
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * numericTarget));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(numericTarget);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [targetNumber, isVisible, duration]);

  return count;
}
