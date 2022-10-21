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
/* It's importing the useSelector and useDispatch hooks from the react-redux library. */
import { useSelector } from 'react-redux'
/* Import selecTheme from the selectors.js file. */
import { selectTheme } from '../../utils/selectors'
/* Importing useQuery function from react-query package */
import { useQuery } from 'react-query'

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
  const {
    // The data returned by the server
    // "null" if the request is not yet resolved
    data,
    // Boolean who indicates if the request is in progress
    isLoading,
    // The error returned by the server
    // or "null" if no error
    error,
  } = useQuery('freelances', async () => {
    const response = await fetch('http://localhost:8000/freelances')
    const data = await response.json()
    return data
  })

  const theme = useSelector(selectTheme)

  if (error) {
    return <span>Il y a un problème</span>
  }

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
          {data.freelancersList.map((profile) => (
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
