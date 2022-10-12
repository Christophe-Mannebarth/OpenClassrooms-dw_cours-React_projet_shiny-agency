/* Importing the styled-components library. */
import styled from 'styled-components'
/* Importing the Component class from the react module. */
import { useState } from 'react'
/* Importing the colors.js file from the utils/style directory. */
import colors from '../../utils/style/colors'

/* Creating a styled component: a div called InputWrapper. */
const InputWrapper = styled.div`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  display: flex;
  flex-direction: column;
`
/* Creating a styled component: a label called StyledLabel. */
const StyledLabel = styled.label`
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
`
/* Creating a styled component: an input called StyledInput. */
const StyledInput = styled.input`
  border: none;
  color: ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  background-color: transparent;
  border-bottom: 2px solid
    ${({ theme }) => (theme === 'light' ? colors.dark : 'white')};
  margin-top: 5px;
  margin-bottom: 15px;
`
// EMAIL INPUT
/**
 * It's a function that takes a theme prop
 * and returns a styled input component.
 * @returns A component that renders a label and an input.
 */
function EmailInput({ theme }) {
  const [inputValue, setInputValue] = useState('')

  return (
    <InputWrapper theme={theme}>
      <StyledLabel theme={theme}>Adresse email</StyledLabel>
      <StyledInput
        theme={theme}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue}
    </InputWrapper>
  )
}

/* Exporting the EmailInput class */
export default EmailInput
