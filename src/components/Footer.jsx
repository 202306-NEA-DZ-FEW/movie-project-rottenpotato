import React from "react"
import MemberCard from "../components/memberCard"

import fella from "../images/Fella_Kettani_Algeria_2023.jpg"
import med from "../images/IMG_20220710_202325.jpg"
import sorour from "../images/377864338_855637669296184_2524052400789780379_n.png"
import abdel from "../images/ghani_pic_compressed.jpg"
import amel from "../images/WhatsApp Image 2023-09-17 à 19.23.39.jpg"
import chanel from "../images/000.jpg"

const Footer = () => {
  //  this is an array of team members
  const teamMembers = [
    {
      name: "Mohammed Bennaceur",
      githubLink: " https://github.com/GhaniBahri",
      linkedinLink: "https://www.linkedin.com/in/mohammed-bennaceur-571b89194",
      imageSrc: med,
    },
    {
      name: "Sorour Rahem",
      githubLink: " https://github.com/rahemSorour",
      linkedinLink: "https://www.linkedin.com/in/sorour-rahem-93483a202",
      imageSrc: sorour,
    },
    {
      name: "Abdelghani Bahri",
      githubLink: "https://github.com/GhaniBahri",
      linkedinLink: "https://www.linkedin.com/in/abdelghani-bahri-0a190a159/",
      imageSrc: abdel,
    },
    {
      name: "Amel Batouche",
      githubLink: "https://github.com/Amel7400",
      linkedinLink: "https://www.linkedin.com/in/batouche-amel-384422190/",
      imageSrc: amel,
    },
    {
      name: "Fella Kettani",
      githubLink: "https://github.com/member1",
      linkedinLink: "https://www.linkedin.com/in/member1/",
      imageSrc: fella,
    },

    {
      name: "Channel",
      githubLink: "https://github.com/member1",
      linkedinLink: "https://www.linkedin.com/in/fella-kettani-525a7922b/",
      imageSrc: chanel,
    },
  ]

  return (
    <footer className="bg-[#0b0b0b] pt-32 h-[225px]">
      <div className="container mx-auto  px-4 flex-cols md:grid-cols-2 lg:flex lg:flex-rows h-full flex justify-around items-center">
        {teamMembers.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
      <footer className="bg-[#0b0b0b] py-8">
        {/* Footer copyright content */}
        <p className="text-[#f8b31982] text-center mt-24">
          &copy; {new Date().getFullYear()} Rotten Potato. All Rights Reserved.
        </p>
      </footer>
    </footer>
  )
}

export default Footer
