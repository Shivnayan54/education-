import { motion } from 'framer-motion';
import { Sparkles, Send, Flame, Award, Star, Bot, CheckCircle2, Zap, ArrowRight } from 'lucide-react';

export default function HeroAICard() {
  const subjects = [
    { icon: '📘', name: 'Physics', prompt: 'Explain Newton\'s 2nd Law', color: 'from-blue-500/20 to-indigo-500/20 text-blue-400' },
    { icon: '🧮', name: 'Mathematics', prompt: 'Derivative of sin(x²)', color: 'from-indigo-500/20 to-purple-500/20 text-indigo-400' },
    { icon: '🧪', name: 'Chemistry', prompt: 'How does SN2 reaction work?', color: 'from-purple-500/20 to-pink-500/20 text-purple-400' },
    { icon: '💻', name: 'Computer Science', prompt: 'Explain Binary Search', color: 'from-teal-500/20 to-cyan-500/20 text-teal-400' },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Dynamic Multi-Color Ambient Glow Aura */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/30 via-indigo-500/30 to-purple-600/30 rounded-3xl blur-3xl -z-10 opacity-80 animate-pulse-glow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-2xl -z-10" />

      {/* Floating Badge 1: Top-Left - 7 Day Streak */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-6 -left-3 sm:-left-6 z-20 bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white px-4 py-2 rounded-2xl shadow-xl shadow-orange-500/30 flex items-center gap-2 border border-white/25 text-xs sm:text-sm font-black backdrop-blur-xl"
      >
        <Flame className="w-4 h-4 text-yellow-200 fill-yellow-200 animate-bounce" />
        <span>7 Day Streak 🔥</span>
      </motion.div>

      {/* Floating Badge 2: Top-Right - Progress Goal */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        className="absolute -top-5 -right-3 sm:-right-6 z-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3.5 py-2 rounded-2xl shadow-xl shadow-emerald-500/30 flex items-center gap-2 border border-white/25 text-xs sm:text-sm font-black backdrop-blur-xl"
      >
        <CheckCircle2 className="w-4 h-4 text-emerald-100" />
        <span>87% Weekly Goal ⚡</span>
      </motion.div>

      {/* Floating Badge 3: Bottom-Left - Quiz Score */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
        className="absolute -bottom-6 -left-2 sm:-left-4 z-20 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white px-4 py-2 rounded-2xl shadow-xl shadow-indigo-500/30 flex items-center gap-2 border border-white/25 text-xs sm:text-sm font-black backdrop-blur-xl"
      >
        <Star className="w-4 h-4 text-amber-300 fill-amber-300" />
        <span>Score: 92% (AIR 340) ⭐</span>
      </motion.div>

      {/* Floating Badge 4: Bottom-Right - AI Recommendation */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.8 }}
        className="absolute -bottom-5 -right-2 sm:-right-4 z-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 text-white px-3.5 py-2 rounded-2xl shadow-xl shadow-blue-500/30 flex items-center gap-2 border border-white/25 text-xs sm:text-sm font-black backdrop-blur-xl"
      >
        <Bot className="w-4 h-4 text-cyan-200" />
        <span>AI: Practice Mechanics</span>
      </motion.div>

      {/* Main Glassmorphic Card */}
      <div className="relative bg-white/85 dark:bg-[#0d1222]/90 backdrop-blur-2xl border border-slate-200/90 dark:border-white/15 rounded-3xl shadow-2xl p-5 sm:p-7 overflow-hidden">
        
        {/* Glossy Top highlight */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-80" />

        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30 border border-white/20">
              <Sparkles className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight">
                  AI Study Assistant
                </h3>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-extrabold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live Neural Engine
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                Instant Step-by-Step Problem Solving & Derivations
              </p>
            </div>
          </div>

          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-xs" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-xs" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-xs" />
          </div>
        </div>

        {/* Interaction Body */}
        <div className="py-5 space-y-4">
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white text-xs font-black flex-shrink-0 mt-0.5 shadow-md">
              AI
            </div>
            <div className="bg-slate-100/90 dark:bg-white/5 p-4 rounded-3xl rounded-tl-sm text-xs sm:text-sm text-slate-700 dark:text-slate-200 max-w-[92%] leading-relaxed border border-slate-200/60 dark:border-white/10 backdrop-blur-md">
              <p className="font-semibold text-slate-900 dark:text-white">
                👋 Hello! What concept would you like to master today?
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Choose a subject domain below or type any physics, chemistry, or math question!
              </p>
            </div>
          </div>

          {/* Subject Pills */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {subjects.map((sub) => (
              <div
                key={sub.name}
                className="group flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 border border-slate-200/70 dark:border-white/10 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all duration-200 cursor-pointer shadow-xs"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{sub.icon}</span>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
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

        {/* Interactive Query Input Field */}
        <div className="relative mt-2">
          <input
            type="text"
            readOnly
            value="What is Newton's second law?"
            placeholder="Ask anything (e.g., Explain Doppler effect)..."
            className="w-full bg-slate-100 dark:bg-black/30 border border-slate-200 dark:border-white/15 rounded-2xl py-3.5 pl-4 pr-12 text-xs sm:text-sm text-slate-800 dark:text-slate-200 cursor-default focus:outline-none font-medium"
          />
          <button
            type="button"
            className="absolute right-1.5 top-1.5 bottom-1.5 px-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity shadow-md shadow-indigo-600/30"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
