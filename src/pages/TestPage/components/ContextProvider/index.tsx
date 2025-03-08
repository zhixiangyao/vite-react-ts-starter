import type { Themes } from './type'

import { createContext } from 'react'
import { Content } from './component/Content'
import { useTheme } from './hooks'

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

export const ContextProvider: React.FC = () => {
  const value = useTheme(themes)

  return (
    <fieldset className="w-300px flex flex-col items-center justify-evenly rounded-md border-4 border-blue-400 px-4 py-2">
      <legend className="px-2 font-bold">ContextProvider</legend>

      <ThemeContext value={value}>
        <Content />
      </ThemeContext>
    </fieldset>
  )
}
