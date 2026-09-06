import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background ambient light effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/20 via-indigo-500/20 to-purple-600/20 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin-slow" />
          <span>Transform Your Academic Future</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
          Your Goals Are Closer{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Than You Think.
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-indigo-100/80 max-w-2xl mx-auto leading-relaxed">
          Start learning smarter today with personalized courses, live masterclasses, AI doubt solving, and structured practice. Join over 10,000+ ambitious students across India.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/login"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-base shadow-xl shadow-indigo-600/30 hover:scale-105 active:scale-100 transition-all duration-200"
          >
            <span>Start Learning Free</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to="/ai-tutor"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-md shadow-lg transition-all duration-200"
          >
            <Sparkles className="w-5 h-5 text-amber-300" />
            <span>Talk to AI Tutor ✨</span>
          </Link>
        </div>

        {/* Trust Points */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-indigo-200/90 font-semibold border-t border-white/10">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Credit Card Required
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-400" /> 100% Free Starter Trial
          </span>
          <span className="flex items-center gap-1.5">
            <HeartHandshake className="w-4 h-4 text-purple-400" /> 24/7 AI Tutor Access
          </span>
        </div>

      </div>
    </section>
  );
}
