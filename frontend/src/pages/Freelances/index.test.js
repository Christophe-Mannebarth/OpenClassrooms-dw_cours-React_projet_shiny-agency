/* Importing the rest function from the msw library. */
import { rest } from 'msw'
/* Importing the setupServer function from the msw/node library. */
import { setupServer } from 'msw/node'
/* Importing the render, waitFor, and screen functions from the @testing-library/react library. */
import { waitFor, screen } from '@testing-library/react'
/* Importing the render function from the test.js file. */
import { render } from '../../utils/test'

/* Importing the Freelances component from the current directory. */
import Freelances from './'

/* Creating a mock data for the freelancers. */
const freelancersMockedData = [
  {
    name: 'Harry Potter',
    job: 'Magicien frontend',
    picture: '',
  },
  {
    name: 'Hermione Granger',
    job: 'Magicienne fullstack',
    picture: '',
  },
]

/* Setting up the server. */
const server = setupServer(
  // We specify here the url that will have to be "intercepted"
  rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
    // There we will be able to pass the mocked data in what is returned in json
    return res(ctx.json({ freelancersList: freelancersMockedData }))
  })
)

// Activates the simulation of APIs before tests from Server
beforeAll(() => server.listen())
// Reset everything we could have added in terms of duration for our tests before each test
afterEach(() => server.resetHandlers())
// Closes the simulation of API once the tests are finished
afterAll(() => server.close())

/* Testing the Freelances component. */
test('Should render without crash', async () => {
  /* Rendering the Freelances component */
  render(<Freelances />)

  /* Checking if the loader is displayed. */
  expect(screen.getByTestId('loader')).toBeTruthy()
})

/* A test that checks if the freelancers names are displayed. */
it('Should display freelancers names', async () => {
  /* Rendering the Freelances component. */
  render(<Freelances />)

  /* Checking if the loader is displayed. */
  expect(screen.getByTestId('loader')).toBeTruthy()
  /* Waiting for the data to be fetched and then it is checking if the data is displayed. */

  await waitFor(() => {
    /* Checking if the data is displayed. */
    expect(screen.getByText('Harry Potter')).toBeTruthy()
    // eslint-disable-next-line testing-library/no-wait-for-multiple-assertions
    expect(screen.getByText('Hermione Granger')).toBeTruthy()
  })
})
