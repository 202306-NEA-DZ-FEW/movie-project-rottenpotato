import React from "react"
import { FiArrowRight } from "react-icons/fi"
import Link from "next/link"
import ActorCard from "./ActorCard/ActorCard"

const ActorsIndex = ({ people }) => {
  return (
    <div className=" flex flex-col mb-2 mx-12">
      <h1 className="text-2xl font-bold text-YellowPotato flex justify-start p-2">
        Popular this week:
      </h1>
      <hr className="border-YellowPotato border-t-2 w-11/12 ml-2 mb-8" />
      <div className="w-full overflow-hidden flex flex-col flex-wrap md:grid grid-cols-2 lg:flex-row lg:flex">
        {people.map((person, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <ActorCard person={person} />
          </div>
        ))}
      </div>
      <div className="relative bottom-0 mr-8 pb-4 right-0">
        <Link href="actors">
          <h1 className="text-l font-bold text-gray-800 dark:text-white flex justify-end items-center hover:text-YellowPotato dark:hover:text-YellowPotato ">
            View More <FiArrowRight className="mt-1 ml-1" />
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default ActorsIndex
