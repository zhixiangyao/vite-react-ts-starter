import React from 'react'

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

export { themes, ThemeContext }
