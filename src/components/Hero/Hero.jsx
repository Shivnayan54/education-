import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Users, BookOpen, ShieldCheck, Zap } from 'lucide-react';
import HeroAICard from './HeroAICard';

export default function Hero() {
  const avatars = [
    { initials: 'AS', bg: 'bg-gradient-to-tr from-blue-600 to-indigo-600' },
    { initials: 'PS', bg: 'bg-gradient-to-tr from-emerald-600 to-teal-600' },
    { initials: 'RV', bg: 'bg-gradient-to-tr from-purple-600 to-pink-600' },
    { initials: 'KN', bg: 'bg-gradient-to-tr from-rose-600 to-red-600' },
    { initials: 'AG', bg: 'bg-gradient-to-tr from-amber-500 to-orange-600' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Multi-Color Ambient Spotlights */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-500/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Shimmering Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-500/10 dark:bg-white/5 border border-indigo-500/30 dark:border-white/10 shadow-lg shadow-indigo-500/5 text-xs sm:text-sm font-extrabold text-indigo-700 dark:text-indigo-300 backdrop-blur-xl">
              <Sparkles className="w-4 h-4 text-indigo-500 animate-spin-slow" />
              <span>Next-Gen AI Educational Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-indigo-500 dark:text-indigo-400 font-black">
                2026 Edition
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12]">
              Learn Smarter.{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                Achieve More.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Personalized courses from India's top educators, smart practice question banks, live concept masterclasses, and an intelligent AI tutor — everything you need to reach your academic dreams.
            </p>

            {/* Glowing CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-black text-sm sm:text-base shadow-xl shadow-indigo-600/35 hover:shadow-indigo-600/50 hover:scale-[1.03] active:scale-100 transition-all duration-200"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/ai-tutor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-300 dark:border-white/15 text-slate-900 dark:text-white font-extrabold text-sm sm:text-base shadow-sm hover:shadow-md backdrop-blur-xl transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                <span>Ask AI Tutor ✨</span>
              </Link>
            </div>

            {/* Trust Proof row */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/70 dark:border-white/10">
              <div className="flex items-center -space-x-2.5">
                {avatars.map((av, idx) => (
                  <div
                    key={idx}
                    className={`w-9 h-9 rounded-full ${av.bg} text-white flex items-center justify-center text-xs font-black border-2 border-white dark:border-[#070913] shadow-md`}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <div className="flex text-amber-400 fill-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-extrabold text-slate-900 dark:text-white">4.9/5 Rating</span>
                <span>•</span>
                <span className="font-medium text-slate-700 dark:text-slate-300">10,000+ students learning smarter</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            <HeroAICard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
