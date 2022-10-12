// IMPORT COMPONENTS, LOGOS AND HOOK
/* Importing the Link component from the react-router-dom package. */
import { Link } from 'react-router-dom'
/* Importing the styled-components library. */
import styled from 'styled-components'
/* Importing the StyledLink component from the Atoms.js file. */
import { StyledLink } from '../../utils/style/Atoms'
/* Importing the light-logo.png file. */
import LightLogo from '../../assets/light-logo.png'
/* Importing the dark-logo.png file. */
import DarkLogo from '../../assets/dark-logo.png'
/* Importing the useTheme hook from the hooks.js file. */
import { useTheme } from '../../utils/hooks'

/* A styled component for the image. */
const HomeLogo = styled.img`
  height: 70px;
`

/* It's a styled component for the nav. */
const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
// HEADER
/**
 * - Returns a nav element with three Links elements inside of it.
 * @returns A React component.
 */
/**
 * Returns a NavContainer that contains a link to the home page,
 * and a div that contains three links.
 * the appearance of the logo and that of the text change
 * depending on whether the theme is Dark or Light.
 * @returns A React component
 */
function Header() {
  const { theme } = useTheme()

  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={theme === 'light' ? DarkLogo : LightLogo} />
      </Link>
      <div>
        <StyledLink $theme={theme} to="/">
          Accueil
        </StyledLink>
        <StyledLink $theme={theme} to="/freelances">
          Profils
        </StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

// EXPORT HEADER
export default Header
