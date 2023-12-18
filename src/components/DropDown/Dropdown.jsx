import Link from "next/link"
import { stringify } from "postcss"
import React, { useEffect, useRef, useState } from "react"
import { BsCaretDownSquareFill } from "react-icons/bs"

export default function Dropdown({ title, data, page, theme }) {
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdown = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!showDropdown) return
    function handleClick(event) {
      console.log("here")
      if (
        !dropdown.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        console.log("here too")
        setShowDropdown(false)
      }
    }
    window.addEventListener("click", handleClick)
    // clean up
    return () => window.removeEventListener("click", handleClick)
  }, [showDropdown])

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setShowDropdown((showDropdown) => !showDropdown)}
        className="text-sm sm:text-lg focus:outline-none  focus:ring-blue-300 font-normal rounded-lg   py-2 text-center inline-flex items-center text-gray-800 dark:text-white"
        type="button"
      >
        {title}{" "}
        <BsCaretDownSquareFill
          className={`w-4 h-4 ml-2  ${theme ? "rotate-180" : ""}`}
        />
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        ref={dropdown}
        className={`${
          !showDropdown ? "hidden" : ""
        } "z-10  absolute divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"`}
      >
        <ul
          className="rounded-lg py-2 text-sm z-10 bg-SilverWhite dark:bg-gray-600 text-gray-800 dark:text-white absolute dropdown"
          aria-labelledby="dropdownDefaultButton"
        >
          {data &&
            data.map((item) => {
              const link = item.link
                ? item.link
                : "?genre=" + item.name + "&genre_id=" + item.id
              return (
                <li key={item.id}>
                  <Link
                    href={page + link}
                    className="block px-4 py-2 hover:bg-OrangeWhite dark:hover:bg-YellowPotato hover:text-black   dark:hover:text-white"
                  >
                    {item.name}
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}
