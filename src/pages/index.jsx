import MoviesCarousel from "@/components/carousel/MoviesCarousel"
import Carousel from "better-react-carousel"
import React, { useState } from "react"
import fetcher from "@/utils/API"
import CarouselMovie from "@/components/carouselMovie/CarouselMovie"
import { FiArrowRight } from "react-icons/fi"
import MoviesIndex from "@/components/MoviesIndex"
import TrailerModal from "@/components/moviepage/TrailerModal"
import ActorsIndex from "@/components/ActorsIndex"
import TvIndex from "@/components/TvIndex.jsx"

export default function Home({ trendingMovies, topRated, people, series }) {
  console.log("people", people)
  const carouselContainer = {
    width: "99%",
    maxWidth: "900px",
    height: "fit-content",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    margin: "0 auto",
  }

  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <main
      className={` flex min-h-screen flex-col w-full bg-DarkWhite dark:bg-black text-black dark:text-white `}
    >
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
      <MoviesIndex movies={topRated} />
      <TvIndex series={series} />
      <ActorsIndex people={people} />
    </main>
  )
}

export async function getServerSideProps() {
  const Data = await fetcher("trending/movie/day")
  const trendingMovies = Data.results.slice(0, 3)
  const topRated = Data.results.slice(0, 4)
  const peopleData = await fetcher("person/popular")
  const people = peopleData.results.slice(0, 4)
  const tv = await fetcher("tv/airing_today")
  const series = tv.results.slice(0, 4)
  return {
    props: { trendingMovies, topRated, people, series },
  }
}
