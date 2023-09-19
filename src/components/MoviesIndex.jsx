import React from "react"
import MovieCard from "@/components/MovieCard"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"

const MoviesIndex = ({ movies }) => {
  return (
    <div className="flex flex-wrap p-6">
      <h1 className="text-2xl  font-bold text-YellowPotato flex justify-end p-2">
        Top Rated:
      </h1>
      <div className=" w-11/12 ml-2 border-b-2 border-YellowPotato mb-4"></div>
      {movies.map((movie, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 justify-center"
        >
          <MovieCard
            genres={movie.genre_ids}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
          />
        </div>
      ))}
      <Link href="movies?type=top_rated">
        <h1 className="text-l font-bold text-gray-800 dark:text-white flex justify-end pr-32 pb-6 items-center hover:text-YellowPotato dark:hover:text-YellowPotato ">
          View More <FiArrowRight className="mt-1 ml-1" />
        </h1>
      </Link>
    </div>
  )
}
export default MoviesIndex
