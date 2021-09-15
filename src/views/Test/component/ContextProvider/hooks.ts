import { useState } from 'react'

import { Themes } from './type'

const useTheme = (themes: Themes) => {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = () => setTheme(theme === themes.dark ? themes.light : themes.dark)

  return { theme, toggleTheme }
}

export { useTheme }
