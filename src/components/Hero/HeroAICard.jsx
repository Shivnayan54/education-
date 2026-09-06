import { motion } from 'framer-motion';
import { Sparkles, Send, Flame, Star, CheckCircle2, Bot } from 'lucide-react';

export default function HeroAICard() {
  const subjects = [
    { icon: '⚛️', name: 'Physics', prompt: 'Newton\'s Laws & Gravity', bg: 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300' },
    { icon: '📐', name: 'Mathematics', prompt: 'Calculus & Vectors', bg: 'bg-purple-50 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300' },
    { icon: '🧪', name: 'Chemistry', prompt: 'Organic Mechanisms', bg: 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300' },
    { icon: '🌱', name: 'Biology', prompt: 'NCERT Photosynthesis', bg: 'bg-green-50 dark:bg-green-950/50 text-green-700 dark:text-green-300' },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      
      {/* Floating Badge 1: 7-Day Streak */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -left-3 sm:-left-5 z-20 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700 flex items-center gap-2 text-xs font-bold"
      >
        <span className="w-6 h-6 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center text-xs">
          🔥
        </span>
        <span>7 Day Study Streak</span>
      </motion.div>

      {/* Floating Badge 2: Progress */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -bottom-4 -right-3 sm:-right-4 z-20 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-700 flex items-center gap-2 text-xs font-bold"
      >
        <span className="w-6 h-6 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">
          ✓
        </span>
        <span>87% Syllabus Mastered</span>
      </motion.div>

      {/* Main Crisp Card */}
      <div className="bg-white dark:bg-slate-800/95 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-xl p-6 sm:p-7 space-y-5">
        
        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                  Learnova AI Tutor
                </h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Online
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Step-by-step doubt resolution across all subjects
              </p>
            </div>
          </div>
        </div>

        {/* AI Dialogue Box */}
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5">
              AI
            </div>
            <div className="bg-slate-50 dark:bg-slate-700/50 p-4 rounded-2xl rounded-tl-sm text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed border border-slate-100 dark:border-slate-600">
              <p className="font-bold text-slate-900 dark:text-white">
                👋 Hello! What concept would you like to master today?
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Choose any topic below or ask any physics, chemistry, math, or biology problem:
              </p>
            </div>
          </div>

          {/* Subject Pills */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            {subjects.map((sub) => (
              <div
                key={sub.name}
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-700/40 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/70 dark:border-slate-600/70 hover:border-blue-300 transition-all cursor-pointer group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{sub.icon}</span>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 truncate">
                    {sub.name}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                    {sub.prompt}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Query Input Box */}
        <div className="relative pt-1">
          <input
            type="text"
            readOnly
            value="What is Newton's second law of motion?"
            className="w-full bg-slate-50 dark:bg-slate-700/60 border border-slate-200 dark:border-slate-600 rounded-2xl py-3 pl-4 pr-12 text-xs sm:text-sm text-slate-800 dark:text-slate-200 cursor-default focus:outline-none"
          />
          <button
            type="button"
            className="absolute right-1.5 top-2.5 bottom-1.5 px-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center shadow-sm"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
