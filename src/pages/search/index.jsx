// pages/search.js

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import fetcher from "@/utils/API"
import MovieCard from "@/components/MovieCard"

export default function Search() {
  const router = useRouter()
  const { query } = router.query
  const [searchResults, setSearchResults] = useState({})

  useEffect(() => {
    if (query) {
      fetcher(`search/movie?query=${query}&include_adult=false`).then((res) => {
        console.log("search result", res)
        setSearchResults(res)
      })
    }
  }, [query])
  const results =
    searchResults.results &&
    searchResults.results.map((movie) => (
      <MovieCard
        key={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        vote_average={movie.vote_average}
      />
    ))
  const loading = <span>Loading...</span>

  return (
    <div>
      <h1>Search results for: {query}</h1>
      <div className="w-full flex flex-wrap overflow-hidden">
        {searchResults.results ? results : loading}

        {/* {searchResults.results && searchResults.results.map(movie => (
        <MovieCard key={movie.id} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average}/>
      ))} */}
      </div>
      {console.log("res serch", searchResults.results)}
    </div>
  )
}
