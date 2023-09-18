import fetcher, { fetchMovieGenres, fetchTvGenres } from "@/utils/API"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import DarkModeToggle from "./DarkModeToggle"

import logo from "../images/logo.svg"
import Dropdown from "./DropDown/Dropdown"
import { movieLibrary } from "@/utils/static"
import { useRouter } from "next/router"
const NavBar = () => {
  const [movieGenres, setMovieGenres] = useState([])
  const [tvGenres, setTvGenres] = useState([])
  // useEffect(() => {
  //   fetchMovieGenres().then((res) => setMovieGenres(res.genres))
  //   fetchTvGenres().then((res) => setTvGenres(res.genres))
  //   fetcher("movie/upcoming?language=en-US").then((res) =>
  //     console.log("resssss", res),
  //   )
  // }, [])
  const router = useRouter()
  async function handleSearch(e) {
    if (e.keyCode === 13) {
      router.push(`/search?query=${e.target.value}`)
      e.target.value = ""
    }
  }
  return (
    <nav className="bg-DarkWhite dark:bg-black text-gray-800 dark:text-white p-4  ">
      <div className=" my-10 flex w-full justify-between align-baseline">
        <div className="logo flex ml-12">
          <Image src={logo} width={59} height={59} alt="logo image" />
          <span className="font-lucky text-YellowPotato w-32 text-[2rem] uppercase leading-8 ml-2">
            Rotten Potato
          </span>
        </div>

        <div className="text-2xl flex gap-6 font-semibold ">
          <Link href="/" passHref className="py-2">
            Home
          </Link>
          <Dropdown title={"Movies"} data={movieLibrary} page={"movies/"} />
          <Dropdown title={"Genre"} data={movieGenres} page={"movies/"} />
          <Dropdown title={"TvShows"} data={tvGenres} page={"shows/"} />
          <Link href="/actors" passHref className="py-2 ">
            Actors
          </Link>
        </div>
        <div className="search mr-4">
          <label
            for="default-search"
            className="mb-2 text-sm font-medium text-gray-800 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onKeyDown={handleSearch}
              type="search"
              id="default-search"
              className="block w-full p-3 pl-10 mt-2 text-sm text-black dark:text-white rounded-lg  bg-SilverWhite dark:bg-[#21242D] border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
          </div>
        </div>
      </div>
      <div className="w-9/12 ml-10 border-b-2 border-YellowPotato mb-4"></div>
    </nav>
  )
}

export default NavBar
