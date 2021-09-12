import React, { useState } from 'react'

const themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  },
}

const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
})

const useTheme = () => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => setTheme(theme === themes.dark ? themes.light : themes.dark)

  return { theme, toggleTheme }
}

export { themes, ThemeContext, useTheme }
