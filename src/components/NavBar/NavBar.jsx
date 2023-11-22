import fetcher, { fetchMovieGenres, fetchTvGenres } from "@/utils/API"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import logo from "../../images/logo.svg"
import Dropdown from "../DropDown/Dropdown"
import { movieLibrary } from "@/utils/static"
import { useRouter } from "next/router"
import DarkModeToggle from "../DarkMode/DarkModeToggle"

const NavBar = () => {
  const [movieGenres, setMovieGenres] = useState([])
  const [tvGenres, setTvGenres] = useState([])
  const router = useRouter()

  useEffect(() => {
    // Fetch movie and TV genres
    fetchMovieGenres().then((res) => setMovieGenres(res.genres))
    fetchTvGenres().then((res) => setTvGenres(res.genres))
    fetcher("movie/upcoming?language=en-US").then((res) =>
      console.log("resssss", res),
    )
  }, [])

  async function handleSearch(e) {
    if (e.keyCode === 13) {
      router.push(`/search?query=${e.target.value}`)
      e.target.value = ""
    }
  }

  return (
    <nav className="bg-OrangeWhite dark:bg-Licorice text-gray-800 dark:text-white p-2 h-auto rounded-l ">
      <div className="my-2 flex w-full justify-between align-baseline">
        <Link href="/" passHref className="">
          <div className="logo flex ml-12">
            <Image src={logo} width={48} height={48} alt="logo image" />
            <span className="font-lucky text-YellowPotato w-32 text-[2rem] uppercase leading-8 ml-2">
              Rotten Potato
            </span>
          </div>
        </Link>

        <div className="text-2xl flex gap-8 font-normal tracking-wider mt-2">
          <Link href="/" passHref className="py-2">
            HOME
          </Link>
          <Dropdown title={"MOVIES"} data={movieLibrary} page={"/movies/"} />
          <Dropdown title={"GENRE"} data={movieGenres} page={"/movies/"} />
          <Dropdown title={"TV"} data={tvGenres} page={"shows/"} />
          <Link href="/actors" passHref className="py-2">
            ACTORS
          </Link>
        </div>

        <div className="search mr-4">
          <label
            htmlFor="default-search"
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onKeyDown={handleSearch}
              type="search"
              id="default-search"
              className="block w-full p-3 pl-10 mt-2 text-sm text-black dark:text-SilverWhite rounded-lg bg-DarkWhite dark:bg-[#58585a] border-gray-600 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Movie,Actors..."
              required
            />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
