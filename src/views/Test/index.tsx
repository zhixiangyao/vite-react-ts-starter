import React from 'react'

import { ThemeContext, useTheme } from './context'
import Content from './component/Content'

const Test = () => {
  const value = useTheme()

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
