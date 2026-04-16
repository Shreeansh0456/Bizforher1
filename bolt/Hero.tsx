import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      el.style.setProperty('--mouse-x', `${x * 100}%`);
      el.style.setProperty('--mouse-y', `${y * 100}%`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F9DDED 0%, #F3EDE7 40%, #F3EDE7 60%, #E4B8BE20 100%)' }}
    >
      <div
        className="orb w-[600px] h-[600px] top-[-100px] left-[-150px] animate-drift"
        style={{ background: 'radial-gradient(circle, #F7B3BC55, transparent 70%)' }}
      />
      <div
        className="orb w-[500px] h-[500px] bottom-[-80px] right-[-100px] animate-float-slow"
        style={{ background: 'radial-gradient(circle, #C4CEDF55, transparent 70%)' }}
      />
      <div
        className="orb w-[300px] h-[300px] top-[30%] right-[15%] animate-float-delay"
        style={{ background: 'radial-gradient(circle, #B8C3BD40, transparent 70%)' }}
      />

      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-serif font-black text-[clamp(80px,18vw,260px)] leading-none tracking-tighter opacity-[0.07] text-rose-dark whitespace-nowrap"
        >
          BIZFORHER
        </span>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-6 animate-fade-in" style={{ color: '#8B6B6B' }}>
          National Business Competition — 2025
        </p>

        <h1 className="mb-8" style={{ lineHeight: 1.08 }}>
          <span
            className="block font-serif font-light tracking-[0.18em] uppercase"
            style={{ fontSize: 'clamp(16px, 1.8vw, 26px)', color: '#B89090', letterSpacing: '0.2em', marginBottom: '0.15em' }}
          >
            Where Future
          </span>
          <span
            className="block font-serif font-bold tracking-tight"
            style={{ fontSize: 'clamp(54px, 8.5vw, 118px)', color: '#5C3535', letterSpacing: '-0.02em', lineHeight: 1 }}
          >
            Founders
          </span>
          <span
            className="block font-serif font-light tracking-[0.18em] uppercase"
            style={{ fontSize: 'clamp(16px, 1.8vw, 26px)', color: '#B89090', letterSpacing: '0.2em', margin: '0.2em 0 0.15em' }}
          >
            Are
          </span>
          <span
            className="block font-serif font-bold tracking-tight"
            style={{ fontSize: 'clamp(54px, 8.5vw, 118px)', color: '#5C3535', letterSpacing: '-0.02em', lineHeight: 1 }}
          >
            Born.
          </span>
        </h1>

        <p className="max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed mb-12" style={{ color: '#6B5858' }}>
          A national stage built for high school girls ready to think bold, build brave, and lead with vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#register"
            className="group relative px-10 py-4 rounded-full bg-rose-dark text-cream text-sm font-semibold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ boxShadow: '0 8px 30px rgba(74,53,53,0.2)' }}
          >
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-rose-mid opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#about"
            className="px-10 py-4 rounded-full border border-rose-light/60 text-rose-mid text-sm font-medium tracking-widest uppercase hover:border-rose-dark hover:text-rose-dark transition-all duration-300"
          >
            Learn More
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center gap-8">
          {[
            { num: '500+', label: 'Applicants' },
            { num: '$10K', label: 'In Prizes' },
            { num: '30+', label: 'Mentors' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-rose-dark">{num}</div>
              <div className="text-xs text-rose-light tracking-widest uppercase mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-light animate-bounce"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}
