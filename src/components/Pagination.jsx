import React, { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import MovieCard from "@/components/MovieCard"
import { BsCaretLeftFill } from "react-icons/bs"
import { BsCaretRightFill } from "react-icons/bs"

const Pagination = ({ totalItems, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0)

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected)
  }

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedItems = totalItems.slice(startIndex, endIndex)

  const totalPages = Math.ceil(totalItems.length / itemsPerPage)

  return (
    <>
      <div class="flex flex-wrap">
        {displayedItems.map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 justify-center"
          >
            <MovieCard {...card} />
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={<BsCaretLeftFill></BsCaretLeftFill>}
        nextLabel={<BsCaretRightFill></BsCaretRightFill>}
        breakLabel={"..."}
        breakClassName={"break-me text-white"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"flex justify-center p-6 text-s font-bold"}
        activeClassName={"bg-transparent text-yellow-500"}
        pageClassName={"mx-2 text-white hover:text-yellow-500"}
        previousClassName={"p-1 text-white hover:text-yellow-500"}
        nextClassName={"p-1 text-white hover:text-yellow-500"}
        pageLinkClassName={"page-link text-white hover:text-yellow-500"}
        activeLinkClassName={"text-white text-yellow-500"}
      />
    </>
  )
}

export default Pagination
