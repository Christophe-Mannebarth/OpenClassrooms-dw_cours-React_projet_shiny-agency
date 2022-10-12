// IMPORT LIBRARY, STYLES AND IMAGE
/* Importing the styled-components library. */
import styled from 'styled-components'
/* Importing the colors.js file from the utils/style folder. */
import colors from '../../utils/style/colors'
/* Importing the StyledLink component from the Atoms.js file in the utils/style folder. */
import { StyledLink } from '../../utils/style/Atoms'
/* Importing the image from the assets folder. */
import HomeIllustration from '../../assets/home-illustration.svg'
/* It's importing the useTheme hook from the hooks.js file in the utils folder. */
import { useTheme } from '../../utils/hooks'

/* It's a styled component for the HomeWrapper. */
const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
`

/* It's a styled component for the HomeContainer. */
const HomerContainer = styled.div`
  margin: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  padding: 60px 90px;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

/* It's a styled component for the LeftCol. */
const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  ${StyledLink} {
    max-width: 250px;
  }
`

const StyledTitle = styled.h2`
  padding-bottom: 30px;
  max-width: 280px;
  line-height: 50px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

/* It's a styled component for the Illustration. */
const Illustration = styled.img`
  flex: 1;
`

// HOME
/**
 * Returns a div with a title
 * @returns A React component.
 */
function Home() {
  /* It's destructuring the theme from the useTheme hook. */
  const { theme } = useTheme()

  return (
    <HomeWrapper>
      <HomerContainer theme={theme}>
        <LeftCol>
          <StyledTitle theme={theme}>
            Repérez vos besoins, on s’occupe du reste, avec les meilleurs
            talents
          </StyledTitle>
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>
        </LeftCol>
        <Illustration src={HomeIllustration} />
      </HomerContainer>
    </HomeWrapper>
  )
}

// EXPORT HOME
export default Home
