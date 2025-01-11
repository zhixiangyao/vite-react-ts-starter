import type { Themes } from './type'

import { useCallback, useState } from 'react'

function useTheme(themes: Themes) {
  const [theme, setTheme] = useState(themes.light)

  const toggleTheme = useCallback(
    () => setTheme(theme === themes.dark ? themes.light : themes.dark),
    [theme, themes],
  )

  return { theme, toggleTheme }
}

export { useTheme }
