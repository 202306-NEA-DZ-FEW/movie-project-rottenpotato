import React from "react"

export default function Home({ moviesData }) {
  console.log(moviesData)
  return (
    <div className="bg-black">
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 `}
      >
        <h1 className="text-7xl font-extrabold text-yellow-300">
          Rotten potato rocks
        </h1>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const moviesData = await fetcher("person/popular")
  return {
    props: { moviesData },
  }
}
