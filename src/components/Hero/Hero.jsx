import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Users, BookOpen, ShieldCheck } from 'lucide-react';
import HeroAICard from './HeroAICard';

export default function Hero() {
  const avatars = [
    { initials: 'AS', bg: 'bg-blue-600' },
    { initials: 'PS', bg: 'bg-emerald-600' },
    { initials: 'RV', bg: 'bg-purple-600' },
    { initials: 'KN', bg: 'bg-rose-600' },
    { initials: 'AG', bg: 'bg-amber-600' },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* Background glowing gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-violet-600/15 to-indigo-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content Column (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/50 border border-violet-200/80 dark:border-violet-800/80 shadow-sm text-xs sm:text-sm font-semibold text-violet-700 dark:text-violet-300">
              <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400 animate-spin-slow" />
              <span>AI-Powered Learning Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400" />
              <span className="text-[11px] uppercase tracking-wider text-violet-500 font-bold">2026 Edition</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Learn Smarter.{' '}
              <span className="bg-gradient-to-r from-blue-700 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Achieve More.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Personalized courses from India's top educators, smart practice question banks, live concept classes, and an intelligent AI tutor — everything you need to crack your exams and master any subject.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-800 hover:to-indigo-800 text-white font-bold text-base shadow-xl shadow-blue-700/25 hover:shadow-indigo-700/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/ai-tutor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:border-violet-500 dark:hover:border-violet-500 text-slate-800 dark:text-slate-100 hover:text-violet-600 dark:hover:text-violet-400 font-bold text-base shadow-sm hover:shadow-md transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span>Ask AI Tutor ✨</span>
              </Link>
            </div>

            {/* Social Trust Proof row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800/80">
              <div className="flex items-center -space-x-2">
                {avatars.map((av, idx) => (
                  <div
                    key={idx}
                    className={`w-8 h-8 rounded-full ${av.bg} text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-slate-900 shadow-sm`}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400 fill-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-slate-800 dark:text-slate-200">4.9/5 Rating</span>
                <span>•</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">10,000+ students enrolled</span>
              </div>
            </div>
          </motion.div>

          {/* Right Hero Visual Column (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <HeroAICard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
