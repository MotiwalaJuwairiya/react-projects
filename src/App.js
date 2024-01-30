import { useState } from 'react'
import { Loader } from './components/Loader'
import { ErrorMessage } from './components/ErrorMessage'
import { NavBar } from './components/NavBar'
import { Logo } from './components/Logo'
import { Search } from './components/Search'
import { Numresults } from './components/Numresults'
import { MovieList } from './components/MovieList'
import { MovieDetails } from './components/MovieDetails'
import { WatchedSummary } from './components/WatchedSummary'
import { WatchedList } from './components/WatchedList'
import { Box } from './components/Box'
import { Main } from './components/Main'
import { useMovies } from './hooks/useMovies'
import { useLocalStorageState } from './hooks/useLocalStorageState'

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0)

export default function App() {
  const [query, setQuery] = useState('')

  const [selectedId, setSelectedId] = useState(null)
  const { movies, isLoading, error } = useMovies(query)

  const [watched, setWatched] = useLocalStorageState([], 'watched')

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id))
  }

  function handleCloseMovie() {
    setSelectedId(null)
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie])
  }

  function handleDeleteWatch(id) {
    //if the filter returns the movie which id is not same as imdb id, the movie is gonna stay in the array
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id))
  }

  return (
    <>
      <NavBar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Numresults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedList
                watched={watched}
                onDeleteWatched={handleDeleteWatch}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  )
}
