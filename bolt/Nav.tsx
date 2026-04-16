import { useEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <a href="#" className="font-serif text-xl font-bold tracking-widest text-rose-dark uppercase">
          Biz<span className="text-blush">For</span>Her
        </a>

        <div className="hidden md:flex items-center gap-10">
          {['About', 'Competition', 'Timeline', 'Prizes'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-rose-mid hover:text-rose-dark transition-colors duration-200 tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#register"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 bg-rose-dark text-cream hover:bg-rose-mid hover:scale-105"
        >
          Apply Now
        </a>

        <button
          className="md:hidden p-2 text-rose-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1.5">
            <span className={`block h-px bg-rose-dark transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-px bg-rose-dark transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-px bg-rose-dark transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden glass-dark px-6 pb-6 flex flex-col gap-4">
          {['About', 'Competition', 'Timeline', 'Prizes'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-base font-medium text-rose-dark py-1 border-b border-blush/20"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#register"
            className="mt-2 text-center py-3 rounded-full bg-rose-dark text-cream text-sm font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Apply Now
          </a>
        </div>
      )}
    </nav>
  );
}
