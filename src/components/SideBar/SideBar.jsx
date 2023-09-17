import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

import logo from "../../images/logo.png"
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
export default function SideBar() {
  const [currentLink, setCurrentLink] = useState("home")
  return (
    <div className="w-64  absolute left-0 top-0">
      <div className="container pl-16">
        <div className="logo flex my-20">
          <Image src={logo} width={59} height={59} alt="logo image" />
          <div className="title font-lucky flex flex-col text-3xl font-bold text-yellow-400">
            <span>Rotten</span>
            <span>Potatos</span>
          </div>
        </div>
        {/*  */}
        <div className="navigations">
          <div className="nav-items mt-14">
            <h3 className="text-lg mb-4 text-gray-300">Menu</h3>
            <ul className="flex flex-col gap-2">
              {menuNavigationList.map((navItem) => (
                <SideBarNavItem
                  {...navItem}
                  key={navItem.id}
                  currentLink={currentLink}
                  setCurrentLink={setCurrentLink}
                />
              ))}
            </ul>
          </div>
          {/* Library section  */}
          <div className="nav-items mt-14">
            <h3 className="text-lg mb-4 text-gray-300">Library</h3>
            <ul className="flex flex-col gap-2">
              {menuNavigationList.slice(0, 2).map((navItem) => (
                <SideBarNavItem
                  {...navItem}
                  key={navItem.id}
                  currentLink={"currentLink"}
                  setCurrentLink={setCurrentLink}
                />
              ))}
            </ul>
          </div>
          {/* Settings section
          <div className="nav-items mt-14">
            <h3 className="text-lg mb-4 text-gray-300">Settings</h3>
            <ul className="flex flex-col gap-2">
              {menuNavigationList.slice(0, 2).map((navItem) => (
                <SideBarNavItem
                  {...navItem}
                  key={navItem.id}
                  currentLink={"currentLink"}
                  setCurrentLink={setCurrentLink}
                />
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  )
}
