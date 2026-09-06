import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, BookOpen, PlayCircle, ArrowRight } from 'lucide-react';

export default function CourseCard({ course }) {
  if (!course) return null;

  return (
    <div className="group flex flex-col bg-white dark:bg-[#121824] rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_28px_rgba(0,0,0,0.35)] hover:border-indigo-300 dark:hover:border-indigo-700/60 overflow-hidden transition-all duration-200">
      {/* Thumbnail Banner */}
      <div
        className="relative h-44 w-full p-4 flex flex-col justify-between overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${course.thumbnail || '#1E3A8A'}, #0B0F17)`,
        }}
      >
        {/* Top Badges Row */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white">
            {course.category}
          </span>

          {course.discount && (
            <span className="inline-flex items-center text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-rose-500 text-white shadow-xs">
              {course.discount}
            </span>
          )}
        </div>

        {/* Center Hover Play Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-slate-900 transition-all duration-200">
            <PlayCircle className="w-6 h-6 fill-current/20" />
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white/90 font-medium">
          <span>{course.exam || 'Comprehensive'}</span>
          {course.badge && (
            <span className="inline-flex items-center text-[11px] font-bold text-amber-300 bg-black/30 px-2 py-0.5 rounded-md">
              {course.badge}
            </span>
          )}
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-3.5">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span className="font-medium text-slate-700 dark:text-slate-300 truncate">
              {course.instructor}
            </span>
            <span className="text-[10px] uppercase font-semibold text-slate-400">
              {course.level || 'All Levels'}
            </span>
          </div>

          <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {course.title}
          </h3>

          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-1 font-bold text-amber-500">
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
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-extrabold text-slate-900 dark:text-white">
                ₹{course.price}
              </span>
              {course.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ₹{course.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">
              Full lifetime access
            </span>
          </div>

          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors"
          >
            <span>View</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
