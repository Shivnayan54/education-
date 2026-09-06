import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, BookOpen, Star, Sparkles, X } from 'lucide-react';
import CourseCard from '../components/Courses/CourseCard';
import { courses } from '../data/courses';

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const examParam = searchParams.get('exam');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [selectedExam, setSelectedExam] = useState(examParam || 'All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [sortBy, setSortBy] = useState('popular');

  const categoriesList = ['All', 'Physics', 'Mathematics', 'Biology', 'Chemistry', 'Science', 'Programming', 'English', 'Computer Science'];
  const examsList = ['All', 'JEE', 'NEET', 'Boards', 'SSC', 'Banking', 'General'];
  const levelsList = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  // Filtered & Sorted Courses
  const filteredCourses = useMemo(() => {
    return courses
      .filter((course) => {
        const matchesQuery = searchQuery === '' ||
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
        const matchesExam = selectedExam === 'All' || course.exam === selectedExam;
        const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

        return matchesQuery && matchesCategory && matchesExam && matchesLevel;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      });
  }, [searchQuery, selectedCategory, selectedExam, selectedLevel, sortBy]);

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedExam('All');
    setSelectedLevel('All');
    setSearchQuery('');
    setSearchParams({});
  };

  const hasActiveFilters = selectedCategory !== 'All' || selectedExam !== 'All' || selectedLevel !== 'All' || searchQuery !== '';

  return (
    <div className="pt-24 pb-20 bg-slate-50/70 dark:bg-slate-950/70 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title Banner */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/60 dark:border-blue-800/60">
            <BookOpen className="w-3.5 h-3.5" />
            Complete Curriculum Catalog
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Explore All Courses
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Choose from 500+ masterclasses designed by India's top mentors with comprehensive NCERT alignment, AI study assistants, and real-time practice.
          </p>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-sm mb-8 space-y-4">
          
          {/* Search Input Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search courses, instructors, topics (e.g., 'Physics', 'Arjun Sharma', 'Calculus')..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Dropdowns & Sort Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {/* Category Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
              >
                {categoriesList.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Exam Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Exam Track
              </label>
              <select
                value={selectedExam}
                onChange={(e) => setSelectedExam(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
              >
                {examsList.map((ex) => (
                  <option key={ex} value={ex}>{ex}</option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Difficulty Level
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
              >
                {levelsList.map((lvl) => (
                  <option key={lvl} value={lvl}>{lvl}</option>
                ))}
              </select>
            </div>

            {/* Sort Order */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Active Filter Badges Bar */}
          {hasActiveFilters && (
            <div className="flex flex-wrap items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-slate-500 font-medium">Active filters:</span>
                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-semibold border border-indigo-200 dark:border-indigo-800">
                    Category: {selectedCategory}
                    <button onClick={() => setSelectedCategory('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {selectedExam !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 font-semibold border border-purple-200 dark:border-purple-800">
                    Exam: {selectedExam}
                    <button onClick={() => setSelectedExam('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
                {selectedLevel !== 'All' && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-200 dark:border-emerald-800">
                    Level: {selectedLevel}
                    <button onClick={() => setSelectedLevel('All')}><X className="w-3 h-3" /></button>
                  </span>
                )}
              </div>

              <button
                onClick={clearAllFilters}
                className="text-xs text-rose-500 hover:text-rose-600 font-semibold transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>

        {/* Results Count Banner */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
            Showing <span className="text-indigo-600 dark:text-indigo-400">{filteredCourses.length}</span> verified courses
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">
            <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
              No courses matched your filters
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try adjusting your search keywords or resetting some filters.
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-4 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-xs"
            >
              Clear All Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
