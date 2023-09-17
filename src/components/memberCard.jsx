import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const MemberCard = ({ name, githubLink, linkedinLink, imageSrc }) => {
  return (
    <div className="flex flex-col items-center justify-between p-2 w-32 hover:border border-YellowPotato rounded-md hover:yellow-shadow transform hover:scale-105 hover:bg-LightGray">
      <div className="text-lg font-semibold text-center">
        <img
          src={imageSrc}
          alt="member's name"
          className="w-16 h-16 mx-auto rounded-full mb-2"
        />
      </div>

      <div className="flex flex-rows items-center justify-between space-x-4">
        <a href={githubLink} target="_blank" className="text-YellowPotato">
          <FaGithub style={{ fontSize: "30px" }} />
        </a>
        <a href={linkedinLink} target="_blank" className="text-YellowPotato">
          <FaLinkedin style={{ fontSize: "30px" }} />
        </a>
      </div>
      <div className="text-YellowPotato font-bold font-lato flex justify-center pt-[10px]">
        {name}
      </div>
    </div>
  )
}

export default MemberCard
