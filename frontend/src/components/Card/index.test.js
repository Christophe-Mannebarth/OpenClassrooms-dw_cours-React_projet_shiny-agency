import Card from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'

describe('Card', () => {
  /* Testing to see if the component renders without crashing. */
  test('Should render title and image', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    )
    /* It's getting the element with the role img. */
    const cardPicture = screen.getByRole('img')
    /* It's getting the element with the text Harry. */
    const cardTitle = screen.getByText(/Harry/i)
    /* It's checking if the src of the element with the role img 
    is equal to http://localhost/myPicture.png. */
    expect(cardPicture.src).toBe('http://localhost/myPicture.png')
    /* It's checking if the textContent of the element with the text Harry 
    is equal to Harry Potter. */
    expect(cardTitle.textContent).toBe(' Harry Potter ')
  })

  /* It's testing if the textContent of the element with the text Harry 
is equal to ⭐️ Harry Potter ⭐️. */
  test('Should add ⭐️ around title', async () => {
    render(
      <ThemeProvider>
        <Card
          title="Harry Potter"
          label="Magicien frontend"
          picture="/myPicture.png"
        />
      </ThemeProvider>
    )
    /* Getting the element with the text Harry. */
    const cardTitle = screen.getByText(/Harry/i)
    /* Getting the parent node of the element with the text Harry. */
    // eslint-disable-next-line testing-library/no-node-access
    const parentNode = cardTitle.closest('div')
    /* Simulating a click on the parentNode. */
    fireEvent.click(parentNode)
    /* Checking if the textContent of the element with the text Harry 
    is equal to ⭐️ Harry Potter ⭐️. */
    expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
  })
})
