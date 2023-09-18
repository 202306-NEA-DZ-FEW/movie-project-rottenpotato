import React, { useState } from "react"
import DarkModeToggle from "../DarkModeToggle"

import { AiOutlineHome } from "react-icons/ai"
import { PiVideoCameraBold } from "react-icons/pi"
import { FaRegBuilding } from "react-icons/fa"
import { IoPersonOutline } from "react-icons/io5"
import SideBarNavItem from "./SideBarNavItem"
import { movieLibrary } from "@/utils/static"

const menuNavigationList = [
  {
    id: "home",
    name: "Home",
    icon: AiOutlineHome,
    link: "/home",
  },
  {
    id: "actors",
    name: "Actors",
    icon: IoPersonOutline,
    link: "/actors",
  },
  {
    id: "studios",
    name: "Studios",
    icon: FaRegBuilding,
    link: "/studios",
  },
  {
    id: "movie providers",
    name: "Movie Providers",
    icon: PiVideoCameraBold,
    link: "/providers",
  },
]
export default function SideBar({ fullSideBar }) {
  const [currentLink, setCurrentLink] = useState("home")
  const [isFull, setIsFull] = useState(fullSideBar)
  return (
    <div
      className={`${
        isFull ? "w-64 " : "w-32"
      } transition-all duration-300 ease-out fixed h-full left-0 top-40 bg-black`}
    >
      <div className="container pl-16  ">
        <div
          className={`hamburger  transition-all duration-300 ease-out flex ${
            isFull ? "ml-40" : "ml-0"
          } mb-8 ${fullSideBar ? "hidden" : ""}`}
          onClick={() => setIsFull(!isFull)}
        >
          <div class="space-y-2 ">
            <div class="w-7 h-0.5 bg-gray-800 dark:bg-gray-400"></div>
            <div class="w-7 h-0.5 bg-gray-800 dark:bg-gray-400"></div>
            <div class="w-7 h-0.5 bg-gray-800 dark:bg-gray-400"></div>
          </div>
        </div>

        {/*  */}
        {isFull && (
          <div className="dark-mode-toggle mb-8">
            <DarkModeToggle />
          </div>
        )}
        <div className="navigations">
          <div className="nav-items">
            <h3
              className={`${
                isFull ? "" : "invisible"
              } "text-lg mb-2 font-bold text-gray-800 dark:text-white "`}
            >
              Menu
            </h3>

            <ul className="flex flex-col gap-1 text-gray-800 dark:text-white ">
              {menuNavigationList.map((navItem) => (
                <SideBarNavItem
                  {...navItem}
                  key={navItem.id}
                  currentLink={currentLink}
                  setCurrentLink={setCurrentLink}
                  isFull={isFull}
                />
              ))}
            </ul>
          </div>
          {/* Library section  */}
          <div className="nav-items mt-14 text-gray-800">
            <h3
              className={`${
                isFull ? "" : "invisible"
              } "text-lg mb-4 text-gray-800 dark:text-white "`}
            >
              Library
            </h3>
            <ul className="flex flex-col gap-1 text-gray-800 dark:text-white  ">
              {movieLibrary.map((navItem) => (
                <SideBarNavItem
                  {...navItem}
                  key={navItem.id}
                  currentLink={currentLink}
                  setCurrentLink={setCurrentLink}
                  isFull={isFull}
                />
              ))}
            </ul>
          </div>
          {/* Settings section */}
          {/* <div className="nav-items mt-14">
            <h3
              className={`${
                !isFull ? "invisible" : ""
              } "text-lg mb-4 text-gray-300"`}
            >
              Settings
            </h3>
            <ul className="flex flex-col">
              {menuNavigationList.slice(0, 2).map((navItem) => (
                <SideBarNavItem
                  {...navItem}
                  key={navItem.id}
                  currentLink={"currentLink"}
                  setCurrentLink={setCurrentLink}
                  isFull={isFull}
                />
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}
