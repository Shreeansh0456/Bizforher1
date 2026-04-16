import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Sparkles, Target, Users } from 'lucide-react';
import PageLayout from '@/components/Layout/PageLayout';

// ── Data ──────────────────────────────────────────────────────────────────────

const foundingTeam = [
  {
    name: 'Vaagish Agarwal',
    role: 'Co-Founder',
    initials: 'VA',
    color: '#C4CEDF',
    quote: 'Building the launchpad the next generation deserves.',
  },
  {
    name: 'Shiven Khandelwal',
    role: 'Co-Founder',
    initials: 'SK',
    color: '#B8C3BD',
    quote: 'Turning bold ideas into movements that matter.',
  },
  {
    name: 'Aryan',
    role: 'Co-Founder',
    initials: 'AR',
    color: '#E4B8BE',
    quote: 'Every great founder started by believing they could.',
  },
  {
    name: 'Siddhant Nabera',
    role: 'Strategic & Tech Head',
    initials: 'SN',
    color: '#F7B3BC',
    quote: 'Strategy and technology go hand in hand when building for impact.',
  },
  {
    name: 'Samiksha Khemka',
    role: 'Business Unit Head',
    initials: 'SK',
    color: '#C4CEDF',
    quote: 'A strong business foundation is what turns vision into reality.',
  },
  {
    name: 'Ira Malpani',
    role: 'Design Head',
    initials: 'IM',
    color: '#B8C3BD',
    quote: 'Design is the silent language of every great brand.',
  },
];

const currentTeam = [
  {
    name: 'Ariana Agarwal',
    role: 'President',
    initials: 'AA',
    color: '#F7B3BC',
    quote: 'Empowering the next generation of founders, one pitch at a time.',
  },
  {
    name: 'Amaira Ladia',
    role: 'Director',
    initials: 'AL',
    color: '#C4CEDF',
    quote: 'Every connection we build helps a girl step into leadership.',
  },
  {
    name: 'Mehul',
    role: 'Outreach Head',
    initials: 'MH',
    color: '#B8C3BD',
    quote: 'We meet girls where they are and bring the competition to them.',
  },
  {
    name: 'Jayithi Gavva',
    role: 'Technology Head',
    initials: 'JG',
    color: '#E4B8BE',
    quote: 'A strong platform makes participation easy and exciting.',
  },
  {
    name: 'Shreeansh Bansal',
    role: 'Technology Head',
    initials: 'SB',
    color: '#F7B3BC',
    quote: 'Technology helps ideas travel farther and faster.',
  },
  {
    name: 'Raahil Dogra',
    role: 'Design Head',
    initials: 'RD',
    color: '#C4CEDF',
    quote: 'Design is how every story becomes unforgettable.',
  },
  {
    name: 'Anaaya Jain',
    role: 'Marketing Head',
    initials: 'AJ',
    color: '#B8C3BD',
    quote: 'We make sure the brightest ideas are seen and heard.',
  },
  {
    name: 'To be finalized',
    role: 'Finance Head',
    initials: 'FH',
    color: '#E4B8BE',
    quote: 'Financial leadership is coming into focus.',
  },
];

const collaborators = [
  {
    name: 'Wesleyan College, USA',
    desc: "Global education & women's empowerment partnership",
    logo: '/uploads/d130dc3a-62ef-401a-ba7c-368d70718905.png',
  },
  {
    name: 'FLAME University',
    desc: 'Academic collaboration & finance mentorship',
    logo: '/uploads/8fd76eb3-991e-47c9-b2ea-51e5c9b9337.png',
  },
  {
    name: 'IIMU',
    desc: 'IIM Udaipur — business education & mentorship',
    logo: '/uploads/56322aa7-2384-44c4-985f-46e22b7126c4.png',
  },
  {
    name: 'BCG',
    desc: 'Boston Consulting Group — industry mentorship & judging',
    logo: '/uploads/f86a15f3-4ebc-47c5-b74f-1f26da14cbf9.png',
  },
  {
    name: 'The Outreach Collective',
    desc: 'Outreach & awareness across India',
    logo: '/uploads/343f3bc5-dfb9-4d58-9f98-744abc75ffd2.png',
  },
];

const values = [
  {
    icon: Sparkles,
    title: 'Ambition',
    desc: "We celebrate girls who dare to dream bigger than what they've been told is possible.",
    accent: '#F7B3BC',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'No founder succeeds alone. We build sisterhood, mentorship, and lasting networks.',
    accent: '#C4CEDF',
  },
  {
    icon: Target,
    title: 'Impact',
    desc: 'Real problems. Real solutions. We measure success by the change participants create.',
    accent: '#B8C3BD',
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function Avatar({ initials, color, size = 'md' }: { initials: string; color: string; size?: 'md' | 'lg' }) {
  const dim = size === 'lg' ? 'w-24 h-24 text-2xl' : 'w-16 h-16 text-lg';
  return (
    <div
      className={`${dim} rounded-full flex items-center justify-center font-serif font-bold mx-auto`}
      style={{ background: `${color}30`, color, border: `2px solid ${color}50` }}
    >
      {initials}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
const About = () => {
  const heroRef = useReveal();
  const teamRef = useReveal();
  const missionRef = useReveal();
  const valuesRef = useReveal();
  const collabRef = useReveal();
  const ctaRef = useReveal();

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-36 pb-24"
        style={{ background: 'linear-gradient(160deg, #F9DDED 0%, #F3EDE7 50%, #EDE4DD 100%)' }}
      >
        <div className="orb w-[500px] h-[500px] top-[-80px] left-[-120px] opacity-50 animate-drift"
          style={{ background: 'radial-gradient(circle, #F7B3BC55, transparent 70%)' }} />
        <div className="orb w-[350px] h-[350px] bottom-0 right-[-80px] opacity-30 animate-float-slow"
          style={{ background: 'radial-gradient(circle, #C4CEDF55, transparent 70%)' }} />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <span className="font-serif font-black text-[clamp(60px,14vw,200px)] leading-none tracking-tighter opacity-[0.05] text-rose-dark whitespace-nowrap">
            OUR STORY
          </span>
        </div>

        <div ref={heroRef} className="section-reveal relative z-10 max-w-6xl mx-auto px-6 md:px-16 text-center">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
            About BizForHer
          </p>
          <h1 className="font-serif text-[clamp(40px,6vw,80px)] font-bold leading-tight mb-6" style={{ color: '#4A3535' }}>
            Created with purpose.
            <br />
            <span className="italic font-light" style={{ color: '#7A8F8A' }}>For the leaders of tomorrow.</span>
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10" style={{ color: '#6B5858' }}>
            A national-level business case competition that gives high school girls the platform, mentorship,
            and resources to transform bold ideas into real ventures.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/competition#register"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{ background: '#4A3535', color: '#F3EDE7' }}
            >
              Apply Now <ArrowRight size={14} />
            </Link>
            <a
              href="https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:bg-green-50"
              style={{ border: '1px solid rgba(74,53,53,0.2)', color: '#4A3535' }}
            >
              <MessageCircle size={14} /> Join WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="relative py-28 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #EDE4DD 100%)' }}>
        <div className="orb orb-animated-float w-[400px] h-[400px] top-0 right-0 opacity-30"
          style={{ background: 'radial-gradient(circle, #F7B3BC40, transparent 70%)' }} />

        <div ref={teamRef} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
              The People Behind It
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold" style={{ color: '#4A3535' }}>
              Our
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> Team</span>
            </h2>
            <p className="mt-4 max-w-lg mx-auto text-sm font-light" style={{ color: '#6B5858' }}>
              The people who believed the gap in opportunity deserved a stage — so they built one.
            </p>
          </div>

          {/* Current Team */}
          <div className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-center mb-10" style={{ color: '#F7B3BC' }}>
              Current Team
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentTeam.map(({ name, role, initials, color, quote }, i) => (
                <div
                  key={name}
                  className="group rounded-3xl p-8 text-center hover-lift"
                  style={{
                    background: `linear-gradient(145deg, ${color}18, ${color}06)`,
                    border: `1px solid ${color}35`,
                    transitionDelay: `${i * 0.075}s`,
                  }}
                >
                  <Avatar initials={initials} color={color} size="lg" />
                  <div className="mt-5 mb-2 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color }}>
                    {role}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: '#4A3535' }}>{name}</h3>
                  <div className="h-px w-12 mx-auto mb-4" style={{ background: `${color}50` }} />
                  <p className="text-sm font-light italic leading-relaxed" style={{ color: '#6B5858' }}>
                    "{quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Founding Team */}
          <div className="mb-16">
            <p className="text-xs font-bold tracking-[0.3em] uppercase text-center mb-10" style={{ color: '#7A8F8A' }}>
              Founding Team
            </p>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
              {foundingTeam.map(({ name, role, initials, color, quote }, i) => (
                <div
                  key={name}
                  className="group rounded-3xl p-8 text-center hover-lift"
                  style={{
                    background: `linear-gradient(145deg, ${color}18, ${color}06)`,
                    border: `1px solid ${color}35`,
                    transitionDelay: `${i * 0.1}s`,
                  }}
                >
                  <Avatar initials={initials} color={color} size="lg" />
                  <div className="mt-5 mb-2 text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color }}>
                    {role}
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-4" style={{ color: '#4A3535' }}>{name}</h3>
                  <div className="h-px w-12 mx-auto mb-4" style={{ background: `${color}50` }} />
                  <p className="text-sm font-light italic leading-relaxed" style={{ color: '#6B5858' }}>
                    "{quote}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="relative py-28 overflow-hidden" style={{ background: '#F3EDE7' }}>
        <div className="orb orb-animated-drift w-[400px] h-[400px] top-0 right-[-80px] opacity-40"
          style={{ background: 'radial-gradient(circle, #F9DDED70, transparent 70%)' }} />

        <div ref={missionRef} className="section-reveal max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl"
                style={{ border: '1px solid rgba(247,179,188,0.3)' }}>
                <img
                  src="/uploads/36b77388-6198-47f4-931c-ddeba658476b.png"
                  alt="BizForHer participants"
                  className="w-full h-80 md:h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 rounded-2xl px-6 py-4 shadow-xl"
                style={{ background: '#4A3535', color: '#F3EDE7' }}>
                <div className="font-serif text-3xl font-bold">3rd</div>
                <div className="text-xs tracking-widest uppercase font-light opacity-70">Annual Edition</div>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
                Our Mission
              </p>
              <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold leading-tight mb-6" style={{ color: '#4A3535' }}>
                What is BizForHer?
              </h2>
              <div className="space-y-4 font-light leading-relaxed" style={{ color: '#5C4A4A' }}>
                <p>
                  BizForHer is a national-level business case competition aimed at empowering high school girls across India,
                  especially those from rural, state, and government schools.
                </p>
                <p>
                  The competition is designed to spotlight young women's innovative solutions to real-world business challenges
                  and help them recognize their entrepreneurial potential.
                </p>
                <p>
                  Despite the increasing success of women in business, representation from under-resourced communities remains
                  limited. BizForHer seeks to change that narrative.
                </p>
              </div>
              <div className="relative h-px w-full my-8 overflow-hidden rounded-full"
                style={{ background: 'rgba(196,206,223,0.25)' }}>
                <div className="about-line-sweep absolute inset-y-0 left-0 w-1/2 rounded-full"
                  style={{ background: 'linear-gradient(to right, transparent, #B8C3BD, #C4CEDF, transparent)' }} />
              </div>
              <blockquote className="font-serif text-xl italic leading-relaxed" style={{ color: '#7A8F8A' }}>
                "We believe every girl deserves a seat at the table and the skills to build one of her own."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #F9DDED 100%)' }}>
        <div ref={valuesRef} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
              What We Stand For
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold" style={{ color: '#4A3535' }}>
              Our core
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, desc, accent }, i) => (
              <div
                key={title}
                className="group rounded-3xl p-8 hover-lift"
                style={{
                  background: `linear-gradient(145deg, ${accent}18, ${accent}08)`,
                  border: `1px solid ${accent}35`,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${accent}28` }}>
                  <Icon size={20} style={{ color: accent }} strokeWidth={1.8} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3" style={{ color: '#4A3535' }}>{title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#6B5858' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Impact & Stats ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#F3EDE7' }}>
        <div className="orb w-[300px] h-[300px] bottom-0 left-[-80px] opacity-30"
          style={{ background: 'radial-gradient(circle, #B8C3BD55, transparent 70%)' }} />
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="rounded-3xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #2D2320 0%, #3A2E2B 100%)' }}>
            <div className="relative px-8 md:px-16 py-16">
              <div className="orb w-[400px] h-[300px] top-0 right-0 opacity-10"
                style={{ background: 'radial-gradient(circle, #F7B3BC, transparent 60%)' }} />
              <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#F7B3BC' }}>
                    Our Reach & Impact
                  </p>
                  <h2 className="font-serif text-[clamp(28px,3.5vw,48px)] font-bold leading-tight mb-6" style={{ color: '#F3EDE7' }}>
                    A movement that's <br />
                    <span className="italic font-light" style={{ color: '#F7B3BC' }}>changing trajectories.</span>
                  </h2>
                  <p className="font-light leading-relaxed mb-6" style={{ color: 'rgba(243,237,231,0.65)' }}>
                    From rural schools to national stages — BizForHer has reached girls across India who never imagined
                    they could build, lead, and win.
                  </p>
                  <Link
                    to="/competition#register"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, #F7B3BC, #E4B8BE)', color: '#4A3535' }}
                  >
                    Register Now <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { stat: '20,000+', label: 'Participants', color: '#F7B3BC' },
                    { stat: '25', label: 'Indian States', color: '#C4CEDF' },
                    { stat: '$2.5M+', label: 'Scholarships & Prizes', color: '#B8C3BD' },
                    { stat: '176K+', label: 'People Reached', color: '#E4B8BE' },
                  ].map(({ stat, label, color }) => (
                    <div key={label} className="rounded-2xl p-5 text-center"
                      style={{ background: `${color}12`, border: `1px solid ${color}25` }}>
                      <div className="font-serif text-3xl font-bold mb-1" style={{ color }}>{stat}</div>
                      <div className="text-xs font-light" style={{ color: 'rgba(243,237,231,0.5)' }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outcomes strip */}
              <div className="rounded-3xl p-8 md:p-10"
                style={{ background: 'linear-gradient(135deg, #F9DDED 0%, #F3EDE7 100%)', border: '1px solid rgba(247,179,188,0.3)' }}>
                <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-6 text-center" style={{ color: '#7A8F8A' }}>
                  Outcomes Unlocked
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  {[
                    { label: 'Higher Education Pathways', desc: 'Girls transitioned into top colleges & universities', color: '#F7B3BC' },
                    { label: 'Entrepreneurship Journeys', desc: 'Participants launched their first ventures post-competition', color: '#C4CEDF' },
                    { label: '$2,500,000+', desc: 'In scholarships & prizes unlocked across both editions', color: '#B8C3BD' },
                  ].map(({ label, desc, color }) => (
                    <div key={label}>
                      <div className="font-serif text-xl font-bold mb-2" style={{ color }}>{label}</div>
                      <p className="text-xs font-light leading-relaxed" style={{ color: '#6B5858' }}>{desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Collaborations ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#F3EDE7' }}>
        <div ref={collabRef} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
              Our Partners
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold" style={{ color: '#4A3535' }}>
              Built with the
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> best</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {collaborators.map(({ name, desc, logo }, i) => (
              <div
                key={name}
                className="rounded-3xl p-6 text-center hover-lift flex flex-col items-center"
                style={{
                  background: 'linear-gradient(145deg, rgba(247,179,188,0.08), rgba(196,206,223,0.04))',
                  border: '1px solid rgba(247,179,188,0.2)',
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div className="h-20 flex items-center justify-center mb-4 w-full">
                  <img
                    src={logo}
                    alt={name}
                    className="max-w-full object-contain"
                    style={{ maxHeight: name === 'IIMU' ? '72px' : '56px', transform: name === 'IIMU' ? 'scale(1.25)' : 'none' }}
                  />
                </div>
                <h3 className="font-serif text-sm font-bold mb-1" style={{ color: '#4A3535' }}>{name}</h3>
                <p className="text-xs font-light leading-relaxed" style={{ color: '#6B5858' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #F9DDED 100%)' }}>
        <div ref={ctaRef} className="section-reveal max-w-3xl mx-auto px-6 md:px-16 text-center">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
            Ready?
          </p>
          <h2 className="font-serif text-[clamp(28px,4vw,52px)] font-bold mb-5" style={{ color: '#4A3535' }}>
            Your journey starts
            <span className="italic font-light" style={{ color: '#7A8F8A' }}> here.</span>
          </h2>
          <p className="text-base font-light leading-relaxed mb-10" style={{ color: '#6B5858' }}>
            Registration is free and open to all high school girls in grades 9–12 across India.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/competition#register"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: '#4A3535', color: '#F3EDE7', boxShadow: '0 8px 30px rgba(74,53,53,0.2)' }}
            >
              Apply Now <ArrowRight size={14} />
            </Link>
            <a
              href="https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-9 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300"
              style={{ border: '1px solid rgba(74,53,53,0.2)', color: '#4A3535' }}
            >
              <MessageCircle size={14} /> Join WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
