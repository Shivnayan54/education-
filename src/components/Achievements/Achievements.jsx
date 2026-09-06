import { motion } from 'framer-motion';
import { Trophy, Flame, Star, BookOpen, Target, Zap, Bot, Gem, Lock } from 'lucide-react';

export default function Achievements() {
  const badges = [
    { id: 1, icon: '🏆', title: 'First Quiz Completed', desc: 'Solved your first 10-question practice drill with >80% score.', unlocked: true, color: 'from-amber-400 to-orange-500' },
    { id: 2, icon: '🔥', title: '7 Day Streak Master', desc: 'Maintained an unbroken daily learning habit for a full week.', unlocked: true, color: 'from-rose-500 to-red-600' },
    { id: 3, icon: '⭐', title: '90%+ Quiz Score', desc: 'Scored above 90% in a timed JEE/NEET chapter-level test.', unlocked: true, color: 'from-yellow-400 to-amber-500' },
    { id: 4, icon: '📚', title: '10 Lessons Completed', desc: 'Finished 10 continuous video lectures with full comprehension.', unlocked: true, color: 'from-blue-500 to-indigo-600' },
    { id: 5, icon: '🎯', title: 'Course Champion', desc: 'Complete 100% of an entire curriculum course bundle.', unlocked: false, color: 'from-purple-500 to-violet-600' },
    { id: 6, icon: '🚀', title: 'Speed Learner', desc: 'Complete 5 lessons in a single study session without pausing.', unlocked: false, color: 'from-teal-400 to-cyan-500' },
    { id: 7, icon: '🤖', title: 'AI Power Learner', desc: 'Ask 50 conceptual doubts and solve customized AI problem sets.', unlocked: false, color: 'from-pink-400 to-rose-500' },
    { id: 8, icon: '💎', title: 'Diamond Scholar', desc: 'Achieve a 30-day streak with 100+ solved practice problems.', unlocked: false, color: 'from-cyan-400 to-blue-600' },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/60 dark:border-amber-800/60">
            <Trophy className="w-3.5 h-3.5" />
            Gamified Milestones
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your Progress. Your Achievement.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Earn verifiable badges, unlock performance trophies, and celebrate every milestone along your academic journey.
          </p>
        </div>

        {/* Badges Grid (4 cols on lg, 2 on sm) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map((b, idx) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className={`relative flex flex-col items-center text-center p-5 sm:p-6 rounded-3xl border transition-all duration-300 ${
                b.unlocked
                  ? 'bg-slate-50 dark:bg-slate-800/60 hover:bg-white dark:hover:bg-slate-800 border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10'
                  : 'bg-slate-50/50 dark:bg-slate-900/40 border-slate-200/40 dark:border-slate-800/40 opacity-70'
              }`}
            >
              {/* Badge Icon */}
              <div className="relative mb-3">
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg ${
                    b.unlocked
                      ? `bg-gradient-to-tr ${b.color} text-white`
                      : 'bg-slate-200 dark:bg-slate-800 text-slate-400'
                  }`}
                >
                  {b.icon}
                </div>
                {!b.unlocked && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-slate-700 text-white flex items-center justify-center border-2 border-white dark:border-slate-900">
                    <Lock className="w-3 h-3" />
                  </div>
                )}
              </div>

              {/* Title & Desc */}
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {b.title}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                {b.desc}
              </p>

              {/* Unlock Status Pill */}
              <div className="mt-4 pt-3 border-t border-slate-200/50 dark:border-slate-700/50 w-full">
                {b.unlocked ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
                    ✓ Unlocked
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-0.5 rounded-full">
                    🔒 Locked
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
