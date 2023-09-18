// pages/search.js

import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import fetcher from "@/utils/API"

export default function Search() {
  const router = useRouter()
  const { query } = router.query
  const [searchResults, setSearchResults] = useState({})

  useEffect(() => {
    if (query) {
      fetcher(`search/movie?query=${query}&include_adult=false`).then((res) =>
        setSearchResults(res),
      )
    }
  }, [query])

  return (
    <div>
      <h1>Search results for: {query}</h1>
      {console.log(searchResults)}
    </div>
  )
}
