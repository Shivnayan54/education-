import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Users, CheckCircle2, Bot, Play } from 'lucide-react';
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
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      
      {/* Top Ambient Glow Orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-violet-600/15 to-pink-600/15 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Shimmer Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 light:bg-indigo-50 border border-white/15 light:border-indigo-200 text-xs font-bold text-indigo-300 light:text-indigo-700 shadow-lg backdrop-blur-xl">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-spin-slow" />
              <span>Next-Gen AI Educational Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-black">
                Active 2026
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white light:text-slate-900 leading-[1.12]">
              Learn Smarter.{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
                Achieve More.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Personalized courses from India's top educators, smart practice question banks, live masterclasses, and an intelligent AI tutor to help you master any subject.
            </p>

            {/* Glowing CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white font-black text-sm sm:text-base shadow-xl shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.03] active:scale-100 transition-all duration-200"
              >
                <span>Explore 500+ Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/ai-tutor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/5 light:bg-white hover:bg-white/10 light:hover:bg-slate-50 border border-white/15 light:border-slate-300 text-white light:text-slate-900 font-extrabold text-sm sm:text-base shadow-lg backdrop-blur-xl transition-all duration-200"
              >
                <Bot className="w-4 h-4 text-indigo-400" />
                <span>Ask AI Tutor ✨</span>
              </Link>
            </div>

            {/* Social Trust row */}
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-400 border-t border-white/10 light:border-slate-200">
              <div className="flex items-center -space-x-2">
                {avatars.map((av, idx) => (
                  <div
                    key={idx}
                    className={`w-8 h-8 rounded-full ${av.bg} text-white flex items-center justify-center text-[10px] font-black border-2 border-[#090D16] light:border-white shadow-md`}
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
                <span className="font-extrabold text-white light:text-slate-900">4.9/5 Rating</span>
                <span>•</span>
                <span>10,000+ students enrolled</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative mt-8 lg:mt-0"
          >
            <HeroAICard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
