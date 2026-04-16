
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogOut, User, BookOpen } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { signOut } from '@/lib/supabase';
import AuthModal from '@/components/Auth/AuthModal';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const location = useLocation();
  const { user, profile } = useAuth();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setUserMenuOpen(false);
  }, [location.pathname]);

  const openAuth = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuth(true);
    setMenuOpen(false);
  };

  const handleSignOut = async () => {
    await signOut();
    setUserMenuOpen(false);
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/competition', label: 'Competition' },
    { to: '/learn', label: 'Courses' },
    { to: '/mentors', label: 'Mentors' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} defaultMode={authMode} />}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'nav-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-xl font-bold tracking-widest text-rose-dark uppercase">
            Biz<span className="text-blush">For</span>Her
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium transition-colors duration-200 tracking-wide ${
                  location.pathname === to ? 'text-rose-dark' : 'text-rose-mid hover:text-rose-dark'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right: CTA / Auth */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:bg-blush/10"
                  style={{ color: '#4A3535', border: '1px solid rgba(247,179,188,0.35)' }}
                >
                  <User size={14} />
                  <span className="max-w-[120px] truncate">
                    {profile?.full_name?.split(' ')[0] ?? user.email?.split('@')[0]}
                  </span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-52 rounded-2xl shadow-xl overflow-hidden z-50"
                    style={{ background: '#FAF5F2', border: '1px solid rgba(247,179,188,0.25)' }}>
                    <div className="px-4 py-3" style={{ borderBottom: '1px solid rgba(247,179,188,0.15)' }}>
                      <p className="text-xs font-semibold" style={{ color: '#4A3535' }}>
                        {profile?.full_name ?? 'My Account'}
                      </p>
                      <p className="text-xs font-light truncate" style={{ color: '#8B6B6B' }}>{user.email}</p>
                    </div>
                    <Link to="/learn"
                      className="flex items-center gap-2.5 px-4 py-3 text-sm font-medium transition-colors hover:bg-blush/10"
                      style={{ color: '#4A3535' }}
                      onClick={() => setUserMenuOpen(false)}>
                      <BookOpen size={14} style={{ color: '#F7B3BC' }} /> My Courses
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-2.5 px-4 py-3 text-sm font-medium transition-colors hover:bg-red-50"
                      style={{ color: '#6B5858' }}
                    >
                      <LogOut size={14} /> Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <button
                  onClick={() => openAuth('login')}
                  className="text-sm font-medium transition-colors duration-200 hover:text-rose-dark"
                  style={{ color: '#6B5858' }}
                >
                  Sign In
                </button>
                <Link
                  to="/competition#register"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 bg-rose-dark text-cream hover:opacity-90 hover:scale-105"
                >
                  Apply Now
                </Link>
              </>
            )}
          </div>

          {/* Mobile hamburger */}
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

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden glass-dark px-6 pb-6 flex flex-col gap-4">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-base font-medium py-1 border-b border-blush/20 ${
                  location.pathname === to ? 'text-rose-dark' : 'text-rose-mid'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            {user ? (
              <div className="mt-1 space-y-2">
                <p className="text-xs font-light" style={{ color: '#8B6B6B' }}>{user.email}</p>
                <button onClick={handleSignOut}
                  className="w-full text-center py-2.5 rounded-full text-sm font-medium"
                  style={{ border: '1px solid rgba(74,53,53,0.2)', color: '#4A3535' }}>
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="mt-1 space-y-2">
                <button onClick={() => openAuth('register')}
                  className="w-full text-center py-3 rounded-full bg-rose-dark text-cream text-sm font-medium">
                  Apply Now
                </button>
                <button onClick={() => openAuth('login')}
                  className="w-full text-center py-2.5 rounded-full text-sm font-medium"
                  style={{ border: '1px solid rgba(74,53,53,0.2)', color: '#4A3535' }}>
                  Sign In
                </button>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
