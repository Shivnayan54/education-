import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star, Users, BookOpen, PlayCircle, Sparkles, ArrowRight } from 'lucide-react';

export default function CourseCard({ course }) {
  if (!course) return null;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col bg-[#111728]/90 light:bg-white rounded-3xl border border-white/10 light:border-slate-200/90 shadow-xl hover:shadow-2xl hover:shadow-indigo-500/20 hover:border-indigo-500/50 overflow-hidden transition-all duration-300"
    >
      {/* Thumbnail Banner */}
      <div
        className="relative h-48 w-full p-4 flex flex-col justify-between overflow-hidden text-white"
        style={{
          background: `linear-gradient(135deg, ${course.thumbnail || '#1E3A8A'}, #080C14)`,
        }}
      >
        <div className="absolute inset-0 bg-hero-pattern opacity-10" />

        {/* Top Badges Row */}
        <div className="relative z-10 flex items-center justify-between gap-2">
          <span className="inline-flex items-center text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/20">
            {course.category}
          </span>

          {course.discount && (
            <span className="inline-flex items-center text-[10px] font-black px-2.5 py-0.5 rounded-full bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-md">
              {course.discount}
            </span>
          )}
        </div>

        {/* Center Hover Play Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 group-hover:scale-110 group-hover:bg-white group-hover:text-slate-900 transition-all duration-300 shadow-xl">
            <PlayCircle className="w-6 h-6 fill-current/20" />
          </div>
        </div>

        {/* Bottom Metadata in Banner */}
        <div className="relative z-10 flex items-center justify-between text-xs text-white/90 font-semibold">
          <span>{course.exam || 'Comprehensive'}</span>
          {course.badge && (
            <span className="inline-flex items-center gap-1 font-bold text-amber-300 bg-amber-400/20 px-2 py-0.5 rounded-md border border-amber-300/30">
              <Sparkles className="w-3 h-3" />
              {course.badge}
            </span>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
            <span className="font-semibold text-slate-300 light:text-slate-700 truncate">
              {course.instructor}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-white/5 light:bg-slate-100 text-[10px] font-bold uppercase tracking-wider text-slate-400">
              {course.level || 'All Levels'}
            </span>
          </div>

          <h3 className="font-bold text-white light:text-slate-900 text-base line-clamp-2 group-hover:text-indigo-400 transition-colors leading-snug">
            {course.title}
          </h3>

          <div className="flex items-center gap-3 text-xs text-slate-400 mt-3 pt-3 border-t border-white/10 light:border-slate-100">
            <div className="flex items-center gap-1 font-black text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{course.rating}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.students} students</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-slate-400" />
              <span>{course.lessons} lessons</span>
            </div>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-3 border-t border-white/10 light:border-slate-100 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl font-black text-white light:text-slate-900">
                ₹{course.price}
              </span>
              {course.originalPrice && (
                <span className="text-xs text-slate-500 line-through">
                  ₹{course.originalPrice}
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold text-emerald-400">
              Full lifetime batch access
            </span>
          </div>

          <Link
            to={`/courses/${course.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 transition-all hover:scale-105"
          >
            <span>View Course</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
