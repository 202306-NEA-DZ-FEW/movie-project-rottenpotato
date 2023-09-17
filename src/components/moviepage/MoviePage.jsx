import Image from "next/image"
import Picture from "../../images/Picture.png"
import IMDbe from "../../images/IMDb.png"
import { AiFillPlusCircle } from "react-icons/ai"
import { BsStarHalf, BsStar, BsFillStarFill } from "react-icons/bs"
import { BiTimeFive } from "react-icons/bi"

export default function MoviePage({
  titel,
  vote_average,
  original_language,
  overview,
  release_date,
}) {
  const renderStars = () => {
    const stars = []
    const fullStars = Math.floor(vote_average / 2)
    const hasHalfStar = (vote_average / 2) % 1 !== 0

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
    <div className="bg-black mx-24 p-16">
      <div className="flex">
        <div className="flex-grow p-4">
          <h1 className="text-6xl font-semibold text-white mb-6">
            {titel}
            Loki
          </h1>
          <div className="text-white text-2xl mb-2">
            {release_date}
            2021{" "}
          </div>
          <div className="flex items-center text-white text-1xl ">
            53 min <BiTimeFive className="ml-1 mr-1" /> |
            <span className="ml-2">
              {original_language}
              English
            </span>
          </div>
          <div className="flex items-center text-yellow-500 mt-6 mb-6">
            {renderStars()}

            <div className="w-[37.128px] h-30 flex-shrink-0 ml-4">
              <Image src={IMDbe} alt="imdbe" className="w-full h-auto" />
            </div>
          </div>
          {/* <span className="text-white font-Lato text-25 font-semibold mb-16"> 10M+ views </span> */}
          <div className="w-[500px]">
            <p className=" text-white font-Lato text-30 font-semibold mb-9">
              {overview}
              {/* Loki is considered a trickster god, known for being neither fully
              good nor evil since his main aim was always to create chaos.
              Despite his father being a giant, he is still counted a member of
              the Aesir—a tribe of deities including Odin, Frigg, Tyr, and Thor. */}
            </p>
          </div>
          <div className="text-white mb-6">
            <strong>Directors</strong> : Kate Herron{" "}
          </div>

          <div className="flex mt-22">
            <div>
              <button className="bg-gray-500 text-white px-4 py-2 rounded-lg font-Lato text-22 font-extrabold leading-5 inline-flex items-center">
                <AiFillPlusCircle className="mr-2" />
                Watch List
              </button>
            </div>
            <div>
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg ml-4 font-Lato text-22 font-extrabold leading-5 items-center">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>

        <div className=" w-[400px] h-[500px]  ">
          <Image src={Picture} alt="picture image" className="w-full h-auto" />
        </div>
      </div>
    </div>
  )
}
