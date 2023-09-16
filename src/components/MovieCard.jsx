const MovieCard = ({ title, poster_path, vote_average }) => {
  const posterImageUrl = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : "../images/default_Rotten_potato.jpg"

  //Calculating the number of stars based on voting average, then rendering them.
  const numStars = Math.round(vote_average / 2)

  const renderStars = () => {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (i < numStars) {
        stars.push(
          <span key={i} className="text-yellow-400 text-xl font-semibold">
            ★
          </span>,
        )
      } else {
        stars.push(
          <span key={i} className="text-gray-400 text-xl font-semibold">
            ★
          </span>,
        )
      }
    }
    return stars
  }

  return (
    // Card with the poster image as its background
    <div className="rounded-xl overflow-hidden shadow-lg w-48 h-72 flex-shrink-0 m-1/4 mr-2 ml-2 mb-2 mt-2 relative">
      <div className="relative w-full h-full">
        <img src="../images/default_Rotten_potato.jpg" alt="" />
        <div
          className="absolute top-0 left-0 w-full h-full bg-contain bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${posterImageUrl}')` }}
        ></div>

        {/* Gradient effect on the card */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="bg-gradient-to-t from-black to-transparent h-3/6 absolute bottom-0 left-0 w-full"></div>
          <div className="bg-gradient-to-b from-black to-transparent h-3/6 absolute top-0 left-0 w-full"></div>
        </div>
      </div>

      {/* Title and stars */}
      <div className="absolute top-0 left-0 w-full p-3 text-white">
        <div className="font-bold text-sm mb-1">{title}</div>
        <div className="my-1 flex list-none gap-0.5 p-0">{renderStars()}</div>
      </div>

      {/* More info and + buttons */}
      <button className="absolute bottom-0 right-0 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 mb-2 mr-3 rounded-lg">
        More Info
      </button>
      <button
        className="absolute bottom-2 left-1 ml-3 inline-flex p-2 w-12 h-10 justify-center rounded-lg bg-Low-op-btn backdrop-blur-5 text-4xl font-semibold text-white opacity-90 hover:opacity-100"
        style={{
          background: "var(--Low-op-btn, rgba(249, 249, 249, 0.60))",
          lineHeight: "1rem",
        }}
      >
        +
      </button>
    </div>
  )
}

export default MovieCard
