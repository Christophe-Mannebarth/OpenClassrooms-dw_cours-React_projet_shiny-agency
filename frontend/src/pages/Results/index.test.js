/* Importing the function `formatJobList` from the file `./` */
import Results, { formatJobList, formatFetchParams } from './'
/* Importing the `rest` function from the `msw` library. */
import { rest } from 'msw'
/* Importing the `setupServer` function from the `msw/node` library. */
import { setupServer } from 'msw/node'
/* Importing the `waitForElementToBeRemoved` and `screen` functions from 
the `@testing-library/react` library. */
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
/* Importing the `render` function from the `../../utils/test` file. */
import { render } from '../../utils/test'

/* Test the formatJobList function. */
describe('The formatJobList function', () => {
  it('should add a comma to a word', () => {
    const expectedState = 'item2,'
    /* Checking that the formatJobList function returns the expectedState. */
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
  })

  it('should not add a comma to the last element of the list', () => {
    const expectedState = 'item3'
    /* Checking that the formatJobList function returns the expectedState. */
    expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
  })
})

/* Test the formatFetchParams function */
describe('The formatFetchParams', () => {
  it('should use the right format for param', () => {
    const expectedState = 'a1=answer1'
    /* Checking that the formatFetchParams function returns the expectedState. */
    expect(formatFetchParams({ 1: 'answer1' })).toEqual(expectedState)
  })

  it('should concatenate params with an &', () => {
    const expectedState = 'a1=answer1&a2=answer2'
    /* Checking that the formatFetchParams function returns the expectedState. */
    expect(formatFetchParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
      expectedState
    )
  })
})

/* Creating a mock data for the test. */
const resultsMockedData = [
  {
    title: 'seo',
    description: `Le SEO est en charge du référencement web d'une page`,
  },
  {
    title: 'frontend',
    description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
  },
]

/* Creating a mock server. */
const server = setupServer(
  rest.get('http://localhost:8000/results', (req, res, ctx) => {
    return res(ctx.json({ resultsData: resultsMockedData }))
  })
)
/* Setting up the mock server. */
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

/* Testing the results component. */
describe('The Results component', () => {
  test('should display the results after the data is loaded', async () => {
    render(<Results />)
    // eslint-disable-next-line testing-library/prefer-query-by-disappearance
    await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
    const jobTitleElements = screen.getAllByTestId('job-title')
    /* Checking that the first element of the array of jobTitleElements is equal to 'seo'. */
    expect(jobTitleElements[0].textContent).toBe('seo')
    /* Checking that the length of the array of jobTitleElements is equal to 2. */
    expect(jobTitleElements.length).toBe(2)
    const jobDescriptionElements = screen.getAllByTestId('job-description')
    /* Checking that the second element of the array of jobDescriptionElements 
    is equal to the description of the second element of the resultsMockedData array. */
    expect(jobDescriptionElements[1].textContent).toBe(
      resultsMockedData[1].description
    )
    /* Checking that the length of the array of jobDescriptionElements is equal to 2. */
    expect(jobDescriptionElements.length).toBe(2)
  })
})
