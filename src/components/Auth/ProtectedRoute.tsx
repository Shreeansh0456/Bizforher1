import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import AuthModal from './AuthModal';
import { BookOpen, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading, hasCourseAccess } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#F3EDE7' }}>
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-blush border-t-transparent animate-spin" />
          <p className="text-sm font-light" style={{ color: '#8B6B6B' }}>Loading…</p>
        </div>
      </div>
    );
  }

  if (!user || !hasCourseAccess) {
    return (
      <>
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} defaultMode="register" />}

        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
          style={{ background: 'linear-gradient(160deg, #F9DDED 0%, #F3EDE7 60%, #EDE4DD 100%)' }}>
          {/* Orbs */}
          <div className="orb w-[400px] h-[400px] top-0 right-0 opacity-40 animate-drift"
            style={{ background: 'radial-gradient(circle, #F7B3BC55, transparent 70%)' }} />
          <div className="orb w-[300px] h-[300px] bottom-0 left-0 opacity-30"
            style={{ background: 'radial-gradient(circle, #C4CEDF55, transparent 70%)' }} />

          <div className="relative z-10 max-w-md">
            {/* Lock icon */}
            <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
              style={{ background: 'rgba(247,179,188,0.2)', border: '2px solid rgba(247,179,188,0.4)' }}>
              <Lock size={28} style={{ color: '#F7B3BC' }} />
            </div>

            <p className="text-xs font-semibold tracking-[0.4em] uppercase mb-3" style={{ color: '#7A8F8A' }}>
              BizForHer Academy
            </p>
            <h1 className="font-serif text-4xl font-bold mb-4" style={{ color: '#4A3535' }}>
              Courses are free
              <span className="italic font-light" style={{ color: '#7A8F8A' }}> for registered students</span>
            </h1>
            <p className="text-base font-light leading-relaxed mb-8" style={{ color: '#6B5858' }}>
              Create a free BizForHer account to unlock all 6 courses, track your progress, and compete in the case competition.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => setShowAuth(true)}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ background: '#4A3535', color: '#F3EDE7', boxShadow: '0 8px 30px rgba(74,53,53,0.2)' }}
              >
                <BookOpen size={15} /> Register Free <ArrowRight size={14} />
              </button>
              <button
                onClick={() => setShowAuth(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
                style={{ border: '1px solid rgba(74,53,53,0.2)', color: '#4A3535' }}
              >
                Sign in
              </button>
            </div>

          </div>
        </div>
      </>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
