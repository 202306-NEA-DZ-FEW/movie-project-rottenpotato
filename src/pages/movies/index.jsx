import React from "react"
import MovieList from "@/components/MovieList"

export default function Movies({ latestMovie, pageTitle }) {
  return (
    <div className="bg-black">
      <MovieList latestMovie={latestMovie} pageTitle={pageTitle} />
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log("inside function movie page", context.query)
  const { type, genre, page = 1 } = context.query
  const parsedPage = parseInt(page)
  console.log("pageee", page)
  let url = ""
  let pageTitle = ""
  if (type) {
    if (type === "latest") {
      url = "https://api.themoviedb.org/3/movie/" + type + "?language=en-US"
    } else {
      url =
        "https://api.themoviedb.org/3/movie/" +
        type +
        "?language=en-US&page=" +
        parsedPage
    }

    pageTitle = type.split("_").join(" ")
  } else {
    url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US"
    pageTitle = genre
  }

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
    while (currentPage < 2) {
      const response = await fetch(`${url}`, options)
      const data = await response.json()
      // console.log("data", data.results)
      if (data.results || data) {
        if (type === "latest") {
          allMovies = [data]
        } else {
          allMovies = [...data.results]
        }
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
      pageTitle,
    },
  }
}
