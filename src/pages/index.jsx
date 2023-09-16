// import MoviesCarousel from "@/components/carousel/MoviesCarousel"
import Carousel from "better-react-carousel"
import React from "react"
import fetcher from "@/utils/API"
import CarouselMovie from "@/components/carouselMovie/CarouselMovie"

export default function Home({ trendingMovies }) {
  console.log(trendingMovies)
  const carouselContainer = {
    width: "100%",
    height: "fit-content",
    left: "0",
    padding: "1rem 5rem",
    margin: "1rem 0 0px 10rem",
  }
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between w-full bg-black p-8 pl-40 pt-48`}
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
      <div></div>
      <div></div>
      <div></div>
    </main>
  )
}

export async function getServerSideProps() {
  const Data = await fetcher("trending/movie/day")
  const trendingMovies = Data.results.slice(0, 3)
  return {
    props: { trendingMovies },
  }
}
