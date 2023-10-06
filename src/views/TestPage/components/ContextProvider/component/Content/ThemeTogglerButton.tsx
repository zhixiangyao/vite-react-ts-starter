import { ThemeContext } from '../../index'

const ThemeTogglerButton: React.FC = () => {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button
          onClick={toggleTheme}
          style={{ backgroundColor: theme.background, color: theme.color }}
          className="rounded-sm p-4"
        >
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  )
}

export default ThemeTogglerButton
