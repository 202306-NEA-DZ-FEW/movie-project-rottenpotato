import React from "react"
import MovieList from "@/components/MovieList"

export default function Movies({ latestMovie }) {
  return (
    <div className=" bg-DarkWhite dark:bg-black relative">
      <h1 className="text-4xl font-bold p-6 text-gray-800 dark:text-white">
        Trending On Rotting Potato
      </h1>
      <MovieList latestMovie={latestMovie} />
    </div>
  )
}

console.log("before function")
export async function getStaticProps() {
  console.log("inside function")

  const url = "https://api.themoviedb.org/3/trending/movie/week?language=en-US"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjM2E0NmFiZWRiMzlhZDFiMWUzOGZkMTU3MjMxNTg5NCIsInN1YiI6IjY1MDFkY2VhMWJmMjY2MDBlMjVlOWE1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1SrV7nu-AkMDVUbBc6RDXdTFftDAb4IlRXEj0wnyxwM",
    },
  }
  let allMovies = []
  let currentPage = 1

  try {
    while (true) {
      const response = await fetch(`${url}&page=${currentPage}`, options)
      const data = await response.json()

      if (data.results) {
        allMovies = allMovies.concat(data.results)
      }

      if (currentPage >= 22) {
        break
      }

      currentPage++
    }
  } catch (error) {
    console.error("Error fetching movies:", error)
  }
  return {
    props: {
      latestMovie: { results: allMovies },
    },
  }
}
