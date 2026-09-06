import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, BookOpen, Clock, PlayCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function CourseCard({ course }) {
  if (!course) return null;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
      className="group flex flex-col bg-white/90 dark:bg-[#0d1222]/90 backdrop-blur-xl rounded-3xl border border-slate-200/80 dark:border-white/10 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/50 dark:hover:border-indigo-400/50 overflow-hidden transition-all duration-300"
    >
      {/* Thumbnail Banner */}
      <div
        className="relative h-52 w-full p-4 flex flex-col justify-between overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${course.thumbnail || '#1E3A8A'}, #070913)`,
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-hero-pattern opacity-15" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />

        {/* Top Badges Row */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20 shadow-md">
            {course.category}
          </span>

          {course.discount && (
            <span className="inline-flex items-center text-[11px] font-black px-3 py-1 rounded-full bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg shadow-rose-600/30">
              {course.discount}
            </span>
          )}
        </div>

        {/* Center Hover Play Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-13 h-13 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-115 group-hover:bg-white group-hover:text-slate-900 transition-all duration-300 shadow-2xl">
            <PlayCircle className="w-7 h-7 fill-current/20" />
          </div>
        </div>

        {/* Bottom Metadata in Banner */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white/95 font-semibold">
          <span>{course.exam || 'Comprehensive'}</span>
          {course.badge && (
            <span className="inline-flex items-center gap-1 font-extrabold text-amber-300 bg-amber-400/20 px-2.5 py-0.5 rounded-lg border border-amber-300/40 backdrop-blur-md">
              <Sparkles className="w-3 h-3" />
              {course.badge}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
            <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">
              {course.instructor}
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 text-[10px] font-bold uppercase tracking-wider">
              {course.level || 'All Levels'}
            </span>
          </div>

          <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
            {course.title}
          </h3>

          <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-white/10">
            <div className="flex items-center gap-1 font-black text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{course.rating}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.students}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.lessons} lessons</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-black text-slate-900 dark:text-white">
                ₹{course.price}
              </span>
              {course.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{course.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
              Full lifetime batch access
            </span>
          </div>

          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-white/10 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-slate-900 dark:text-white text-xs font-black transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white shadow-sm"
          >
            <span>View Course</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
