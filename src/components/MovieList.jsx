import React, { useState, useEffect } from "react"
import MovieCard from "@/components/MovieCard"
import Pagination from "@/components/Pagination"
import NavBar from "@/components/NavBar"

const MovieList = ({ latestMovie }) => {
  const moviesPerPage = 18
  const marginPagesDisplayed = 2
  const pageRangeDisplayed = 5

  return (
    <div className="relative">
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
