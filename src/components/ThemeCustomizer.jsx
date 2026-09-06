import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Sun, Moon, Sparkles, Check, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, isDark, colorPreset, setColorPreset, presetOptions } = useTheme();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Customize Theme & Colors"
        className="w-13 h-13 p-3.5 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 text-white shadow-2xl shadow-indigo-500/40 border border-white/25 flex items-center justify-center backdrop-blur-md transition-shadow hover:shadow-indigo-500/60 group"
      >
        <Palette className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
      </motion.button>

      {/* Floating Theme Customizer Modal Card */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="absolute bottom-16 right-0 w-72 sm:w-80 p-5 rounded-3xl bg-white/95 dark:bg-[#0d1222]/95 backdrop-blur-2xl border border-slate-200/80 dark:border-white/10 shadow-2xl space-y-4 text-slate-900 dark:text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/10">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-indigo-500 animate-spin-slow" />
                <h3 className="font-extrabold text-sm tracking-tight">Theme & Aesthetic</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Mode Switcher: Light / Dark */}
            <div>
              <label className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                Appearance Mode
              </label>
              <div className="grid grid-cols-2 gap-2 bg-slate-100 dark:bg-slate-800/60 p-1.5 rounded-2xl border border-slate-200/50 dark:border-white/5">
                <button
                  type="button"
                  onClick={() => theme === 'dark' && toggleTheme()}
                  className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
                    !isDark
                      ? 'bg-white text-slate-900 shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <Sun className="w-3.5 h-3.5 text-amber-500" />
                  <span>Light</span>
                </button>
                <button
                  type="button"
                  onClick={() => !isDark && toggleTheme()}
                  className={`flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all ${
                    isDark
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <Moon className="w-3.5 h-3.5 text-indigo-300" />
                  <span>Dark Cosmic</span>
                </button>
              </div>
            </div>

            {/* Color Preset Palette Selection */}
            <div>
              <label className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-2">
                Color Palette Accent
              </label>
              <div className="grid grid-cols-2 gap-2">
                {presetOptions.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setColorPreset(p.id)}
                    className={`flex items-center gap-2.5 p-2.5 rounded-2xl border text-xs font-bold transition-all text-left ${
                      colorPreset === p.id
                        ? 'border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 ring-2 ring-indigo-500/20'
                        : 'border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/20 bg-slate-50/50 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full flex-shrink-0 shadow-sm flex items-center justify-center text-white"
                      style={{ backgroundColor: p.color }}
                    >
                      {colorPreset === p.id && <Check className="w-2.5 h-2.5" />}
                    </span>
                    <span className="truncate">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[10px] text-slate-400 text-center border-t border-slate-100 dark:border-white/10">
              💡 Changes apply instantly across the entire platform.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
