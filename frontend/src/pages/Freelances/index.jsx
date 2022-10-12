// IMPORT HOOKS, COMPONENTS AND STYLES
/* Importing the useFetch and useTheme hooks from the hooks.js file. */
import { useFetch, useTheme } from '../../utils/hooks'
/* Importing the Loader component from the Atoms folder. */
import { Loader } from '../../utils/style/Atoms'
/* Importing the Card component from the components folder. */
import Card from '../../components/Card'
/* Importing the styled-components library. */
import styled from 'styled-components'
/* Importing the colors.js file from the utils/style folder. */
import colors from '../../utils/style/colors'
/* It's importing the Link component from the react-router-dom library. */
import { Link } from 'react-router-dom'

/* It's a styled component: a div with some CSS properties. */
const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

/* It's a styled component: a title */
const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`

/* It's a styled component: a subtitle */
const PageSubtitle = styled.h2`
  font-size: 20px;
  color: ${colors.secondary};
  font-weight: 300;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`
/* It's a styled component: a div for the Loader */
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

// FREELANCES
/**
 * - Returns a div with a title, a subtitle, a loader and some cards.
 * @returns A React component
 */
function Freelances() {
  /* It's a custom hook that is getting the theme from the context. */
  const { theme } = useTheme()
  /* It's a  custom hook that is fetching the data from the API and setting the state. */
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )

  // Here the "?" ensures that data exists.
  // You can learn more about this notation here:
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
  const freelancersList = data?.freelancersList

  /* It's a condition that is checking if there is an error. 
  If there is an error, it's returning a span with a message. */
  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  /* It's returning a div with a title, a subtitle, a loader and some cards. */
  return (
    <div>
      <PageTitle theme={theme}>Trouvez votre prestataire</PageTitle>
      <PageSubtitle theme={theme}>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader theme={theme} data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList?.map((profile) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Card
                label={profile.job}
                title={profile.name}
                picture={profile.picture}
                theme={theme}
              />
            </Link>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

// EXPORT FREELANCES
export default Freelances
