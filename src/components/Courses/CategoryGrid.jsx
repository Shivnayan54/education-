import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { categories } from '../../data/categories';

export default function CategoryGrid({ onSelectCategory }) {
  return (
    <section className="py-20 md:py-24 bg-[#0B0F19]/60 light:bg-slate-50/70 border-y border-white/10 light:border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 light:text-indigo-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Subject Domains
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white light:text-slate-900 tracking-tight">
            What do you want to learn?
          </h2>
          <p className="mt-2 text-sm text-slate-400 leading-relaxed">
            Explore structured learning tracks taught by India's top educators with comprehensive NCERT alignment.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
            >
              <Link
                to={`/courses?category=${encodeURIComponent(cat.name)}`}
                onClick={() => onSelectCategory && onSelectCategory(cat.name)}
                className="group h-full flex flex-col justify-between p-6 rounded-3xl bg-[#121828]/80 light:bg-white border border-white/10 light:border-slate-200 hover:border-indigo-500/60 hover:shadow-xl hover:shadow-indigo-500/10 backdrop-blur-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl p-3 rounded-2xl bg-white/5 light:bg-slate-100 border border-white/10 light:border-slate-200 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 light:bg-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-gradient-to-tr group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white light:text-slate-900 group-hover:text-indigo-400 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed font-normal">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 light:border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-indigo-400 font-bold">{cat.count} Courses</span>
                  <span className="text-slate-400 group-hover:text-indigo-400 transition-colors">
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
