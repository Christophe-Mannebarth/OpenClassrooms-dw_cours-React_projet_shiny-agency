// IMPORT HOOKS, COMPONENTS AND STYLES
/* Importing the useState, useEffect and useContext hooks from the react package. */
import { useContext } from 'react'
/* Importing the useParams hook from the react-router-dom package. */
import { useParams } from 'react-router-dom'
/* It's importing the useFetch hook from the hooks.js file. */
import { useFetch, useTheme } from '../../utils/hooks'
/* Importing the Link component from the react-router-dom package. */
import { Link } from 'react-router-dom'
/* Importing the Loader component from the Atoms folder. */
import { Loader } from '../../utils/style/Atoms'
/* Importing the styled-components library. */
import styled from 'styled-components'
/* Importing the colors.js file from the utils/style folder. */
import colors from '../../utils/style/colors'
/* It's importing the SurveyContext from the context.js file. */
import { SurveyContext } from '../../utils/context'

/* A styled component: a div for the SurveyContainer. */
const SurveyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
/* A styled component: a title for the QuestionTitle. */
const QuestionTitle = styled.h2`
  text-decoration: underline;
  text-decoration-color: ${colors.primary};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`
/* A styled component: a span for the QuestionContent */
const QuestionContent = styled.span`
  margin: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`
/* A styled component: a div for the LinkWrapper. */
const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`
/* A styled component: a button for the ReplyBox. */
const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`
/* It's a styled component: a div for the ReplyWrapper. */
const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
// SURVEY
/**
 *  - Returns a div with a title, a subtitle, a link to the previous question,
 *    and a link to the next question.
 * @returns A React component
 */
function Survey() {
  /* Destructuring the questionNumber from the useParams hook. */
  const { questionNumber } = useParams()
  /* Converting the questionNumber string to an integer. */
  const questionNumberInt = parseInt(questionNumber)
  /* A ternary operator. If the questionNumberInt is equal to 1, 
  then the prevQuestionNumber is equal to 1. 
  Otherwise, the prevQuestionNumber is equal to questionNumberInt - 1. */
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  /* Adding 1 to the questionNumberInt. */
  const nextQuestionNumber = questionNumberInt + 1

  /* It's destructuring the theme from the useTheme hook. */
  const { theme } = useTheme()

  /* It's destructuring the saveAnswers and answers from the useContext hook. */
  const { saveAnswers, answers } = useContext(SurveyContext)
  /**
   * - Takes an argument called "answer" and then calls another function
   * called "saveAnswers" with an object as an argument.
   * @param {Boolean} answer the answer to the question as a boolean
   */
  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer })
  }

  /* Destructuring the data and isLoading from the useFetch hook. */
  const { data, isLoading, error } = useFetch(`http://localhost:8000/survey`)
  /* Destructuring the surveyData from the data object. */
  const surveyData = data?.surveyData
  /* It's a condition that is checking if there is an error. 
  If there is an error, it's returning a span with a message. */
  if (error) {
    return <span>Oups il y a eu un problème</span>
  }

  /* Returning a div with a title, a subtitle, a link to the previous question,
  and a link to the next question. */
  return (
    <SurveyContainer>
      <QuestionTitle theme={theme}>Question {questionNumber}</QuestionTitle>
      {isLoading ? (
        <Loader />
      ) : (
        <QuestionContent theme={theme}>
          {surveyData[questionNumber]}
        </QuestionContent>
      )}
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
          theme={theme}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
          theme={theme}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>
      <LinkWrapper theme={theme}>
        <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
        {surveyData && surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
        ) : (
          <Link to="/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}

// EXPORT SURVEY
export default Survey
