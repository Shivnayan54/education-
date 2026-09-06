import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Star, Users, CheckCircle2, ShieldCheck, Play } from 'lucide-react';
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
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-white via-slate-50/50 to-white dark:from-slate-900 dark:via-slate-900/80 dark:to-slate-900 overflow-hidden border-b border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column (7 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Friendly Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800 text-xs font-bold text-blue-700 dark:text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>AI-Powered Learning Platform</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span className="text-[10px] uppercase tracking-wider text-blue-600 font-extrabold">
                Class 8–12 & Exams
              </span>
            </div>

            {/* Main Crisp Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
              Learn Smarter.{' '}
              <span className="text-blue-600 dark:text-blue-400">
                Achieve More.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Structured courses by India's top educators, smart practice question banks, live masterclasses, and an intelligent AI tutor to help you understand every concept and excel in your exams.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/courses"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-100"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/ai-tutor"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-bold text-sm shadow-xs transition-colors"
              >
                <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Ask AI Tutor Free</span>
              </Link>
            </div>

            {/* Social Trust row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center -space-x-2">
                {avatars.map((av, idx) => (
                  <div
                    key={idx}
                    className={`w-8 h-8 rounded-full ${av.bg} text-white flex items-center justify-center text-[10px] font-bold border-2 border-white dark:border-slate-900 shadow-xs`}
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
                <span className="font-bold text-slate-800 dark:text-slate-200">4.9/5 Rating</span>
                <span>•</span>
                <span>10,000+ students learning smarter every day</span>
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
