import { motion } from 'framer-motion';
import { TrendingUp, Award, Calendar, Zap, Clock } from 'lucide-react';
import useInView from '../../hooks/useInView';

export default function ProgressSection() {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const weeklyActivity = [
    { day: 'Mon', hours: 2.5, percentage: 50, lessons: 3 },
    { day: 'Tue', hours: 3.8, percentage: 76, lessons: 5 },
    { day: 'Wed', hours: 3.0, percentage: 60, lessons: 4 },
    { day: 'Thu', hours: 4.5, percentage: 90, lessons: 6 },
    { day: 'Fri', hours: 5.0, percentage: 100, lessons: 7 },
    { day: 'Sat', hours: 4.0, percentage: 80, lessons: 5 },
    { day: 'Sun', hours: 2.2, percentage: 44, lessons: 2 },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Description Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-200/60 dark:border-emerald-800/60">
              <TrendingUp className="w-3.5 h-3.5" />
              Weekly Consistency Tracker
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Learning Progress & Performance
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Real-time visualization of your weekly study minutes, completed problem sets, and accuracy scores.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-black">
                +24%
              </div>
              <div className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 font-semibold">
                You're learning 24% more than last week. Keep this pace to finish syllabus 2 weeks early!
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <Clock className="w-4 h-4 text-indigo-500" />
                <span>25.0 Total Hours This Week</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <Zap className="w-4 h-4 text-amber-500" />
                <span>32 Lessons Mastered</span>
              </div>
            </div>
          </div>

          {/* Right Chart Column */}
          <div className="lg:col-span-7 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/60 dark:border-slate-700/60">
              <div className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                Daily Study Hours (Mon – Sun)
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Goal: 3.5 hrs/day
              </span>
            </div>

            {/* Bar Chart Bars */}
            <div className="grid grid-cols-7 gap-2 sm:gap-4 items-end h-56 pt-6">
              {weeklyActivity.map((item) => (
                <div key={item.day} className="flex flex-col items-center gap-2 h-full justify-end group">
                  
                  {/* Floating tooltip on hover */}
                  <div className="text-[10px] font-bold text-slate-600 dark:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded shadow-sm border border-slate-200 dark:border-slate-700 whitespace-nowrap">
                    {item.hours} hrs ({item.lessons} lessons)
                  </div>

                  {/* Vertical bar container */}
                  <div className="w-full bg-slate-200/60 dark:bg-slate-700/60 rounded-xl h-full flex items-end overflow-hidden">
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: inView ? `${item.percentage}%` : 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className={`w-full rounded-xl transition-colors ${
                        item.percentage >= 80
                          ? 'bg-gradient-to-t from-emerald-600 to-teal-500'
                          : 'bg-gradient-to-t from-blue-600 to-indigo-500'
                      }`}
                    />
                  </div>

                  <span className="text-xs font-bold text-slate-600 dark:text-slate-400 mt-1">
                    {item.day}
                  </span>
                </div>
              ))}
            </div>

            {/* Subject Distribution Progress Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-700/60">
              <div className="flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
                <span>Subject Time Share</span>
                <span>Physics (40%) · Math (35%) · Chem (25%)</span>
              </div>
              <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex">
                <div className="h-full bg-blue-600" style={{ width: '40%' }} />
                <div className="h-full bg-indigo-500" style={{ width: '35%' }} />
                <div className="h-full bg-purple-500" style={{ width: '25%' }} />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
