import Link from "next/link"
import React from "react"

export default function SideBarNavItem({
  id,
  title,
  icon: NavItemIcon,
  link,
  currentLink,
  setCurrentLink,
}) {
  return id === currentLink ? (
    <li
      id={id}
      className="border-r-2 py-2 border-r-yellow-400 cursor-pointer"
      onClick={() => setCurrentLink(id)}
    >
      <div href={link} className="flex ">
        <NavItemIcon className="w-6 h-6 mr-4 text-yellow-400" />
        <span className="text-yellow-400 text-lg">{title}</span>
      </div>
    </li>
  ) : (
    <li
      id={id}
      className="py-2 cursor-pointer"
      onClick={() => setCurrentLink(id)}
    >
      <div href={link} className="flex ">
        <NavItemIcon className="w-6 h-6 mr-4" />
        <span className=" text-lg">{title}</span>
      </div>
    </li>
  )
}
