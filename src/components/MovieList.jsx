import React, { useState, useEffect } from "react"
import MovieCard from "@/components/MovieCard"
import Pagination from "@/components/Pagination"
import NavBar from "@/components/NavBar"

const MovieList = ({ latestMovie }) => {
  const moviesPerPage = 18
  const marginPagesDisplayed = 2
  const pageRangeDisplayed = 5

  return (
    <div className="container mx-auto w-auto">
      <NavBar />
      <h1 className="text-white text-4xl font-bold p-6">
        Trending On Rotting Potato
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2"></div>

      <Pagination
        totalItems={latestMovie.results}
        itemsPerPage={moviesPerPage}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
      />
    </div>
  )
}

export default MovieList
