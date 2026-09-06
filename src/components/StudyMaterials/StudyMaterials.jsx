import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Eye, Sparkles, Filter, Check } from 'lucide-react';
import { materials } from '../../data/studyMaterials';

export default function StudyMaterials() {
  const [activeType, setActiveType] = useState('All');
  const [downloaded, setDownloaded] = useState({});

  const filterTypes = ['All', 'Formula Sheet', 'Previous Year Papers', 'Revision Notes', 'Notes', 'Question Bank'];

  const filteredMaterials = activeType === 'All'
    ? materials
    : materials.filter((m) => m.type === activeType);

  const handleDownload = (id, title) => {
    setDownloaded((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      alert(`Downloading ${title} (PDF). Free educational resource prepared by Learnova!`);
    }, 200);
  };

  return (
    <section id="study-materials" className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-950/70 border-b border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-600 dark:text-teal-400 text-xs font-bold uppercase tracking-wider mb-3 border border-teal-200/60 dark:border-teal-800/60">
              <FileText className="w-3.5 h-3.5" />
              Resource Library
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Everything You Need to Study
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Download premium formula cheat-sheets, NCERT mind maps, chapter revision notes, and last 5 years' solved examination papers.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => setActiveType(type)}
              className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                activeType === type
                  ? 'bg-gradient-to-r from-blue-700 to-indigo-700 text-white shadow-md shadow-indigo-600/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700/80'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Materials Grid (4 cols on lg, 2 on sm) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredMaterials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Top Icon & Free Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl shadow-xs group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="inline-flex text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                    FREE PDF
                  </span>
                </div>

                <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  {item.subject} · {item.type}
                </span>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {item.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <span>{item.pages} Pages</span>
                  <span>•</span>
                  <span>{item.size}</span>
                  <span>•</span>
                  <span>{item.downloads} downloads</span>
                </div>
              </div>

              {/* Download CTA Button */}
              <div className="mt-5">
                <button
                  onClick={() => handleDownload(item.id, item.title)}
                  className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs ${
                    downloaded[item.id]
                      ? 'bg-emerald-600 text-white shadow-emerald-600/20'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {downloaded[item.id] ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download PDF</span>
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
