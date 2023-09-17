import React from "react"
import fetcher from "@/utils/API"
import MoviePage from "@/components/moviepage/MoviePage"
import background from "../../images/backdround.png"
import Image from "next/image"
import MovieCard from "@/components/MovieCard"

export default function Movie({ movieData }) {
  console.log(movieData)
  return (
    <div className=" relative w-full h-screen p-0">
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
        alt=""
        className="-z-10 absolute top-0 bg-blend-overlay backdrop-blur-3xl bottom-0 left-0 right-0 w-full h-full"
      />
      <MoviePage movie={movieData} />
    </div>
  )
}

export async function getStaticPaths() {
  const movies = await fetcher("trending/movie/week")

  const newArr = movies.results.slice(0, 4)

  const paths = newArr.map((movie) => ({
    params: { id: movie.id.toString() },
  }))
  console.log("paths", paths)
  return {
    paths,
    fallback: "blocking",
  }
}

// Fetch movie data for a specific movie
export async function getStaticProps({ params }) {
  const movieURL = `movie/${params.id}`
  // const creditsURL = `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`;

  const movieData = await fetcher(movieURL)

  return {
    props: {
      movieData,
    },
    revalidate: 60,
  }
}
