import React, { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import MovieCard from "@/components/MovieCard"
import { BsCaretLeftFill } from "react-icons/bs"
import { BsCaretRightFill } from "react-icons/bs"
import { useRouter } from "next/router"

const Pagination = ({ totalItems, itemsPerPage }) => {
  const router = useRouter()
  console.log("routerr", router)
  const path = router.asPath
  const page = parseInt(router.query.page) || 1
  const [currentPage, setCurrentPage] = useState(page)

  const handlePageChange = ({ selected }) => {
    // window.location.href = path + "&page=" + selected
    router.replace({
      query: { ...router.query, ["page"]: selected + 1 },
    })
    setCurrentPage(selected)
  }

  const startIndex = currentPage * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const displayedItems = totalItems.slice(startIndex, endIndex)

  const totalPages = Math.ceil(1000 / itemsPerPage)

  return (
    <>
      <div className="flex flex-wrap gap-6">
        {totalItems.map((card, index) => (
          <div key={index} className="">
            <MovieCard {...card} />
          </div>
        ))}
      </div>

      <ReactPaginate
        initialPage={page}
        previousLabel={<BsCaretLeftFill></BsCaretLeftFill>}
        nextLabel={<BsCaretRightFill></BsCaretRightFill>}
        breakLabel={"..."}
        breakClassName={"break-me text-white"}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"flex justify-center p-8 text-s font-bold"}
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
