// import MoviesCarousel from "@/components/carousel/MoviesCarousel"
import Carousel from "better-react-carousel"
import React, { useState } from "react"
import fetcher from "@/utils/API"
import CarouselMovie from "@/components/carouselMovie/CarouselMovie"
import { FiArrowRight } from "react-icons/fi"
import MoviesIndex from "@/components/MoviesIndex"

export default function Home({ trendingMovies, topRated }) {
  console.log(trendingMovies)
  const carouselContainer = {
    width: "90%",
    maxWidth: "800px",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    margin: "0 auto",
  }

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <main className={`flex min-h-screen flex-col w-full bg-black`}>
      <Carousel
        className=""
        cols={1}
        rows={1}
        gap={10}
        dotColorActive="#F8B319"
        autoPlay
        loop
        hideArrow
        showDots
        containerStyle={carouselContainer}
        viewport={(viewport) => {
          return window.innerWidth < 768 ? 1 : Math.ceil(viewport.width / 300)
        }}
        currentIndex={selectedIndex} // Set the currentIndex based on the selected index
      >
        {trendingMovies.map((movie, index) => (
          <Carousel.Item key={movie.id}>
            <CarouselMovie movie={movie} />
          </Carousel.Item>
        ))}
      </Carousel>
      <MoviesIndex movies={trendingMovies} />
    </main>
  )
}

export async function getServerSideProps() {
  const Data = await fetcher("trending/movie/day")
  const trendingMovies = Data.results.slice(0, 3)
  const topRated = Data.results.slice(0, 6)
  return {
    props: { trendingMovies, topRated },
  }
}
