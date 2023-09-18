import React from "react"
import Carousel from "better-react-carousel"
import MovieCard from "../MovieCard"
import ActorCard from "../ActorCard/ActorCard"

function ActorsCarousel({ items }) {
  const carouselContainer = {
    width: "80%",
    padding: "1rem",
    margin: "0 auto",
  }
  return (
    <Carousel
      className="w-10/12 mx-auto h-fit p-4 gap-0 bg-white"
      cols={4}
      rows={1}
      gap={10}
      containerStyle={carouselContainer}
      loop
    >
      {items.map((item) => (
        <Carousel.Item key={item.id}>
          <ActorCard person={item} />
        </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default ActorsCarousel
