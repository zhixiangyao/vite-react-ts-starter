import React from 'react'

import { ThemeContext, useTheme } from './context'
import Content from './component/Content'
import Counter from './component/Counter'

const Test = () => {
  const value = useTheme()

  return (
    <>
      <Counter />

      <br />

      <fieldset>
        <legend>Context.Provider Test</legend>

        <ThemeContext.Provider value={value}>
          <Content />
        </ThemeContext.Provider>
      </fieldset>
    </>
  )
}

export default Test
