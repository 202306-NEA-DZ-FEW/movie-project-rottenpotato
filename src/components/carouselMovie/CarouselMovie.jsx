import React from "react"

function CarouselMovie({ movie }) {
  return (
    <div className="relative w-full h-80 flex flex-row mx-auto justify-center items-center">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt=""
        className="absolute w-full h-[20rem] top-0 left-0 "
      />
      <h1 className="absolute bottom-8 font-bold text-left w-full pl-3 text-2xl">
        {movie.title}
      </h1>
    </div>
  )
}

export default CarouselMovie
