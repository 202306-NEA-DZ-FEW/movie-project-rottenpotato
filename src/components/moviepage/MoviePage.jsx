import Image from "next/image"
import Picture from "../../images/Picture.png"
import IMDbe from "../../images/IMDb.png"
import { AiFillPlusCircle } from "react-icons/ai"
import { BsStarHalf, BsStar, BsFillStarFill } from "react-icons/bs"
import { BiTimeFive } from "react-icons/bi"
import { HiLanguage } from "react-icons/hi2"
import TrailerModal from "./TrailerModal"
import { useState } from "react"

export default function MoviePage({ movie, trailer, director }) {
  const [showModal, setShowModal] = useState(false)
  const alter = { key: "dQw4w9WgXcQ" }
  function runtime() {
    let runtime = "N/A"
    if (movie.runtime < 60) {
      runtime = `${movie.runtime}min`
    } else {
      const hour = Math.floor(movie.runtime / 60)
      const min = movie.runtime % 60
      runtime = `${hour}h ${min}mins`
    }
    return runtime
  }
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(movie.vote_average / 2)
    const hasHalfStar = (movie.vote_average / 2) % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="text-yellow-400">
          <BsFillStarFill />
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
    <div className="w-full h-full flex justify-center items-center  relative">
      <div className="grid grid-rows-[80%_20%] grid-cols-[60%_40%] bg-[rgba(0,0,0,.4)] w-3/4 rounded-lg p-5">
        <div className="flex-grow p-4 row-start-1 col-start-1">
          <h1 className="text-6xl font-semibold text-YellowPotato mb-6 ">
            {movie.title}
          </h1>
          <div className="text-white text-2xl mb-2">{movie.release_date}</div>
          <div className="flex items-center text-white text-1xl ">
            <BiTimeFive className="mx-1" /> {runtime()} |
            <span className="ml-2 flex flex-row items-center gap-2">
              <HiLanguage className="ml-2" /> {movie.original_language}
            </span>
          </div>
          <div className="flex items-center text-yellow-500 mt-6 mb-6">
            {renderStars()}

            <div className="text-white flex-shrink-0 ml-1">
              {` | ${movie.vote_count} votes`}
            </div>
          </div>
          {/* <span className="text-white font-Lato text-25 font-semibold mb-16"> 10M+ views </span> */}
          <div className="w-[500px]">
            <p className=" text-white font-Lato text-30 font-semibold mb-9">
              {movie.overview}
            </p>
          </div>
          <div className="text-white mb-6">
            <strong>Director</strong> : {director}
          </div>

          <div className="flex mt-22">
            <div>
              <button className="bg-[rgba(255,255,255,.8)] text-black p-4 rounded-lg font-Lato text-22 font-extrabold leading-5 inline-flex items-center ">
                <AiFillPlusCircle className="mr-2" />
                Watch List
              </button>
            </div>
            <div>
              <button
                className="bg-yellow-500 text-white p-4 rounded-lg ml-4 font-Lato text-22 font-extrabold leading-5 items-center"
                onClick={() => setShowModal(true)}
              >
                Watch Trailer
              </button>
            </div>
          </div>
        </div>

        <div className=" rounded-xl overflow-hidden row-start-1 col-start-2 ">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt="picture image"
            className="w-full h-full rounded-lg"
          />
        </div>

        <div className="w-full flex flex-row items-center justify-around gap-3 p-0 rounded-md max-w-full flex-wrap bg-[rgba(255,255,255,.5)] mt-10 row-start-2 col-start-1 col-span-2 ">
          {movie.production_companies.map((company) => 
            <div key={company.id} className="flex flex-col items-center">
              <img
                src={
                  company.logo_path
                    ? `https://image.tmdb.org/t/p/w500${company.logo_path}`
                    : "/rotten_potato_icon.svg"
                }
                alt={company.name}
                className="h-10 w-10"
              />
              <span className="text-white font-medium text-xs">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      <TrailerModal
        setShowModal={setShowModal}
        showModal={showModal}
        trailerKey={trailer && trailer[0] ? trailer[0].key : alter}
        name={trailer && trailer[0] ? trailer[0].name : "Default Name"}
      />
    </div>
  )
}
