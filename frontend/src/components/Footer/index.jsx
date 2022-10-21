/* It's importing the useDispatch and useSelector hooks from the react-redux library. */
import { useDispatch, useSelector } from 'react-redux'
/* It's importing the selectTheme function from the selectors.js file. */
import { selectTheme } from '../../utils/selectors'
/* It's importing the styled-components library. */
import styled from 'styled-components'
/* Importing the colors.js file from the utils/style folder. */
import colors from '../../utils/style/colors'
/* It's importing the EmailInput component from the EmailInput.js file. */
import EmailInput from '../EmailInput'
/* It's importing all the actions of the theme */
import * as themeActions from '../../features/theme'

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
 * that has an onClick event listener that calls the toggle action from the themeActions.
 * @returns A function that returns a component.
 */
function Footer() {
  const theme = useSelector(selectTheme)
  const dispatch = useDispatch()

  return (
    <FooterContainer>
      <EmailInput theme={theme} />
      <NightModeButton onClick={() => dispatch(themeActions.toggle())}>
        Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
      </NightModeButton>
    </FooterContainer>
  )
}

// EXPORT FOOTER
export default Footer
