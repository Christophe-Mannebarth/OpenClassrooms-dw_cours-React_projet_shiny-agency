/* Importing the React library from the react package. */
import React from 'react'
/* Importing the ReactDOM library from the react-dom package. */
import ReactDOM from 'react-dom'
/* Importing the BrowserRouter and Route components from the react-router-dom package. */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/* Importing the Home component from the pages folder. */
import Home from './pages/Home'
/* Importing the Survey component from the pages folder. */
import Survey from './pages/Survey'
/* Importing the Results component from the pages folder. */
import Results from './pages/Results'
/* Importing the Freelances component from the pages folder. */
import Freelances from './pages/Freelances'
/* Importing the Profile component from the pages folder. */
import Profile from './pages/Profile'
/* Importing the Header component from the components folder. */
import Header from './components/Header'
/* Importing the Error component from the components folder. */
import Error from './components/Error'
/* Importing the Footer component from the components folder. */
import Footer from './components/Footer'
/* Importing the GlobalStyle component from the GlobalStyle.js file. */
import GlobalStyle from './utils/style/GlobalStyle'
/* Importing the Provider component from the react-redux package. */
import { Provider } from 'react-redux'
/* Importing the store from the store.js file. */
import store from './utils/store'
/* Importing queryclient and his Provider. */
import { QueryClient, QueryClientProvider } from 'react-query'

// we create the queryclient
const queryClient = new QueryClient()

// RENDER ROOT
/* Rendering the components to the root element. */
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/survey/:questionNumber">
              <Survey />
            </Route>
            <Route path="/results">
              <Results />
            </Route>
            <Route path="/freelances">
              <Freelances />
            </Route>
            <Route
              path="/profile/:id"
              render={(props) => <Profile {...props} />}
            />
            <Route path="*">
              <Error />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
)
