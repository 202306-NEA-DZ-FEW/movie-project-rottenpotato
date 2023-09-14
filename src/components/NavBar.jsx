import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="bg-black p-4 text-[#F8B319] justify-between">
      <div className="flex items-center justify-between">
        <div className="space-x-4">
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/movies" passHref>
            Movies
          </Link>
          <Link href="/actors" passHref>
            Actors
          </Link>
          <Link href="/about" passHref>
            About
          </Link>
        </div>
      </div>
      <div className="flex justify-center align-">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <input
          id="search"
          type="text"
          placeholder="Search movies or actors..."
          className="bg-black text-[#F8B319] border-b-2 border-[#F8B319] focus:outline-none focus:border-[#F8B319]"
        />
      </div>
    </nav>
  )
}

export default NavBar
