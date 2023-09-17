import React from "react"

export default function Home({}) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-black`}
    >
      <h1 className="text-7xl font-extrabold text-yellow-300">
        Rotten potato rocks
      </h1>
    </main>
  )
}

// export async function getServerSideProps() {
//   const moviesData = await fetcher("person/popular")
//   return {
//     props: { moviesData },
//   }
// }
