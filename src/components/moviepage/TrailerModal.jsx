import React from "react"

function TrailerModal({ showModal, setShowModal, trailerKey, name }) {
  console.log("key", trailerKey)
  const no_video = (
    <div className="w-1/2 aspect-square rounded-lg h-1/2">
      <img
        src="../images/video_not_available.svg"
        alt=""
        className="w-full h-full"
      />{" "}
    </div>
  )
  const trailervideo = (
    <iframe
      width="760"
      height="480"
      src={`https://www.youtube.com/embed/${trailerKey}`}
      title={name}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
  return (
    <div
      className={`${
        showModal ? "w-full" : "w-0"
      } flex justify-center overflow-hidden items-center h-full z-20 absolute top-0 left-0
    transition-all duration-1000 ease-in-out`}
    >
      <div
        className="absolute bg-[rgba(0,0,0,.8)] -z-10 top-0 right-0 bottom-0 left-0 w-full h-full "
        onClick={() => setShowModal(false)}
      ></div>
      {!trailerKey ? no_video : trailervideo}
    </div>
  )
}

export default TrailerModal
