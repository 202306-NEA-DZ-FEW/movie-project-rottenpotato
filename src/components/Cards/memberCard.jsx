import Image from "next/image"
import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const MemberCard = ({ name, githubLink, linkedinLink, imageSrc }) => {
  return (
    <div className="flex bg-OrangeWhite flex-col items-center justify-between p-2 w-48  rounded-md   ">
      <div className=" text-lg font-semibold text-center">
        <Image
          src={imageSrc}
          alt="member's name"
          style={{ objectFit: "cover" }}
          className=" w-20 h-20 mx-auto rounded-full mb-2"
        />
      </div>

      <div className="flex flex-rows items-center justify-between space-x-4 mt-4">
        <a
          href={githubLink}
          target="_blank"
          className="text-black dark:text-YellowPotato"
        >
          <FaGithub style={{ fontSize: "30px" }} />
        </a>
        <a
          href={linkedinLink}
          target="_blank"
          className="text-black dark:text-YellowPotato"
        >
          <FaLinkedin style={{ fontSize: "30px" }} />
        </a>
      </div>
      <div className="text-black dark:text-YellowPotato font-bold font-lato flex justify-center pt-[10px] my-4">
        {name}
      </div>
    </div>
  )
}

export default MemberCard
