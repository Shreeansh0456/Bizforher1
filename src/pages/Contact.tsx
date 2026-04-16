import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Instagram, MessageCircle, ArrowRight, MapPin, Send } from 'lucide-react';
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

const contactMethods = [
  {
    icon: Mail,
    label: 'Email Us',
    value: 'info@bizforher.in',
    sub: 'We reply within 24 hours',
    href: 'mailto:info@bizforher.in',
    color: '#F7B3BC',
  },
  {
    icon: Phone,
    label: 'Call Us',
    value: '+91 81089 40071',
    sub: 'Mon–Fri, 10am–6pm IST',
    href: 'tel:+918108940071',
    color: '#C4CEDF',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp Community',
    value: 'Join 500+ participants',
    sub: 'Get real-time updates',
    href: 'https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU',
    color: '#B8C3BD',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    value: '@bizforherc',
    sub: 'Stay updated on competitions',
    href: 'https://www.instagram.com/bizforherc/',
    color: '#E4B8BE',
  },
];

const faqs = [
  {
    q: 'Who can participate in BizForHer?',
    a: 'Any high school girl in grades 9–12 from any Indian curriculum (CBSE, ICSE, State Board, etc.) can apply.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No — BizForHer is completely free to participate in. There are no hidden fees or charges.',
  },
  {
    q: 'How many members can be in a team?',
    a: 'Teams can have 2 to 4 members, all from the same school.',
  },
  {
    q: 'Do I need prior business knowledge?',
    a: 'Not at all. BizForHer is designed for all skill levels. We have free courses in our Academy to help you prepare.',
  },
  {
    q: 'Where are the finals held?',
    a: 'The finals are held via Zoom — fully online, so you can participate from anywhere in India.',
  },
];

const Contact = () => {
  const heroRef = useReveal();
  const methodsRef = useReveal();
  const formRef = useReveal();
  const faqRef = useReveal();

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send to backend/Supabase here
    setSubmitted(true);
  };

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-36 pb-24"
        style={{ background: 'linear-gradient(160deg, #F9DDED 0%, #F3EDE7 50%, #EDE4DD 100%)' }}
      >
        <div className="orb w-[500px] h-[500px] top-[-80px] right-[-120px] opacity-50 animate-drift"
          style={{ background: 'radial-gradient(circle, #F7B3BC55, transparent 70%)' }} />
        <div className="orb w-[300px] h-[300px] bottom-[-40px] left-[-60px] opacity-30"
          style={{ background: 'radial-gradient(circle, #C4CEDF55, transparent 70%)' }} />

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <span className="font-serif font-black text-[clamp(60px,14vw,200px)] leading-none tracking-tighter opacity-[0.05] text-rose-dark whitespace-nowrap">
            CONTACT
          </span>
          <span className="absolute font-serif font-black text-[clamp(36px,8vw,96px)] leading-none tracking-tighter opacity-[0.08] text-rose-dark/80 whitespace-nowrap transform translate-y-24">
            LET&apos;S CONNECT
          </span>
        </div>

        <div ref={heroRef} className="section-reveal relative z-10 max-w-6xl mx-auto px-6 md:px-16 text-center">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
            Get in Touch
          </p>
          <h1 className="font-serif text-[clamp(40px,6vw,80px)] font-bold leading-tight mb-6" style={{ color: '#4A3535' }}>
            We'd love to
            <br />
            <span className="italic font-light" style={{ color: '#7A8F8A' }}>hear from you.</span>
          </h1>
          <p className="text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto" style={{ color: '#6B5858' }}>
            Questions about the competition, eligibility, or anything else — our team is here to help.
          </p>
        </div>
      </section>

      {/* ── Contact Methods ── */}
      <section className="relative py-20 overflow-hidden" style={{ background: '#F3EDE7' }}>
        <div className="absolute top-10 left-6 w-28 h-28 rounded-full bg-rose-mid/15 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-36 h-36 rounded-full bg-slate-300/20 blur-3xl" />
        <div ref={methodsRef} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactMethods.map(({ icon: Icon, label, value, sub, href, color }, i) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group rounded-3xl p-7 hover-lift block"
                style={{
                  background: `linear-gradient(145deg, ${color}18, ${color}06)`,
                  border: `1px solid ${color}35`,
                  transitionDelay: `${i * 0.08}s`,
                }}
              >
                <div className="w-11 h-11 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}28` }}>
                  <Icon size={18} style={{ color }} strokeWidth={1.8} />
                </div>
                <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color }}>
                  {label}
                </div>
                <div className="font-serif text-base font-semibold mb-1" style={{ color: '#4A3535' }}>
                  {value}
                </div>
                <div className="text-xs font-light" style={{ color: '#8B6B6B' }}>{sub}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Form + FAQ ── */}
      <section className="relative py-20 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #EDE4DD 100%)' }}>
        <div className="orb orb-animated-drift w-[400px] h-[400px] bottom-0 right-[-100px] opacity-30"
          style={{ background: 'radial-gradient(circle, #F9DDED70, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact form */}
            <div ref={formRef} className="section-reveal">
              <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
                Send a Message
              </p>
              <h2 className="font-serif text-[clamp(26px,3.5vw,42px)] font-bold mb-8" style={{ color: '#4A3535' }}>
                Drop us a line
              </h2>

              {submitted ? (
                <div className="rounded-3xl p-10 text-center"
                  style={{ background: 'linear-gradient(145deg, #B8C3BD18, #B8C3BD06)', border: '1px solid rgba(184,195,189,0.3)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: '#B8C3BD28' }}>
                    <Send size={22} style={{ color: '#B8C3BD' }} />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-2" style={{ color: '#4A3535' }}>Message sent!</h3>
                  <p className="text-sm font-light" style={{ color: '#6B5858' }}>
                    We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    {(['name', 'email'] as const).map((field) => (
                      <div key={field}>
                        <label className="block text-xs font-semibold tracking-wide uppercase mb-2"
                          style={{ color: '#7A8F8A' }}>
                          {field === 'name' ? 'Full Name' : 'Email Address'}
                        </label>
                        <input
                          type={field === 'email' ? 'email' : 'text'}
                          value={formData[field]}
                          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                          required
                          placeholder={field === 'name' ? 'Your name' : 'your@email.com'}
                          className="w-full px-5 py-3.5 rounded-2xl text-sm font-light outline-none transition-all duration-200"
                          style={{
                            background: 'rgba(247,179,188,0.08)',
                            border: '1px solid rgba(247,179,188,0.25)',
                            color: '#4A3535',
                          }}
                          onFocus={(e) => { e.currentTarget.style.border = '1px solid rgba(247,179,188,0.6)'; e.currentTarget.style.background = 'rgba(247,179,188,0.12)'; }}
                          onBlur={(e) => { e.currentTarget.style.border = '1px solid rgba(247,179,188,0.25)'; e.currentTarget.style.background = 'rgba(247,179,188,0.08)'; }}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase mb-2"
                      style={{ color: '#7A8F8A' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                      placeholder="How can we help you?"
                      className="w-full px-5 py-3.5 rounded-2xl text-sm font-light outline-none transition-all duration-200"
                      style={{
                        background: 'rgba(247,179,188,0.08)',
                        border: '1px solid rgba(247,179,188,0.25)',
                        color: '#4A3535',
                      }}
                      onFocus={(e) => { e.currentTarget.style.border = '1px solid rgba(247,179,188,0.6)'; e.currentTarget.style.background = 'rgba(247,179,188,0.12)'; }}
                      onBlur={(e) => { e.currentTarget.style.border = '1px solid rgba(247,179,188,0.25)'; e.currentTarget.style.background = 'rgba(247,179,188,0.08)'; }}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold tracking-wide uppercase mb-2"
                      style={{ color: '#7A8F8A' }}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      placeholder="Tell us what's on your mind..."
                      className="w-full px-5 py-3.5 rounded-2xl text-sm font-light outline-none transition-all duration-200 resize-none"
                      style={{
                        background: 'rgba(247,179,188,0.08)',
                        border: '1px solid rgba(247,179,188,0.25)',
                        color: '#4A3535',
                      }}
                      onFocus={(e) => { e.currentTarget.style.border = '1px solid rgba(247,179,188,0.6)'; e.currentTarget.style.background = 'rgba(247,179,188,0.12)'; }}
                      onBlur={(e) => { e.currentTarget.style.border = '1px solid rgba(247,179,188,0.25)'; e.currentTarget.style.background = 'rgba(247,179,188,0.08)'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    style={{ background: '#4A3535', color: '#F3EDE7', boxShadow: '0 8px 30px rgba(74,53,53,0.2)' }}
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* FAQ */}
            <div ref={faqRef} className="section-reveal" style={{ transitionDelay: '0.15s' }}>
              <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
                FAQs
              </p>
              <h2 className="font-serif text-[clamp(26px,3.5vw,42px)] font-bold mb-8" style={{ color: '#4A3535' }}>
                Common questions
              </h2>

              <div className="space-y-3">
                {faqs.map(({ q, a }, i) => (
                  <div
                    key={i}
                    className="rounded-2xl overflow-hidden transition-all duration-300"
                    style={{
                      background: openFaq === i ? 'rgba(247,179,188,0.12)' : 'rgba(247,179,188,0.06)',
                      border: `1px solid ${openFaq === i ? 'rgba(247,179,188,0.4)' : 'rgba(247,179,188,0.2)'}`,
                    }}
                  >
                    <button
                      className="w-full flex items-center justify-between px-6 py-4 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="text-sm font-semibold pr-4" style={{ color: '#4A3535' }}>{q}</span>
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300"
                        style={{
                          background: 'rgba(247,179,188,0.25)',
                          transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0)',
                        }}
                      >
                        <ArrowRight size={12} style={{ color: '#F7B3BC' }} />
                      </div>
                    </button>
                    {openFaq === i && (
                      <div className="px-6 pb-5">
                        <p className="text-sm font-light leading-relaxed" style={{ color: '#6B5858' }}>{a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick links */}
              <div className="mt-10 rounded-3xl p-7"
                style={{ background: 'linear-gradient(145deg, #4A353518, #4A353508)', border: '1px solid rgba(74,53,53,0.12)' }}>
                <p className="text-xs font-bold tracking-[0.3em] uppercase mb-4" style={{ color: '#7A8F8A' }}>
                  Still have questions?
                </p>
                <p className="text-sm font-light leading-relaxed mb-5" style={{ color: '#6B5858' }}>
                  Reach out directly or join our WhatsApp community where our team answers questions daily.
                </p>
                <div className="flex flex-col gap-3">
                  <a href="mailto:info@bizforher.in"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-blush"
                    style={{ color: '#4A3535' }}>
                    <Mail size={14} style={{ color: '#F7B3BC' }} />
                    info@bizforher.in
                  </a>
                  <a href="https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-blush"
                    style={{ color: '#4A3535' }}>
                    <MessageCircle size={14} style={{ color: '#B8C3BD' }} />
                    Join WhatsApp Community
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dark CTA strip ── */}
      <section className="relative overflow-hidden">
        <div className="relative px-6 md:px-16 py-16"
          style={{ background: 'linear-gradient(135deg, #2D2320 0%, #3A2E2B 100%)' }}>
          <div className="orb w-[400px] h-[300px] top-0 right-0 opacity-10"
            style={{ background: 'radial-gradient(circle, #F7B3BC, transparent 60%)' }} />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-xs font-bold tracking-[0.4em] uppercase mb-2" style={{ color: '#F7B3BC' }}>
                Ready to compete?
              </p>
              <h3 className="font-serif text-2xl font-bold" style={{ color: '#F3EDE7' }}>
                Applications are open
                <span className="italic font-light" style={{ color: '#F7B3BC' }}> now.</span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
