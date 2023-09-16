import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

import logo from "../../images/logo.svg"
import { AiOutlineHome } from "react-icons/ai"
import { GoVerified } from "react-icons/go"
import { RiCompassDiscoverLine } from "react-icons/ri"
import { PiTrophy } from "react-icons/pi"
import SideBarNavItem from "./SideBarNavItem"

const menuNavigationList = [
  {
    id: "home",
    title: "Home",
    icon: AiOutlineHome,
    link: "/home",
  },
  {
    id: "explore",
    title: "Explore",
    icon: RiCompassDiscoverLine,
    link: "/explore",
  },
  {
    id: "awards",
    title: "Awards",
    icon: PiTrophy,
    link: "/awards",
  },
  {
    id: "celebrities",
    title: "Celebrities",
    icon: GoVerified,
    link: "/celebrities",
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
            <div class="w-7 h-0.5 bg-gray-400"></div>
            <div class="w-7 h-0.5 bg-gray-400"></div>
            <div class="w-7 h-0.5 bg-gray-400"></div>
          </div>
        </div>

        {/*  */}
        <div className="navigations">
          <div className="nav-items">
            <h3
              className={`${
                isFull ? "" : "invisible"
              } "text-lg mb-4 text-gray-300"`}
            >
              Menu
            </h3>
            <ul className="flex flex-col gap-1">
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
          <div className="nav-items mt-14">
            <h3
              className={`${
                isFull ? "" : "invisible"
              } "text-lg mb-4 text-gray-300"`}
            >
              Library
            </h3>
            <ul className="flex flex-col gap-1">
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
          </div>
          {/* Settings section */}
          <div className="nav-items mt-14">
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
          </div>
        </div>
      </div>
    </div>
  )
}
