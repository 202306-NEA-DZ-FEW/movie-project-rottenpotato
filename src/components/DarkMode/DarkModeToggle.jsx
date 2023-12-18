import UseDarkMode from "@/hooks/UseDarkMode"
import React, { useState } from "react"

const DarkModeToggle = ({ isFull }) => {
  const [darkMode, handleToggle] = UseDarkMode()
  const [dotPosition, setDotPosition] = useState(0)

  const dotStyle = {
    transform: `translateX(${dotPosition * 100}%)`,
    transition: "transform 0.3s ease-out",
  }
  const handleClick = () => {
    handleToggle()
    setDotPosition(darkMode ? 1 : 0)
  }

  return (
    <div className="flex items-center space-x-2 relative">
      <div
        className={`w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-600 p-1 flex items-center cursor-pointer relative`}
        onClick={handleClick}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white shadow-md`}
          style={dotStyle}
        ></div>
      </div>

      <label
        htmlFor="dark-mode-toggle"
        className={`absolute hidden sm:block left-10 text-gray-800 dark:text-white transition-all ease-linear ${
          !isFull ? "scale-0" : "scale-100"
        }`}
      >
        Dark Mode
      </label>
    </div>
  )
}

export default DarkModeToggle
