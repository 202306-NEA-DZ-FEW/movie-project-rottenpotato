import UseDarkMode from "@/hooks/UseDarkMode"
import React from "react"
import { MdDarkMode } from "react-icons/md"

function DarkModeToggleMobile() {
  const [darkMode, handleToggle] = UseDarkMode()
  return (
    <button
      onClick={handleToggle}
      className="fixed sm:hidden flex justify-center items-center bottom-[15%] right-4 bg-OrangeWhite dark:bg-YellowPotato z-50 w-14 h-14 rounded-full overflow-hidden text-gray-800 dark:text-white"
    >
      <MdDarkMode className="w-7 h-7" />
    </button>
  )
}

export default DarkModeToggleMobile
