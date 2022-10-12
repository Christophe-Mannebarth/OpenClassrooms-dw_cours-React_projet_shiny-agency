// IMPORT COMPONENT, COLORS AND LIBRARY
/* Importing the Link component from the react-router-dom package. */
import { Link } from 'react-router-dom'
/* Importing the colors.js file from the same directory. */
import colors from './colors'
/* Importing the styled-components library and the keyframes function from the styled-components
library. */
import styled, { keyframes } from 'styled-components'

/* Creating a keyframe animation. */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

/* Creating a styled div for the Loader. */
export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

/* Creating a styled link for the nav */
export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: ${({ $theme }) => ($theme === 'light' ? '#8186a0' : '#ffffff')};
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`
