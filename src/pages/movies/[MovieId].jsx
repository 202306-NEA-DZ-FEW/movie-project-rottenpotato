import React from "react"
import MoviePage from "@/components/moviepage/MoviePage"
import background from "../../images/backdround.png"
import Image from "next/image"
import MovieCard from "@/components/MovieCard"

export default function Movie() {
  return (
    <div className="bg-black relative w-screen h-screen ">
      <div className="fixed top-0 buttom-0 left-0 right-0 w-screen h-screen">
        <Image
          src={background}
          alt="background"
          className="w-full h-screen object-cover"
        />
      </div>
      <MoviePage />
      <div className="flex justify-center space-x-6 mt-8">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  )
}
