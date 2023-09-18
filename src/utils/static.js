import { RxStopwatch } from "react-icons/rx"
import { AiOutlineFire, AiOutlineStar } from "react-icons/ai"
import { MdDownloading, MdOutlineWbTwilight } from "react-icons/md"

export const movieLibrary = [
  {
    id: "now playing",
    name: "Now Playing",
    link: "?type=now_playing",
    icon: RxStopwatch,
  },
  {
    id: "popular",
    name: "popular",
    link: "?type=popular",
    icon: AiOutlineFire,
  },
  {
    id: "top rated",
    name: "Top Rated",
    link: "?type=top_rated",
    icon: AiOutlineStar,
  },
  {
    id: "upcoming",
    name: "Upcoming",
    link: "?type=upcoming",
    icon: MdDownloading,
  },
  {
    id: "latest",
    name: "Latest",
    link: "?type=latest",
    icon: MdOutlineWbTwilight,
  },
]
