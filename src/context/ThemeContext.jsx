import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

/**
 * Determines the initial theme:
 * 1. Saved preference in localStorage
 * 2. System preference via prefers-color-scheme
 * 3. Default to 'light'
 */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'

  const saved = localStorage.getItem('learnova-theme')
  if (saved === 'dark' || saved === 'light') return saved

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  // Apply or remove the 'dark' class on <html>
  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  // Persist preference to localStorage
  useEffect(() => {
    localStorage.setItem('learnova-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const isDark = theme === 'dark'

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Custom hook to consume ThemeContext.
 * Must be used within a <ThemeProvider>.
 */
export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return ctx
}

export default ThemeProvider
