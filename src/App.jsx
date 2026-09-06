import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar/Navbar';
import MobileMenu from './components/Navbar/MobileMenu';
import SearchOverlay from './components/Navbar/SearchOverlay';
import Footer from './components/Footer/Footer';
import ThemeCustomizer from './components/ThemeCustomizer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import DashboardPage from './pages/DashboardPage';
import Practice from './pages/Practice';
import AITutorPage from './pages/AITutorPage';
import Login from './pages/Login';

function AppInner() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Close overlays on route change
  useEffect(() => {
    const close = () => {
      setMobileMenuOpen(false);
      setSearchOpen(false);
    };
    window.addEventListener('popstate', close);
    return () => window.removeEventListener('popstate', close);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070913] text-slate-900 dark:text-slate-100 transition-colors duration-500 selection:bg-indigo-500/30 selection:text-indigo-400">
      <Navbar
        onSearchOpen={() => setSearchOpen(true)}
        onMenuOpen={() => setMobileMenuOpen(true)}
      />
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
      <SearchOverlay
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
      />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/ai-tutor" element={<AITutorPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Floating Theme Customizer Widget */}
      <ThemeCustomizer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppInner />
    </ThemeProvider>
  );
}
