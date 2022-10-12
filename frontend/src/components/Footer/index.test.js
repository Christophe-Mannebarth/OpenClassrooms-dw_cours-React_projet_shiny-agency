/* Importing the Footer component from the current directory. */
import Footer from '.'
/* Importing the render, screen, and fireEvent functions from the testing library. */
import { render, screen, fireEvent } from '@testing-library/react'
/* Importing the ThemeProvider component from the context.js file in the utils directory. */
import { ThemeProvider } from '../../utils/context'

/* Testing the footer component. */
describe('Footer', () => {
  /* Testing to see if the component renders without crashing. */
  test('Should render without crashing', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
  })

  /* Testing the button to see if it changes the theme. */
  test('Change theme', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>
    )
    /* Getting the button element from the DOM. */
    const nightModeButton = screen.getByRole('button')
    /* Checking to see if the text content of the button 
    is equal to the string 'Changer de mode : ☀️'. */
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    /* Simulating a click on the button. */
    fireEvent.click(nightModeButton)
    /* Checking to see if the text content of the button is equal 
    to the string 'Changer de mode : 🌙'. */
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})
