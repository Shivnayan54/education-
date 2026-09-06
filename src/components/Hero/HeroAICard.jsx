import { motion } from 'framer-motion';
import { Sparkles, Send, Flame, Award, Star, Bot, CheckCircle2 } from 'lucide-react';

export default function HeroAICard() {
  const subjects = [
    { icon: '📘', name: 'Physics', prompt: 'Explain Newton\'s 2nd Law' },
    { icon: '🧮', name: 'Mathematics', prompt: 'Derivative of sin(x²)' },
    { icon: '🧪', name: 'Chemistry', prompt: 'How does SN2 reaction work?' },
    { icon: '💻', name: 'Computer Science', prompt: 'Explain Binary Search' },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Decorative ambient glowing blur backdrop */}
      <div className="absolute -inset-4 bg-gradient-to-r from-violet-600/30 via-indigo-500/20 to-blue-600/30 rounded-3xl blur-2xl -z-10 opacity-70 animate-pulse" />

      {/* Floating Badge 1: Top-Left - 7 Day Streak */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-6 -left-4 sm:-left-8 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-2xl shadow-xl shadow-orange-500/20 flex items-center gap-2 border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-md"
      >
        <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-200 fill-yellow-200 animate-bounce" />
        <span>7 Day Streak 🔥</span>
      </motion.div>

      {/* Floating Badge 2: Top-Right - Progress */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -top-5 -right-4 sm:-right-6 z-20 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3.5 py-2 rounded-2xl shadow-xl shadow-emerald-500/20 flex items-center gap-2 border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-md"
      >
        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-100" />
        <span>87% Weekly Goal</span>
      </motion.div>

      {/* Floating Badge 3: Bottom-Left - Quiz Score */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-6 -left-3 sm:-left-6 z-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-2xl shadow-xl shadow-indigo-500/20 flex items-center gap-2 border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-md"
      >
        <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 fill-amber-300" />
        <span>Quiz Score: 92% ⭐</span>
      </motion.div>

      {/* Floating Badge 4: Bottom-Right - AI Recommendation */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-5 -right-3 sm:-right-6 z-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-3.5 py-2 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center gap-2 border border-white/20 text-xs sm:text-sm font-bold backdrop-blur-md"
      >
        <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-blue-200" />
        <span>AI: Practice Mechanics</span>
      </motion.div>

      {/* Main Card UI Container */}
      <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800 rounded-3xl shadow-2xl p-5 sm:p-7 overflow-hidden">
        {/* Card Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                  AI Study Assistant
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Personalized 24/7 intelligent tutoring
              </p>
            </div>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
        </div>

        {/* Greeting & Interaction Area */}
        <div className="py-5 space-y-4">
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">
              AI
            </div>
            <div className="bg-slate-100/90 dark:bg-slate-800/90 p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-700 dark:text-slate-200 max-w-[90%] leading-relaxed border border-slate-200/50 dark:border-slate-700/50">
              <p className="font-medium">
                👋 Hi there! What concept would you like to master today?
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Pick a subject or ask any doubt with step-by-step examples.
              </p>
            </div>
          </div>

          {/* Quick Subject Pills */}
          <div className="grid grid-cols-2 gap-2 pt-1">
            {subjects.map((sub) => (
              <div
                key={sub.name}
                className="group flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-violet-50 dark:hover:bg-violet-950/40 border border-slate-200/60 dark:border-slate-700/60 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-200 cursor-pointer text-left"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">{sub.icon}</span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate group-hover:text-violet-600 dark:group-hover:text-violet-400">
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

        {/* Mock Input Form */}
        <div className="relative mt-2">
          <input
            type="text"
            readOnly
            value="What is Newton's second law?"
            placeholder="Ask anything (e.g., Explain Doppler effect)..."
            className="w-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 rounded-2xl py-3 pl-4 pr-12 text-xs sm:text-sm text-slate-700 dark:text-slate-200 cursor-default focus:outline-none"
          />
          <button
            type="button"
            className="absolute right-1.5 top-1.5 bottom-1.5 w-9 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl flex items-center justify-center hover:opacity-90 transition-opacity shadow-md shadow-violet-500/25"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
