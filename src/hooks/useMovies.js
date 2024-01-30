import { useEffect, useState } from 'react'

export const KEY = 'ffc19f9e'

export function useMovies(query) {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  useEffect(
    function () {
      const controller = new AbortController()
      async function fetchMovies() {
        try {
          setIsLoading(true)
          setError('')
          const res = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          )

          if (!res.ok) {
            throw new Error('Something went wrong while fetching movies.')
          }

          const data = await res.json()
          //If there is no response
          if (data.Response === 'False') {
            throw new Error('Movie not found')
          }
          setMovies(data.Search)
          setError('')
        } catch (err) {
          //Catch Error
          if (err.name !== 'AbortError') {
            setError(err.message)
            console.log(err.message)
          }
        } finally {
          //if Error, set the loading state to false
          setIsLoading(false)
        }
      }

      //To avoid fetch req to be made with 2 letters
      if (query.length < 3) {
        setMovies([])
        setError('')
        return
      }
      fetchMovies()

      return function () {
        controller.abort()
      }
    },
    [query]
  )

  return { movies, isLoading, error }
}
