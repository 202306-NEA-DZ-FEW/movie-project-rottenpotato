// import MoviesCarousel from "@/components/carousel/MoviesCarousel"
import Carousel from "better-react-carousel"
import React from "react"
import fetcher from "@/utils/API"
import CarouselMovie from "@/components/carouselMovie/CarouselMovie"
import { FiArrowRight } from "react-icons/fi"
import MoviesCarousel from "@/components/carousel/MoviesCarousel"

export default function Home({ trendingMovies, topRated }) {
  console.log(trendingMovies)
  const carouselContainer = {
    width: "90%",
    height: "fit-content",
    padding: "1rem 0rem 1rem 6rem",
    margin: "0 auto",
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between w-full bg-black ml-36 mt-36`}
    >
      <Carousel
        cols={1}
        rows={1}
        gap={10}
        dotColorActive="#F8B319"
        autoPlay
        loop
        hideArrow
        showDots
        containerStyle={carouselContainer}
      >
        {trendingMovies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <CarouselMovie movie={movie} />
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="w-full h-max flex flex-row justify-around items-center">
          <h1 className="text-xl font-bold text-YellowPotato">Top Rated:</h1>
          <h1 className="text-xl font-bold text-YellowPotato">
            view More <FiArrowRight />
          </h1>
        </div>
        <MoviesCarousel items={topRated} carouselStyle={carouselContainer} />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="w-full h-max flex flex-row justify-around items-center">
          <h1 className="text-xl font-bold text-YellowPotato">Latest:</h1>
          <h1 className="text-xl font-bold text-YellowPotato">
            view More <FiArrowRight />
          </h1>
        </div>
        <MoviesCarousel items={topRated} carouselStyle={carouselContainer} />
      </div>
      <div className="flex flex-col w-full justify-center items-center">
        <div className="w-full h-max flex flex-row justify-around items-center">
          <h1 className="text-xl font-bold text-YellowPotato">Upcoming:</h1>
          <h1 className="text-xl font-bold text-YellowPotato">
            view More <FiArrowRight />
          </h1>
        </div>
        <MoviesCarousel items={topRated} carouselStyle={carouselContainer} />
      </div>
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
