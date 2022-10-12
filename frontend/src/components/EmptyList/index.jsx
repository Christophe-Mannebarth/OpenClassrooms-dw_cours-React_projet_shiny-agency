/* Importing the styled-components library. */
import styled from 'styled-components'
/* Importing the colors.js file from the utils/style folder. */
import colors from '../../utils/style/colors'
/* Importing the empty.svg file from the assets folder. */
import EmptyIllustration from '../../assets/empty.svg'

/* Creating a styled div called Container. */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`
/* A styled component: a h1 title called Title. */
const Title = styled.h1`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`
/* A styled component: a h3 subtitle called SubTitle. */
const SubTitle = styled.h3`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: normal;
`
/* Creating a styled component: an image  called Illustration. */
const Illustration = styled.img`
  margin: 30px 0;
`
// EMPTY LIST
/**
 * It returns a Container component with a Title,
 * Illustration and SubTitle component inside it.
 * @returns A component
 */
function EmptyList({ theme }) {
  return (
    <Container theme={theme}>
      <Title theme={theme}>Dommage...</Title>
      <Illustration src={EmptyIllustration} />
      <SubTitle theme={theme}>
        Il semblerait que vous n’ayez besoin d’aucune compétence
      </SubTitle>
    </Container>
  )
}

/* Exporting the EmptyList component. */
export default EmptyList
