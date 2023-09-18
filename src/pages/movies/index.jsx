import React from "react"
import MovieList from "@/components/MovieList"

import fetcher from "@/utils/API"
export default function Movies({ latestMovie, pageTitle }) {
  return (
    <div className=" bg-DarkWhite dark:bg-black relative">
      <MovieList latestMovie={latestMovie} pageTitle={pageTitle} />
    </div>
  )
}

export async function getServerSideProps(context) {
  console.log("inside function movie page", context.query)
  const { type, genre, page = 1, genre_id } = context.query
  const parsedPage = parseInt(page)
  console.log("pageee", page)
  let url = ""
  let pageTitle = ""
  if (type) {
    if (type === "latest") {
      url = "movie/" + type + "?language=en-US"
    } else {
      url = "movie/" + type + "?language=en-US&page=" + parsedPage
    }

    pageTitle = type.split("_").join(" ")
  } else {
    url = "trending/movie/day?language=en-US&page=" + parsedPage
    pageTitle = genre
  }

  let allMovies = []
  let currentPage = 1

  try {
    while (currentPage < 2) {
      const data = await fetcher(url)
      console.log("dataaaaaaaaaaaaaaaaaaaaaaaa", data)
      if (data.results || data) {
        if (type === "latest") {
          allMovies = [data]
        } else {
          allMovies = [...data.results]
        }
      }
      if (genre) {
        allMovies = data.results.filter((movie) =>
          movie.genre_ids.includes(parseInt(genre_id)),
        )
        console.log("filtered", allMovies)
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
