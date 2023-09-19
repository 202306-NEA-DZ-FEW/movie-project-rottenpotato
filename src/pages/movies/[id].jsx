import React from "react"
import fetcher from "@/utils/API"
import MoviePage from "@/components/moviepage/MoviePage"
import background from "../../images/backdround.png"
import Image from "next/image"
import MovieCard from "@/components/Cards/MovieCard"
import ActorsCarousel from "@/components/carousel/ActorsCarousel"
import MoviesCarousel from "@/components/carousel/MoviesCarousel"
import SideBar from "@/components/SideBar/SideBar"

export default function Movie({
  movieData,
  trailer,
  actors,
  similarMovies,
  director,
}) {
  console.log("movie", movieData)
  console.log("trailer", trailer)
  console.log("actors", actors)
  console.log("similar", similarMovies)
  console.log("director", director)
  return (
    <div className=" flex flex-col justify-between items-center">
      <div className="relative w-full h-fit p-2">
        {/* <img
          src={`https://image.tmdb.org/t/p/w500${movieData.backdrop_path}`}
          alt=""
          className=" absolute top-0 bg-blend-overlay backdrop-blur-3xl bottom-0 left-0 right-0 ml-auto mr-0 h-full"
        /> */}
        <div
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${movieData.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute top-0 bg-blend-overlay backdrop-blur-3xl bottom-0 left-0 right-0 w-full h-full"
        ></div>
        <MoviePage
          movie={movieData}
          trailer={trailer}
          director={director.name}
        />
      </div>

      <h1 className="w-full text-left p-4 px-2 pl-20 box-border text-4xl tracking-tighter font-semibold  text-black dark:text-white">
        Cast
      </h1>
      <div className="w-11/12 ml-2 border-b-2 border-YellowPotato "></div>
      <ActorsCarousel items={actors} />
      <h1 className="w-full text-left p-4 px-2 pl-20 box-border text-4xl tracking-tighter font-semibold 4 text-black dark:text-white ">
        Similar movies
      </h1>
      <div className="w-11/12 ml-2 border-b-2 border-YellowPotato "></div>
      <MoviesCarousel items={similarMovies} />
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
  const trailerURL = `movie/${params.id}/videos`
  const castURL = `movie/${params.id}/credits`
  const similarURL = `movie/${params.id}/similar`
  // const creditsURL = `https://api.themoviedb.org/3/movie/${params.id}/credits?language=en-US`;

  const movieData = await fetcher(movieURL)
  const trailerVideos = await fetcher(trailerURL)
  const cast = await fetcher(castURL)
  const similar = await fetcher(similarURL)
  const similarMovies = similar.results.slice(0, 8)

  const trailer = trailerVideos.results
  const actorsPromises = cast.cast.slice(0, 5).map((actor) => {
    return fetcher(`person/${actor.id}`)
  })
  const actors = await Promise.all(actorsPromises)
  const director = cast.crew.find((crew) => crew.job === "Director")
  return {
    props: {
      movieData,
      trailer,
      actors,
      similarMovies,
      director,
    },
    revalidate: 60,
  }
}
