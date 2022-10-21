/* Importing the Footer component from the current directory. */
import Footer from '.'
/* Importing the screen, and fireEvent functions from the testing library. */
import { screen, fireEvent } from '@testing-library/react'
/* Importing the render function from the utils directory. */
import { render } from '../../utils/test'

/* Testing the footer component. */
describe('Footer', () => {
  /* Testing to see if the component renders without crashing. */
  it('Should render without crashing', async () => {
    render(<Footer />)
  })
  /* Testing the button to see if it changes the theme. */
  it('Should change theme', async () => {
    render(<Footer />)
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})
