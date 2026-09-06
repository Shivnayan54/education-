import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Learning Tracks',
    links: [
      { label: 'All Courses', to: '/courses' },
      { label: 'Live Masterclasses', to: '/#live-classes' },
      { label: 'Practice Arena', to: '/practice' },
      { label: 'Resource Library', to: '/#study-materials' },
      { label: 'AI Study Tutor', to: '/ai-tutor' },
    ],
  },
  {
    title: 'Target Exams',
    links: [
      { label: 'JEE (Main & Advanced)', to: '/courses?exam=JEE' },
      { label: 'NEET (UG Medical)', to: '/courses?exam=NEET' },
      { label: 'CUET (UG)', to: '/courses?exam=CUET' },
      { label: 'Class 10 & 12 Boards', to: '/courses?exam=Boards' },
      { label: 'SSC & Banking', to: '/courses?exam=SSC' },
    ],
  },
  {
    title: 'Learnova',
    links: [
      { label: 'About Us', to: '#' },
      { label: 'Our Mission & Pedagogy', to: '#' },
      { label: 'Top Faculty & Mentors', to: '#' },
      { label: 'Student Testimonials', to: '#' },
      { label: 'Help Center & FAQs', to: '#' },
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8"
        >
          {/* Brand Col (2 cols on lg) */}
          <div className="sm:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">Learnova</span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              India's premier AI-powered educational platform. Making high-quality STEM education, competitive entrance coaching, and intelligent 24/7 personalized tutoring accessible to every student.
            </p>

            {/* Social icons (Inline SVGs) */}
            <div className="flex items-center gap-2 pt-2">
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-500/10 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-pink-500 hover:bg-pink-500/10 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-blue-500 hover:bg-blue-500/10 transition-all">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* X / Twitter */}
              <a href="#" aria-label="X" className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-sky-400 hover:bg-sky-400/10 transition-all">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <div className="pt-2 max-w-sm">
              <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Join our student newsletter
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed to Learnova study alerts!'); }} className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  required
                  className="flex-1 bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-indigo-500 transition-colors min-w-0"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* 3 Nav Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-3">
              <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2 text-xs">
                {section.links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-slate-400 hover:text-indigo-400 transition-colors inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 Learnova Education Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-500">❤️</span> for students across India
          </p>
        </div>
      </div>
    </footer>
  );
}
