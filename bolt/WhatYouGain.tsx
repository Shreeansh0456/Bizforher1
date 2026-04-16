import { useEffect, useRef } from 'react';
import { Brain, Users, Zap, Trophy, Rocket, Target } from 'lucide-react';

const features = [
  {
    number: '01',
    icon: Brain,
    label: 'Strategic Thinking',
    desc: 'Develop the frameworks founders use to analyze markets, spot opportunities, and outmaneuver competitors — skills no classroom teaches.',
    accent: '#F7B3BC',
    align: 'left' as const,
  },
  {
    number: '02',
    icon: Users,
    label: 'Network & Mentorship',
    desc: 'Connect with 30+ founders, VCs, and executives who actively invest their time in you — not just a lecture series, but real relationships.',
    accent: '#B8C3BD',
    align: 'right' as const,
  },
  {
    number: '03',
    icon: Zap,
    label: 'Real-world Experience',
    desc: 'Pitch to real judges. Build real products. Face real challenges. Walk away with a portfolio that speaks louder than any grade.',
    accent: '#C4CEDF',
    align: 'left' as const,
  },
  {
    number: '04',
    icon: Trophy,
    label: 'Win Big Prizes',
    desc: 'Over $10,000 in cash, scholarships, and accelerator access. But the connections and confidence? Priceless.',
    accent: '#E4B8BE',
    align: 'right' as const,
  },
  {
    number: '05',
    icon: Rocket,
    label: 'Launch Your Future',
    desc: 'Alumni have gone on to Ivy League schools, Y Combinator companies, and TED stages. This is where that story begins.',
    accent: '#B8C3BD',
    align: 'left' as const,
  },
  {
    number: '06',
    icon: Target,
    label: 'Problem Solving',
    desc: 'Tackle real social and economic challenges through an entrepreneurial lens — leave knowing you can change what others accept.',
    accent: '#C4CEDF',
    align: 'right' as const,
  },
];

export default function WhatYouGain() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="competition"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #EDE4DD 100%)' }}
    >
      <div
        className="orb w-[600px] h-[600px] top-0 right-[-200px] opacity-35"
        style={{ background: 'radial-gradient(circle, #C4CEDF, transparent 70%)' }}
      />
      <div
        className="orb w-[400px] h-[400px] bottom-0 left-[-100px] opacity-25"
        style={{ background: 'radial-gradient(circle, #B8C3BD, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-6 md:px-16 pt-28 pb-8">
        <div ref={sectionRef} className="section-reveal text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
            What You'll Gain
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold" style={{ color: '#4A3535' }}>
            Everything you need
            <span className="italic font-light" style={{ color: '#7A8F8A' }}> to lead</span>
          </h2>
          <p className="mt-5 max-w-md mx-auto text-sm font-light leading-relaxed" style={{ color: '#6B5858' }}>
            Six pillars that transform ambitious high school girls into tomorrow's most formidable founders.
          </p>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-16 pb-28">
        {features.map(({ number, icon: Icon, label, desc, accent, align }, i) => (
          <div
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            className="section-reveal"
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <div
              className="group py-10 md:py-14 relative"
              style={{ borderBottom: `1px solid ${accent}35` }}
            >
              <div
                className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-start md:items-center gap-6 md:gap-16`}
              >
                <div
                  aria-hidden
                  className="flex-shrink-0 select-none leading-none"
                  style={{
                    fontSize: 'clamp(64px, 9vw, 110px)',
                    color: `${accent}55`,
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    minWidth: '120px',
                    textAlign: align === 'right' ? 'right' : 'left',
                  }}
                >
                  {number}
                </div>

                <div
                  className={`flex-1 ${align === 'right' ? 'md:text-right' : ''}`}
                >
                  <div
                    className={`flex items-center gap-3 mb-5 ${align === 'right' ? 'md:flex-row-reverse md:justify-start' : ''}`}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${accent}28` }}
                    >
                      <Icon size={16} style={{ color: accent }} strokeWidth={1.8} />
                    </div>
                    <div
                      className="h-px w-10 transition-all duration-500 group-hover:w-16"
                      style={{ background: `${accent}70` }}
                    />
                  </div>

                  <h3
                    className="font-serif font-bold leading-tight mb-4 transition-colors duration-300"
                    style={{
                      fontSize: 'clamp(22px, 3vw, 40px)',
                      color: '#4A3535',
                    }}
                  >
                    {label}
                  </h3>

                  <p
                    className="text-sm md:text-base font-light leading-relaxed"
                    style={{
                      color: '#6B5858',
                      maxWidth: '480px',
                      marginLeft: align === 'right' ? 'auto' : undefined,
                    }}
                  >
                    {desc}
                  </p>
                </div>

                <div
                  className="hidden md:block flex-shrink-0 h-20 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to bottom, transparent, ${accent}60, transparent)` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
