import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Bell, Menu, Sun, Moon, GraduationCap, Palette, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import NotificationDropdown from './NotificationDropdown';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/practice', label: 'Practice' },
  { to: '/ai-tutor', label: 'AI Tutor' },
  { to: '/dashboard', label: 'Dashboard' },
];

export default function Navbar({ onSearchOpen, onMenuOpen }) {
  const { isDark, toggleTheme, colorPreset, setColorPreset, presetOptions } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showPaletteMenu, setShowPaletteMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-2xl bg-white/80 dark:bg-[#070913]/85 shadow-xl shadow-indigo-500/5 border-b border-slate-200/80 dark:border-white/10 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">

          {/* Logo with Gradient Glow */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0 group">
            <motion.div
              whileHover={{ rotate: -10, scale: 1.08 }}
              className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 border border-white/20 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <GraduationCap className="w-5 h-5 text-white" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-2xl font-black bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent leading-none tracking-tight">
                Learnova
              </span>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold tracking-wider uppercase leading-none mt-1">
                AI Powered Learning
              </p>
            </div>
            <span className="sm:hidden text-xl font-black bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
              Learnova
            </span>
          </Link>

          {/* Desktop Nav in modern pill container */}
          <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 backdrop-blur-md">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/10'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Search Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={onSearchOpen}
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/60 dark:border-white/10 transition-all"
              aria-label="Open search"
            >
              <Search className="w-4 h-4" />
            </motion.button>

            {/* Notifications */}
            <div className="relative hidden sm:block">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setShowNotifications((v) => !v)}
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/60 dark:border-white/10 transition-all relative"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white dark:ring-slate-900 animate-pulse" />
              </motion.button>
              <NotificationDropdown isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
            </div>

            {/* Quick Theme Presets Dropdown */}
            <div className="relative hidden md:block">
              <motion.button
                whileTap={{ scale: 0.92 }}
                onClick={() => setShowPaletteMenu(!showPaletteMenu)}
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/60 dark:border-white/10 transition-all"
                aria-label="Theme Presets"
              >
                <Palette className="w-4 h-4 text-indigo-500" />
              </motion.button>

              <AnimatePresence>
                {showPaletteMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 top-full mt-2 w-48 p-2 rounded-2xl bg-white dark:bg-[#0d1222] border border-slate-200 dark:border-white/10 shadow-2xl z-50 space-y-1"
                  >
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 py-1">
                      Theme Presets
                    </div>
                    {presetOptions.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setColorPreset(p.id);
                          setShowPaletteMenu(false);
                        }}
                        className={`w-full flex items-center gap-2 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                          colorPreset === p.id
                            ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold'
                            : 'hover:bg-slate-100 dark:hover:bg-white/5 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
                        <span>{p.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Dark/Light Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200/60 dark:border-white/10 transition-all"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            {/* Login / Get Started */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/login"
                className="px-4 py-2 text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white transition-colors"
              >
                Log In
              </Link>
              <Link
                to="/login"
                className="px-5 py-2.5 text-xs font-black bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white rounded-2xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-105 active:scale-100"
              >
                Get Started Free
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              onClick={onMenuOpen}
              className="lg:hidden w-10 h-10 rounded-2xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100/80 dark:bg-white/5 border border-slate-200/60 dark:border-white/10"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
}
