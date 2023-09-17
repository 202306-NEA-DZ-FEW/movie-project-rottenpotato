import React from "react"
import fetcher from "@/utils/API"
import Link from "next/link"

export default function Movies({ movieData }) {
  console.log(movieData)
  return (
    <main className="movies flex flex-row gap-12">
      {movieData.results.map((movie) => (
        <Link
          className="text-black"
          href={`/movies/${movie.id}`}
          key={movie.id}
        >
          {movie.title}
        </Link>
      ))}
    </main>
  )
}
export async function getServerSideProps() {
  const movieData = await fetcher("trending/movie/week")
  return {
    props: { movieData },
  }
}
