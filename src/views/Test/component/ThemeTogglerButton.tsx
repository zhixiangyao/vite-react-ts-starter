import React from 'react'

import { ThemeContext } from '../context'

const ThemeTogglerButton = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background, color: theme.color }}
          className="p-4 rounded-sm"
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeTogglerButton
