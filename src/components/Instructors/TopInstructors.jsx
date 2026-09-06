import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import InstructorCard from './InstructorCard';
import { instructors } from '../../data/instructors';

export default function TopInstructors() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-wider mb-3 border border-violet-200/60 dark:border-violet-800/60">
            <GraduationCap className="w-3.5 h-3.5" />
            Distinguished Faculty
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learn From The Best
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Master complex concepts under the guidance of top IITians, AIIMS doctors, and seasoned competitive exam coaches.
          </p>
        </div>

        {/* Instructors Grid (3 cols on lg, 2 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.id} instructor={instructor} />
          ))}
        </div>

      </div>
    </section>
  );
}
