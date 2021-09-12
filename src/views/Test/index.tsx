import React, { useState } from 'react'

import Content from './component/Content'

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

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
})

const Test = () => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  return (
    <fieldset>
      <legend>Context.Provider Test</legend>

      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Content />
      </ThemeContext.Provider>
    </fieldset>
  )
}

export default Test
