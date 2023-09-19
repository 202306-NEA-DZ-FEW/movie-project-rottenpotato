import React from "react"
import { BsInfoCircleFill } from "react-icons/bs"
import Link from "next/link"

function CarouselMovie({ movie }) {
  const backgroundImageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`

  const releaseDate = new Date(movie.release_date)
  const options = { year: "numeric", month: "long", day: "numeric" }

  // Extract day, month, and year
  const day = releaseDate.getDate()
  const month = releaseDate.getMonth() // January is 0, February is 1, and so on
  const year = releaseDate.getFullYear()

  // Array of month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // Get the month name
  const monthName = monthNames[month]

  return (
    <div className="carousel-movie relative">
      <div className="relative rounded-large w-full h-80 overflow-hidden">
        <div className="bg-overlay absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent h-3/6 dark:bg-gray-800 dark:h-full opacity-60"></div>

        <img
          src={backgroundImageUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
        />

        <div className="flex flex-col justify-between items-start absolute top-0 left-0 w-full h-full p-4">
          <h1 className="text-4xl ml-6 p-2 tracking-wider font-semibold text-white dark:text-white">
            {movie.title}
          </h1>
          <h1 className="text-xs ml-9 mb-40 tracking-wider font-light text-gray-300 dark:text-gray-300">
            In theaters {`${monthName} ${day}, ${year}`}
          </h1>
          <span className="flex hover:text-YellowPotato dark:hover:text-YellowPotato bg-[rgba(255,255,255,0.6)] dark:bg-[rgba(88,85,85,0.6)] text-gray-800 dark:text-white p-2 mr-6 rounded-lg font-Lato text-22 font-bold justify-end self-end">
            <Link href={`/movies/${movie.id}`}>
              <button className="flex mr-2 mt-2">
                <BsInfoCircleFill className="text-gray-800 dark:text-white  w-5 h-5 mr-2 ml-2 mb-2 mt-1" />
                More Info
              </button>
            </Link>
          </span>
          {/* Uncomment the line below if you want to display the release date */}
          {/* <h2 className="font-light text-left text-l text-DarkWhite">In theaters {movie.release_date}!</h2> */}
        </div>
      </div>
    </div>
  )
}

export default CarouselMovie
