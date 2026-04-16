import React, { useState } from 'react';
import { X, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';
import { signIn, signUp } from '@/lib/supabase';

interface AuthModalProps {
  onClose: () => void;
  defaultMode?: 'login' | 'register';
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose }) => {
  const mode = 'login';
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [form, setForm] = useState({
    email: '',
    password: '',
    full_name: '',
    school_name: '',
    grade: '',
    team_name: '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (mode === 'login') {
        await signIn(form.email, form.password);
        onClose();
      } else {
        await signUp(form.email, form.password, {
          full_name: form.full_name,
          school_name: form.school_name,
          grade: form.grade,
          team_name: form.team_name || undefined,
        });
        setSuccess('Account created! Check your email to verify, then log in.');
      }
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(247,179,188,0.08)',
    border: '1px solid rgba(247,179,188,0.3)',
    color: '#4A3535',
    borderRadius: '14px',
    padding: '12px 16px',
    fontSize: '14px',
    fontWeight: 300,
    width: '100%',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#7A8F8A',
    marginBottom: '6px',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-2xl"
        style={{ background: '#FAF5F2', border: '1px solid rgba(247,179,188,0.25)', maxHeight: '90vh', overflowY: 'auto' }}
      >
        {/* Header */}
        <div className="relative px-8 pt-8 pb-6"
          style={{ background: 'linear-gradient(160deg, #F9DDED 0%, #F3EDE7 100%)' }}>
          <div className="orb w-[200px] h-[200px] -top-10 -right-10 opacity-40"
            style={{ background: 'radial-gradient(circle, #F7B3BC55, transparent 70%)' }} />
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center transition-colors hover:bg-black/10"
          >
            <X size={16} style={{ color: '#6B5858' }} />
          </button>
          <div className="relative z-10">
            <div className="font-serif text-xl font-bold tracking-widest uppercase mb-1" style={{ color: '#4A3535' }}>
              Biz<span style={{ color: '#F7B3BC' }}>For</span>Her
            </div>
            <h2 className="font-serif text-2xl font-bold" style={{ color: '#4A3535' }}>
              Welcome back
            </h2>
            <p className="text-sm font-light mt-1" style={{ color: '#6B5858' }}>
              Sign in to access your courses and track your progress.
            </p>
          </div>
        </div>

        <div className="px-8 pb-8 pt-6">

          {error && (
            <div className="mb-4 px-4 py-3 rounded-2xl text-sm font-light"
              style={{ background: 'rgba(247,100,100,0.1)', color: '#c53030', border: '1px solid rgba(247,100,100,0.2)' }}>
              {error}
            </div>
          )}

          {success && (
            <div className="mb-4 px-4 py-3 rounded-2xl text-sm font-light"
              style={{ background: 'rgba(184,195,189,0.2)', color: '#2d6a4f', border: '1px solid rgba(184,195,189,0.4)' }}>
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            <div>
              <label style={labelStyle}>Email Address</label>
              <input type="email" style={inputStyle} placeholder="your@email.com"
                value={form.email} onChange={set('email')} required />
            </div>

            <div>
              <label style={labelStyle}>Password</label>
              <div className="relative">
                <input
                  type={showPass ? 'text' : 'password'}
                  style={{ ...inputStyle, paddingRight: '44px' }}
                  placeholder="••••••••"
                  value={form.password}
                  onChange={set('password')}
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: '#B89090' }}
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed mt-2"
              style={{ background: '#4A3535', color: '#F3EDE7', boxShadow: '0 8px 30px rgba(74,53,53,0.2)' }}
            >
              {loading ? (
                <><Loader2 size={15} className="animate-spin" /> Signing in…</>
              ) : (
                <>Sign In <ArrowRight size={14} /></>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default AuthModal;
