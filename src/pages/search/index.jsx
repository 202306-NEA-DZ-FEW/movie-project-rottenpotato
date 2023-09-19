// pages/search.js

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import fetcher from "@/utils/API"
import MovieCard from "@/components/Cards/MovieCard"
import ActorCard from "@/components/Cards/ActorCard"

export default function Search() {
  const router = useRouter()
  const { query } = router.query
  const [searchResults, setSearchResults] = useState({})
  const [searchPerson, setSearchPerson] = useState({})

  useEffect(() => {
    if (query) {
      fetcher(`search/movie?query=${query}&include_adult=false`).then((res) => {
        setSearchResults(res)
      })
      fetcher(`search/person?query=${query}&include_adult=false`).then(
        (res) => {
          setSearchPerson(res)
        },
      )
    }
  }, [query])
  const results =
    searchResults.results &&
    searchResults.results.map((movie) => (
      <MovieCard
        genres={movie.genre_ids}
        movie_id={movie.id}
        key={movie.id}
        title={movie.title}
        poster_path={movie.poster_path}
        vote_average={movie.vote_average}
      />
    ))
  const persons =
    searchPerson.results &&
    searchPerson.results.map((person) => (
      <ActorCard key={person.id} person={person} />
    ))
  const loading = (
    <span className="font-bold text-5xl animate-pulse text-YellowPotato">
      Loading...
    </span>
  )

  return (
    <div>
      <h1
        className=" font-bold relative mb-12 text-4xl pt-6 w-full flex flex-col after:content[''] after:bg-gray-800 dark:after:bg-white after:absolute after:-bottom-6
       after:left-0 after:w-11/12 after:h-[2px]"
      >
        Search results for: {` ${query}`}
      </h1>
      <div className="w-full flex flex-col gap-10 overflow-hidden px-8 mb-8">
        <h2 className="text-YellowPotato font-semibold text-3xl w-full">
          Movies
        </h2>
        <div className="flex flex-row overflow-hidden flex-wrap justify-start gap-5 items-center">
          {searchResults.results ? results : loading}
        </div>

        {/* {searchResults.results && searchResults.results.map(movie => (
        <MovieCard key={movie.id} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average}/>
      ))} */}
      </div>
      <div className="w-full flex flex-col gap-10 overflow-hidden px-8 ">
        <h2 className="text-YellowPotato font-semibold text-3xl w-full">
          Actors
        </h2>
        <div className="flex flex-row overflow-hidden flex-wrap justify-start gap-5 items-center">
          {searchPerson.results ? persons : loading}
        </div>
      </div>
    </div>
  )
}
