import React, { useState, useEffect } from "react"
import Pagination from "@/components/Pagination/Pagination"

const MovieList = ({ latestMovie, pageTitle }) => {
  const moviesPerPage = 20
  const marginPagesDisplayed = 2
  const pageRangeDisplayed = 5
  console.log("laaateset", latestMovie)
  return (
    <div className="w-full flex flex-col overflow-hidden px-4 mb-2">
      <h1 className="text-gray-800 dark:text-white text-4xl font-bold p-6 mb-2">
        <span className="capitalize">{pageTitle}</span> On Rotten Potatoes
      </h1>
      <div className="w-9/12 border-b-2 border-YellowPotato mb-6 mx-auto"></div>

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
