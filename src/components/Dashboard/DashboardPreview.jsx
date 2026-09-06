import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Flame, BookOpen, CheckCircle, Award, ArrowRight, Play, TrendingUp } from 'lucide-react';
import useCountUp from '../../hooks/useCountUp';
import useInView from '../../hooks/useInView';

export default function DashboardPreview() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const enrolledCount = useCountUp(8, inView);
  const lessonsCompleted = useCountUp(46, inView);
  const quizScore = useCountUp(89, inView);
  const streakDays = useCountUp(12, inView);

  const stats = [
    { label: 'Courses Enrolled', value: enrolledCount, suffix: '', icon: BookOpen, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-50 dark:bg-blue-900/30' },
    { label: 'Lessons Completed', value: lessonsCompleted, suffix: '', icon: CheckCircle, color: 'text-emerald-600 dark:text-emerald-400', bg: 'bg-emerald-50 dark:bg-emerald-900/30' },
    { label: 'Avg Quiz Score', value: quizScore, suffix: '%', icon: Award, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-900/30' },
    { label: 'Learning Streak', value: streakDays, suffix: ' Days 🔥', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/30' },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/60 dark:border-blue-800/60">
            <LayoutDashboard className="w-3.5 h-3.5" />
            Student Portal
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Your Personal Learning Hub
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Track your course milestones, maintain daily study streaks, and monitor accuracy growth with automated analytics.
          </p>
        </div>

        {/* Dashboard Preview Card Container */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-2xl p-6 sm:p-10">
          
          {/* Welcome User Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-100 dark:border-slate-800 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-700 to-indigo-600 text-white flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-600/20">
                RV
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    Welcome back, Rahul 👋
                  </h3>
                  <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 text-xs font-bold">
                    Class 12 · JEE 2026
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                  You're learning 24% faster than last week! Keep up the momentum.
                </p>
              </div>
            </div>

            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-slate-800 dark:text-slate-200 font-bold text-xs transition-all"
            >
              <span>Full Dashboard</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 4 Animated Metric Counters Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {stats.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.label}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {st.label}
                    </span>
                    <div className={`p-2 rounded-xl ${st.bg} ${st.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                    {st.value}{st.suffix}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Course Progress Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 relative overflow-hidden">
            {/* Ambient pattern */}
            <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />

            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-indigo-500/30 text-indigo-200 border border-indigo-400/20">
                Continue Learning
              </div>
              <h4 className="text-lg sm:text-xl font-bold">
                Complete Physics — Class 12 (Laws of Motion & Friction)
              </h4>
              <p className="text-xs text-indigo-200/80">
                Next up: Lesson 47 · Friction Coefficient & Inclined Planes
              </p>

              {/* Progress Bar */}
              <div className="pt-2">
                <div className="flex justify-between text-xs font-semibold mb-1 text-indigo-200">
                  <span>Course Progress</span>
                  <span className="text-amber-400 font-bold">72% Completed</span>
                </div>
                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '72%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-amber-400 rounded-full"
                  />
                </div>
              </div>
            </div>

            <Link
              to="/courses/1"
              className="relative z-10 flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-100"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Resume Lesson 47</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
