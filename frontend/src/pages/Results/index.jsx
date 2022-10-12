// IMPORT HOOK, CONTEXT, COMPONENT, COLORS AND HOOKS
/* Importing the useContext hook from the react library. */
import { useContext } from 'react'
/* Importing the SurveyContext from the context.js file. */
import { SurveyContext } from '../../utils/context'
/* Importing the styled-components library. */
import styled from 'styled-components'
/* Importing the StyledLink and Loader components from the Atoms.js file. */
import { StyledLink, Loader } from '../../utils/style/Atoms'
/* Importing the colors.js file from the utils/style folder. */
import colors from '../../utils/style/colors'
/* Importing the useFetch and useTheme hooks from the hooks.js file. */
import { useFetch, useTheme } from '../../utils/hooks'
/* Importing the EmptyList component from the components folder. */
import EmptyList from '../../components/EmptyList'

/* A styled component: a div called ResultsContainer. */
const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`
/* A styled component: a title called ResultsTitle. */
const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`
/* A styled component: a div called DescriptionWrapper. */
const DescriptionWrapper = styled.div`
  padding: 60px;
`
/* A styled component: a span called JobTitle. */
const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === 'light' ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`
/* A styled component: a div called JobDescription. */
const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === 'light' ? colors.secondary : '#ffffff')};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`
/* A styled component: a div called LoaderWrapper. */
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

/**
 * - Takes an object of answers,
 * and returns a string of query parameters.
 * @param {Object} answers
 * @returns {String}
 */
export function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers)

  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0
    const separator = isFirstParam ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`
  }, '')
}

/**
 * If the index is the last item in the list, return the title.
 * Otherwise, return the title with a comma.
 * @returns A function that takes in three parameters.
 */
export function formatJobList(title, listLength, index) {
  if (index === listLength - 1) {
    return title
  }
  return `${title},`
}

// RESULTS
/**
 * A React component that is fetching data from an API and displaying it.
 * @returns
 */
function Results() {
  /* Destructuring the theme object from the useTheme hook. */
  const { theme } = useTheme()
  /* Destructuring the answers object from the useContext hook. */
  const { answers } = useContext(SurveyContext)
  /* Taking the answers object and returning a string of query parameters. */
  const fetchParams = formatFetchParams(answers)

  /* Destructuring the data, isLoading and error objects from the useFetch hook. */
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  )

  /* A conditional rendering. If there is an error, 
  it will display the text "Il y a un problème". */
  if (error) {
    return <span>Il y a un problème</span>
  }

  /* Destructuring the data object. */
  const resultsData = data?.resultsData

  /* Checking if the resultsData object has a length of less than 1. 
  If it does, it will return the EmptyList component. */
  if (resultsData?.length < 1) {
    return <EmptyList theme={theme} />
  }

  /* A conditional rendering. If the data is loading, 
  it will display the Loader component. */
  return isLoading ? (
    <LoaderWrapper>
      <Loader data-testid="loader" />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => (
            <JobTitle
              key={`result-title-${index}-${result.title}`}
              theme={theme}
            >
              {formatJobList(result.title, resultsData.length, index)}
            </JobTitle>
          ))}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle theme={theme} data-testid="job-title">
                {result.title}
              </JobTitle>
              <p data-testid="job-description">{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  )
}
// EXPORT RESULTS
export default Results
