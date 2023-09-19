import React from "react"
import Carousel from "better-react-carousel"
import MovieCard from "../MovieCard"

function MoviesCarousel({
  items,
  cols = 4,
  rows = 1,
  gap = 10,
  carouselStyle = {
    width: "80%",
    padding: "1rem",
    margin: "0 auto",
  },
}) {
  /* const containerStyle = {
    width: "80%",
    padding: "1rem",
    margin: "0 auto",
  } */
  return (
    <Carousel
      className="w-10/12 mx-auto h-fit p-4 gap-0 bg-white"
      cols={cols}
      rows={rows}
      gap={gap}
      containerStyle={carouselStyle}
      loop
    >
      {items.map((item) => (
        <Carousel.Item
          key={item.id}
          className=" mx-auto h-fit p-4 gap-0 bg-white"
        >
          <MovieCard
            genres={movie.genre_ids}
            title={item.title}
            poster_path={item.poster_path}
            vote_average={item.vote_average}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default MoviesCarousel
