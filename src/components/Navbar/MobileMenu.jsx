import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Home, BookOpen, Video, Brain, MessageSquare, FileText, Sun, Moon, GraduationCap } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

const navLinks = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/courses', label: 'Courses', icon: BookOpen },
  { to: '/classes', label: 'Classes', icon: Video },
  { to: '/practice', label: 'Practice', icon: Brain },
  { to: '/ai-tutor', label: 'AI Tutor', icon: MessageSquare },
  { to: '/study-materials', label: 'Study Materials', icon: FileText },
]

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const panelVariants = {
  hidden: { x: '100%' },
  visible: { x: 0, transition: { type: 'spring', stiffness: 320, damping: 35 } },
  exit: { x: '100%', transition: { type: 'spring', stiffness: 320, damping: 35 } },
}

const linkItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.1 + i * 0.05, type: 'spring', stiffness: 300 } }),
}

export default function MobileMenu({ isOpen, onClose }) {
  const { isDark, toggleTheme } = useTheme()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={overlayVariants} initial="hidden" animate="visible" exit="exit"
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.aside
            variants={panelVariants} initial="hidden" animate="visible" exit="exit"
            className="fixed top-0 right-0 h-full w-[82vw] max-w-sm z-50 bg-white dark:bg-slate-900 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
              <Link to="/" onClick={onClose} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-md">
                  <GraduationCap size={18} className="text-white" />
                </div>
                <span className="text-xl font-extrabold bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">
                  Learnova
                </span>
              </Link>
              <button onClick={onClose} className="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                <X size={18} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {navLinks.map(({ to, label, icon: Icon }, i) => (
                <motion.div key={to} custom={i} variants={linkItemVariants} initial="hidden" animate="visible">
                  <NavLink
                    to={to} end={to === '/'} onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-violet-50 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400'
                          : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isActive ? 'bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-400' : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400'}`}>
                          <Icon size={16} />
                        </span>
                        {label}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mx-6 border-t border-slate-100 dark:border-slate-800" />
            <div className="px-6 py-6 space-y-3">
              <button onClick={toggleTheme} className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                {isDark ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-slate-500" />}
                {isDark ? 'Light Mode' : 'Dark Mode'}
              </button>
              <Link to="/login" onClick={onClose} className="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold border-2 border-violet-500 text-violet-600 dark:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-colors">
                Login
              </Link>
              <Link to="/login" onClick={onClose} className="block w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-700 hover:to-indigo-700 shadow-md shadow-violet-500/20 transition-all">
                Get Started
              </Link>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
