import Link from "next/link"
import React from "react"

export default function SideBarNavItem({
  id,
  name,
  icon: NavItemIcon,
  link,
  currentLink,
  setCurrentLink,
  isFull,
  page,
}) {
  return id === currentLink ? (
    <li
      id={id}
      className="border-r-2  border-r-yellow-400 cursor-pointer"
      onClick={() => setCurrentLink(id)}
    >
      <Link
        href={page ? page + link : link}
        className="flex relative h-11 items-center"
      >
        <NavItemIcon className="w-6 h-6  text-yellow-400" />
        <label
          className={`absolute hidden sm:block left-3 text-yellow-400 text-lg ml-6 transition-all ease-linear ${
            !isFull ? "scale-0" : "scale-100"
          }`}
        >
          {name}
        </label>
      </Link>
    </li>
  ) : (
    <li id={id} className=" cursor-pointer " onClick={() => setCurrentLink(id)}>
      <Link
        href={page ? page + link : link}
        className="flex relative h-11 items-center"
      >
        <NavItemIcon className="w-6 h-6" />
        <label
          className={`absolute hidden sm:block left-3 text-lg ml-6 transition-all ease-linear ${
            !isFull ? "scale-0" : "scale-100"
          }`}
        >
          {name}
        </label>
      </Link>
    </li>
  )
}
