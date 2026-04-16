import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, Trophy, Star, Users, Calendar, FileText, Shield, MessageCircle, Loader2 } from 'lucide-react';
import PageLayout from '@/components/Layout/PageLayout';
import { supabase } from '@/lib/supabase';

// ── Helpers ───────────────────────────────────────────────────────────────────

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

// ── Data ──────────────────────────────────────────────────────────────────────

const rounds = [
  {
    number: '01',
    category: 'Round 1',
    title: 'Preliminary Round',
    dates: 'Aug 5 – Aug 17, 2025',
    desc: 'Receive a real Indian business case. Analyse the problem, devise a practical solution, and package your thinking into a crisp 15-slide presentation.',
    deliverable: '15-slide presentation (PDF)',
    accent: '#F7B3BC',
  },
  {
    number: '02',
    category: 'Round 2',
    title: 'Semi-Finals',
    dates: 'Aug 30 – Sep 8, 2025',
    desc: 'Top 50 teams get a fresh, more complex case and must present their analysis as a detailed video walkthrough — no reading off slides, just sharp thinking on camera.',
    deliverable: 'YouTube video link + 15-slide PDF',
    accent: '#B8C3BD',
  },
  {
    number: '03',
    category: 'Round 3',
    title: 'Finals — Live on Zoom',
    dates: 'Sep 17 – Sep 28, 2025',
    desc: 'Ten teams. Expert judges. Real-time questions. The live final is where preparation meets pressure — and where BizForHer champions are crowned.',
    deliverable: 'Live Zoom presentation',
    accent: '#C4CEDF',
  },
];

const milestones = [
  { date: 'Aug 5, 2025', label: 'Competition Opens', sub: 'Registration & Round 1 case released', color: '#F7B3BC' },
  { date: 'Aug 17, 2025', label: 'Registration Deadline', sub: '11:59 PM IST', color: '#F7B3BC' },
  { date: 'Aug 17, 2025', label: 'Round 1 Submission Deadline', sub: '11:59 PM IST', color: '#F7B3BC' },
  { date: 'Aug 29, 2025', label: 'First Round Results', sub: 'Top 50 teams announced', color: '#E4B8BE' },
  { date: 'Aug 30, 2025', label: 'Semi-finalist Workshop', sub: 'Interactive session with industry mentors', color: '#B8C3BD' },
  { date: 'Sep 8, 2025', label: 'Round 2 Deadline', sub: 'Video + PDF submission', color: '#B8C3BD' },
  { date: 'Sep 17, 2025', label: 'Second Round Results', sub: 'Top 10 finalists announced', color: '#E4B8BE' },
  { date: 'Sep 17–28, 2025', label: 'Grand Finals', sub: 'Live Zoom presentations', color: '#C4CEDF' },
];

const prizeGroups = [
  {
    category: 'EWS / Public School Finalists',
    accent: '#F7B3BC',
    prizes: [
      { place: '1st', cash: '₹2,00,000', extras: ['Wesleyan College $60K scholarship (on admission)', 'Full OYI Entrepreneurs in Action scholarship', 'All Finalist benefits'] },
      { place: '2nd', cash: '₹1,25,000', extras: ['Wesleyan College $60K scholarship', 'All Finalist benefits'] },
      { place: '3rd', cash: '₹75,000', extras: ['Wesleyan College $60K scholarship', 'All Finalist benefits'] },
    ],
  },
  {
    category: 'Non-EWS / Private School Finalists',
    accent: '#C4CEDF',
    prizes: [
      { place: '1st', cash: '₹1,75,000 in OYI waivers', extras: ['FLAME University Summer Symposium full scholarship', 'Wesleyan College $60K scholarship', 'All Finalist benefits'] },
      { place: '2nd', cash: '₹1,25,000 in OYI waivers', extras: ['FLAME University full scholarship', 'All Finalist benefits'] },
      { place: '3rd', cash: '₹1,00,000 in OYI waivers', extras: ['FLAME University full scholarship', 'All Finalist benefits'] },
    ],
  },
];

const universalPrizes = [
  { tier: 'All Finalists (Top 10)', color: '#E4B8BE', perks: ['₹7,00,000 kind prize pool', 'Wesleyan College $60,000 scholarship per student accepted', 'Full OYI Entrepreneurs in Action scholarship', 'Internship opportunities', 'Certificate of Excellence'] },
  { tier: 'All Semi-Finalists (Top 50)', color: '#B8C3BD', perks: ['₹14,00,000 kind prize pool', '75% scholarship for OYI programs (₹12,750 value)', 'Prabhav Scholarships — 5 EWS students', 'Workshop with international business faculty', 'Certificate of Achievement'] },
  { tier: 'All Participants', color: '#F7B3BC', perks: ['Participation certificate', 'National-level recognition', 'Resume-worthy competition experience', 'Access to BizForHer community'] },
];

const rules = [
  { icon: Shield, title: 'Originality', desc: 'Every analysis and recommendation must be your team\'s own original work.' },
  { icon: Users, title: 'Team Composition', desc: 'Teams must consist of 2–4 members, all from the same school, in grades 9–12.' },
  { icon: FileText, title: 'No Plagiarism', desc: 'Any detected plagiarism results in immediate disqualification from all rounds.' },
  { icon: Calendar, title: 'Submission Deadlines', desc: 'Late submissions will not be reviewed under any circumstances.' },
  { icon: Star, title: 'One Team per Member', desc: 'A student may not appear in more than one registered team.' },
  { icon: Trophy, title: 'Judges\' Decision is Final', desc: 'All judging decisions are final and cannot be contested.' },
];

const faqs = [
  { q: 'Is registration free?', a: 'Yes — completely free. There are no fees at any stage of BizForHer.' },
  { q: 'Who is eligible to participate?', a: 'Girls in grades 9–12 at any Indian school (CBSE, ICSE, State Board, or any other curriculum). Teams must have 2–4 members from the same school.' },
  { q: 'Can boys participate?', a: 'BizForHer is exclusively for female students. All team members must identify as girls.' },
  { q: 'What if our team has members from different schools?', a: 'All team members must be enrolled at the same school. Mixed-school teams are not permitted.' },
  { q: 'Do we receive the case before the deadline?', a: 'Yes. Round 1 cases are released when the competition opens. You have the full submission window to work on your presentation.' },
  { q: 'What format should the Round 1 presentation be in?', a: 'A PDF of exactly 15 slides. You will find detailed guidelines in the competition brief released with the case.' },
  { q: 'How are teams evaluated?', a: 'Submissions are judged on problem identification, depth of analysis, feasibility of the proposed solution, presentation clarity, and creativity.' },
  { q: 'What is the workshop for semi-finalists?', a: 'Top 50 teams are invited to an interactive online workshop conducted by international business faculty and industry leaders — designed to sharpen your Round 2 preparation.' },
];

// ── FAQ Accordion ─────────────────────────────────────────────────────────────

function FAQ({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <button
      className="w-full text-left group"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-start justify-between gap-4 py-6" style={{ borderBottom: '1px solid rgba(247,179,188,0.2)' }}>
        <span className="font-serif text-base md:text-lg font-semibold leading-snug" style={{ color: '#4A3535' }}>{q}</span>
        <ChevronDown
          size={18}
          className="flex-shrink-0 mt-1 transition-transform duration-300"
          style={{ color: '#F7B3BC', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </div>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0px', opacity: open ? 1 : 0 }}
      >
        <p className="pb-6 text-sm font-light leading-relaxed" style={{ color: '#6B5858' }}>{a}</p>
      </div>
    </button>
  );
}

// ── Registration Form ─────────────────────────────────────────────────────────

type Member = { name: string; grade: string; email: string };

const emptyMember = (): Member => ({ name: '', grade: '', email: '' });

function RegistrationForm() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Captain / Team basics
  const [teamName, setTeamName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [schoolState, setSchoolState] = useState('');
  const [schoolType, setSchoolType] = useState<'EWS/Public' | 'Non-EWS/Private' | ''>('');
  const [captainName, setCaptainName] = useState('');
  const [captainEmail, setCaptainEmail] = useState('');
  const [captainPhone, setCaptainPhone] = useState('');
  const [captainGrade, setCaptainGrade] = useState('');

  // Extra members
  const [members, setMembers] = useState<Member[]>([emptyMember()]);

  const updateMember = (i: number, field: keyof Member, val: string) => {
    setMembers((prev) => prev.map((m, idx) => idx === i ? { ...m, [field]: val } : m));
  };
  const addMember = () => { if (members.length < 3) setMembers((p) => [...p, emptyMember()]); };
  const removeMember = (i: number) => setMembers((p) => p.filter((_, idx) => idx !== i));

  const handleSubmit = async () => {
    setLoading(true);
    setError('');
    try {
      const payload = {
        team_name: teamName,
        school_name: schoolName,
        school_state: schoolState,
        school_type: schoolType,
        captain_name: captainName,
        captain_email: captainEmail,
        captain_phone: captainPhone,
        captain_grade: captainGrade,
        members: members.filter((m) => m.name.trim()),
        registered_at: new Date().toISOString(),
      };
      const { error: supaErr } = await supabase.from('competition_registrations').insert([payload]);
      if (supaErr) throw supaErr;
      setSubmitted(true);
    } catch (e: unknown) {
      setError((e as Error).message ?? 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputCls = 'w-full px-4 py-3 rounded-2xl text-sm font-light outline-none transition-all duration-200 focus:ring-2 placeholder:opacity-50';
  const inputStyle = { background: 'rgba(243,237,231,0.08)', border: '1px solid rgba(243,237,231,0.18)', color: '#F3EDE7', focusRingColor: '#F7B3BC' };
  const labelCls = 'block text-[10px] font-bold tracking-[0.3em] uppercase mb-2';

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ background: 'rgba(247,179,188,0.15)', border: '1.5px solid rgba(247,179,188,0.5)' }}>
          <CheckCircle2 size={28} style={{ color: '#F7B3BC' }} />
        </div>
        <h3 className="font-serif text-2xl font-bold mb-3" style={{ color: '#F3EDE7' }}>You're registered!</h3>
        <p className="text-sm font-light mb-2" style={{ color: 'rgba(243,237,231,0.65)' }}>
          Team <strong style={{ color: '#F7B3BC' }}>{teamName}</strong> from {schoolName} is officially in BizForHer 2025.
        </p>
        <p className="text-sm font-light" style={{ color: 'rgba(243,237,231,0.5)' }}>
          A confirmation will be sent to {captainEmail}. Check your inbox (and spam folder).
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* Step indicators */}
      <div className="flex items-center justify-center gap-3 mb-10">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300"
              style={{
                background: step >= s ? 'linear-gradient(135deg, #F7B3BC, #E4B8BE)' : 'rgba(243,237,231,0.1)',
                color: step >= s ? '#4A3535' : 'rgba(243,237,231,0.35)',
                border: step === s ? '2px solid #F7B3BC' : '1px solid rgba(243,237,231,0.15)',
              }}
            >
              {s}
            </div>
            {s < 3 && <div className="w-10 h-px" style={{ background: step > s ? 'rgba(247,179,188,0.6)' : 'rgba(243,237,231,0.15)' }} />}
          </div>
        ))}
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <h3 className="font-serif text-xl font-bold mb-6" style={{ color: '#F3EDE7' }}>Team Details</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls} style={{ color: 'rgba(243,237,231,0.5)' }}>Team Name *</label>
              <input className={inputCls} style={inputStyle} placeholder="e.g. The Founders" value={teamName} onChange={(e) => setTeamName(e.target.value)} />
            </div>
            <div>
              <label className={labelCls} style={{ color: 'rgba(243,237,231,0.5)' }}>School Name *</label>
              <input className={inputCls} style={inputStyle} placeholder="Full school name" value={schoolName} onChange={(e) => setSchoolName(e.target.value)} />
            </div>
            <div>
              <label className={labelCls} style={{ color: 'rgba(243,237,231,0.5)' }}>State *</label>
              <input className={inputCls} style={inputStyle} placeholder="e.g. Maharashtra" value={schoolState} onChange={(e) => setSchoolState(e.target.value)} />
            </div>
            <div>
              <label className={labelCls} style={{ color: 'rgba(243,237,231,0.5)' }}>School Category *</label>
              <div className="flex gap-3 mt-1">
                {(['EWS/Public', 'Non-EWS/Private'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setSchoolType(t)}
                    className="flex-1 py-3 rounded-2xl text-xs font-semibold tracking-wide transition-all duration-200"
                    style={{
                      background: schoolType === t ? 'rgba(247,179,188,0.2)' : 'rgba(243,237,231,0.06)',
                      border: `1px solid ${schoolType === t ? '#F7B3BC' : 'rgba(243,237,231,0.18)'}`,
                      color: schoolType === t ? '#F7B3BC' : 'rgba(243,237,231,0.45)',
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button
              onClick={() => { if (teamName && schoolName && schoolState && schoolType) setStep(2); else setError('Please fill all required fields.'); }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #F7B3BC, #E4B8BE)', color: '#4A3535' }}
            >
              Continue <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <h3 className="font-serif text-xl font-bold mb-6" style={{ color: '#F3EDE7' }}>Team Captain</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className={labelCls} style={{ color: 'rgba(243,237,231,0.5)' }}>Full Name *</label>
              <input className={inputCls} style={inputStyle} placeholder="Captain's full name" value={captainName} onChange={(e) => setCaptainName(e.target.value)} />
            </div>
            <div>
              <label className={labelCls} style={{ color: 'rgba(243,237,231,0.5)' }}>Email Address *</label>
              <input type="email" className={inputCls} style={inputStyle} placeholder="captain@email.com" value={captainEmail} onChange={(e) => setCaptainEmail(e.target.value)} />
            </div>
            <div>
              <label className={labelCls} style={{ color: 'rgba(243,237,231,0.5)' }}>Phone Number *</label>
              <input type="tel" className={inputCls} style={inputStyle} placeholder="+91 00000 00000" value={captainPhone} onChange={(e) => setCaptainPhone(e.target.value)} />
            </div>
            <div>
              <label className={labelCls} style={{ color: 'rgba(243,237,231,0.5)' }}>Grade *</label>
              <div className="flex gap-2 flex-wrap mt-1">
                {['9', '10', '11', '12'].map((g) => (
                  <button key={g} type="button"
                    onClick={() => setCaptainGrade(g)}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
                    style={{
                      background: captainGrade === g ? 'rgba(247,179,188,0.2)' : 'rgba(243,237,231,0.06)',
                      border: `1px solid ${captainGrade === g ? '#F7B3BC' : 'rgba(243,237,231,0.18)'}`,
                      color: captainGrade === g ? '#F7B3BC' : 'rgba(243,237,231,0.45)',
                    }}
                  >
                    Grade {g}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-6">
            <button onClick={() => setStep(1)} className="text-sm font-medium transition-colors" style={{ color: 'rgba(243,237,231,0.45)' }}>← Back</button>
            <button
              onClick={() => { if (captainName && captainEmail && captainGrade) setStep(3); else setError('Please fill all required fields.'); }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #F7B3BC, #E4B8BE)', color: '#4A3535' }}
            >
              Continue <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif text-xl font-bold" style={{ color: '#F3EDE7' }}>Other Team Members</h3>
            <span className="text-xs font-light" style={{ color: 'rgba(243,237,231,0.4)' }}>{members.length}/3 added</span>
          </div>
          {members.map((m, i) => (
            <div key={i} className="rounded-2xl p-5 relative" style={{ background: 'rgba(243,237,231,0.05)', border: '1px solid rgba(243,237,231,0.12)' }}>
              <div className="text-[10px] font-bold tracking-[0.3em] uppercase mb-4" style={{ color: 'rgba(247,179,188,0.6)' }}>Member {i + 2}</div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className={labelCls} style={{ color: 'rgba(243,237,231,0.4)' }}>Full Name</label>
                  <input className={inputCls} style={inputStyle} placeholder="Team member name" value={m.name} onChange={(e) => updateMember(i, 'name', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls} style={{ color: 'rgba(243,237,231,0.4)' }}>Email</label>
                  <input type="email" className={inputCls} style={inputStyle} placeholder="member@email.com" value={m.email} onChange={(e) => updateMember(i, 'email', e.target.value)} />
                </div>
                <div>
                  <label className={labelCls} style={{ color: 'rgba(243,237,231,0.4)' }}>Grade</label>
                  <input className={inputCls} style={inputStyle} placeholder="9, 10, 11, or 12" value={m.grade} onChange={(e) => updateMember(i, 'grade', e.target.value)} />
                </div>
              </div>
              {members.length > 1 && (
                <button onClick={() => removeMember(i)} className="absolute top-4 right-4 text-xs transition-opacity opacity-40 hover:opacity-80" style={{ color: '#F7B3BC' }}>Remove</button>
              )}
            </div>
          ))}
          {members.length < 3 && (
            <button onClick={addMember} className="text-sm font-medium transition-opacity opacity-60 hover:opacity-100" style={{ color: '#F7B3BC' }}>
              + Add another member
            </button>
          )}
          {error && <p className="text-xs font-light" style={{ color: '#F7B3BC' }}>{error}</p>}
          <div className="flex justify-between mt-6">
            <button onClick={() => setStep(2)} className="text-sm font-medium transition-colors" style={{ color: 'rgba(243,237,231,0.45)' }}>← Back</button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ background: 'linear-gradient(135deg, #F7B3BC, #E4B8BE)', color: '#4A3535' }}
            >
              {loading ? <><Loader2 size={14} className="animate-spin" /> Registering…</> : <>Submit Registration <ArrowRight size={14} /></>}
            </button>
          </div>
        </div>
      )}

      {error && step !== 3 && (
        <p className="text-xs font-light mt-3 text-right" style={{ color: '#F7B3BC' }}>{error}</p>
      )}
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

const Competition = () => {
  const heroRef = useReveal(0.05);
  const overviewRef = useReveal();
  const roundsRef = useReveal(0.05);
  const timelineRef = useReveal(0.05);
  const prizesRef = useReveal(0.1);
  const rulesRef = useReveal(0.1);
  const faqRef = useReveal(0.1);
  const registerRef = useReveal(0.1);

  return (
    <PageLayout>

      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #F9DDED 0%, #F3EDE7 40%, #EDE4DD 100%)' }}
      >
        <div className="orb w-[600px] h-[600px] top-[-80px] left-[-160px] animate-drift"
          style={{ background: 'radial-gradient(circle, #F7B3BC55, transparent 70%)' }} />
        <div className="orb w-[450px] h-[450px] bottom-[-60px] right-[-100px] animate-float-slow"
          style={{ background: 'radial-gradient(circle, #C4CEDF55, transparent 70%)' }} />

        {/* Watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
          <span className="font-serif font-black text-[clamp(60px,16vw,240px)] leading-none tracking-tighter opacity-[0.06] text-rose-dark whitespace-nowrap">
            COMPETE
          </span>
        </div>

        <div ref={heroRef} className="section-reveal relative z-10 text-center px-6 max-w-5xl mx-auto pt-28">
          <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-6" style={{ color: '#8B6B6B' }}>
            BizForHer — National Case Competition 2025
          </p>

          <h1 className="mb-8" style={{ lineHeight: 1.06 }}>
            <span className="block font-serif font-bold tracking-tight"
              style={{ fontSize: 'clamp(52px, 8vw, 110px)', color: '#5C3535', letterSpacing: '-0.02em', lineHeight: 1 }}>
              Compete.
            </span>
            <span className="block font-serif font-light italic"
              style={{ fontSize: 'clamp(48px, 7.5vw, 104px)', color: '#B89090', letterSpacing: '-0.01em', lineHeight: 1.05 }}>
              Create.
            </span>
            <span className="block font-serif font-bold tracking-tight"
              style={{ fontSize: 'clamp(52px, 8vw, 110px)', color: '#5C3535', letterSpacing: '-0.02em', lineHeight: 1 }}>
              Conquer.
            </span>
          </h1>

          <p className="max-w-lg mx-auto text-base md:text-lg font-light leading-relaxed mb-12" style={{ color: '#6B5858' }}>
            India's premier business case competition for high school girls. Three rounds, real cases,
            prizes worth ₹25 lakhs — and a chance to change your trajectory.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a href="#register"
              className="group relative px-10 py-4 rounded-full bg-rose-dark text-cream text-sm font-semibold tracking-widest uppercase overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ boxShadow: '0 8px 30px rgba(74,53,53,0.2)' }}>
              <span className="relative z-10">Register Now</span>
              <div className="absolute inset-0 bg-rose-mid opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a href="#timeline"
              className="px-10 py-4 rounded-full border text-rose-mid text-sm font-medium tracking-widest uppercase hover:border-rose-dark hover:text-rose-dark transition-all duration-300"
              style={{ borderColor: 'rgba(184,144,144,0.6)' }}>
              View Timeline
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-10">
            {[
              { num: '₹25L+', label: 'In Prizes' },
              { num: '3', label: 'Rounds' },
              { num: 'Grades 9–12', label: 'Eligibility' },
              { num: 'Free', label: 'Registration' },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div className="font-serif text-2xl md:text-3xl font-bold text-rose-dark">{num}</div>
                <div className="text-xs text-rose-light tracking-widest uppercase mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <a href="#overview"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-rose-light animate-bounce"
          aria-label="Scroll down">
          <span className="text-xs tracking-widest uppercase font-light">Explore</span>
          <ChevronDown size={14} />
        </a>
      </section>

      {/* ── Marquee ──────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-7 flex items-center" style={{ background: '#F7B3BC' }}>
        <div className="marquee-track flex items-center gap-10">
          {Array(2).fill(['Case Analysis', 'Strategic Thinking', 'Team Collaboration', 'Live Finals', 'Real Cases', 'Prizes Worth ₹25 Lakhs', 'Top 50 Workshop', 'Scholarships', 'National Stage', 'BizForHer 2025']).flat().map((word, i) => (
            <span key={i} className="flex items-center gap-10 whitespace-nowrap">
              <span className="font-serif italic text-lg font-medium text-cream/90 tracking-wide">{word}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cream/50 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>

      {/* ── Overview ─────────────────────────────────────────────────────────── */}
      <section id="overview" className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(180deg, #F9DDED 0%, #F3EDE7 100%)' }}>
        <div className="orb w-[400px] h-[400px] top-0 right-[-80px] opacity-40"
          style={{ background: 'radial-gradient(circle, #F9DDED70, transparent 70%)' }} />

        <div ref={overviewRef} className="section-reveal max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-5" style={{ color: '#7A8F8A' }}>About the Competition</p>
              <h2 className="font-serif text-[clamp(34px,4vw,56px)] font-bold leading-tight text-rose-dark mb-6">
                A national stage built<br />
                <span className="italic font-light" style={{ color: '#B89090' }}>for bold thinkers.</span>
              </h2>
              <div className="space-y-4 text-base font-light leading-relaxed" style={{ color: '#5C4A4A' }}>
                <p>
                  BizForHer is a national business consulting case competition designed to spotlight innovative solutions
                  to real business challenges — with the core mission of empowering high school girls and helping them
                  recognise their entrepreneurial potential.
                </p>
                <p>
                  Participants register in teams of 2–4. Each team receives the same case — a real Indian business
                  scenario — and has a window to submit their strategic analysis. The best advance through semi-finals
                  and, eventually, a live final in front of industry judges.
                </p>
              </div>
            </div>

            <div className="space-y-8 pt-2">
              <blockquote className="font-serif text-[clamp(18px,2vw,22px)] italic leading-relaxed" style={{ color: '#5C4A4A' }}>
                "The top 50 teams attend an interactive workshop. The top 10 compete live on Zoom. All participants leave with skills no classroom can teach."
              </blockquote>

              <div className="relative h-px w-full overflow-hidden rounded-full" style={{ background: 'rgba(196,206,223,0.25)' }}>
                <div className="about-line-sweep absolute inset-y-0 left-0 w-1/2 rounded-full"
                  style={{ background: 'linear-gradient(to right, transparent, #B8C3BD, #C4CEDF, transparent)' }} />
              </div>

              <div className="grid grid-cols-2 gap-6 pt-2">
                {[
                  { val: 'Open to All India', sub: 'All states, all boards' },
                  { val: 'Grades 9–12', sub: 'Girls only' },
                  { val: '2–4 Members', sub: 'Per team' },
                  { val: '3 Rounds', sub: 'Preliminary → Semi → Final' },
                ].map(({ val, sub }) => (
                  <div key={val}>
                    <div className="font-serif text-xl font-bold text-rose-dark">{val}</div>
                    <div className="text-xs tracking-widest uppercase mt-0.5" style={{ color: '#7A8F8A' }}>{sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Rounds ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #EDE4DD 100%)' }}>
        <div className="orb w-[500px] h-[500px] top-0 right-[-180px] opacity-30"
          style={{ background: 'radial-gradient(circle, #C4CEDF, transparent 70%)' }} />

        <div className="relative max-w-6xl mx-auto px-6 md:px-16 pt-28 pb-8">
          <div ref={roundsRef} className="section-reveal text-center mb-20">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>Competition Structure</p>
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold" style={{ color: '#4A3535' }}>
              Three rounds.
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> One champion.</span>
            </h2>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 md:px-16 pb-28">
          {rounds.map(({ number, category, title, dates, desc, deliverable, accent }, i) => {
            const isRight = i % 2 !== 0;
            return (
              <div key={i} className="group py-12 md:py-16 relative"
                style={{ borderBottom: `1px solid ${accent}35` }}>
                <div className={`flex flex-col ${isRight ? 'md:flex-row-reverse' : 'md:flex-row'} items-start md:items-center gap-6 md:gap-16`}>
                  <div aria-hidden className="flex-shrink-0 select-none leading-none"
                    style={{
                      fontSize: 'clamp(72px, 10vw, 120px)',
                      color: `${accent}50`,
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 900,
                      letterSpacing: '-0.04em',
                      lineHeight: 1,
                      minWidth: '130px',
                      textAlign: isRight ? 'right' : 'left',
                    }}>
                    {number}
                  </div>

                  <div className={`flex-1 ${isRight ? 'md:text-right' : ''}`}>
                    <div className={`flex items-center gap-3 mb-5 ${isRight ? 'md:flex-row-reverse md:justify-start' : ''}`}>
                      <span className="text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full"
                        style={{ background: `${accent}20`, color: accent }}>
                        {category}
                      </span>
                      <div className="h-px w-10 transition-all duration-500 group-hover:w-16"
                        style={{ background: `${accent}70` }} />
                    </div>

                    <h3 className="font-serif font-bold leading-tight mb-3"
                      style={{ fontSize: 'clamp(22px, 3vw, 40px)', color: '#4A3535' }}>
                      {title}
                    </h3>

                    <p className="text-sm font-medium mb-4" style={{ color: accent }}>{dates}</p>

                    <p className="text-sm md:text-base font-light leading-relaxed mb-5"
                      style={{ color: '#6B5858', maxWidth: '480px', marginLeft: isRight ? 'auto' : undefined }}>
                      {desc}
                    </p>

                    <div className={`inline-flex items-center gap-2 text-xs font-semibold tracking-wide ${isRight ? '' : ''}`}
                      style={{ color: '#7A8F8A' }}>
                      <FileText size={12} style={{ color: accent }} />
                      Deliverable: {deliverable}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────────────── */}
      <section id="timeline" className="relative pt-28 pb-20 overflow-hidden" style={{ background: '#F3EDE7' }}>
        <div className="orb w-[500px] h-[300px] top-0 right-0 opacity-50"
          style={{ background: 'radial-gradient(ellipse, #F7B3BC18, transparent 70%)' }} />

        <div ref={timelineRef} className="section-reveal max-w-5xl mx-auto px-6 md:px-16">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-5" style={{ color: '#F7B3BC' }}>Key Dates</p>
            <h2 className="font-serif text-[clamp(36px,5vw,68px)] font-bold leading-tight" style={{ color: '#4A3535' }}>
              Competition{' '}
              <span className="italic font-light" style={{ color: '#F7B3BC' }}>Timeline</span>
            </h2>
            <p className="text-base font-light mt-5 max-w-lg mx-auto leading-relaxed" style={{ color: '#8B6B6B' }}>
              Every milestone you need to know — mark your calendar and stay ahead.
            </p>
          </div>

          {/* Desktop alternating timeline */}
          <div className="relative hidden md:block">
            <div className="absolute left-1/2 top-0 bottom-0"
              style={{ width: '1px', background: 'linear-gradient(to bottom, transparent 0%, #F7B3BC 5%, #F7B3BC 95%, transparent 100%)', transform: 'translateX(-50%)' }} />

            <div className="space-y-0">
              {milestones.map(({ date, label, sub, color }, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <div key={i} className="relative flex items-center min-h-[110px]">
                    <div className="timeline-circle-pulse absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-sm"
                      style={{ background: '#F3EDE7', border: `2px solid ${color}`, animationDelay: `${i * 0.4}s` }}>
                      <div className="w-3 h-3 rounded-full" style={{ background: color }} />
                    </div>

                    <div className={`w-1/2 flex items-center ${isLeft ? 'pr-20 justify-end' : 'pl-20 justify-start'}`}>
                      {isLeft ? (
                        <div className="text-right max-w-[240px]">
                          <p className="font-serif text-lg font-semibold mb-1" style={{ color: '#4A3535' }}>{label}</p>
                          <p className="text-xs font-light" style={{ color: '#8B6B6B' }}>{sub}</p>
                        </div>
                      ) : (
                        <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold" style={{ background: `${color}20`, color: '#4A3535' }}>{date}</span>
                      )}
                    </div>

                    <div className={`w-1/2 flex items-center ${!isLeft ? 'pl-20 justify-start' : 'pl-20 justify-start'}`}>
                      {!isLeft ? (
                        <div className="max-w-[240px]">
                          <p className="font-serif text-lg font-semibold mb-1" style={{ color: '#4A3535' }}>{label}</p>
                          <p className="text-xs font-light" style={{ color: '#8B6B6B' }}>{sub}</p>
                        </div>
                      ) : (
                        <span className="inline-block px-4 py-2 rounded-full text-xs font-semibold" style={{ background: `${color}20`, color: '#4A3535' }}>{date}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden space-y-0">
            {milestones.map(({ date, label, sub, color }, i) => (
              <div key={i} className="flex gap-5 py-5 border-b last:border-0" style={{ borderColor: '#F7B3BC30' }}>
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: '#F3EDE7', border: `1.5px solid ${color}` }}>
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 mt-2" style={{ background: `${color}40`, minHeight: '28px' }} />
                  )}
                </div>
                <div className="pb-4 flex-1">
                  <p className="text-xs font-semibold px-2 py-0.5 rounded-full inline-block mb-2" style={{ background: `${color}20`, color: '#4A3535' }}>{date}</p>
                  <p className="font-serif text-base font-semibold mb-0.5" style={{ color: '#4A3535' }}>{label}</p>
                  <p className="text-xs font-light" style={{ color: '#8B6B6B' }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prizes ───────────────────────────────────────────────────────────── */}
      <section id="prizes" className="relative pt-24 pb-32 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #F9DDED 50%, #F3EDE7 100%)' }}>
        <div className="orb w-[500px] h-[500px] bottom-0 right-[-100px] opacity-25"
          style={{ background: 'radial-gradient(circle, #F9DDED70, transparent 70%)' }} />

        <div ref={prizesRef} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-20">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>Prizes & Scholarships</p>
            <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-bold text-rose-dark">
              Prizes worth
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> ₹25 Lakhs</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-sm font-light leading-relaxed" style={{ color: '#6B5858' }}>
              Cash prizes, university scholarships, program grants, and life-changing opportunities —
              for every level of participant.
            </p>
          </div>

          {/* EWS and Non-EWS grids */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {prizeGroups.map(({ category, accent, prizes }) => (
              <div key={category} className="rounded-3xl overflow-hidden"
                style={{ border: `1px solid ${accent}40` }}>
                <div className="px-7 py-5"
                  style={{ background: `linear-gradient(135deg, ${accent}20, ${accent}08)` }}>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: accent }}>{category}</p>
                  <h3 className="font-serif text-xl font-bold" style={{ color: '#4A3535' }}>Top 5 Finalists</h3>
                </div>
                <div className="divide-y p-2" style={{ borderColor: `${accent}15` }}>
                  {prizes.map(({ place, cash, extras }) => (
                    <div key={place} className="px-5 py-5 rounded-2xl" style={{ borderColor: `${accent}15` }}>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold tracking-[0.3em] uppercase" style={{ color: accent }}>{place} Place</span>
                        <span className="font-serif text-lg font-bold" style={{ color: '#4A3535' }}>{cash}</span>
                      </div>
                      <div className="space-y-1.5">
                        {extras.map((e) => (
                          <div key={e} className="flex items-start gap-2">
                            <div className="w-1 h-1 rounded-full flex-shrink-0 mt-2" style={{ background: accent }} />
                            <span className="text-xs font-light" style={{ color: '#6B5858' }}>{e}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Universal tiers */}
          <div className="grid md:grid-cols-3 gap-6">
            {universalPrizes.map(({ tier, color, perks }) => (
              <div key={tier} className="rounded-3xl p-7 hover-lift"
                style={{ background: `linear-gradient(145deg, ${color}18, ${color}06)`, border: `1px solid ${color}35` }}>
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3" style={{ color }}>{tier}</p>
                <div className="space-y-2.5 mt-4">
                  {perks.map((perk) => (
                    <div key={perk} className="flex items-start gap-2.5">
                      <CheckCircle2 size={13} style={{ color, flexShrink: 0, marginTop: 1 }} />
                      <span className="text-xs font-light leading-relaxed" style={{ color: '#5C4A4A' }}>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rules & Eligibility ───────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden" style={{ background: '#F3EDE7' }}>
        <div ref={rulesRef} className="section-reveal max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>Rules & Eligibility</p>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold" style={{ color: '#4A3535' }}>
              What you need
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> to know</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Eligibility */}
            <div className="rounded-3xl p-8"
              style={{ background: 'linear-gradient(145deg, #F7B3BC18, #F7B3BC06)', border: '1px solid rgba(247,179,188,0.3)' }}>
              <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-5" style={{ color: '#F7B3BC' }}>Eligibility</p>
              <div className="space-y-3.5">
                {[
                  'Girls in Grades 9–12 at any Indian school',
                  'Teams of 2–4 members from the same school',
                  'Any curriculum — CBSE, ICSE, State Board, IB, IGCSE',
                  'Open to all states across India',
                  'No prior business knowledge required',
                  'Free to register — no participation fee',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={14} style={{ color: '#F7B3BC', flexShrink: 0, marginTop: 2 }} />
                    <span className="text-sm font-light" style={{ color: '#5C4A4A' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules grid */}
            <div className="grid grid-cols-2 gap-4">
              {rules.map(({ icon: Icon, title, desc }, i) => (
                <div key={i} className="rounded-2xl p-5 hover-lift"
                  style={{ background: `linear-gradient(145deg, #C4CEDF14, #C4CEDF06)`, border: '1px solid rgba(196,206,223,0.3)' }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mb-3"
                    style={{ background: 'rgba(196,206,223,0.2)' }}>
                    <Icon size={14} style={{ color: '#C4CEDF' }} strokeWidth={1.8} />
                  </div>
                  <h3 className="font-serif text-sm font-bold mb-1.5" style={{ color: '#4A3535' }}>{title}</h3>
                  <p className="text-xs font-light leading-relaxed" style={{ color: '#6B5858' }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #F3EDE7 0%, #F9DDED 100%)' }}>
        <div className="orb w-[400px] h-[400px] bottom-0 left-[-80px] opacity-30"
          style={{ background: 'radial-gradient(circle, #B8C3BD55, transparent 70%)' }} />

        <div ref={faqRef} className="section-reveal max-w-3xl mx-auto px-6 md:px-16">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-4" style={{ color: '#7A8F8A' }}>FAQs</p>
            <h2 className="font-serif text-[clamp(30px,4vw,52px)] font-bold" style={{ color: '#4A3535' }}>
              Questions &
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> answers</span>
            </h2>
          </div>

          <div>
            {faqs.map((item, i) => (
              <FAQ key={i} {...item} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm font-light mb-4" style={{ color: '#8B6B6B' }}>Still have a question?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="mailto:info@bizforher.in"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{ background: 'rgba(247,179,188,0.12)', border: '1px solid rgba(247,179,188,0.3)', color: '#4A3535' }}>
                info@bizforher.in
              </a>
              <a href="https://chat.whatsapp.com/LrvbuTaifRg9TbSuMq9pgU" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{ background: 'rgba(184,195,189,0.12)', border: '1px solid rgba(184,195,189,0.3)', color: '#4A3535' }}>
                <MessageCircle size={13} /> WhatsApp Community
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Register ─────────────────────────────────────────────────────────── */}
      <section id="register" className="relative overflow-hidden">
        <div className="relative px-6 md:px-16 pt-24 pb-28 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #2D2320 0%, #3A2E2B 40%, #2A2825 100%)' }}>
          <div className="orb w-[700px] h-[700px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10"
            style={{ background: 'radial-gradient(circle, #F7B3BC, transparent 60%)' }} />
          <div className="orb w-[300px] h-[300px] top-0 right-0 opacity-[0.07]"
            style={{ background: 'radial-gradient(circle, #C4CEDF, transparent 60%)' }} />

          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden" aria-hidden>
            <span className="font-serif font-black text-[clamp(60px,16vw,200px)] leading-none tracking-tighter whitespace-nowrap"
              style={{ color: 'rgba(247,179,188,0.04)' }}>
              REGISTER
            </span>
          </div>

          <div ref={registerRef} className="section-reveal relative z-10 max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
              {/* Left — copy */}
              <div className="lg:pt-4">
                <p className="text-xs font-bold tracking-[0.4em] uppercase mb-6" style={{ color: '#F7B3BC' }}>
                  BizForHer 2025
                </p>
                <h2 className="font-serif leading-tight mb-6" style={{ fontSize: 'clamp(32px, 4.5vw, 60px)', color: '#F3EDE7', fontWeight: 700 }}>
                  Your seat at<br />
                  <span className="italic font-light" style={{ color: '#F7B3BC' }}>the table awaits.</span>
                </h2>
                <p className="text-sm font-light leading-relaxed mb-8" style={{ color: 'rgba(243,237,231,0.6)' }}>
                  Register your team below to secure your spot in BizForHer 2025.
                </p>

                <div className="space-y-4 mb-10">
                  {[
                    { label: 'Registration Deadline', val: 'Aug 17, 2025' },
                    { label: 'Round 1 Opens', val: 'Aug 5, 2025' },
                    { label: 'Team Size', val: '2–4 members' },
                    { label: 'Registration Fee', val: 'Free' },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex items-center justify-between py-3"
                      style={{ borderBottom: '1px solid rgba(243,237,231,0.08)' }}>
                      <span className="text-xs font-light" style={{ color: 'rgba(243,237,231,0.45)' }}>{label}</span>
                      <span className="text-sm font-semibold" style={{ color: '#F3EDE7' }}>{val}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right — form */}
              <div className="rounded-3xl p-8 md:p-10"
                style={{ background: 'rgba(243,237,231,0.05)', border: '1px solid rgba(243,237,231,0.1)' }}>
                <RegistrationForm />
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
};

export default Competition;
