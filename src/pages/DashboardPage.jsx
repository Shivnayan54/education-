import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  BookOpen, CheckCircle, Award, Flame, Play, Clock, 
  TrendingUp, Calendar, Bot, ArrowRight, BarChart3, Star, Download
} from 'lucide-react';
import { courses } from '../data/courses';

export default function DashboardPage() {
  const enrolledCourses = courses.slice(0, 4);

  return (
    <div className="pt-24 pb-20 bg-slate-50/70 dark:bg-slate-950/70 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-3xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center font-black text-2xl border border-white/20 shadow-lg">
                RV
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl sm:text-3xl font-black">
                    Welcome back, Rahul Verma! 👋
                  </h1>
                </div>
                <p className="text-xs sm:text-sm text-indigo-200 mt-1">
                  Class 12 · JEE Advanced 2026 Target • 12-Day Learning Streak 🔥
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link
                to="/ai-tutor"
                className="px-5 py-3 rounded-2xl bg-white text-slate-900 font-extrabold text-xs sm:text-sm shadow-md hover:bg-indigo-50 transition-all flex items-center gap-1.5"
              >
                <Bot className="w-4 h-4 text-violet-600" />
                <span>Ask AI Tutor</span>
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-semibold">
              <span>Courses Enrolled</span>
              <BookOpen className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">8</div>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">3 active batches</span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-semibold">
              <span>Lessons Finished</span>
              <CheckCircle className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">46</div>
            <span className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">+6 this week</span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-semibold">
              <span>Quiz Accuracy</span>
              <Award className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">89%</div>
            <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Top 5% percentile</span>
          </div>

          <div className="bg-white dark:bg-slate-900 p-5 sm:p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-semibold">
              <span>Daily Streak</span>
              <Flame className="w-4 h-4 text-orange-500 fill-orange-500" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">12 Days</div>
            <span className="text-[11px] text-orange-500 font-medium">Personal Best Record 🔥</span>
          </div>
        </div>

        {/* Continue Learning Grid */}
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
            Continue Learning
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {enrolledCourses.map((c, i) => (
              <div
                key={c.id}
                className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">{c.category}</span>
                    <span>{c.lessons} Lessons Total</span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {c.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Mentor: {c.instructor}
                  </p>

                  <div className="mt-4">
                    <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                      <span>Progress</span>
                      <span className="text-indigo-600 dark:text-indigo-400">
                        {i === 0 ? '72%' : i === 1 ? '45%' : i === 2 ? '30%' : '15%'}
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                      <div
                        className="h-full bg-indigo-600 rounded-full"
                        style={{ width: i === 0 ? '72%' : i === 1 ? '45%' : i === 2 ? '30%' : '15%' }}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Next: Lesson {10 + i * 5}</span>
                  <Link
                    to={`/courses/${c.id}`}
                    className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white text-xs font-bold transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Resume</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
