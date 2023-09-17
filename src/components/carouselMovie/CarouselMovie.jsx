import React, { useEffect, useState } from "react"

function CarouselMovie({ movie }) {
  return (
    <div className="relative w-full h-80 flex flex-row mx-auto justify-center items-center">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt=""
        className="absolute w-full h-[20rem] top-0 left-0 rounded-mr"
      />
      <div className="absolute bottom-0 w-full pb-6 pt-10  pl-3 bg-gradient-to-t from-black via-[rgba(0,0,0,0.7)]  to-[rgba(0,0,0,0.03)]">
        <h1 className=" font-bold text-left w-full  text-4xl">{movie.title}</h1>
      </div>
    </div>
  )
}

export default CarouselMovie
