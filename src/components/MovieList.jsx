import React, { useState, useEffect } from "react"
import MovieCard from "@/components/MovieCard"
import Pagination from "@/components/Pagination"
import NavBar from "@/components/NavBar"

const MovieList = ({ latestMovie, pageTitle }) => {
  const moviesPerPage = 20
  const marginPagesDisplayed = 2
  const pageRangeDisplayed = 5
  console.log("laaateset", latestMovie)
  return (
    <div className="">
      {/* <NavBar /> */}
      <h1 className="text-white text-4xl font-bold p-6 mb-8">
        <span className="capitalize"> {pageTitle}</span> On Rotten Potatos
      </h1>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-2"></div> */}

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
