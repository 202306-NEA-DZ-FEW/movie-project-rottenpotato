import React from "react"

function TrailerModal({ showModal, setShowModal, trailerLink }) {
  const no_video = (
    <div className="w-1/2 aspect-square rounded-lg h-1/2">
      <img
        src="../images/video_not_available.svg"
        alt=""
        className="w-full h-full"
      />{" "}
    </div>
  )
  const trailer = (
    <iframe
      src={trailerLink}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      frameborder="0"
    ></iframe>
  )
  return (
    <div
      className={`${
        showModal ? "w-full" : "w-0"
      } flex justify-center items-center h-full z-20 absolute top-0 left-0
    transition-all duration-1000 ease-in-out`}
    >
      <div
        className="absolute bg-[rgba(0,0,0,.8)] -z-10 top-0 right-0 bottom-0 left-0 w-full h-full "
        onClick={() => setShowModal(false)}
      ></div>
      {!trailerLink ? no_video : trailer}
    </div>
  )
}

export default TrailerModal
