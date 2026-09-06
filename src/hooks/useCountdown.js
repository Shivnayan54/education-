import { useState, useEffect } from 'react';

export default function useCountdown(targetDate) {
  const calculateTimeLeft = () => {
    // If no target date is supplied, default to 12 days, 24 hours, 36 minutes, 45 seconds from now
    const target = targetDate ? new Date(targetDate).getTime() : new Date().getTime() + (12 * 86400 + 14 * 3600 + 36 * 60 + 45) * 1000;
    const difference = target - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}
