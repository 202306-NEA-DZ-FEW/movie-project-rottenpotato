import React from "react"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"
import Link from "next/link"
import { genresList } from "@/utils/static"

const MovieCard = ({ title, poster_path, vote_average, movie_id, genres }) => {
  const posterImageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`
  const movieGenres = genresList.filter((item) => genres.includes(item.id))
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(vote_average / 2)
    const hasHalfStar = (vote_average / 2) % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          <BsStarFill />
        </span>,
      )
    }

    if (hasHalfStar && stars.length < 5) {
      stars.push(
        <span key={fullStars} className="text-yellow-400">
          <BsStarHalf />
        </span>,
      )
    }

    // Fill the rest with empty stars to make up to a total of 5 stars
    while (stars.length < 5) {
      stars.push(
        <span key={stars.length} className="text-gray-400">
          <BsStar />
        </span>,
      )
    }

    return stars
  }

  return (
    <Link
      href={movie_id ? `/movies/${movie_id}` : "tvshows"}
      className="mx-auto"
    >
      <div className="movie-card rounded-lg overflow-hidden shadow-lg w-48 h-72 flex-shrink-0 m-1/4 mr-2 ml-2 mb-2 mt-2 relative transform transition-transform duration-300 ease-in-out hover:scale-105 group mx-auto">
        <div className="relative w-full h-full">
          <img src="../images/default_Rotten_potato.jpg" alt="" />
          <div
            className="poster absolute top-0 left-0 w-full h-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${posterImageUrl})` }}
          ></div>

          <div className="bg-overlay absolute top-0 left-0 w-full dark:h-full bg-gradient-to-b from-black to-transparent h-4/6 dark:bg-gray-900 opacity-60 transition-opacity duration-300 ease-in-out"></div>
        </div>

        <div className="movie-details absolute top-0 left-0 w-full p-3 text-white transition-opacity duration-300 ease-in-out opacity-100">
          <div className="font-bold text-sm mb-1">{title}</div>
          <div className="my-1 flex list-none gap-0.5 p-0">{renderStars()}</div>
        </div>
        <div
          className="h-fit bg-gradient-to-b from-transparent to-black flex flex-row gap-3 items-center  flex-wrap overflow-hidden w-full 
    px-2 py-5 absolute bottom-0 left-0 
    "
        >
          {movieGenres.map((item, index) => (
            <span
              key={item.id}
              className="bg-YellowPotato h-fit w-fit px-2 py-0.5 translate-y-[300px] shadow-md rounded-large text-white group-hover:-translate-y-[0px]
            transition-all ease-in-out duration-700 text-sm"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default MovieCard
