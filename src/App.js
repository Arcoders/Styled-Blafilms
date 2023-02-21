import React, { useState, useEffect, useCallback } from 'react'
import Feedback from './components/Feedback'
import Search from './components/Search'
import Films from './components/Films'
import { Movie } from './services'

function App() {
  const [query, setQuery] = useState('king')
  const [currentPage, setCurrentPage] = useState(1)
  const [moviesData, setMoviesData] = useState({
    totalResults: 0,
    error: null,
    films: [],
  })

  const handleOnSearch = useCallback(async () => {
    try {
      const {
        Search: films,
        Error: error,
        totalResults,
      } = await Movie.find({
        query,
        currentPage,
      })
      setMoviesData({
        totalResults,
        films,
        error,
      })
    } catch (error) {
      setMoviesData({
        totalResults: 0,
        films: [],
        error: error.message,
      })
    }
  }, [currentPage, query])

  useEffect(() => {
    handleOnSearch()
  }, [currentPage])

  const { films, error, totalResults } = moviesData

  return (
    <>
      <Search
        value={query}
        setQuery={setQuery}
        handleOnSearch={handleOnSearch}
      />
      {error && <Feedback message={error} />}
      {!!films?.length && !error && (
        <Films
          films={films}
          currentPage={currentPage}
          totalResults={totalResults}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  )
}

export default App
