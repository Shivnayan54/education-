import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../../data/categories';

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <section className="py-16 md:py-20 bg-white dark:bg-[#0E131F] border-y border-slate-200/60 dark:border-slate-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-2.5">
            Subject Domains
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What do you want to learn?
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Explore curated learning tracks taught by India's top educators with comprehensive NCERT alignment.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/courses?category=${encodeURIComponent(cat.name)}`}
              onClick={() => onSelectCategory && onSelectCategory(cat.name)}
              className="group flex flex-col justify-between p-5 rounded-3xl bg-slate-50/70 dark:bg-slate-800/40 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl p-2 rounded-2xl bg-white dark:bg-slate-700 shadow-xs border border-slate-100 dark:border-slate-600 group-hover:scale-105 transition-transform">
                    {cat.icon}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-200/60 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 pt-2.5 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                <span>{cat.count} Courses</span>
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold group-hover:underline">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
