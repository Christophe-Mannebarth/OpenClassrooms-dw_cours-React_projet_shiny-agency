/* Importing the render function from the testing library. */
import { render as rtlRender } from '@testing-library/react'
/* Importing the ThemeProvider and SurveyProvider from the context.js file. */
import { ThemeProvider, SurveyProvider } from '../../utils/context'
/* A component that keeps the router's state in memory,
and it does not interact with the browser's URL. */
import { MemoryRouter } from 'react-router-dom'

/**
 * It's a wrapper that wraps the children in a MemoryRouter,
 * a ThemeProvider,
 * and a SurveyProvider.
 * @returns The children of the component.
 */
function Wrapper({ children }) {
  return (
    <MemoryRouter>
      <ThemeProvider>
        <SurveyProvider>{children}</SurveyProvider>
      </ThemeProvider>
    </MemoryRouter>
  )
}

/**
 * It renders the component you pass to it,
 * but it wraps it in a component that provides the context you need
 * @param ui - The component to render
 */
export function render(ui) {
  rtlRender(ui, { wrapper: Wrapper })
}
