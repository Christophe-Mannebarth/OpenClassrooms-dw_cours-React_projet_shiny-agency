// IMPORT HOOK AND FUNCTION
/* Importing the useState hook and createContext function from the react library. */
import { useState, createContext } from 'react'

/* Creating 2 context objects. */
export const ThemeContext = createContext()
export const SurveyContext = createContext()

/**
 * The ThemeProvider function is a React component that provides
 * the theme state and toggleTheme function to all of its children.
 * @returns The ThemeContext.Provider.
 */
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * The SurveyProvider function is a React component that provides
 * the SurveyContext to all of its children.
 * @returns The SurveyContext.provider.
 */
export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({})
  const saveAnswers = (newAnswers) => {
    setAnswers({ ...answers, ...newAnswers })
  }

  return (
    <SurveyContext.Provider value={{ answers, saveAnswers }}>
      {children}
    </SurveyContext.Provider>
  )
}
