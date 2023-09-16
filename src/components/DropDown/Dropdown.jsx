import Link from "next/link"
import { stringify } from "postcss"
import React, { useEffect, useRef, useState } from "react"

export default function Dropdown({ title, data, page }) {
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
        className="t focus:outline-none text-white focus:ring-blue-300 font-medium rounded-lg   py-2 text-center inline-flex items-center"
        type="button"
      >
        {title}{" "}
        <svg
          className="w-2.5 h-2.5 ml-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {/* <!-- Dropdown menu --> */}
      <div
        ref={dropdown}
        className={`${
          !showDropdown ? "hidden" : ""
        } "z-10  absolute divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"`}
      >
        <ul
          className="py-2 text-sm z-10 text-gray-100 bg-black dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {data &&
            data.map((item) => {
              const link = item.link ? item.link : item.name
              return (
                <li key={item.id}>
                  <Link
                    href={page + link}
                    className="block px-4 py-2 hover:bg-YellowPotato hover:text-black   dark:hover:text-white"
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
