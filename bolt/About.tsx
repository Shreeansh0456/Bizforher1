import { useEffect, useRef } from 'react';

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-32 overflow-hidden" style={{ background: '#F3EDE7' }}>
      <div
        className="orb orb-animated-drift w-[400px] h-[400px] top-0 right-[-100px]"
        style={{ background: 'radial-gradient(circle, #F9DDED60, transparent 70%)' }}
      />

      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col justify-center pt-4">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-5" style={{ color: '#7A8F8A' }}>
              Our Mission
            </p>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-bold leading-tight text-rose-dark mb-6">
              Built by women.<br />
              <span className="italic font-light">For the women</span><br />
              of tomorrow.
            </h2>
            <p className="text-base font-light leading-relaxed max-w-md" style={{ color: '#5C4A4A' }}>
              BizForHer is a national business competition that gives high school girls the platform, mentorship, and resources to transform bold ideas into real ventures.
            </p>
          </div>

          <div className="relative pt-4">
            <div className="relative space-y-8">
              <p className="font-serif text-[clamp(18px,2vw,24px)] italic leading-relaxed" style={{ color: '#5C4A4A' }}>
                "We believe every girl deserves a seat at the table and the skills to build one of her own."
              </p>

              <div className="relative h-px w-full overflow-hidden rounded-full" style={{ background: 'rgba(196,206,223,0.25)' }}>
                <div className="about-line-sweep absolute inset-y-0 left-0 w-1/2 rounded-full" style={{ background: 'linear-gradient(to right, transparent, #B8C3BD, #C4CEDF, transparent)' }} />
              </div>

              <p className="text-sm leading-loose font-light" style={{ color: '#6B5858' }}>
                Through rigorous business challenges, mentorship from industry leaders, and a community of ambitious peers, participants develop the mindset and skillset of tomorrow's founders.
              </p>

              <div className="flex items-start gap-16 pt-6">
                <div>
                  <div className="font-serif text-4xl font-bold text-rose-dark">3rd</div>
                  <div className="text-xs tracking-widest uppercase mt-1" style={{ color: '#7A8F8A' }}>Annual Edition</div>
                </div>
                <div className="w-px h-14 self-center" style={{ background: '#B8C3BD50' }} />
                <div>
                  <div className="font-serif text-4xl font-bold text-rose-dark">Nationwide</div>
                  <div className="text-xs tracking-widest uppercase mt-1" style={{ color: '#7A8F8A' }}>Open to All States</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-8 -right-8 w-48 h-48 rounded-full opacity-20 animate-float"
              style={{ background: 'radial-gradient(circle, #C4CEDF, transparent)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
