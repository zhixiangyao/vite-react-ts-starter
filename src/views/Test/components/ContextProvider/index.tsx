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

const ContextProvider = () => {
  const value = useTheme(themes)

  return (
    <fieldset className="w-240px px-4 py-2 border-4 border-blue-400">
      <legend>ContextProvider</legend>

      <ThemeContext.Provider value={value}>
        <Content />
      </ThemeContext.Provider>
    </fieldset>
  )
}

export default ContextProvider
