import React, { useState, useEffect } from "react"

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [dotPosition, setDotPosition] = useState(0)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle("dark", isDarkMode)
    setDotPosition(isDarkMode ? 1 : 0)
  }, [])

  const handleToggle = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode ? "true" : "false")
    document.documentElement.classList.toggle("dark", newDarkMode)
    setDotPosition(newDarkMode ? 1 : 0)
  }

  const dotStyle = {
    transform: `translateX(${dotPosition * 100}%)`,
    transition: "transform 0.3s ease-out",
  }

  return (
    <div className="flex items-center space-x-2">
      <label
        htmlFor="dark-mode-toggle"
        className="text-gray-800 dark:text-white"
      >
        Dark Mode
      </label>
      <div
        className={`w-10 h-5 rounded-full bg-gray-300 dark:bg-gray-600 p-1 flex items-center cursor-pointer relative`}
        onClick={handleToggle}
      >
        <div
          className={`w-4 h-4 rounded-full bg-white shadow-md`}
          style={dotStyle}
        ></div>
      </div>
    </div>
  )
}

export default DarkModeToggle
