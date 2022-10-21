// IMPORT LIBRARIES, DEFAULT PICTURE AND HOOKS
/* Importing the prop-types library. */
import PropTypes from 'prop-types'
/* Importing the styled-components library. */
import styled from 'styled-components'
/* Importing the default picture from the assets folder. */
import DefaultPicture from '../../assets/profile.png'
/* Importing the colors.js file from the utils/style folder. */
import colors from '../../utils/style/colors'

/* (CLASS COMPONENT METHOD) 
Importing the Component class from the react library. */
import { Component } from 'react'

/* Creating a styled component: a span called CardLabel. */
const CardLabel = styled.span`
  color: ${({ theme }) => (theme === 'light' ? colors.primary : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`
/* Creating a styled component: an image called CardImage. */
const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`
/* Creating a styled component: a span called CardTitle. */
const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`
/* Creating a styled component:a div called CardWrapper. */
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`

// CARD (CLASS COMPONENT METHOD)
class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // Destructuring the props object.
    const { theme, picture, label, title } = this.props

    // Returning the CardWrapper component with:
    // the CardLabel, CardImage and CardTitle components inside of it.
    return (
      <CardWrapper theme={theme}>
        <CardLabel theme={theme}>{label}</CardLabel>
        <CardImage src={picture} alt="freelance" />
        <CardTitle theme={theme}>{title}</CardTitle>
      </CardWrapper>
    )
  }
}

/* Defining the propTypes for the Card component. */
Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

/* Setting the default props for the Card component. */
Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
  theme: 'light',
}

// EXPORT CARD
export default Card
