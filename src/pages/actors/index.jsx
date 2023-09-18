import React from "react"
import fetcher from "@/utils/API"
import ActorCard from "@/components/ActorCard/ActorCard"

function Actors({ peopleData }) {
  console.log(peopleData)
  return (
    <main className="font-semibold bg-DarkWhite dark:bg-black text-gray-800 dark:text-white w-full flex flex-col md:flex-row flex-wrap justify-around">
      <div className="w-full flex flex-col overflow-hidden px-4 mb-2">
        <h1 className="text-gray-800 dark:text-white text-4xl font-bold p-6 mb-2">
          Actors
        </h1>
        <div className="w-9/12 border-b-2 border-YellowPotato mb-6"></div>
      </div>
      {peopleData.results.map((person) => (
        <ActorCard key={person.id} person={person} />
      ))}
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
