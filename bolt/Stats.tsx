import { useEffect, useRef, useState } from 'react';
import { Globe, Users, Sparkles, Star } from 'lucide-react';

const stats = [
  { icon: Globe, value: 50, suffix: '+', label: 'States Represented', color: '#F7B3BC' },
  { icon: Users, value: 1200, suffix: '+', label: 'Girls Empowered', color: '#C4CEDF' },
  { icon: Star, value: 30, suffix: '+', label: 'Industry Mentors', color: '#B8C3BD' },
  { icon: Sparkles, value: 92, suffix: '%', label: 'Would Recommend', color: '#E4B8BE' },
];

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatItem({ icon: Icon, value, suffix, label, color, started }: typeof stats[0] & { started: boolean }) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="flex flex-col items-center gap-4 group">
      <div
        className="icon-orbit w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}30`, color }}
      >
        <Icon size={22} style={{ color }} strokeWidth={1.5} />
      </div>
      <div className="font-serif text-[clamp(40px,6vw,72px)] font-bold leading-none text-rose-dark">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm tracking-widest uppercase font-light" style={{ color: '#7A8F8A' }}>{label}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          entries[0].target.classList.add('visible');
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F9DDED 0%, #F3EDE7 100%)' }}
    >
      <div
        className="orb orb-animated-pulse w-[800px] h-[400px] top-0 left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse, #F7B3BC25, transparent 70%)' }}
      />

      <div ref={ref} className="section-reveal max-w-6xl mx-auto px-6 md:px-16 text-center">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
          Our Impact
        </p>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold text-rose-dark mb-4">
          The Numbers
          <span className="italic font-light" style={{ color: '#7A8F8A' }}> Speak</span>
        </h2>
        <p className="text-base font-light max-w-xl mx-auto mb-20 leading-relaxed" style={{ color: '#6B5858' }}>
          Across the country, ambitious high school girls are discovering their potential through BizForHer.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} started={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
