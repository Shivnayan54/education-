import { motion } from 'framer-motion';
import { Sparkles, Send, Flame, Star, CheckCircle2, Bot } from 'lucide-react';

export default function HeroAICard() {
  const subjects = [
    { icon: '⚛️', name: 'Physics', prompt: 'Newton\'s Laws & Gravity' },
    { icon: '📐', name: 'Mathematics', prompt: 'Calculus & Vectors' },
    { icon: '🧪', name: 'Chemistry', prompt: 'Organic Reaction Mechanisms' },
    { icon: '🌱', name: 'Biology', prompt: 'NCERT Photosynthesis & Genetics' },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      
      {/* Ambient Radial Halo */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-600/30 via-violet-600/20 to-pink-600/20 rounded-3xl blur-3xl -z-10 opacity-70 pointer-events-none" />

      {/* Floating Badge 1: 7-Day Streak */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-5 -left-3 sm:-left-5 z-20 bg-[#161D2F] light:bg-white text-white light:text-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-white/15 light:border-slate-200 flex items-center gap-2.5 text-xs font-black backdrop-blur-xl"
      >
        <span className="w-6 h-6 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center text-xs">
          🔥
        </span>
        <span>7 Day Streak</span>
      </motion.div>

      {/* Floating Badge 2: Progress */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -bottom-5 -right-3 sm:-right-4 z-20 bg-[#161D2F] light:bg-white text-white light:text-slate-900 px-4 py-2 rounded-2xl shadow-xl border border-white/15 light:border-slate-200 flex items-center gap-2.5 text-xs font-black backdrop-blur-xl"
      >
        <span className="w-6 h-6 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs">
          ✓
        </span>
        <span>87% Weekly Goal ⚡</span>
      </motion.div>

      {/* Floating Badge 3: Quiz Score */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-5 -left-2 sm:-left-4 z-20 bg-[#161D2F] light:bg-white text-white light:text-slate-900 px-3.5 py-2 rounded-2xl shadow-xl border border-white/15 light:border-slate-200 flex items-center gap-2 text-xs font-black backdrop-blur-xl"
      >
        <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        <span>Score: 92% ⭐</span>
      </motion.div>

      {/* Main Bento AI Card */}
      <div className="bg-[#121827]/90 light:bg-white/95 backdrop-blur-2xl border border-white/15 light:border-slate-200/90 rounded-3xl shadow-2xl p-6 sm:p-7 space-y-5">
        
        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 light:border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base text-white light:text-slate-900">
                  Learnova AI Tutor
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Personalized 24/7 concept breakdown
              </p>
            </div>
          </div>

          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
        </div>

        {/* AI Message Bubble */}
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5 shadow-md">
              AI
            </div>
            <div className="bg-[#182138] light:bg-slate-50 p-4 rounded-2xl rounded-tl-sm text-xs sm:text-sm text-slate-200 light:text-slate-800 leading-relaxed border border-white/10 light:border-slate-200">
              <p className="font-bold text-white light:text-slate-900">
                👋 Hello! What concept would you like to master today?
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Pick a subject below or ask any physics, math, or chemistry question with step-by-step formulas!
              </p>
            </div>
          </div>

          {/* Subject Pills */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {subjects.map((sub) => (
              <div
                key={sub.name}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/5 light:bg-slate-50 hover:bg-white/10 light:hover:bg-indigo-50 border border-white/10 light:border-slate-200 hover:border-indigo-500/50 transition-all cursor-pointer group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{sub.icon}</span>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-200 light:text-slate-800 group-hover:text-indigo-400 transition-colors truncate">
                    {sub.name}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {sub.prompt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mock Query Input Bar */}
        <div className="relative pt-1">
          <input
            type="text"
            readOnly
            value="What is Newton's second law of motion?"
            className="w-full bg-[#161E33] light:bg-slate-100 border border-white/10 light:border-slate-300 rounded-2xl py-3 pl-4 pr-12 text-xs sm:text-sm text-slate-200 light:text-slate-800 cursor-default focus:outline-none"
          />
          <button
            type="button"
            className="absolute right-1.5 top-2.5 bottom-1.5 px-3.5 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-xl flex items-center justify-center shadow-md shadow-indigo-600/30"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
