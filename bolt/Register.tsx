import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: 1,
    label: 'Preliminary Round',
    sub: '15-slide presentation',
    color: '#F7B3BC',
  },
  {
    number: 2,
    label: 'Semi-Finals',
    sub: 'YouTube video presentation',
    color: '#E4B8BE',
  },
  {
    number: 3,
    label: 'Finals',
    sub: 'Live pitch via Zoom',
    color: '#B8C3BD',
  },
];

export default function Register() {
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
    <section id="register" className="relative overflow-hidden">
      <div
        className="relative px-6 md:px-16 pt-24 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2D2320 0%, #3A2E2B 40%, #2A2825 100%)' }}
      >
        <div
          className="orb w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
          style={{ background: 'radial-gradient(circle, #F7B3BC, transparent 60%)' }}
        />
        <div
          className="orb w-[300px] h-[300px] top-0 right-0 opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #B8C3BD, transparent 60%)' }}
        />

        <div ref={ref} className="section-reveal relative z-10 max-w-4xl mx-auto text-center">
          <p
            className="text-xs font-bold tracking-[0.4em] uppercase mb-6"
            style={{ color: '#F7B3BC' }}
          >
            BizForHer 2025
          </p>

          <h2 className="font-serif leading-tight mb-8" style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}>
            <span style={{ color: '#F3EDE7', fontWeight: 700 }}>
              Ready to Showcase Your
            </span>
            <br />
            <span
              className="italic font-light"
              style={{ color: '#F7B3BC' }}
            >
              Business Skills?
            </span>
          </h2>

          <p
            className="text-base font-light leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(243, 237, 231, 0.65)' }}
          >
            Register now for BizForHer 2025 and join hundreds of high school girls across the nation
            competing for recognition, mentorship, and prizes — including cash awards, university
            scholarships, and opportunities worth over $120,000.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #F7B3BC, #E4B8BE)',
                color: '#4A3535',
              }}
            >
              Apply Now
              <ArrowRight size={15} strokeWidth={2} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10"
              style={{
                border: '1px solid rgba(243, 237, 231, 0.25)',
                color: 'rgba(243, 237, 231, 0.8)',
              }}
            >
              Learn More
            </a>
          </div>

          <div
            className="w-full max-w-2xl mx-auto mb-10"
            style={{ height: '1px', background: 'rgba(243, 237, 231, 0.1)' }}
          />

          <p
            className="text-[10px] font-bold tracking-[0.4em] uppercase mb-10"
            style={{ color: 'rgba(243, 237, 231, 0.35)' }}
          >
            How It Works
          </p>

          <div className="max-w-2xl mx-auto w-full">
            <div className="flex items-center justify-center mb-5">
              {steps.map(({ number, color }, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg flex-shrink-0"
                    style={{
                      background: `${color}18`,
                      border: `1.5px solid ${color}55`,
                      color: color,
                    }}
                  >
                    {number}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      className="w-20 md:w-32 h-px mx-1"
                      style={{ background: 'rgba(243, 237, 231, 0.15)' }}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-start justify-center">
              {steps.map(({ label, sub }, i) => (
                <div key={i} className="flex-1 text-center px-2 max-w-[180px]">
                  <div className="font-serif text-sm font-semibold mb-1" style={{ color: '#F3EDE7' }}>
                    {label}
                  </div>
                  <div className="text-xs font-light" style={{ color: 'rgba(243,237,231,0.4)' }}>
                    {sub}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
