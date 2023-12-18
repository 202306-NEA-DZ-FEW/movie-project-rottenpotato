import React, { useEffect, useState } from "react"

function UseDarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    setDarkMode(isDarkMode)
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [])

  const handleToggle = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem("darkMode", newDarkMode ? "true" : "false")
    document.documentElement.classList.toggle("dark", newDarkMode)
  }
  return [darkMode, handleToggle]
}

export default UseDarkMode
