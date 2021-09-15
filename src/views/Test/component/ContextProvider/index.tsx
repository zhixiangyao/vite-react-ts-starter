import React, { createContext } from 'react'

import Content from './component/Content'
import { useTheme } from './hooks'

import type { Themes } from './type'

const themes: Themes = {
  light: {
    color: '#000000',
    background: '#eeeeee',
  },
  dark: {
    color: '#ffffff',
    background: '#222222',
  },
}

export const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
})

const Test = () => {
  const value = useTheme(themes)

  return (
    <fieldset>
      <legend>Context.Provider Test</legend>

      <ThemeContext.Provider value={value}>
        <Content />
      </ThemeContext.Provider>
    </fieldset>
  )
}

export default Test