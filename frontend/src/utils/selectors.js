// SELECT THEME: is used with the useSelector hook
/**
 * - It takes the state object and returns the theme property of that state object
 * @param state - The state of the Redux store.
 */
export const selectTheme = (state) => state.theme

// SELECT ANSWERS
/**
 * It takes the state object and returns the answers object from it
 * @param state - The entire Redux state.
 */
export const selectAnswers = (state) => state.answers
