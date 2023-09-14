import Image from "next/image"
import fetcher from "@/utils/API"

export default function Home({ moviesData }) {
  console.log(moviesData)
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 `}
    >
      <h1 className="text-7xl font-extrabold text-yellow-300">
        Rotten potato rocks
        {/* {moviesData} */}
      </h1>
    </main>
  )
}

export async function getServerSideProps() {
  const moviesData = await fetcher("person/popular")
  return {
    props: { moviesData },
  }
}
