// IMPORT HOOK, STYLES
/* It's importing the useTheme hook from the hooks.js file. */
import { useTheme } from '../../utils/hooks'
/* Importing the styled-components library. */
import styled from 'styled-components'
/* Importing the colors.js file from the utils/style folder. */
import colors from '../../utils/style/colors'
/* It's importing the EmailInput component from the EmailInput.js file. */
import EmailInput from '../EmailInput'

/* Creating a styled component for the footer. */
const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
`
/* Creating a styled component for the button. */
const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.secondary};
  padding-top: 30px;
`
// FOOTER
/**
 * It's a function that returns a FooterContainer component that contains a NightModeButton component
 * that has an onClick event listener that calls the toggleTheme function from the ThemeContext.
 * @returns A function that returns a component.
 */
function Footer() {
  const { toggleTheme, theme } = useTheme()

  return (
    <FooterContainer>
      <EmailInput theme={theme} />
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

// EXPORT FOOTER
export default Footer
