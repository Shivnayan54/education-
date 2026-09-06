import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { categories } from '../../data/categories';

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-3 border border-blue-200/60 dark:border-blue-800/60">
            Subject Domains
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What do you want to learn?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Explore curated learning tracks taught by India's top educators with comprehensive NCERT alignment and AI tutoring.
          </p>
        </div>

        {/* Categories Grid (4 columns on lg, 2 on sm) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <Link
                to={`/courses?category=${encodeURIComponent(cat.name)}`}
                onClick={() => onSelectCategory && onSelectCategory(cat.name)}
                className="group relative h-full flex flex-col justify-between p-5 sm:p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl p-2 rounded-2xl bg-white dark:bg-slate-700 shadow-sm border border-slate-100 dark:border-slate-600 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-200/60 dark:bg-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between text-xs font-semibold">
                  <span className={cat.textColor}>{cat.count} Courses</span>
                  <span className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    Explore →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
