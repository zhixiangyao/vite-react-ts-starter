import React, { useState } from 'react'

import { themes, ThemeContext } from './context'
import Content from './component/Content'

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
