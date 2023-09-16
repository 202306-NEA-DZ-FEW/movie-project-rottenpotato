import { RxStopwatch } from "react-icons/rx"
import { AiOutlineFire, AiOutlineStar } from "react-icons/ai"
import { MdDownloading, MdOutlineWbTwilight } from "react-icons/md"

export const movieLibrary = [
  {
    id: "now playing",
    name: "Now Playing",
    link: "movie/upcoming?language=en-US",
    icon: RxStopwatch,
  },
  {
    id: "popular",
    name: "popular",
    link: "movie/popular?language=en-US",
    icon: AiOutlineFire,
  },
  {
    id: "top rated",
    name: "Top Rated",
    link: "movie/top_rated?language=en-US",
    icon: AiOutlineStar,
  },
  {
    id: "upcoming",
    name: "Upcoming",
    link: "movie/upcoming?language=en-US",
    icon: MdDownloading,
  },
  {
    id: "latest",
    name: "Latest",
    link: "movie/latest",
    icon: MdOutlineWbTwilight,
  },
]
