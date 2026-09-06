import { motion } from 'framer-motion';
import { Sparkles, Send, Flame, Star, CheckCircle2 } from 'lucide-react';

export default function HeroAICard() {
  const subjects = [
    { icon: '⚛️', name: 'Physics', prompt: 'Newton\'s Laws & Gravity' },
    { icon: '📐', name: 'Mathematics', prompt: 'Calculus & Vectors' },
    { icon: '🧪', name: 'Chemistry', prompt: 'Organic Mechanisms' },
    { icon: '🌱', name: 'Biology', prompt: 'Photosynthesis & Genetics' },
  ];

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      
      {/* Floating Badge 1: 7-Day Streak */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-4 -left-3 sm:-left-5 z-20 bg-white dark:bg-[#151C2C] text-slate-800 dark:text-slate-100 px-3.5 py-1.5 rounded-2xl shadow-md border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2 text-xs font-bold"
      >
        <span className="w-5 h-5 rounded-full bg-orange-100 dark:bg-orange-950/60 flex items-center justify-center text-orange-500 text-xs">
          🔥
        </span>
        <span>7 Day Streak</span>
      </motion.div>

      {/* Floating Badge 2: Progress */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute -bottom-4 -right-3 sm:-right-4 z-20 bg-white dark:bg-[#151C2C] text-slate-800 dark:text-slate-100 px-3.5 py-1.5 rounded-2xl shadow-md border border-slate-200/80 dark:border-slate-700/80 flex items-center gap-2 text-xs font-bold"
      >
        <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xs font-bold">
          ✓
        </span>
        <span>87% Weekly Goal</span>
      </motion.div>

      {/* Main Clean Card */}
      <div className="bg-white dark:bg-[#111724] border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-[0_4px_24px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)] p-6 sm:p-7 space-y-5">
        
        {/* Card Topbar */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-xs">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                AI Study Assistant
              </h3>
              <p className="text-[11px] text-slate-400">
                Always ready to help explain concepts
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Ready
          </span>
        </div>

        {/* AI Dialogue Bubble */}
        <div className="space-y-3">
          <div className="flex gap-2.5 items-start">
            <div className="w-7 h-7 rounded-full bg-indigo-600 text-white flex items-center justify-center text-[10px] font-black flex-shrink-0 mt-0.5 shadow-xs">
              AI
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl rounded-tl-sm text-xs text-slate-700 dark:text-slate-200 leading-relaxed border border-slate-100 dark:border-slate-700/60">
              <p className="font-medium">
                👋 What concept would you like to master today?
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Pick a topic below or type any doubt for simple explanations.
              </p>
            </div>
          </div>

          {/* Clean Subject Pills */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {subjects.map((sub) => (
              <div
                key={sub.name}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50/70 dark:bg-slate-800/40 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 border border-slate-200/60 dark:border-slate-700/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all cursor-pointer"
              >
                <span className="text-base">{sub.icon}</span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
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

        {/* Clean Input Area */}
        <div className="relative pt-1">
          <input
            type="text"
            readOnly
            value="What is Newton's second law?"
            className="w-full bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700 rounded-xl py-2.5 pl-3.5 pr-10 text-xs text-slate-700 dark:text-slate-300 cursor-default focus:outline-none"
          />
          <button
            type="button"
            className="absolute right-1.5 top-2.5 bottom-1.5 px-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center justify-center transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
