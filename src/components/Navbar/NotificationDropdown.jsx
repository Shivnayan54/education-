import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bell, X, Check } from 'lucide-react'

const notifications = [
  {
    id: 1,
    icon: '🔥',
    text: "You're on a 7-day learning streak! Keep going!",
    time: 'Just now',
    unread: true,
    color: 'bg-orange-100 dark:bg-orange-900/30',
  },
  {
    id: 2,
    icon: '📚',
    text: 'New lesson available: Current Electricity - Part 2',
    time: '2 hours ago',
    unread: true,
    color: 'bg-blue-100 dark:bg-blue-900/30',
  },
  {
    id: 3,
    icon: '🎯',
    text: 'Your quiz score improved by 12%! Great job.',
    time: 'Yesterday',
    unread: false,
    color: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    id: 4,
    icon: '🤖',
    text: 'AI recommends practicing Mechanics today.',
    time: '2 days ago',
    unread: false,
    color: 'bg-purple-100 dark:bg-purple-900/30',
  },
]

const dropdownVariants = {
  hidden: { opacity: 0, y: -12, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { type: 'spring', stiffness: 300, damping: 25 },
  },
  exit: { opacity: 0, y: -8, scale: 0.95, transition: { duration: 0.15 } },
}

export default function NotificationDropdown({ isOpen, onClose }) {
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose()
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          variants={dropdownVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute right-0 top-full mt-3 w-80 sm:w-96 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden z-50"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2">
              <Bell size={18} className="text-violet-500" />
              <h3 className="font-semibold text-slate-800 dark:text-slate-100 text-sm">Notifications</h3>
              <span className="bg-violet-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">2</span>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-xs text-violet-500 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors flex items-center gap-1">
                <Check size={12} />Mark all read
              </button>
              <button onClick={onClose} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                <X size={16} />
              </button>
            </div>
          </div>
          <ul className="divide-y divide-slate-50 dark:divide-slate-700/50 max-h-80 overflow-y-auto">
            {notifications.map((n, i) => (
              <motion.li
                key={n.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-700/40 cursor-pointer transition-colors"
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-lg ${n.color}`}>{n.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className={`text-sm leading-snug ${n.unread ? 'text-slate-800 dark:text-slate-100 font-medium' : 'text-slate-500 dark:text-slate-400'}`}>{n.text}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">{n.time}</p>
                </div>
                {n.unread && <span className="flex-shrink-0 w-2 h-2 rounded-full bg-violet-500 mt-1.5" />}
              </motion.li>
            ))}
          </ul>
          <div className="px-5 py-3 border-t border-slate-100 dark:border-slate-700 text-center">
            <button className="text-sm text-violet-500 hover:text-violet-700 dark:hover:text-violet-300 font-medium transition-colors">
              View all notifications
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
