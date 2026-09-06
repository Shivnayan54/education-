import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Users, CheckCircle2 } from 'lucide-react';
import HeroAICard from './HeroAICard';

export default function Hero() {
  const avatars = [
    { initials: 'AS', bg: 'bg-indigo-600' },
    { initials: 'PS', bg: 'bg-emerald-600' },
    { initials: 'RV', bg: 'bg-purple-600' },
    { initials: 'KN', bg: 'bg-rose-600' },
    { initials: 'AG', bg: 'bg-amber-600' },
  ];

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>AI-Powered Learning Platform</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Learn Smarter.{' '}
              <span className="text-indigo-600 dark:text-indigo-400">
                Achieve More.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Clear courses by top educators, smart practice question banks, live classes, and an intelligent AI tutor to help you understand every concept.
            </p>

            {/* Clean Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-xs transition-colors"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/ai-tutor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm shadow-xs transition-colors"
              >
                <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Try AI Tutor</span>
              </Link>
            </div>

            {/* Trust Proof */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800">
              <div className="flex items-center -space-x-2">
                {avatars.map((av, idx) => (
                  <div
                    key={idx}
                    className={`w-7 h-7 rounded-full ${av.bg} text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-[#0B0F17] shadow-xs`}
                  >
                    {av.initials}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400 fill-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-slate-800 dark:text-slate-200">4.9/5 Rating</span>
                <span>•</span>
                <span>10,000+ students</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual (5 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5 relative mt-6 lg:mt-0"
          >
            <HeroAICard />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
