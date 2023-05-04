import { createContext } from 'react'

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

const ContextProvider: React.FC = () => {
  const value = useTheme(themes)

  return (
    <fieldset className="w-300px px-4 py-2 border-4 rounded-md border-blue-400 flex flex-col items-center justify-evenly">
      <legend className="px-2 font-bold">ContextProvider</legend>

      <ThemeContext.Provider value={value}>
        <Content />
      </ThemeContext.Provider>
    </fieldset>
  )
}

export default ContextProvider
