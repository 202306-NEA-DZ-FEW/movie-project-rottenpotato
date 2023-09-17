import React from "react"
import fetcher from "@/utils/API"
import Link from "next/link"

export default function Movies({ movieData }) {
  console.log(movieData)
  return (
    <div className="movies flex flex-row gap-12">
      {movieData.results.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id}>
          {movie.tile}
        </Link>
      ))}
    </div>
  )
}
export async function getServerSideProps() {
  const movieData = await fetcher("trending/movie/week")
  return {
    props: { movieData },
  }
}
