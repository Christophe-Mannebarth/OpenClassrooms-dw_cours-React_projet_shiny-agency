// IMPORT LIBRARIES, ROUTER AND COMPONENTS
/* Importing the React library from the react package. */
import React from 'react'
/* Importing the ReactDOM library from the react-dom package. */
import ReactDOM from 'react-dom'
/* Importing the BrowserRouter and Route components from the react-router-dom package. */
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/* Importing the ThemeProvider and SurveyProvider component from the context.js file. */
import { ThemeProvider, SurveyProvider } from './utils/context'
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

// RENDER ROOT
/* Rendering the components to the root element. */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <SurveyProvider>
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
        </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
