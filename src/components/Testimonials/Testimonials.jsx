import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, MessageSquare, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-slate-50/70 dark:bg-slate-950/70 border-b border-slate-100 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-3 border border-amber-200/60 dark:border-amber-800/60">
              <MessageSquare className="w-3.5 h-3.5" />
              Student Success Stories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Students Say
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl">
              Over 10,000+ students achieve top ranks in JEE, NEET, and Board examinations with Learnova's mentorship.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous Testimonial"
              className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 shadow-sm transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Testimonial"
              className="w-11 h-11 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 shadow-sm transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonials 3-Card Grid Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % testimonials.length;
            const t = testimonials[index];
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-md p-7 flex flex-col justify-between relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-indigo-500/10 dark:text-indigo-400/10 pointer-events-none" />

                <div>
                  {/* Rating Stars */}
                  <div className="flex text-amber-400 fill-amber-400 gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>

                {/* User Row */}
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-md"
                    style={{ backgroundColor: t.avatarColor || '#1E3A8A' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {t.name}
                    </h4>
                    <div className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold">
                      {t.rank}
                    </div>
                    <div className="text-[10px] text-slate-400">
                      {t.class}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'w-8 bg-indigo-600'
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
