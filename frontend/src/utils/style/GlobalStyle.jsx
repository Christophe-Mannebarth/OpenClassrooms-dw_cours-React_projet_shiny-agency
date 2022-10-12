// IMPORT FUNCTION AND HOOK
/* Importing the createGlobalStyle function from the styled-components library. */
import { createGlobalStyle } from 'styled-components'
/* Importing the useTheme hook from the hooks.js file. */
import { useTheme } from '../hooks'

/* Creating a styled component for the global style. */
const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    a {
      text-decoration: none;
    }
    body {
        background-color: ${(props) =>
          props.isDarkMode ? '#2F2E41' : 'white'};
        margin: 0;
    }
`
/**
 * If the theme is dark, then set the isDarkMode prop to true,
 * otherwise set it to false.
 * @returns A styled component that is a global style.
 */
function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

// EXPORT GLOBAL STYLE
export default GlobalStyle
