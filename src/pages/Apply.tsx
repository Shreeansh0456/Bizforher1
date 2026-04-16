import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Calendar, FileText, Users, MessageCircle, Mail, Phone } from 'lucide-react';
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

const howToSteps = [
  { icon: Users, title: 'Form a Team', desc: 'Gather 2–4 team members from grades 9–12 at the same school.', color: '#F7B3BC' },
  { icon: Calendar, title: 'Check Deadlines', desc: 'Follow the competition timeline — Round 1 opens August 5, 2025.', color: '#C4CEDF' },
  { icon: FileText, title: 'Prepare Info', desc: "Team name, school address, and each member's contact details.", color: '#B8C3BD' },
  { icon: ArrowRight, title: 'Submit Registration', desc: 'Complete the free registration form on our competition page.', color: '#E4B8BE' },
];

const timelineDates = [
  { label: 'Registration Deadline', date: 'Aug 5, 2025 — 12:00 PM IST', color: '#F7B3BC' },
  { label: 'Round 1 Opens', date: 'Aug 5, 2025 — 6:00 PM IST', color: '#F7B3BC' },
  { label: 'Round 1 Deadline', date: 'Aug 15, 2025 — 11:59 PM IST', color: '#F7B3BC' },
  { label: 'First Round Results', date: 'Aug 29, 2025 — 12:00 PM IST', color: '#E4B8BE' },
  { label: 'Semi-finalist Workshop', date: 'Aug 30, 2025 — 12:00 PM IST', color: '#B8C3BD' },
  { label: 'Round 2 Opens', date: 'Aug 30, 2025', color: '#B8C3BD' },
  { label: 'Round 2 Deadline', date: 'Sep 7, 2025 — 11:59 PM IST', color: '#B8C3BD' },
  { label: 'Second Round Results', date: 'Sep 17, 2025 — 12:00 PM IST', color: '#E4B8BE' },
  { label: 'Finals', date: 'Sep 18–27, 2025', color: '#F7B3BC' },
];

const ewsPrizes = [
  { place: '1st', amount: '₹2,00,000', color: '#F7B3BC' },
  { place: '2nd', amount: '₹1,25,000', color: '#C4CEDF' },
  { place: '3rd', amount: '₹75,000', color: '#B8C3BD' },
];

const Apply = () => {
  const heroRef = useReveal();
  const howRef = useReveal();
  const eligRef = useReveal();
  const prizesRef = useReveal();
  const ctaRef = useReveal();

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-36 pb-24"
        style={{ background: 'linear-gradient(160deg, #F9DDED 0%, #F3EDE7 50%, #EDE4DD 100%)' }}
      >
        <div className="orb w-[500px] h-[500px] top-[-100px] right-[-120px] opacity-50 animate-float-slow"
          style={{ background: 'radial-gradient(circle, #F7B3BC55, transparent 70%)' }} />
        <div className="orb w-[300px] h-[300px] bottom-0 left-[-60px] opacity-30 animate-drift"
          style={{ background: 'radial-gradient(circle, #C4CEDF55, transparent 70%)' }} />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <span className="font-serif font-black text-[clamp(60px,14vw,200px)] leading-none tracking-tighter opacity-[0.05] text-rose-dark whitespace-nowrap">
            APPLY
          </span>
        </div>

        <div ref={heroRef} className="section-reveal relative z-10 max-w-6xl mx-auto px-6 md:px-16 text-center">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
            BizForHer 2025
          </p>
          <h1 className="font-serif text-[clamp(42px,6vw,88px)] font-bold leading-tight mb-6" style={{ color: '#4A3535' }}>
            Begin Your
            <br />
            <span className="italic font-light" style={{ color: '#7A8F8A' }}>BizForHer Journey</span>
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12" style={{ color: '#6B5858' }}>
            Register your team for the BizForHer competition and take the first step toward showcasing your business acumen.
            Free for all high school girls in grades 9–12 across India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/competition#register"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ background: '#4A3535', color: '#F3EDE7', boxShadow: '0 8px 30px rgba(74,53,53,0.2)' }}
            >
              Apply Now <ArrowRight size={14} />
            </Link>
            <a
              href="https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-sm font-medium transition-all duration-300"
              style={{ border: '1px solid rgba(74,53,53,0.2)', color: '#4A3535' }}
            >
              <MessageCircle size={14} /> Join WhatsApp Community
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            {[
              { val: 'Free', label: 'Registration' },
              { val: 'Grades 9–12', label: 'Eligibility' },
              { val: '2–4', label: 'Team Size' },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div className="font-serif text-2xl font-bold text-rose-dark">{val}</div>
                <div className="text-xs tracking-widest uppercase font-light mt-0.5" style={{ color: '#8B6B6B' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Register ── */}
      <section className="relative py-28 overflow-hidden" style={{ background: '#F3EDE7' }}>
        <div className="orb orb-animated-drift w-[400px] h-[400px] top-0 left-[-100px] opacity-30"
          style={{ background: 'radial-gradient(circle, #F9DDED70, transparent 70%)' }} />

        <div ref={howRef} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
              Getting Started
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold" style={{ color: '#4A3535' }}>
              How to
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> register</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howToSteps.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                className="group rounded-3xl p-7 hover-lift relative"
                style={{
                  background: `linear-gradient(145deg, ${color}18, ${color}06)`,
                  border: `1px solid ${color}35`,
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: `${color}80` }}>
                  Step {String(i + 1).padStart(2, '0')}
                </div>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}28` }}>
                  <Icon size={18} style={{ color }} strokeWidth={1.8} />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2" style={{ color: '#4A3535' }}>{title}</h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#6B5858' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eligibility + Dates side by side ── */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #EDE4DD 100%)' }}>
        <div ref={eligRef} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility */}
            <div className="rounded-3xl p-8"
              style={{ background: 'linear-gradient(145deg, #F7B3BC18, #F7B3BC06)', border: '1px solid rgba(247,179,188,0.3)' }}>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#F7B3BC' }}>Eligibility</p>
              <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: '#4A3535' }}>Who can apply?</h3>
              <div className="space-y-3">
                {[
                  'Girls in grades 9–12',
                  'Any Indian curriculum (CBSE, ICSE, State Board, etc.)',
                  'Teams of 2–4 members from the same school',
                  'No prior business knowledge required',
                  'Open to all states across India',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={15} style={{ color: '#F7B3BC', flexShrink: 0, marginTop: 2 }} />
                    <span className="text-sm font-light" style={{ color: '#5C4A4A' }}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6" style={{ borderTop: '1px solid rgba(247,179,188,0.2)' }}>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3" style={{ color: '#7A8F8A' }}>
                  What you'll need
                </p>
                {[
                  'Team name',
                  'School name and address',
                  "Each team member's contact information",
                  'Teacher/advisor reference (optional)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 mb-2">
                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#F7B3BC' }} />
                    <span className="text-sm font-light" style={{ color: '#6B5858' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dates */}
            <div className="rounded-3xl p-8"
              style={{ background: 'linear-gradient(145deg, #C4CEDF18, #C4CEDF06)', border: '1px solid rgba(196,206,223,0.3)' }}>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#C4CEDF' }}>Timeline</p>
              <h3 className="font-serif text-2xl font-bold mb-6" style={{ color: '#4A3535' }}>Important dates</h3>
              <div className="space-y-3">
                {timelineDates.map(({ label, date, color }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: color }} />
                    <div>
                      <span className="text-sm font-medium" style={{ color: '#4A3535' }}>{label}</span>
                      <span className="text-xs font-light block" style={{ color: '#8B6B6B' }}>{date}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                <div className="flex items-center gap-2 text-xs font-light" style={{ color: '#6B5858' }}>
                  <Mail size={12} style={{ color: '#C4CEDF' }} />
                  info@bizforher.in
                </div>
                <div className="flex items-center gap-2 text-xs font-light" style={{ color: '#6B5858' }}>
                  <Phone size={12} style={{ color: '#C4CEDF' }} />
                  +91 81089 40071
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Prize Structure ── */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#F3EDE7' }}>
        <div className="orb orb-animated-float w-[500px] h-[400px] bottom-0 right-0 opacity-30"
          style={{ background: 'radial-gradient(ellipse, #F9DDED60, transparent 70%)' }} />

        <div ref={prizesRef} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
              Prizes & Scholarships
            </p>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold" style={{ color: '#4A3535' }}>
              Complete prize
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> structure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* EWS */}
            <div className="rounded-3xl p-8"
              style={{ background: 'linear-gradient(145deg, #F7B3BC18, #F7B3BC06)', border: '1px solid rgba(247,179,188,0.3)' }}>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: '#F7B3BC' }}>Category A</p>
              <h3 className="font-serif text-xl font-bold mb-5" style={{ color: '#4A3535' }}>EWS Finalists (Top 5)</h3>

              <div className="grid grid-cols-3 gap-3 mb-6">
                {ewsPrizes.map(({ place, amount, color }) => (
                  <div key={place} className="rounded-2xl p-4 text-center"
                    style={{ background: `${color}18`, border: `1px solid ${color}30` }}>
                    <div className="font-serif text-xl font-bold mb-1" style={{ color }}>{place}</div>
                    <div className="text-xs font-semibold" style={{ color: '#4A3535' }}>{amount}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5">
                {[
                  'Scholarships worth ₹50,00,000 at Wesleyan College (upon admission)',
                  'Full Scholarship to OYI Entrepreneurs in Action (₹20,000 value)',
                  'Guaranteed internship opportunities',
                  'Continued mentorship support',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#F7B3BC' }} />
                    <span className="text-sm font-light" style={{ color: '#6B5858' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-EWS */}
            <div className="rounded-3xl p-8"
              style={{ background: 'linear-gradient(145deg, #C4CEDF18, #C4CEDF06)', border: '1px solid rgba(196,206,223,0.3)' }}>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: '#C4CEDF' }}>Category B</p>
              <h3 className="font-serif text-xl font-bold mb-5" style={{ color: '#4A3535' }}>Non-EWS Finalists (Top 5)</h3>

              <div className="space-y-3">
                {[
                  { label: '₹4,00,000', sub: 'worth of OYI program coupons' },
                  { label: 'FLAME University', sub: 'Summer Symposium Scholarships (₹25,000 per student)' },
                  { label: 'Wesleyan College', sub: 'Scholarship ($60,000 USD per student)' },
                  { label: 'Full Scholarship', sub: 'to OYI Entrepreneurs in Action (₹20,000 value)' },
                  { label: 'Internship', sub: 'opportunities with leading organizations' },
                ].map(({ label, sub }) => (
                  <div key={label} className="flex items-start gap-3">
                    <CheckCircle2 size={14} style={{ color: '#C4CEDF', flexShrink: 0, marginTop: 2 }} />
                    <span className="text-sm font-light" style={{ color: '#5C4A4A' }}>
                      <strong className="font-medium">{label}</strong> {sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Semi-finalist & All */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-3xl p-8"
              style={{ background: 'linear-gradient(145deg, #B8C3BD18, #B8C3BD06)', border: '1px solid rgba(184,195,189,0.3)' }}>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: '#B8C3BD' }}>Semi-Finalists</p>
              <h3 className="font-serif text-lg font-bold mb-4" style={{ color: '#4A3535' }}>Semi-Finalist Benefits</h3>
              <div className="space-y-2.5">
                {[
                  'Wesleyan College: $5,000 grant upon acceptance',
                  'Up to 75% scholarship for OYI programs',
                  'TOC Prabhav 5 Scholarships (EWS students)',
                  'Workshop access with IIM professors',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#B8C3BD' }} />
                    <span className="text-sm font-light" style={{ color: '#6B5858' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl p-8"
              style={{ background: 'linear-gradient(145deg, #E4B8BE18, #E4B8BE06)', border: '1px solid rgba(228,184,190,0.3)' }}>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: '#E4B8BE' }}>All Participants</p>
              <h3 className="font-serif text-lg font-bold mb-4" style={{ color: '#4A3535' }}>Everyone benefits</h3>
              <div className="space-y-2.5">
                {[
                  'National-level recognition',
                  'Certificates for all competition rounds',
                  'Value-addition to college applications',
                  'Leadership skill development',
                  'Access to mentorship networks',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: '#E4B8BE' }} />
                    <span className="text-sm font-light" style={{ color: '#6B5858' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="relative overflow-hidden">
        <div className="relative px-6 md:px-16 pt-24 pb-20"
          style={{ background: 'linear-gradient(135deg, #2D2320 0%, #3A2E2B 40%, #2A2825 100%)' }}>
          <div className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
            style={{ background: 'radial-gradient(circle, #F7B3BC, transparent 60%)' }} />

          <div ref={ctaRef} className="section-reveal relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-[0.4em] uppercase mb-6" style={{ color: '#F7B3BC' }}>
              Limited Spots Available
            </p>
            <h2 className="font-serif leading-tight mb-8" style={{ fontSize: 'clamp(32px, 5vw, 64px)', color: '#F3EDE7', fontWeight: 700 }}>
              Don't miss your
              <span className="italic font-light" style={{ color: '#F7B3BC' }}> chance to compete.</span>
            </h2>
            <p className="text-base font-light leading-relaxed mb-12 max-w-xl mx-auto"
              style={{ color: 'rgba(243,237,231,0.65)' }}>
              Applications close August 5, 2025. Register now to secure your spot in BizForHer 2025.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/competition#register"
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #F7B3BC, #E4B8BE)', color: '#4A3535' }}
              >
                Apply Now <ArrowRight size={15} strokeWidth={2} />
              </Link>
              <a
                href="https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-9 py-4 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/10"
                style={{ border: '1px solid rgba(243,237,231,0.25)', color: 'rgba(243,237,231,0.8)' }}
              >
                <MessageCircle size={14} /> WhatsApp Community
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Apply;
