import React from "react"
import fetcher from "@/utils/API"
import ActorCard from "@/components/ActorCard/ActorCard"

function Actors({ peopleData }) {
  console.log(peopleData)
  return (
    <main className="bg-DarkWhite dark:bg-black text-gray-800 dark:text-white w-full p-4  flex flex-col md:flex-row flex-wrap items-center justify-around gap-8 ">
      <div className="w-full flex flex-col gap-4 overflow-hidden px-8 mb-8">
        <h1 className="font-normal text-3xl">Actors</h1>
        <div className="w-9/12 border-b-2 border-YellowPotato mb-2"></div>
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
