import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Flame } from 'lucide-react';
import CourseCard from './CourseCard';
import { courses } from '../../data/courses';

export default function PopularCourses() {
  const [activeTab, setActiveTab] = useState('All');

  const filterTabs = ['All', 'Python', 'C++', 'Java'];

  const top3Courses = courses.slice(0, 3);

  const filteredCourses = activeTab === 'All'
    ? top3Courses
    : top3Courses.filter((c) => c.category === activeTab);

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-50 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-3 border border-orange-200/60 dark:border-orange-800/60">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              Featured Masterclasses
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Popular Programming Courses
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Master top programming languages — Python, C++ DSA, and Java Full Stack with live classes, interactive coding labs & AI mentors.
            </p>
          </div>

          <Link
            to="/courses"
            className="hidden sm:inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
          >
            <span>View All Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Courses Grid (3 cols on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {/* Bottom CTA for Mobile */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            to="/courses"
            className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-bold text-sm shadow-sm"
          >
            <span>Explore All 500+ Courses</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
