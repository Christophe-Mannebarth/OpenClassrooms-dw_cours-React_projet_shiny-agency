/* method with Redux Toolkit:*/
import { configureStore } from '@reduxjs/toolkit'
/* Importing the themeReducer from the theme.js file. */
import themeReducer from '../features/theme'
/* Importing the answersReducer from the answers.js file. */
import answersReducer from '../features/answers'

// Method with Redux Toolkit:
/**
 * The ConfiguresTore function allows you to create the Redux store more simply.
 * This function awaits an object in parameter with a "reducing" property
 * which automatically uses "combineReducers".
 * In addition, the "ConfiguresTore" function automatically connects to the Devtools.
 */
export default configureStore({
  reducer: {
    theme: themeReducer,
    answers: answersReducer,
  },
})
