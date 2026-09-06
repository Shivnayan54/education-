import { motion } from 'framer-motion';
import { Star, Users, BookOpen, CheckCircle, GraduationCap } from 'lucide-react';

export default function InstructorCard({ instructor }) {
  if (!instructor) return null;

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.2 }}
      className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 p-6 sm:p-7 flex flex-col justify-between text-center transition-all duration-300"
    >
      <div>
        {/* Avatar Circle */}
        <div className="relative mx-auto w-24 h-24 mb-4">
          <div
            className="w-full h-full rounded-3xl flex items-center justify-center text-white font-extrabold text-2xl shadow-xl shadow-indigo-600/20 group-hover:scale-105 transition-transform"
            style={{ backgroundColor: instructor.avatarColor || '#1E3A8A' }}
          >
            {instructor.avatar}
          </div>
          <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center border-2 border-white dark:border-slate-900 shadow-sm">
            <CheckCircle className="w-4 h-4" />
          </div>
        </div>

        {/* Name & Title */}
        <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {instructor.name}
        </h3>
        <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
          {instructor.subject}
        </div>
        <div className="text-[11px] text-slate-400 mt-0.5">
          {instructor.experience}
        </div>

        {/* Bio */}
        <p className="text-xs text-slate-600 dark:text-slate-300 mt-3 line-clamp-3 leading-relaxed">
          {instructor.bio}
        </p>

        {/* Specialization Tags */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-4">
          {instructor.specialization?.map((spec) => (
            <span
              key={spec}
              className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-600 dark:text-slate-400"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      {/* Stats and Profile Button */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-around text-xs font-semibold mb-4">
          <div className="flex items-center gap-1 text-amber-500 font-bold">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{instructor.rating}</span>
          </div>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
            <Users className="w-3.5 h-3.5" />
            <span>{instructor.students}</span>
          </div>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{instructor.courses} Courses</span>
          </div>
        </div>

        <button
          onClick={() => alert(`Viewing full profile & masterclass schedule for ${instructor.name}`)}
          className="w-full py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all shadow-xs"
        >
          View Instructor Profile
        </button>
      </div>
    </motion.div>
  );
}
