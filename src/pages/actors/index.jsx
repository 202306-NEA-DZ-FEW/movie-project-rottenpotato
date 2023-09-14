import React from "react"
import fetcher from "@/utils/API"
function Actors({ peopleData }) {
  const peopleList = peopleData.results.map((person) => {
    return (
      <div
        key={person.id}
        className="w-72 h-80 p-0 flex flex-col rounded-2xl relative items-center overflow-hidden group hover:scale-105 transition-all duration-500 ease-in-out"
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
          alt={person.name}
          className="w-full h-full aspect-[9/16] object-fill absolute left-0 top-0 right-0 bottom-0 -z-0 group-hover:object-cover transition-all duration-700 ease-in-out"
        />
        <span className="w-full h-14 px-4 py-2 absolute bg-black  shadow-2xl -bottom-14 group-hover:bottom-0 group-hover:shadow-hs text-center transition-all duration-700 ease-in-out ">
          <h2 className="font-bold text-xl text-YellowPotato ">
            {person.name}
          </h2>
        </span>
      </div>
    )
  })
  return (
    <main className="bg-slate-300 flex flex-col md:flex-row flex-wrap items-center justify-around gap-5 ">
      {peopleList}
    </main>
  )
}

export default Actors

export async function getServerSideProps() {
  const peopleData = await fetcher("person/popular")
  return {
    props: { peopleData },
  }
}
