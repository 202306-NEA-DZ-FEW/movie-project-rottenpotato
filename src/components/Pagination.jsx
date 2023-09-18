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
      <div className="flex flex-wrap gap-6 relative">
        {displayedItems.map((card, index) => (
          <div key={index} className="">
            <MovieCard {...card} />
          </div>
        ))}
      </div>

      <ReactPaginate
        previousLabel={<BsCaretLeftFill />}
        nextLabel={<BsCaretRightFill />}
        breakLabel={"..."}
        breakClassName={"break-me text-black dark:text-white"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"flex justify-center p-8 text-s font-bold"}
        pageClassName={"mx-2 text-black dark:text-white hover:text-yellow-500"}
        previousClassName={
          "p-1 text-black dark:text-white hover:text-yellow-500"
        }
        nextClassName={"p-1 text-black dark:text-white hover:text-yellow-500 "}
        pageLinkClassName={
          " hover:text-YellowPotato dark:hover:text-YellowPotato text-black dark:text-white"
        }
        activeLinkClassName={" text-YellowPotato "}
      />
    </>
  )
}

export default Pagination
