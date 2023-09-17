import React from "react"
import fetcher from "@/utils/API"
import MoviePage from "@/components/moviepage/MoviePage"
import background from "../../images/backdround.png"
import Image from "next/image"
import MovieCard from "@/components/MovieCard"

export default function Movie({ movieData }) {
  console.log(movieData)
  return (
    <div className="bg-black relative w-screen h-screen">
      {/* Background Image */}
      <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen  ">
        <Image
          src={background}
          alt="background"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Movie Page Component */}
      {/* <MoviePage movie={movieData} /> Assuming you want to display details for the first movie */}
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
  const movieURL = `movie/${params.id}?language=en-US`
  // const creditsURL = `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`;

  const movieData = await fetcher(movieURL)

  return {
    props: {
      movieData,
    },
    revalidate: 60,
  }
}
