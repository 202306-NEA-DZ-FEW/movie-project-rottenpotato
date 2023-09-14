import React from "react"
import fetcher from "@/utils/API"
import ActorCard from "@/components/ActorCard/ActorCard"

function Actors({ peopleData }) {
  console.log(peopleData)
  return (
    <main className="bg-slate-300 flex flex-col md:flex-row flex-wrap items-center justify-around gap-5 ">
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
