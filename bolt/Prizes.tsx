import { useEffect, useRef } from 'react';
import { Award, BookOpen, Briefcase } from 'lucide-react';

const prizes = [
  {
    place: '1st',
    title: 'Grand Prize',
    amount: '$5,000',
    perks: ['Cash Award', 'Startup Accelerator Access', 'Media Feature', 'Executive Mentorship'],
    icon: Award,
    color: '#F7B3BC',
    size: 'large',
  },
  {
    place: '2nd',
    title: 'Runner Up',
    amount: '$2,500',
    perks: ['Cash Award', 'Scholarship Nomination', 'Mentorship Package'],
    icon: BookOpen,
    color: '#C4CEDF',
    size: 'medium',
  },
  {
    place: '3rd',
    title: 'Third Place',
    amount: '$1,000',
    perks: ['Cash Award', 'Industry Workshop Access', 'Network Introduction'],
    icon: Briefcase,
    color: '#B8C3BD',
    size: 'medium',
  },
];

export default function Prizes() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="prizes"
      className="relative pt-20 pb-32 overflow-hidden"
      style={{ background: '#F3EDE7' }}
    >
      <div
        className="orb orb-animated-drift w-[500px] h-[500px] bottom-0 right-0"
        style={{ background: 'radial-gradient(circle, #F9DDED60, transparent 70%)' }}
      />

      <div ref={ref} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
            Rewards
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold text-rose-dark">
            Win more than
            <span className="italic font-light" style={{ color: '#7A8F8A' }}> a trophy</span>
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-end gap-6 md:gap-0">
          {prizes.map(({ place, title, amount, perks, icon: Icon, color, size }, i) => (
            <div
              key={i}
              className={`
                relative w-full group hover-lift
                ${i === 0
                  ? 'md:w-2/5 md:mx-auto md:order-2 z-10'
                  : i === 1
                  ? 'md:w-[30%] md:order-1 md:-mr-4'
                  : 'md:w-[30%] md:order-3 md:-ml-4'
                }
              `}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div
                className="rounded-3xl overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${color}20, ${color}08)`,
                  border: `1px solid ${color}40`,
                  padding: i === 0 ? '48px 40px' : '36px 32px',
                }}
              >
                <div
                  className="icon-orbit w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}30`, color }}
                >
                  <Icon size={24} style={{ color }} strokeWidth={1.5} />
                </div>

                <div className="font-serif text-sm font-medium tracking-widest uppercase mb-1" style={{ color }}>
                  {place} Place
                </div>
                <div className="font-serif text-xl font-bold mb-2" style={{ color: '#4A3535' }}>{title}</div>
                <div
                  className="font-serif mb-6 font-black leading-none"
                  style={{
                    fontSize: i === 0 ? '56px' : '40px',
                    color: '#4A3535',
                  }}
                >
                  {amount}
                </div>

                <div className="space-y-2.5">
                  {perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-3">
                      <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
                      <span className="text-sm font-light" style={{ color: '#6B5858' }}>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              {i === 0 && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-cream"
                  style={{ background: '#4A3535' }}
                >
                  Top Prize
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm font-light mt-12" style={{ color: '#8B6B6B' }}>
          Plus special category awards, community choice prizes, and more.
        </p>
      </div>
    </section>
  );
}
