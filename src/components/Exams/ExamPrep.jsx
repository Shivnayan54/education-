import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ArrowRight, Users, BookOpen } from 'lucide-react';
import { examCards } from '../../data/examPrep';

export default function ExamPrep() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider mb-3 border border-purple-200/60 dark:border-purple-800/60">
            <Award className="w-3.5 h-3.5" />
            Competitive Exams
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Prepare for Your Dream Exam
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Targeted exam tracks designed with India's highest selection ratios. Everything you need from foundational concepts to mock tests.
          </p>
        </div>

        {/* Exam Cards Grid (3 cols on lg, 2 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {examCards.map((exam, idx) => (
            <motion.div
              key={exam.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group flex flex-col justify-between bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 p-6 sm:p-7 transition-all duration-300"
            >
              <div>
                {/* Top Row: Icon + Students Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${exam.color} text-white flex items-center justify-center text-2xl shadow-lg shadow-indigo-600/20 group-hover:scale-105 transition-transform`}>
                    {exam.icon}
                  </div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-200/60 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    {exam.students}
                  </span>
                </div>

                {/* Exam Title & Full Name */}
                <h3 className="text-xl font-black text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {exam.name}
                </h3>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                  {exam.fullName}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">
                  {exam.description}
                </p>

                {/* Subjects Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {exam.subjects.map((sub) => (
                    <span
                      key={sub}
                      className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-[11px] font-medium text-slate-700 dark:text-slate-300"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Row */}
              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5" />
                  {exam.courses} Courses Available
                </span>

                <Link
                  to={`/courses?exam=${encodeURIComponent(exam.name)}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 group-hover:translate-x-1 transition-all"
                >
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
