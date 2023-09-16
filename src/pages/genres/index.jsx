import fetcher from "@/utils/API"
import React, { useEffect, useState } from "react"

function Genres({ genres, moviesData }) {
  const [filter, setFilter] = useState(null)
  const allFilters = [...genres.genres]
  const movies = [...moviesData.results]
  const [moviesToShow, setMoviesToShow] = useState([...movies])

  useEffect(() => {
    filterMovies(filter)
  }, [filter])

  function filterMovies(genre) {
    if (!genre) setMoviesToShow([...movies])
    else {
      const filteredMovies = movies.filter((movie) => {
        return movie.genre_ids.includes(genre)
      })
      setMoviesToShow(filteredMovies)
    }
  }
  function handleFilter(e) {
    setFilter(parseInt(e.target.value))
  }
  console.log("movies", moviesToShow)
  return (
    <main className="bg-YellowPotato flex flex-row-reverse">
      <select name="genre" id="genre" onChange={handleFilter}>
        <option value="">All</option>
        {allFilters.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
      {moviesToShow.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
      {/* {JSON.stringify(genres)} */}
    </main>
  )
}

export default Genres

export async function getServerSideProps() {
  const url = "genre/movie/list"
  const genres = await fetcher(url)
  const moviesData = await fetcher("trending/movie/week")
  return {
    props: { genres, moviesData },
  }
}

// export async function getStaticPaths() {
//   const people = await fetcher("person/popular")

//   const newArr = people.results.slice(0, 4)

//   const paths = newArr.map((actor) => ({
//     params: { id: actor.id.toString() },
//   }))
//   return {
//     paths,
//     fallback: "blocking",
//   }
// }

// export async function getStaticProps({ params }) {
//   const url = "person/" + params.id
//   const moviesURL = `person/${params.id}/movie_credits`

//   const actor = await fetcher(url)
//   const movies = await fetcher(moviesURL)

//   return {
//     props: {
//       actor,
//       movies,
//     },
//     revalidate: 60,
//   }
// }
