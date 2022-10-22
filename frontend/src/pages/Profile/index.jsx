/* Importing the styled-components library. */
import styled from 'styled-components'
/* Importing the useParams hook from the react-router-dom library. */
import { useParams } from 'react-router-dom'
/* Importing the colors object from the colors.js file. */
import colors from '../../utils/style/colors'
/* Importing the useSelector hook from the react-redux library. */
import { useSelector } from 'react-redux'
/* Importing the selectTheme function from the selectors.js file. */
import { selectTheme } from '../../utils/selectors'
/* Importing useQuery function from react-query package */
import { useQuery } from 'react-query'
/* Importing axios*/
import axios from 'axios'

// Creating a styled component: a div called ProfileWrapper.
const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 90px 0;
  margin: 0 90px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
`
// Creating a styled component: a div called ProfileDetails.
const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`
// Creating a styled component: an image called Picture.
const Picture = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 75px;
`
// Creating a styled component: a title h1 called Title.
const Title = styled.h1`
  font-size: 25px;
  margin: 0;
  font-weight: 500;
`
// Creating a styled component: a title h2 called JobTitle.
const JobTitle = styled.h2`
  padding-top: 10px;
  font-size: 20px;
  margin: 0;
  font-weight: 500;
`
// Creating a styled component: a span called Location.
const Location = styled.span`
  margin-left: 15px;
  color: ${colors.secondary};
`
// Creating a styled component: a div called TitleWrapper.
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
// Creating a styled component: a span called Price.
const Price = styled.span`
  padding-top: 10px;
  font-weight: 500;
  font-size: 20px;
`
// Creating a styled component: a div called SkillsWrapper.
const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`
// Creating a styled component: a span called Skill.
const Skill = styled.span`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
  border: 1px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`
// Creating a styled component: a span called Availability.
const Availability = styled.span`
  &:before {
    position: absolute;
    left: 0;
    top: 4px;
    height: 10px;
    width: 10px;
    border-radius: 5px;
    background-color: ${({ available }) => (available ? 'green' : 'red')};
    content: '';
  }
  padding-left: 20px;
  position: relative;
`

// PROFILE
/**
 * Returns a ProfileWrapper component that contains a Picture component and
 * a ProfileDetails component.
 * @returns The Profile component is being returned.
 */
function Profile() {
  const theme = useSelector(selectTheme)
  const { id: freelanceId } = useParams()

  const { data } = useQuery(
    // we use an array to identify the request
    // we include the freelance ID in this array
    ['freelance', freelanceId],
    async () => {
      const response = await axios.get(
        `http://localhost:8000/freelance?id=${freelanceId}`
      )
      const data = await response.data
      return data
    }
  )

  const profileData = data?.freelanceData ?? {}

  const { picture, name, location, tjm, job, skills, available, id } =
    profileData

  return (
    <ProfileWrapper theme={theme}>
      <Picture src={picture} alt={name} height={150} width={150} />
      <ProfileDetails theme={theme}>
        <TitleWrapper>
          <Title>{name}</Title>
          <Location>{location}</Location>
        </TitleWrapper>
        <JobTitle>{job}</JobTitle>
        <SkillsWrapper>
          {skills &&
            skills.map((skill) => (
              <Skill key={`skill-${skill}-${id}`} theme={theme}>
                {skill}
              </Skill>
            ))}
        </SkillsWrapper>
        <Availability available={available}>
          {available ? 'Disponible maintenant' : 'Indisponible'}
        </Availability>
        <Price>{tjm} € / jour</Price>
      </ProfileDetails>
    </ProfileWrapper>
  )
}

export default Profile
