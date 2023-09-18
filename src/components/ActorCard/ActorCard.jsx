import React from "react"
import Image from "next/image"
import Link from "next/link"

function ActorCard({ person }) {
  const profileImageUrl = `https://image.tmdb.org/t/p/w500${person.profile_path}`

  return (
    <Link href={`/actors/${person.id}`}>
      <div className="actor-card rounded-lg overflow-hidden shadow-lg w-48 h-72 flex-shrink-0 m-1/4 mr-2 ml-2 mb-2 mt-2 relative transform transition-transform duration-300 ease-in-out hover:scale-105">
        <div className="relative w-full h-full">
          <img src="../images/default_Rotten_potato.jpg" alt="" />
          <div
            className="profile-image absolute top-0 left-0 w-full h-full bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${profileImageUrl})` }}
          ></div>

          <div className="bg-overlay absolute top-0 left-0 w-full h-full bg-gray-900 opacity-60 transition-opacity duration-300 ease-in-out"></div>
        </div>

        <div className="actor-details absolute top-0 left-0 w-full p-3 text-white transition-opacity duration-300 ease-in-out opacity-100">
          <div className="font-bold text-sm mb-1">{person.name}</div>
        </div>
      </div>
    </Link>
  )
}

export default ActorCard
