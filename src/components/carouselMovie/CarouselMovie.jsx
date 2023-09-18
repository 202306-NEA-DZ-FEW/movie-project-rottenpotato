import React from "react"

function CarouselMovie({ movie }) {
  const backgroundImageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

  return (
    <div className="carousel-movie relative">
      <div className="relative rounded-lg w-full h-72">
        <img
          src={backgroundImageUrl}
          alt={movie.title}
          className="w-full h-full"
        />
        <div className="bg-overlay absolute top-0 left-0 w-full h-full dark:h-full bg-gradient-to-b from-black to-transparent dark:bg-gray-900 opacity-80 transition-opacity"></div>
      </div>

      <div className="movie-details absolute bottom-0 left-0 w-full p-3 text-white transition-opacity">
        <h1 className="font-normal tracking-wider text-left mb-56 text-3xl">
          {movie.title}
        </h1>
        {/* <h1 className="font-light text-left mb-52 text-l text-DarkWhite">In theaters {movie.release_date}!</h1> */}
      </div>
    </div>
  )
}

export default CarouselMovie
