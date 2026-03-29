
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  targetDate: string;
  label: string;
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, label, className = "" }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-[#db8a6c]/20 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-4 h-4 text-[#db8a6c]" />
        <span className="text-sm font-medium text-[#1c2939]">{label}</span>
      </div>
      <div className="flex gap-2 text-center">
        <div className="flex flex-col">
          <span className="text-lg font-bold text-[#1c2939]">{timeLeft.days}</span>
          <span className="text-xs text-[#1c2939]/70">Days</span>
        </div>
        <span className="text-[#db8a6c] font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-[#1c2939]">{timeLeft.hours}</span>
          <span className="text-xs text-[#1c2939]/70">Hours</span>
        </div>
        <span className="text-[#db8a6c] font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-[#1c2939]">{timeLeft.minutes}</span>
          <span className="text-xs text-[#1c2939]/70">Min</span>
        </div>
        <span className="text-[#db8a6c] font-bold">:</span>
        <div className="flex flex-col">
          <span className="text-lg font-bold text-[#1c2939]">{timeLeft.seconds}</span>
          <span className="text-xs text-[#1c2939]/70">Sec</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
