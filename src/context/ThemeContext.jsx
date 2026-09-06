import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

const PRESET_OPTIONS = [
  { id: 'indigo', name: 'Cyber Indigo', color: '#6366F1', bgGrad: 'from-indigo-600 to-blue-600' },
  { id: 'violet', name: 'Cosmic Violet', color: '#A855F7', bgGrad: 'from-purple-600 to-pink-600' },
  { id: 'emerald', name: 'Emerald Aurora', color: '#10B981', bgGrad: 'from-emerald-500 to-teal-600' },
  { id: 'sunset', name: 'Sunset Amber', color: '#F97316', bgGrad: 'from-amber-500 to-rose-600' },
];

function getInitialTheme() {
  if (typeof window === 'undefined') return 'dark'; // Default to dark for ultra-attractive cyber look
  const saved = localStorage.getItem('learnova-theme');
  if (saved === 'dark' || saved === 'light') return saved;
  return 'dark';
}

function getInitialPreset() {
  if (typeof window === 'undefined') return 'indigo';
  const saved = localStorage.getItem('learnova-preset');
  if (['indigo', 'violet', 'emerald', 'sunset'].includes(saved)) return saved;
  return 'indigo';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const [colorPreset, setColorPreset] = useState(getInitialPreset);

  // Sync theme mode (dark/light) & color preset to document root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    // Remove all old presets
    PRESET_OPTIONS.forEach((p) => root.classList.remove(`preset-${p.id}`));
    root.classList.add(`preset-${colorPreset}`);

    localStorage.setItem('learnova-theme', theme);
    localStorage.setItem('learnova-preset', colorPreset);
  }, [theme, colorPreset]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const isDark = theme === 'dark';

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark,
        colorPreset,
        setColorPreset,
        presetOptions: PRESET_OPTIONS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}

export default ThemeProvider;
