import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Brain, Users, Zap, Trophy, Rocket, Target, Globe, Sparkles, Star, Award, BookOpen, Briefcase, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/Layout/PageLayout';

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero() {
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
      <div className="orb w-[600px] h-[600px] top-[-100px] left-[-150px] animate-drift"
        style={{ background: 'radial-gradient(circle, #F7B3BC55, transparent 70%)' }} />
      <div className="orb w-[500px] h-[500px] bottom-[-80px] right-[-100px] animate-float-slow"
        style={{ background: 'radial-gradient(circle, #C4CEDF55, transparent 70%)' }} />
      <div className="orb w-[300px] h-[300px] top-[30%] right-[15%] animate-float-delay"
        style={{ background: 'radial-gradient(circle, #B8C3BD40, transparent 70%)' }} />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
        <span className="font-serif font-black text-[clamp(80px,18vw,260px)] leading-none tracking-tighter opacity-[0.07] text-rose-dark whitespace-nowrap">
          BIZFORHER
        </span>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-28">
        <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-6" style={{ color: '#8B6B6B' }}>
          National Business Competition — 2025
        </p>

        <h1 className="mb-8" style={{ lineHeight: 1.08 }}>
          <span className="block font-serif font-light tracking-[0.18em] uppercase"
            style={{ fontSize: 'clamp(16px, 1.8vw, 26px)', color: '#B89090', letterSpacing: '0.2em', marginBottom: '0.15em' }}>
            Where Future
          </span>
          <span className="block font-serif font-bold tracking-tight"
            style={{ fontSize: 'clamp(54px, 8.5vw, 118px)', color: '#5C3535', letterSpacing: '-0.02em', lineHeight: 1 }}>
            Founders
          </span>
          <span className="block font-serif font-light tracking-[0.18em] uppercase"
            style={{ fontSize: 'clamp(16px, 1.8vw, 26px)', color: '#B89090', letterSpacing: '0.2em', margin: '0.2em 0 0.15em' }}>
            Are
          </span>
          <span className="block font-serif font-bold tracking-tight"
            style={{ fontSize: 'clamp(54px, 8.5vw, 118px)', color: '#5C3535', letterSpacing: '-0.02em', lineHeight: 1 }}>
            Born.
          </span>
        </h1>

        <p className="max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed mb-12" style={{ color: '#6B5858' }}>
          A national stage built for high school girls ready to think bold, build brave, and lead with vision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/competition#register"
            className="group relative px-10 py-4 rounded-full bg-rose-dark text-cream text-sm font-semibold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ boxShadow: '0 8px 30px rgba(74,53,53,0.2)' }}>
            <span className="relative z-10">Apply Now</span>
            <div className="absolute inset-0 bg-rose-mid opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link to="/about"
            className="px-10 py-4 rounded-full border text-rose-mid text-sm font-medium tracking-widest uppercase hover:border-rose-dark hover:text-rose-dark transition-all duration-300"
            style={{ borderColor: 'rgba(184,144,144,0.6)' }}>
            Learn More
          </Link>
        </div>

        <div className="mt-6 flex items-center justify-center gap-8">
          {[
            { num: '20,000+', label: 'Participants' },
            { num: '$2.5M+', label: 'In Scholarships' },
            { num: '30+', label: 'Mentors' },
          ].map(({ num, label }) => (
            <div key={label} className="text-center">
              <div className="font-serif text-2xl md:text-3xl font-bold text-rose-dark">{num}</div>
              <div className="text-xs text-rose-light tracking-widest uppercase mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <a href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-light animate-bounce"
        aria-label="Scroll down">
        <span className="text-xs tracking-widest uppercase font-light">Scroll</span>
        <ArrowDown size={14} />
      </a>
    </section>
  );
}

// ─── Marquee ─────────────────────────────────────────────────────────────────
const marqueeWords = [
  'Leadership', 'Innovation', 'Strategy', 'Entrepreneurship',
  'Vision', 'Impact', 'Community', 'Growth', 'Ambition', 'Excellence',
  'Leadership', 'Innovation', 'Strategy', 'Entrepreneurship',
  'Vision', 'Impact', 'Community', 'Growth', 'Ambition', 'Excellence',
];

function MarqueeBar() {
  return (
    <div className="relative overflow-hidden py-7 flex items-center" style={{ background: '#F7B3BC' }}>
      <div className="marquee-track flex items-center gap-10">
        {marqueeWords.map((word, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-serif italic text-lg font-medium text-cream/90 tracking-wide">{word}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cream/50 flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F9DDED 0%, #F3EDE7 100%)' }}>

      <div className="orb orb-animated-drift w-[400px] h-[400px] top-0 right-[-100px]"
        style={{ background: 'radial-gradient(circle, #F9DDED60, transparent 70%)' }} />

      <div ref={ref} className="section-reveal max-w-7xl mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col justify-center pt-4">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-5" style={{ color: '#7A8F8A' }}>
              Our Mission
            </p>
            <h2 className="font-serif text-[clamp(36px,4vw,56px)] font-bold leading-tight text-rose-dark mb-6">
              Created with purpose.<br />
              <span className="italic font-light">For the leaders</span><br />
              of tomorrow.
            </h2>
            <p className="text-base font-light leading-relaxed max-w-md" style={{ color: '#5C4A4A' }}>
              BizForHer is a national business competition that gives high school girls the platform, mentorship,
              and resources to transform bold ideas into real ventures.
            </p>
          </div>

          <div className="relative pt-4">
            <div className="relative space-y-8">
              <p className="font-serif text-[clamp(18px,2vw,24px)] italic leading-relaxed" style={{ color: '#5C4A4A' }}>
                "We believe every girl deserves a seat at the table and the skills to build one of her own."
              </p>

              <div className="relative h-px w-full overflow-hidden rounded-full" style={{ background: 'rgba(196,206,223,0.25)' }}>
                <div className="about-line-sweep absolute inset-y-0 left-0 w-1/2 rounded-full"
                  style={{ background: 'linear-gradient(to right, transparent, #B8C3BD, #C4CEDF, transparent)' }} />
              </div>

              <p className="text-sm leading-loose font-light" style={{ color: '#6B5858' }}>
                Through rigorous business challenges, mentorship from industry leaders, and a community of ambitious
                peers, participants develop the mindset and skillset of tomorrow's founders.
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

            <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full opacity-20 animate-float-slow"
              style={{ background: 'radial-gradient(circle, #C4CEDF, transparent)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Partner Showcase ─────────────────────────────────────────────────────────
const partnerLogos = [
  { name: 'Wesleyan College, USA', logo: '/uploads/d130dc3a-62ef-401a-ba7c-368d70718905.png' },
  { name: 'FLAME University', logo: '/uploads/8fd76eb3-991e-47c9-b2ea-51e5c9b9337.png' },
  { name: 'IIMU', logo: '/uploads/56322aa7-2384-44c4-985f-46e22b7126c4.png' },
  { name: 'BCG', logo: '/uploads/f86a15f3-4ebc-47c5-b74f-1f26da14cbf9.png' },
  { name: 'The Outreach Collective', logo: '/uploads/343f3bc5-dfb9-4d58-9f98-744abc75ffd2.png' },
];

function PartnerStrip() {
  return (
    <section className="relative py-16 overflow-hidden" style={{ background: '#F3EDE7' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-16">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
            Our Partners
          </p>
          <h2 className="font-serif text-[clamp(28px,4vw,42px)] font-bold" style={{ color: '#4A3535' }}>
            Supported by top institutions and mentors.
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 items-center">
          {partnerLogos.map(({ name, logo }, i) => (
            <div key={name} className="rounded-3xl p-4 flex items-center justify-center bg-white/80 shadow-sm border border-[#D9D7D6]" style={{ transitionDelay: `${i * 0.05}s` }}>
              <img src={logo} alt={name} className="max-h-14 max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const privateFinalists = [
  { team: '10X', school: '10X International' },
  { team: 'Aanya', school: 'CS Academy' },
  { team: 'Arete Dynamics', school: 'KD Ambani Reliance Foundation School' },
  { team: 'Fempreneurs', school: 'Scottish High International School' },
  { team: 'Future FoundHers', school: 'Fravashi International Academy' },
  { team: 'Supply and Command', school: 'Choithram International School' },
];

const publicFinalists = [
  { team: 'Dav Kotbiz', school: 'DAV Public School' },
  { team: 'LeadHers', school: 'ML Khanna DAV Public School' },
  { team: 'Team ATL Bharat Bharati Kullu', school: 'Bharat Bharathi Senior Secondary School Kullu' },
  { team: 'Try Shuls', school: 'SSVM' },
  { team: 'Unstoppable', school: 'Anjuman I Islam, Mustafa Fakhi Junior College' },
];

function FinalistTable({ teams, accent }: { teams: typeof privateFinalists; accent: string }) {
  return (
    <div className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${accent}30` }}>
      <div className="grid grid-cols-2 px-5 py-3 text-[10px] font-bold tracking-[0.3em] uppercase"
        style={{ background: `${accent}18`, color: accent }}>
        <span>Team Name</span>
        <span>School</span>
      </div>
      {teams.map(({ team, school }, i) => (
        <div key={team}
          className="grid grid-cols-2 px-5 py-4 items-center transition-colors duration-150 hover:bg-white/60"
          style={{ borderTop: `1px solid ${accent}15`, background: i % 2 === 0 ? 'white' : `${accent}06` }}>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0"
              style={{ background: `${accent}20`, color: accent }}>
              {i + 1}
            </div>
            <span className="font-serif text-sm font-bold" style={{ color: '#4A3535' }}>{team}</span>
          </div>
          <span className="text-sm font-light" style={{ color: '#6B5858' }}>{school}</span>
        </div>
      ))}
    </div>
  );
}

function PastWinners() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #F9DDED 50%, #F3EDE7 100%)' }}>
      <div className="orb w-[400px] h-[400px] top-0 right-[-120px] opacity-30 absolute"
        style={{ background: 'radial-gradient(circle, #F9DDED60, transparent 70%)' }} />

      <div className="relative max-w-5xl mx-auto px-6 md:px-16">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
            Finalists
          </p>
          <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold" style={{ color: '#4A3535' }}>
            Top 11 finalist
            <span className="italic font-light" style={{ color: '#7A8F8A' }}> teams</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-sm font-light leading-relaxed" style={{ color: '#6B5858' }}>
            Congratulations to everyone who made it to the finals — divided by school category.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Private Schools */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-8 rounded-full" style={{ background: '#F7B3BC' }} />
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: '#F7B3BC' }}>Private Schools</p>
                <p className="font-serif text-lg font-bold" style={{ color: '#4A3535' }}>6 Teams</p>
              </div>
            </div>
            <FinalistTable teams={privateFinalists} accent="#F7B3BC" />
          </div>

          {/* Public Schools */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-8 rounded-full" style={{ background: '#B8C3BD' }} />
              <div>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: '#B8C3BD' }}>Public Schools</p>
                <p className="font-serif text-lg font-bold" style={{ color: '#4A3535' }}>5 Teams</p>
              </div>
            </div>
            <FinalistTable teams={publicFinalists} accent="#B8C3BD" />
          </div>
        </div>
      </div>
    </section>
  );
}

function MapCountdown() {
  const [remaining, setRemaining] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const getTarget = () => {
      const now = new Date();
      const year = now.getMonth() > 7 || (now.getMonth() === 7 && now.getDate() > 8) ? now.getFullYear() + 1 : now.getFullYear();
      return new Date(year, 7, 8, 0, 0, 0);
    };

    const update = () => {
      const target = getTarget();
      const diff = Math.max(0, target.getTime() - new Date().getTime());
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setRemaining({ days, hours, minutes, seconds });
    };

    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const boxes = [
    { label: 'Days', value: remaining.days },
    { label: 'Hours', value: remaining.hours },
    { label: 'Minutes', value: remaining.minutes },
    { label: 'Seconds', value: remaining.seconds },
  ];

  return (
    <section className="relative overflow-hidden" style={{ background: '#2D2320' }}>
      {/* Full world map as background */}
      <div className="relative w-full">
        {/* Map image — full width, full height, no cropping */}
        <img
          src="/uploads/world map3.png"
          alt="Global participation map"
          className="w-full h-auto block"
          style={{ opacity: 0.35, display: 'block' }}
        />

        {/* Dark fade at top and bottom edges */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(to bottom, #2D2320 0%, transparent 12%, transparent 85%, #2D2320 100%)'
        }} />

        {/* Countdown centred over the map */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style={{ color: '#F7B3BC' }}>
            Next Competition
          </p>
          <h2 className="font-serif text-[clamp(28px,4vw,52px)] font-bold mb-8" style={{ color: '#F3EDE7' }}>
            Countdown to <span className="italic font-light" style={{ color: '#F7B3BC' }}>Aug 8</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-2xl">
            {boxes.map(({ label, value }) => (
              <div key={label} className="rounded-3xl p-5 text-center"
                style={{ background: 'rgba(243,237,231,0.08)', border: '1px solid rgba(243,237,231,0.18)', backdropFilter: 'blur(8px)' }}>
                <div className="font-serif text-3xl md:text-4xl font-bold mb-1" style={{ color: '#F3EDE7' }}>{String(value).padStart(2, '0')}</div>
                <div className="text-xs uppercase tracking-[0.25em] font-semibold" style={{ color: 'rgba(243,237,231,0.5)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats ───────────────────────────────────────────────────────────────────
const statsData = [
  { icon: Users, value: 20000, suffix: '+', label: 'Participants', color: '#F7B3BC' },
  { icon: Globe, value: 25, suffix: '', label: 'Indian States', color: '#C4CEDF' },
  { icon: Star, value: 30, suffix: '+', label: 'Industry Mentors', color: '#B8C3BD' },
  { icon: Sparkles, value: 176, suffix: 'K+', label: 'People Reached', color: '#E4B8BE' },
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

function StatItem({ icon: Icon, value, suffix, label, color, started }: typeof statsData[0] & { started: boolean }) {
  const count = useCountUp(value, 2000, started);
  return (
    <div className="flex flex-col items-center gap-4 group">
      <div className="icon-orbit w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}30`, color }}>
        <Icon size={22} style={{ color }} strokeWidth={1.5} />
      </div>
      <div className="font-serif text-[clamp(40px,6vw,72px)] font-bold leading-none text-rose-dark">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm tracking-widest uppercase font-light" style={{ color: '#7A8F8A' }}>{label}</div>
    </div>
  );
}

function Stats() {
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
    <section className="relative py-32 overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F9DDED 0%, #F3EDE7 100%)' }}>
      <div className="orb orb-animated-pulse w-[800px] h-[400px] top-0 left-1/2 -translate-x-1/2"
        style={{ background: 'radial-gradient(ellipse, #F7B3BC25, transparent 70%)' }} />

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
          {statsData.map((stat) => (
            <StatItem key={stat.label} {...stat} started={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── What You Gain ────────────────────────────────────────────────────────────
const features = [
  { number: '01', icon: Brain, label: 'Strategic Thinking', desc: 'Develop the frameworks founders use to analyze markets, spot opportunities, and outmaneuver competitors — skills no classroom teaches.', accent: '#F7B3BC', align: 'left' as const },
  { number: '02', icon: Users, label: 'Network & Mentorship', desc: 'Connect with 30+ founders, VCs, and executives who actively invest their time in you — not just a lecture series, but real relationships.', accent: '#B8C3BD', align: 'right' as const },
  { number: '03', icon: Zap, label: 'Real-world Experience', desc: 'Pitch to real judges. Build real products. Face real challenges. Walk away with a portfolio that speaks louder than any grade.', accent: '#C4CEDF', align: 'left' as const },
  { number: '04', icon: Trophy, label: 'Win Big Prizes', desc: 'Over $10,000 in cash, scholarships, and accelerator access. But the connections and confidence? Priceless.', accent: '#E4B8BE', align: 'right' as const },
  { number: '05', icon: Rocket, label: 'Launch Your Future', desc: 'Alumni have gone on to Ivy League schools, Y Combinator companies, and TED stages. This is where that story begins.', accent: '#B8C3BD', align: 'left' as const },
  { number: '06', icon: Target, label: 'Problem Solving', desc: 'Tackle real social and economic challenges through an entrepreneurial lens — leave knowing you can change what others accept.', accent: '#C4CEDF', align: 'right' as const },
];

function WhatYouGain() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="competition" className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #EDE4DD 100%)' }}>
      <div className="orb w-[600px] h-[600px] top-0 right-[-200px] opacity-35"
        style={{ background: 'radial-gradient(circle, #C4CEDF, transparent 70%)' }} />
      <div className="orb w-[400px] h-[400px] bottom-0 left-[-100px] opacity-25"
        style={{ background: 'radial-gradient(circle, #B8C3BD, transparent 70%)' }} />

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
            <div className="group py-10 md:py-14 relative"
              style={{ borderBottom: `1px solid ${accent}35` }}>
              <div className={`flex flex-col ${align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-start md:items-center gap-6 md:gap-16`}>
                <div aria-hidden className="flex-shrink-0 select-none leading-none"
                  style={{
                    fontSize: 'clamp(64px, 9vw, 110px)',
                    color: `${accent}55`,
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 900,
                    letterSpacing: '-0.04em',
                    lineHeight: 1,
                    minWidth: '120px',
                    textAlign: align === 'right' ? 'right' : 'left',
                  }}>
                  {number}
                </div>

                <div className={`flex-1 ${align === 'right' ? 'md:text-right' : ''}`}>
                  <div className={`flex items-center gap-3 mb-5 ${align === 'right' ? 'md:flex-row-reverse md:justify-start' : ''}`}>
                    <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${accent}28` }}>
                      <Icon size={16} style={{ color: accent }} strokeWidth={1.8} />
                    </div>
                    <div className="h-px w-10 transition-all duration-500 group-hover:w-16"
                      style={{ background: `${accent}70` }} />
                  </div>

                  <h3 className="font-serif font-bold leading-tight mb-4 transition-colors duration-300"
                    style={{ fontSize: 'clamp(22px, 3vw, 40px)', color: '#4A3535' }}>
                    {label}
                  </h3>

                  <p className="text-sm md:text-base font-light leading-relaxed"
                    style={{ color: '#6B5858', maxWidth: '480px', marginLeft: align === 'right' ? 'auto' : undefined }}>
                    {desc}
                  </p>
                </div>

                <div className="hidden md:block flex-shrink-0 h-20 w-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(to bottom, transparent, ${accent}60, transparent)` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Timeline ─────────────────────────────────────────────────────────────────
const milestones = [
  { number: 1, category: 'Round 1', title: 'Preliminary Round', desc: 'Submit a 15-slide presentation regarding your analysis and solution to the case provided.', date: 'Aug 5 – Aug 15, 2025', circleColor: '#F7B3BC', circleBg: '#F9DDED' },
  { number: 2, category: 'Results', title: 'First Round Results', desc: 'Announcement of teams advancing to the semi-finals.', date: 'Aug 29, 2025', circleColor: '#E4B8BE', circleBg: '#F3EDE7' },
  { number: 3, category: 'Workshop', title: 'Workshop for Semi-finalists', desc: 'Special workshop session for teams advancing to the semi-finals.', date: 'Aug 30, 2025', circleColor: '#B8C3BD', circleBg: '#DDE8E4' },
  { number: 4, category: 'Round 2', title: 'Semi-Finals', desc: 'Submit a YouTube video explaining your 15-slide presentation for the advanced case.', date: 'Aug 30 – Sep 7, 2025', circleColor: '#B8C3BD', circleBg: '#DDE8E4' },
  { number: 5, category: 'Results', title: 'Second Round Results', desc: 'Announcement of teams advancing to the finals.', date: 'Sep 17, 2025', circleColor: '#E4B8BE', circleBg: '#F3EDE7' },
  { number: 6, category: 'Round 3', title: 'Finals', desc: 'Live final presentations via Zoom — deliver your final solution to our expert jury panel.', date: 'Sep 18 – Sep 27, 2025', circleColor: '#F7B3BC', circleBg: '#F9DDED' },
];

function Timeline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="timeline" className="relative pt-28 pb-16 overflow-hidden" style={{ background: '#F3EDE7' }}>
      <div className="orb orb-animated-float w-[500px] h-[300px] top-0 right-0 opacity-60"
        style={{ background: 'radial-gradient(ellipse, #F7B3BC20, transparent 70%)' }} />

      <div ref={ref} className="section-reveal max-w-5xl mx-auto px-6 md:px-16">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-5" style={{ color: '#F7B3BC' }}>
            Key Milestones
          </p>
          <h2 className="font-serif text-[clamp(36px,5vw,68px)] font-bold leading-tight" style={{ color: '#4A3535' }}>
            Competition{' '}
            <span className="italic font-light" style={{ color: '#F7B3BC' }}>Timeline</span>
          </h2>
          <p className="text-base font-light mt-5 max-w-lg mx-auto leading-relaxed" style={{ color: '#8B6B6B' }}>
            Your path to success — follow each milestone and prepare for every round.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0"
            style={{ width: '1px', background: 'linear-gradient(to bottom, transparent 0%, #F7B3BC 5%, #F7B3BC 95%, transparent 100%)', transform: 'translateX(-50%)' }} />

          <div className="space-y-0">
            {milestones.map(({ number, category, title, desc, date, circleColor, circleBg }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="relative flex items-center md:min-h-[140px]">
                  <div className="timeline-circle-pulse hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full items-center justify-center shadow-sm"
                    style={{ background: circleBg, border: `2px solid ${circleColor}`, color: circleColor, animationDelay: `${i * 0.45}s` }}>
                    <span className="font-serif font-bold text-base leading-none" style={{ color: circleColor }}>{number}</span>
                  </div>

                  <div className={`hidden md:flex w-1/2 items-center ${isLeft ? 'pr-20 justify-end' : 'pl-20 justify-start'}`}>
                    {isLeft ? (
                      <div className="text-right max-w-xs">
                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: circleColor }}>{category}</p>
                        <h3 className="font-serif text-2xl font-semibold mb-2" style={{ color: '#4A3535' }}>{title}</h3>
                        <p className="text-sm font-light leading-relaxed" style={{ color: '#8B6B6B' }}>{desc}</p>
                      </div>
                    ) : (
                      <span className="inline-block px-5 py-2 rounded-full text-sm font-medium" style={{ background: circleBg, color: '#4A3535' }}>{date}</span>
                    )}
                  </div>

                  <div className={`hidden md:flex w-1/2 items-center ${!isLeft ? 'pl-28 justify-start' : 'pl-20 justify-start'}`}>
                    {!isLeft ? (
                      <div className="max-w-xs">
                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: circleColor }}>{category}</p>
                        <h3 className="font-serif text-2xl font-semibold mb-2" style={{ color: '#4A3535' }}>{title}</h3>
                        <p className="text-sm font-light leading-relaxed" style={{ color: '#8B6B6B' }}>{desc}</p>
                      </div>
                    ) : (
                      <span className="inline-block px-5 py-2 rounded-full text-sm font-medium" style={{ background: circleBg, color: '#4A3535' }}>{date}</span>
                    )}
                  </div>

                  {/* Mobile */}
                  <div className="md:hidden flex gap-5 py-6 w-full border-b last:border-0" style={{ borderColor: '#F7B3BC30' }}>
                    <div className="flex flex-col items-center gap-0 flex-shrink-0">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: circleBg, border: `1.5px solid ${circleColor}` }}>
                        <span className="font-serif font-bold text-sm" style={{ color: circleColor }}>{number}</span>
                      </div>
                      {i < milestones.length - 1 && (
                        <div className="w-px flex-1 mt-2" style={{ background: `${circleColor}40`, minHeight: '32px' }} />
                      )}
                    </div>
                    <div className="pb-4 flex-1">
                      <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: circleColor }}>{category}</p>
                      <p className="text-xs font-medium mb-2" style={{ color: '#8B6B6B' }}>{date}</p>
                      <h3 className="font-serif text-xl font-semibold mb-1.5" style={{ color: '#4A3535' }}>{title}</h3>
                      <p className="text-sm font-light leading-relaxed" style={{ color: '#8B6B6B' }}>{desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Prizes ───────────────────────────────────────────────────────────────────
const prizes = [
  { place: '1st', title: 'Grand Prize', amount: '$5,000', perks: ['Cash Award', 'Startup Accelerator Access', 'Media Feature', 'Executive Mentorship'], icon: Award, color: '#F7B3BC', size: 'large' },
  { place: '2nd', title: 'Runner Up', amount: '$2,500', perks: ['Cash Award', 'Scholarship Nomination', 'Mentorship Package'], icon: BookOpen, color: '#C4CEDF', size: 'medium' },
  { place: '3rd', title: 'Third Place', amount: '$1,000', perks: ['Cash Award', 'Industry Workshop Access', 'Network Introduction'], icon: Briefcase, color: '#B8C3BD', size: 'medium' },
];

function Prizes() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="prizes" className="relative pt-20 pb-32 overflow-hidden" style={{ background: '#F3EDE7' }}>
      <div className="orb orb-animated-drift w-[500px] h-[500px] bottom-0 right-0"
        style={{ background: 'radial-gradient(circle, #F9DDED60, transparent 70%)' }} />

      <div ref={ref} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
        <div className="text-center mb-20">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>Rewards</p>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold text-rose-dark">
            Win more than
            <span className="italic font-light" style={{ color: '#7A8F8A' }}> a trophy</span>
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-end gap-6 md:gap-0">
          {prizes.map(({ place, title, amount, perks, icon: Icon, color, size }, i) => (
            <div
              key={i}
              className={`relative w-full group hover-lift ${
                i === 0 ? 'md:w-2/5 md:mx-auto md:order-2 z-10' :
                i === 1 ? 'md:w-[30%] md:order-1 md:-mr-4' :
                'md:w-[30%] md:order-3 md:-ml-4'
              }`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="rounded-3xl overflow-hidden"
                style={{
                  background: `linear-gradient(145deg, ${color}20, ${color}08)`,
                  border: `1px solid ${color}40`,
                  padding: i === 0 ? '48px 40px' : '36px 32px',
                }}>
                <div className="icon-orbit w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}30`, color }}>
                  <Icon size={24} style={{ color }} strokeWidth={1.5} />
                </div>

                <div className="font-serif text-sm font-medium tracking-widest uppercase mb-1" style={{ color }}>
                  {place} Place
                </div>
                <div className="font-serif text-xl font-bold mb-2" style={{ color: '#4A3535' }}>{title}</div>
                <div className="font-serif mb-6 font-black leading-none" style={{ fontSize: i === 0 ? '56px' : '40px', color: '#4A3535' }}>
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
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase text-cream"
                  style={{ background: '#4A3535' }}>
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

// ─── Register CTA ─────────────────────────────────────────────────────────────
const steps = [
  { number: 1, label: 'Preliminary Round', sub: '15-slide presentation', color: '#F7B3BC' },
  { number: 2, label: 'Semi-Finals', sub: 'YouTube video presentation', color: '#E4B8BE' },
  { number: 3, label: 'Finals', sub: 'Live pitch via Zoom', color: '#B8C3BD' },
];

function RegisterCTA() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="register" className="relative overflow-hidden">
      <div className="relative px-6 md:px-16 pt-24 pb-20 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2D2320 0%, #3A2E2B 40%, #2A2825 100%)' }}>
        <div className="orb w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
          style={{ background: 'radial-gradient(circle, #F7B3BC, transparent 60%)' }} />
        <div className="orb w-[300px] h-[300px] top-0 right-0 opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #B8C3BD, transparent 60%)' }} />

        <div ref={ref} className="section-reveal relative z-10 max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.4em] uppercase mb-6" style={{ color: '#F7B3BC' }}>
            BizForHer 2025
          </p>

          <h2 className="font-serif leading-tight mb-8" style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}>
            <span style={{ color: '#F3EDE7', fontWeight: 700 }}>Ready to Showcase Your</span>
            <br />
            <span className="italic font-light" style={{ color: '#F7B3BC' }}>Business Skills?</span>
          </h2>

          <p className="text-base font-light leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: 'rgba(243, 237, 231, 0.65)' }}>
            Register now for BizForHer 2025 and join hundreds of high school girls across the nation
            competing for recognition, mentorship, and prizes — including cash awards, university
            scholarships, and opportunities worth over $120,000.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link to="/competition#register"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #F7B3BC, #E4B8BE)', color: '#4A3535' }}>
              Apply Now
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
            <Link to="/about"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10"
              style={{ border: '1px solid rgba(243, 237, 231, 0.25)', color: 'rgba(243, 237, 231, 0.8)' }}>
              Learn More
            </Link>
          </div>

          <div className="w-full max-w-2xl mx-auto mb-10" style={{ height: '1px', background: 'rgba(243, 237, 231, 0.1)' }} />

          <p className="text-[10px] font-bold tracking-[0.4em] uppercase mb-10"
            style={{ color: 'rgba(243, 237, 231, 0.35)' }}>
            How It Works
          </p>

          <div className="max-w-2xl mx-auto w-full">
            <div className="flex items-center justify-center mb-5">
              {steps.map(({ number, color }, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-lg flex-shrink-0"
                    style={{ background: `${color}18`, border: `1.5px solid ${color}55`, color }}>
                    {number}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-20 md:w-32 h-px mx-1" style={{ background: 'rgba(243, 237, 231, 0.15)' }} />
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-start justify-center">
              {steps.map(({ label, sub }, i) => (
                <div key={i} className="flex-1 text-center px-2 max-w-[180px]">
                  <div className="font-serif text-sm font-semibold mb-1" style={{ color: '#F3EDE7' }}>{label}</div>
                  <div className="text-xs font-light" style={{ color: 'rgba(243,237,231,0.4)' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
const Index = () => {
  return (
    <PageLayout>
      <Hero />
      <MarqueeBar />
      <About />
      <PartnerStrip />
      <Timeline />
      <PastWinners />
      <WhatYouGain />
      <Prizes />
      <Stats />
      <RegisterCTA />
      <MapCountdown />
    </PageLayout>
  );
};

export default Index;
