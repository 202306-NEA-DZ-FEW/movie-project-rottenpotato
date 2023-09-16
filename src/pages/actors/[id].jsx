import React from "react"
import fetcher from "@/utils/API"
import { FiCalendar, FiMapPin, FiGlobe } from "react-icons/fi"
import { PiGenderIntersexBold } from "react-icons/pi"
import MoviesCarousel from "@/components/carousel/MoviesCarousel"

function SingleActor({ actor, movies }) {
  console.log("actor,", actor)

  const default_poster = "../../images/default_Rotten_potato.jpg"

  return (
    <main className="flex flex-col lg:grid grid-cols-[40%_60%] bg-black w-full p-8 pl-40 pt-48 gap-y-8">
      <div className="p-4 flex flex-col justify-start  row-start-1 col-start-1 col-end-2 items-center gap-4">
        <img
          className="rounded-mr w-[19rem] h-[24rem] "
          src={
            `https://image.tmdb.org/t/p/w500/${actor.profile_path}` ||
            default_poster
          }
          alt={actor.name}
        />
        <h3 className="text-YellowPotato  text-center font-semibold text-2xl ">
          Popularity: {actor.popularity}{" "}
        </h3>
      </div>
      <div className="flex flex-col col-start-2 row-start-1 text-left gap-5 items-baseline justify-between">
        <h1 className="text-YellowPotato font-bold text-4xl">{actor.name}</h1>
        <span className="flex flex-row">
          <h4 className="text-YellowPotato font-bold text-sm">A.K.A: </h4>
          {actor.also_known_as.map((tag, index) => (
            <span className="text-white font-bold text-sm mx-1" key={index}>
              {" "}
              {tag} -{" "}
            </span>
          ))}
        </span>
        <span className="flex flex-row justify-start items-center gap-3">
          <FiCalendar className="w-6 h-6 text-yellow-400" />
          <h3 className="text-white font-semibold text-2xl ">
            {actor.birthday} {actor.deathday ? `-${actor.deathday}` : ""}
          </h3>
        </span>
        <span className="flex flex-row justify-start items-center gap-3">
          <PiGenderIntersexBold className="w-6 h-6 text-yellow-400" />
          <h3 className="text-white font-semibold text-2xl ">
            {actor.gender === 1 ? "Female" : "Male"}
          </h3>
        </span>
        <span className="flex flex-row justify-start items-center gap-3">
          <FiMapPin className="w-6 h-6 text-yellow-400" />
          <h3 className="text-white font-semibold text-2xl ">
            {actor.place_of_birth}
          </h3>
        </span>
        <span className="flex flex-row justify-start items-center gap-3">
          <FiGlobe className="w-6 h-6 text-yellow-400" />
          <h3 className="text-white font-semibold text-2xl ">
            {actor.homepage ? actor.homepage : "/"}
          </h3>
        </span>
        <span className="flex flex-col items-start justify-center">
          <h3 className="text-YellowPotato font-semibold text-2xl ">
            Biography
          </h3>
          <p className="text-white font-normal text-lg border border-YellowPotato rounded-md p-2">
            {actor.biography}
          </p>
        </span>
      </div>
      <div className="row-start-2 col-start-1 col-span-2 ">
        <MoviesCarousel items={movies.cast} />
      </div>
    </main>
  )
}

export default SingleActor

export async function getStaticPaths() {
  const people = await fetcher("person/popular")

  const newArr = people.results.slice(0, 4)

  const paths = newArr.map((actor) => ({
    params: { id: actor.id.toString() },
  }))
  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  const url = "person/" + params.id
  const moviesURL = `person/${params.id}/movie_credits`

  const actor = await fetcher(url)
  const movies = await fetcher(moviesURL)

  return {
    props: {
      actor,
      movies,
    },
    revalidate: 60,
  }
}
