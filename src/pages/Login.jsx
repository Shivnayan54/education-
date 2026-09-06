import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Sparkles, CheckCircle2, Lock, Mail, User, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    targetExam: 'JEE',
    agreeTerms: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      alert('Please fill in your email and password.');
      return;
    }
    if (isSignUp && !formData.name) {
      alert('Please enter your full name.');
      return;
    }

    alert(
      isSignUp
        ? `🎉 Account created successfully for ${formData.name}! Welcome to Learnova.`
        : `👋 Welcome back! Logging in to your Learnova student dashboard.`
    );
    navigate('/dashboard');
  };

  const handleGoogleLogin = () => {
    alert('Google Single Sign-On authenticated! Redirecting to student dashboard...');
    navigate('/dashboard');
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50/70 dark:bg-slate-950/70 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Left Visual Branding Panel (5 cols on lg) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-blue-900 via-indigo-900 to-violet-900 p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
            
            <div className="relative z-10 space-y-6">
              <Link to="/" className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-md">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-2xl font-black tracking-tight">Learnova</span>
              </Link>

              <div className="space-y-2 pt-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                  Unlock Your Full Academic Potential.
                </h2>
                <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
                  Join 10,000+ ambitious students learning with AI assistance, live classes, and NCERT-aligned courses.
                </p>
              </div>

              <div className="space-y-3 pt-4 text-xs text-indigo-100 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>24/7 AI Tutor with step derivations</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>500+ High-Definition Masterclasses</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>All-India Rank Simulated Mock Tests</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10 text-[11px] text-indigo-300">
              © 2026 Learnova Education. All rights reserved.
            </div>
          </div>

          {/* Right Form Panel (7 cols on lg) */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            
            {/* Tab Selector */}
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl mb-8">
              <button
                type="button"
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  !isSignUp
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Log In
              </button>
              <button
                type="button"
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSignUp
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Create Account
              </button>
            </div>

            {/* Header Text */}
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {isSignUp ? 'Join Learnova Today 🚀' : 'Welcome Back Student! 👋'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {isSignUp ? 'Start your 7-day free trial with AI tutor access' : 'Enter your credentials to access your courses'}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                      required={isSignUp}
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Email Address or Mobile
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="student@example.com"
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    Password
                  </label>
                  {!isSignUp && (
                    <button
                      type="button"
                      onClick={() => alert('Password reset link sent to your registered email.')}
                      className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full pl-11 pr-11 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Target Exam / Goal
                  </label>
                  <select
                    name="targetExam"
                    value={formData.targetExam}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none font-semibold"
                  >
                    <option value="JEE">JEE (Main & Advanced)</option>
                    <option value="NEET">NEET (UG Medical)</option>
                    <option value="Class 12">Class 12 CBSE / State Boards</option>
                    <option value="Class 10">Class 10 CBSE Board</option>
                    <option value="CUET">CUET (UG)</option>
                    <option value="SSC">SSC (CGL / CHSL)</option>
                    <option value="Banking">Banking (IBPS / SBI)</option>
                    <option value="Programming">Coding & Python</option>
                  </select>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-extrabold text-sm shadow-xl shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-100 mt-2"
              >
                {isSignUp ? 'Create Free Student Account →' : 'Log In to Classroom →'}
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700" />
              </div>
              <span className="relative bg-white dark:bg-slate-900 px-3 text-xs text-slate-400 uppercase font-semibold">
                Or Continue With
              </span>
            </div>

            {/* Google OAuth Button */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full py-3 rounded-2xl bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-bold flex items-center justify-center gap-2.5 transition-all"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>Continue with Google</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
