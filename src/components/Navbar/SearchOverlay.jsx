import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight } from 'lucide-react'

const popularSearches = ['Class 12 Physics', 'JEE Mathematics', 'Python Programming', 'Organic Chemistry', 'NEET Biology', 'English Grammar']

const mockResults = [
  { id: 1, title: 'Complete Physics — Class 12 Electrostatics', category: 'Course', badge: 'Bestseller', icon: '⚡', meta: '4.9 ★ · 25K Students' },
  { id: 2, title: 'JEE Advanced Mathematics — Calculus', category: 'Course', badge: 'JEE', icon: '📐', meta: '4.8 ★ · 18K Students' },
  { id: 3, title: 'Organic Chemistry Reaction Mechanisms (PDF)', category: 'Study Material', badge: 'Free', icon: '🧪', meta: 'PDF · 120 pages' },
]

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 80)
      setQuery('')
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const showResults = query.trim().length > 2

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20 sm:pt-28 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 320, damping: 28 } }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="w-full max-w-2xl pointer-events-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-100 dark:border-slate-800">
                  <Search size={20} className="text-violet-500 flex-shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    placeholder="Search courses, topics, teachers…"
                    className="flex-1 bg-transparent text-slate-800 dark:text-slate-100 placeholder-slate-400 text-base outline-none"
                  />
                  {query && (
                    <button onClick={() => setQuery('')} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                      <X size={16} />
                    </button>
                  )}
                  <button onClick={onClose} className="ml-1 w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex-shrink-0">
                    <X size={15} />
                  </button>
                </div>

                <div className="px-5 py-4 space-y-4">
                  <AnimatePresence mode="wait">
                    {!showResults ? (
                      <motion.div key="popular" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">Popular Searches</p>
                        <div className="flex flex-wrap gap-2">
                          {popularSearches.map(term => (
                            <button
                              key={term}
                              onClick={() => setQuery(term)}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-violet-50 dark:hover:bg-violet-900/20 hover:text-violet-600 dark:hover:text-violet-400 transition-all"
                            >
                              <Search size={11} className="opacity-60" />{term}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div key="results" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5">Results for "{query}"</p>
                        <ul className="space-y-2">
                          {mockResults.map((r, i) => (
                            <motion.li key={r.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}>
                              <Link to="/courses" onClick={onClose} className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-100 to-indigo-100 dark:from-violet-900/40 dark:to-indigo-900/40 flex items-center justify-center text-xl flex-shrink-0">{r.icon}</div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{r.title}</p>
                                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{r.category} · {r.meta}</p>
                                </div>
                                <ArrowRight size={15} className="text-slate-300 group-hover:text-violet-500 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                              </Link>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400 dark:text-slate-500">
                  <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-slate-500">ESC</kbd> to close</span>
                  <span>Press <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 font-mono text-slate-500">↵</kbd> to search</span>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
