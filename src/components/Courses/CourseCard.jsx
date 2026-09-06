import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, BookOpen, PlayCircle, ArrowRight } from 'lucide-react';

export default function CourseCard({ course }) {
  if (!course) return null;

  return (
    <div className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-xl hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 overflow-hidden">
      {/* Thumbnail Banner */}
      <div
        className="relative h-44 w-full p-4 flex flex-col justify-between overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${course.thumbnail || '#1E3A8A'}, #0F172A)`,
        }}
      >
        {/* Top Badges Row */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-black/40 backdrop-blur-xs text-white">
            {course.category}
          </span>

          {course.discount && (
            <span className="inline-flex items-center text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-rose-600 text-white shadow-xs">
              {course.discount}
            </span>
          )}
        </div>

        {/* Center Hover Play Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-slate-900 transition-all duration-200 shadow-md">
            <PlayCircle className="w-6 h-6 fill-current/20" />
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white font-medium">
          <span>{course.exam || 'Comprehensive'}</span>
          {course.badge && (
            <span className="inline-flex items-center text-[11px] font-bold text-amber-300 bg-black/30 px-2 py-0.5 rounded-md">
              ⭐ {course.badge}
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="flex-1 p-5 flex flex-col justify-between space-y-3.5">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
            <span className="font-semibold text-slate-700 dark:text-slate-300 truncate">
              {course.instructor}
            </span>
            <span className="text-[10px] uppercase font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded">
              {course.level || 'All Levels'}
            </span>
          </div>

          <h3 className="font-bold text-slate-900 dark:text-white text-base line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {course.title}
          </h3>

          <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-2.5 pt-2.5 border-t border-slate-100 dark:border-slate-700">
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
        <div className="pt-2.5 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-3">
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
            <span className="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
              Lifetime batch access
            </span>
          </div>

          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-1 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all hover:scale-105 shadow-xs"
          >
            <span>View Course</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
