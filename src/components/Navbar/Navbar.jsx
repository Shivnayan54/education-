import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Search, Bell, Menu, Sun, Moon, Sparkles, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
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
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-4">
      <div
        className={`max-w-6xl mx-auto rounded-3xl transition-all duration-300 px-4 sm:px-6 py-3 flex items-center justify-between border ${
          scrolled
            ? 'bg-[#101626]/90 dark:bg-[#101626]/90 light:bg-white/90 backdrop-blur-2xl border-white/15 light:border-slate-200 shadow-2xl shadow-indigo-950/40'
            : 'bg-[#101626]/60 dark:bg-[#101626]/60 light:bg-white/60 backdrop-blur-xl border-white/10 light:border-slate-200/60 shadow-lg'
        }`}
      >
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 to-violet-600 flex items-center justify-center text-white shadow-md shadow-indigo-600/30 group-hover:scale-105 transition-transform">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xl font-black tracking-tight bg-gradient-to-r from-white via-indigo-200 to-indigo-400 light:from-slate-900 light:to-indigo-600 bg-clip-text text-transparent">
              Learnova
            </span>
          </div>
        </Link>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 light:bg-slate-100 p-1.5 rounded-2xl border border-white/10 light:border-slate-200">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `px-4 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-300 light:text-slate-600 hover:text-white light:hover:text-slate-900 hover:bg-white/5'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Right Tools & CTA */}
        <div className="flex items-center gap-2">
          {/* Search */}
          <button
            onClick={onSearchOpen}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 light:text-slate-600 hover:text-white hover:bg-white/10 light:hover:bg-slate-100 transition-colors"
            aria-label="Search"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Notifications */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setShowNotifications((v) => !v)}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 light:text-slate-600 hover:text-white hover:bg-white/10 light:hover:bg-slate-100 transition-colors relative"
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            </button>
            <NotificationDropdown isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
          </div>

          {/* Theme Mode Switcher */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 light:text-slate-600 hover:text-white hover:bg-white/10 light:hover:bg-slate-100 transition-colors"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* CTA */}
          <Link
            to="/login"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-extrabold text-xs shadow-md shadow-indigo-600/30 transition-all hover:scale-105 active:scale-100"
          >
            Get Started
          </Link>

          {/* Mobile Menu */}
          <button
            onClick={onMenuOpen}
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-300 light:text-slate-700 hover:bg-white/10"
            aria-label="Menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
