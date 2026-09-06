import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Search, Bell, Menu, Sun, Moon, GraduationCap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'
import NotificationDropdown from './NotificationDropdown'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/practice', label: 'Practice' },
  { to: '/ai-tutor', label: 'AI Tutor' },
  { to: '/dashboard', label: 'Dashboard' },
]

export default function Navbar({ onSearchOpen, onMenuOpen }) {
  const { isDark, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-white/90 dark:bg-slate-900/90 shadow-sm border-b border-slate-200/60 dark:border-slate-700/60'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <motion.div
              whileHover={{ rotate: -8, scale: 1.05 }}
              className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/25"
            >
              <GraduationCap size={20} className="text-white" />
            </motion.div>
            <div className="hidden sm:block">
              <span className="text-xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent leading-none">
                Learnova
              </span>
              <p className="text-[10px] text-slate-400 dark:text-slate-500 font-medium leading-none mt-0.5">
                Learn. Practice. Excel.
              </p>
            </div>
            <span className="sm:hidden text-xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
              Learnova
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={onSearchOpen}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open search"
            >
              <Search size={18} />
            </motion.button>

            <div className="relative hidden sm:block">
              <motion.button
                whileTap={{ scale: 0.93 }}
                onClick={() => setShowNotifications(v => !v)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
                aria-label="Notifications"
              >
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-slate-900" />
              </motion.button>
              <NotificationDropdown isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
            </div>

            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={toggleTheme}
              className="hidden sm:flex w-9 h-9 rounded-xl items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? 'sun' : 'moon'}
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.18 }}
                >
                  {isDark ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <div className="hidden lg:flex items-center gap-2">
              <Link to="/login" className="px-4 py-2 text-sm font-semibold text-violet-600 dark:text-violet-400 border border-violet-300 dark:border-violet-600 rounded-xl hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all">
                Login
              </Link>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                <Link to="/login" className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:from-violet-700 hover:to-indigo-700 shadow-md shadow-violet-500/25 transition-all">
                  Get Started
                </Link>
              </motion.div>
            </div>

            <motion.button
              whileTap={{ scale: 0.93 }}
              onClick={onMenuOpen}
              className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  )
}
