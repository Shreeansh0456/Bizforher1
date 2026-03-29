
import React from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

const stats = [
  { value: 5000, label: 'Applications', suffix: '+' },
  { value: 200, label: 'Startups Launched', suffix: '+' },
  { value: 50, label: 'Million Funding Secured', prefix: '₹', suffix: 'Cr+' },
  { value: 85, label: 'Success Rate', suffix: '%' },
];

const StatsCounter = ({ value, duration = 2000 }) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLSpanElement>({ threshold: 0.1 });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    const animationId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationId);
  }, [isVisible, value, duration]);

  return <span ref={ref}>{count}</span>;
};

const Stats = () => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-2">
                {stat.prefix && <span>{stat.prefix}</span>}
                <StatsCounter value={stat.value} />
                {stat.suffix && <span>{stat.suffix}</span>}
              </h3>
              <p className="text-white/80 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
