import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/Layout/PageLayout';

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const mentors = [
  {
    name: 'Swagat Yadav',
    title: 'Founder, Learnacy School & One Young India',
    description:
      'Swagat Yadav is the Founder of Learnacy School and One Young India, initiatives dedicated to empowering youth through interdisciplinary and experiential education. He holds a degree in Electrical Engineering from Pune University and has collaborated with institutions like Mayo College and UPES.',
    image: '/uploads/6cd302a3-9440-4dfb-a02e-1b391b5f9ee6.png',
    accent: '#F7B3BC',
  },
  {
    name: 'Bhakti Shah',
    title: 'Higher Education & Social Impact Leader',
    description:
      'Bhakti Shah is a seasoned professional with over 17 years of experience in higher education and social impact initiatives. She earned her degree from the University of Westminster and has held leadership roles at organizations like Jewelers League.',
    image: '/uploads/e28f9fd3-f2e0-4f17-a0d7-7caa0d618a54.png',
    accent: '#C4CEDF',
  },
  {
    name: 'Anjali Anand Seth',
    title: 'AVP, International Admissions — Wesleyan College, USA',
    description:
      'Anjali Anand Seth is the Associate Vice President for International Admissions at Wesleyan College, USA, and a leading advocate for global education and women\'s empowerment. With over two decades of experience, she has worked extensively across India and the United States.',
    image: '/uploads/70a2e89e-a3dd-45aa-b3da-63a719850e45.png',
    accent: '#B8C3BD',
  },
  {
    name: 'Mahesh Rao',
    title: 'MBA, Global Business Leader & Educator',
    description:
      'MBA from XIM Bhubaneswar with 20 years of global experience across 45+ countries, including 12 years in CXO/CEO roles in FMCG, durables, and advertising. Since 2015, he has taught Marketing & Strategy at leading B-schools (IIMs, XIMB, SPJIMR), and has been a TEDx speaker and start-up mentor.',
    image: '/uploads/a5750ce6-9d66-4696-a1a9-64df1872204e.png',
    accent: '#E4B8BE',
  },
  {
    name: 'Yashraj Erande',
    title: 'Managing Director & Partner, Boston Consulting Group',
    description:
      'Yashraj Erande is a Managing Director and Partner at BCG Mumbai, serving as India Leader for the Financial Institutions practice and Global Leader for Fintech, with prior experience founding a credit fintech platform. Recognized in ET\'s 2018 \'40 Under 40\' list.',
    image: '/uploads/340c01eb-922e-4d79-8e29-b79dcdda6f0d.png',
    accent: '#F7B3BC',
  },
  {
    name: 'Jaslene Bawa',
    title: 'Assistant Professor of Finance, FLAME University',
    description:
      'Professor Jaslene Bawa is an Assistant Professor of Finance at FLAME University and the first FPM graduate in Finance and Accounting from IIM Raipur. Her research focuses on Indian equity markets, banking, and valuation, with publications in leading journals such as Finance Research Letters.',
    image: '/uploads/5154d824-e344-4e4e-ad4d-c84112df72e1.png',
    accent: '#C4CEDF',
  },
];


// ── Page ──────────────────────────────────────────────────────────────────────
const Mentors = () => {
  const heroRef = useReveal();
  const mentorItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const ctaRef = useReveal();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    mentorItemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-36 pb-24"
        style={{ background: 'linear-gradient(160deg, #F9DDED 0%, #F3EDE7 50%, #EDE4DD 100%)' }}
      >
        <div className="orb w-[500px] h-[500px] top-[-80px] right-[-120px] opacity-50 animate-float-slow"
          style={{ background: 'radial-gradient(circle, #F7B3BC55, transparent 70%)' }} />
        <div className="orb w-[300px] h-[300px] bottom-0 left-[-60px] opacity-30"
          style={{ background: 'radial-gradient(circle, #C4CEDF55, transparent 70%)' }} />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <span className="font-serif font-black text-[clamp(60px,14vw,200px)] leading-none tracking-tighter opacity-[0.05] text-rose-dark whitespace-nowrap">
            MENTORS
          </span>
        </div>

        <div ref={heroRef} className="section-reveal relative z-10 max-w-6xl mx-auto px-6 md:px-16 text-center">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
            Mentors & Jury
          </p>
          <h1 className="font-serif text-[clamp(40px,6vw,80px)] font-bold leading-tight mb-6" style={{ color: '#4A3535' }}>
            Learn from the
            <br />
            <span className="italic font-light" style={{ color: '#7A8F8A' }}>very best.</span>
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto" style={{ color: '#6B5858' }}>
            Industry leaders, professors, and entrepreneurs who invest their time in the next generation of founders.
          </p>
        </div>
      </section>

      {/* ── Mentor Cards ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#F3EDE7' }}>
        <div className="orb orb-animated-drift w-[400px] h-[400px] top-0 right-[-100px] opacity-30"
          style={{ background: 'radial-gradient(circle, #F9DDED70, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
              Expert Panel
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold" style={{ color: '#4A3535' }}>
              Your
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> guides</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map(({ name, title, description, image, accent }, i) => (
              <div
                key={name}
                ref={(el) => { mentorItemRefs.current[i] = el; }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="section-reveal group rounded-3xl overflow-hidden hover-lift"
                style={{
                  background: `linear-gradient(145deg, ${accent}14, ${accent}05)`,
                  border: `1px solid ${accent}30`,
                  transitionDelay: `${i * 0.08}s`,
                  filter: hoveredIndex !== null && hoveredIndex !== i ? 'grayscale(100%) opacity(0.45)' : undefined,
                  transition: 'filter 0.25s ease, opacity 0.25s ease',
                }}
              >
                {/* Photo header */}
                <div className="relative h-56 overflow-hidden"
                  style={{ background: `${accent}18` }}>
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0"
                    style={{ background: `linear-gradient(to top, ${accent}40 0%, transparent 60%)` }} />
                </div>

                <div className="p-7">
                  <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: accent }}>
                    Mentor & Jury
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-1" style={{ color: '#4A3535' }}>{name}</h3>
                  <p className="text-sm font-medium mb-4" style={{ color: accent }}>{title}</p>
                  <div className="h-px w-10 mb-4" style={{ background: `${accent}50` }} />
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#6B5858' }}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <div className="relative px-6 md:px-16 pt-20 pb-20"
          style={{ background: 'linear-gradient(135deg, #2D2320 0%, #3A2E2B 100%)' }}>
          <div className="orb w-[500px] h-[400px] top-0 right-0 opacity-10"
            style={{ background: 'radial-gradient(circle, #F7B3BC, transparent 60%)' }} />

          <div ref={ctaRef} className="section-reveal relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-5" style={{ color: '#F7B3BC' }}>
              Ready?
            </p>
            <h2 className="font-serif leading-tight mb-6" style={{ fontSize: 'clamp(28px,4vw,56px)', color: '#F3EDE7', fontWeight: 700 }}>
              Learn from the best.
              <br />
              <span className="italic font-light" style={{ color: '#F7B3BC' }}>Compete with the best.</span>
            </h2>
            <p className="text-base font-light leading-relaxed mb-10 max-w-xl mx-auto"
              style={{ color: 'rgba(243,237,231,0.65)' }}>
              Join BizForHer 2025 and get mentored by industry experts who will guide you to success.
            </p>
            <Link
              to="/competition#register"
              className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #F7B3BC, #E4B8BE)', color: '#4A3535' }}
            >
              Apply Now <ArrowRight size={14} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Mentors;
