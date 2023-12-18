import { movieLibrary } from "@/utils/static"
import Link from "next/link"
import React from "react"

function MobileNavBar() {
  return (
    <div className="fixed sm:hidden bottom-0 right-0 left-0 px-4 py-2 bg-OrangeWhite dark:bg-Licorice z-20 ">
      <div className="container  flex justify-between">
        {movieLibrary.map(({ id, link, name, icon: Icon }) => (
          <Link href={"/movies" + link} key={id}>
            <div
              className={`${
                link === "?type=top_rated"
                  ? "text-YellowPotato"
                  : "text-gray-800  dark:text-white "
              } flex flex-col gap-1 items-center justify-center `}
            >
              <Icon className="w-7 h-7" />
              <p className="text-xs ">{name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default MobileNavBar
