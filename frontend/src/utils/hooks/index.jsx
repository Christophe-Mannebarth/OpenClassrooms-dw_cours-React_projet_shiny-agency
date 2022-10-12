// IMPORT HOOKS AND CONTEXT
/* Importing the useState, useEffect, and useContext hooks from the React library. */
import { useState, useEffect, useContext } from 'react'
/* Importing the ThemeContext from the context.js file. */
import { ThemeContext } from '../context'

/**
 * UseFetch is a custom hook that fetches data from a URL
 * and returns the data as a JSON object.
 * @param {String} url the url used for the call to the API
 * @returns {Object}   the data as a JSON Object
 */
export function useFetch(url) {
  /* 3 hooks. that returns an array with two elements. 
  The first element is the state
  and the second element is a function to update the state. */
  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  /* The above code is fetching data from the url, 
  then setting the data to the data variable, 
  and finally setting the loading variable to false. */
  useEffect(() => {
    /* Checking if the url is empty. If it is empty, it will return. */
    if (!url) return
    /* Setting the loading variable to true. */
    setLoading(true)
    /**
     * - Asynchronous function
     * that fetches data from the url,
     * then sets the data to the data variable,
     * and finally sets the loading variable to false.
     */
    async function fetchData() {
      try {
        /* Fetching the data from the url. */
        const response = await fetch(url)

        /* Converting the response to a JSON object. */
        const data = await response.json()

        /* Setting the data to the data variable. */
        setData(data)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        /* Setting the loading variable to false. */
        setLoading(false)
      }
    }

    /* Call the fetchData function */
    fetchData()
  }, [url])

  /* Returning the data and the loading state. */
  return { isLoading, data, error }
}

/**
 * Returns the theme and toggleTheme functions from the ThemeContext
 * object.
 * @returns The theme and toggleTheme function.
 */
export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return { theme, toggleTheme }
}
