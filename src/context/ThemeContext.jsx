import { createContext, useState, useContext, useEffect } from "react"

const ThemeContext = createContext(null)

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light")

  // Efeito para aplicar tema salvo e atributo data-theme
  useEffect(() => {
    const saved = localStorage.getItem('plantashop_theme')
    const initial = saved === 'dark' ? 'dark' : 'light'
    setTheme(initial)
    document.documentElement.setAttribute('data-theme', initial) // Aplica atributo
  }, [])

  // Alterna tema com persistência
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light' // Calcula próximo
    setTheme(next)
    localStorage.setItem('plantashop_theme', next) // Persiste
    document.documentElement.setAttribute('data-theme', next) // Aplica
  }

  const value = {theme, toggleTheme}

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useThemeContext precisa ser utilizado dentro de um Provider.")
  return context
}