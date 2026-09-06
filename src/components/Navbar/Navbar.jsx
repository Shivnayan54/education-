import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Bell, Menu, Sun, Moon, GraduationCap, Sparkles } from 'lucide-react';
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
  const { isDark, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-slate-800 py-3'
          : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-100 dark:border-slate-800/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Clean Brand Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20 group-hover:scale-105 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Learnova
              </span>
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-xl text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Tools & CTAs */}
          <div className="flex items-center gap-2.5">
            {/* Search Trigger */}
            <button
              onClick={onSearchOpen}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Notifications */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setShowNotifications((v) => !v)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-blue-600" />
              </button>
              <NotificationDropdown isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Log in */}
            <Link
              to="/login"
              className="hidden lg:inline-flex text-xs font-bold text-slate-700 dark:text-slate-300 hover:text-blue-600 px-3 py-2 transition-colors"
            >
              Log In
            </Link>

            {/* Get Started Button */}
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-100"
            >
              Get Started Free
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              onClick={onMenuOpen}
              className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
