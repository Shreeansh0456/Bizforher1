import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative py-16 overflow-hidden"
      style={{ background: '#4A3535' }}
    >
      <div
        className="orb w-[400px] h-[400px] bottom-0 right-0 opacity-20"
        style={{ background: 'radial-gradient(circle, #F7B3BC, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 pb-12 border-b border-cream/10">
          <div className="max-w-xs">
            <div className="font-serif text-2xl font-bold tracking-widest text-cream uppercase mb-4">
              Biz<span className="text-blush">For</span>Her
            </div>
            <p className="text-cream/50 text-sm font-light leading-relaxed">
              Empowering the next generation of female founders through competition, mentorship, and community.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
            {[
              {
                heading: 'Competition',
                links: ['About', 'Timeline', 'Prizes', 'FAQs'],
              },
              {
                heading: 'Resources',
                links: ['Mentor Network', 'Alumni Stories', 'Press Kit', 'Blog'],
              },
              {
                heading: 'Connect',
                links: ['Contact Us', 'Partner With Us', 'Sponsor', 'Volunteer'],
              },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <div className="text-xs font-semibold tracking-[0.3em] uppercase text-cream/40 mb-4">{heading}</div>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-cream/60 hover:text-cream transition-colors duration-200 font-light">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-xs font-light tracking-wide">
            2025 BizForHer. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            {[
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' },
              { icon: Mail, href: '#' },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-8 h-8 rounded-full flex items-center justify-center text-cream/40 hover:text-cream hover:bg-cream/10 transition-all duration-200"
              >
                <Icon size={15} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
