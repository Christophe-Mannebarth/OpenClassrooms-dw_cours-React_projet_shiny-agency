import Card from './'
import { render, screen } from '@testing-library/react'

describe('Card', () => {
  /* Testing to see if the component renders without crashing. */
  it('Should render title and image', async () => {
    render(
      <Card
        title="Harry Potter"
        label="Magicien frontend"
        picture="/myPicture.png"
      />
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
    expect(cardTitle.textContent).toBe('Harry Potter')
  })
})
