import React from "react"
import fetcher from "@/utils/API"
import { FiCalendar, FiMapPin, FiGlobe } from "react-icons/fi"
import { PiGenderIntersexBold } from "react-icons/pi"
import MoviesCarousel from "@/components/carousel/MoviesCarousel"

function SingleActor({ actor, movies }) {
  console.log("actor,", actor)
  return (
    <main className="flex flex-col lg:grid grid-cols-[40%_60%] bg-black w-full p-4 gap-y-8">
      <div className="p-4 flex flex-col justify-start  row-start-1 col-start-1 col-end-2 items-center gap-4">
        <img
          className="rounded-mr w-[19rem] h-[24rem] "
          src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
          alt={actor.name}
        />
        <h3 className="text-YellowPotato  text-center font-semibold text-2xl ">
          Popularity: {actor.popularity}{" "}
        </h3>
      </div>
      <div className="flex flex-col col-start-2 row-start-1 text-left gap-5 items-baseline justify-between">
        <h1 className="text-YellowPotato font-bold text-4xl">{actor.name}</h1>
        <span className="flex flex-row">
          <h4 className="text-YellowPotato font-bold text-sm">A.K.A: </h4>
          {actor.also_known_as.map((tag, index) => (
            <span className="text-white font-bold text-sm mx-1" key={index}>
              {" "}
              {tag} -{" "}
            </span>
          ))}
        </span>
        <span className="flex flex-row justify-start items-center gap-3">
          <FiCalendar className="w-6 h-6 text-yellow-400" />
          <h3 className="text-white font-semibold text-2xl ">
            {actor.birthday} {actor.deathday ? `-${actor.deathday}` : ""}
          </h3>
        </span>
        <span className="flex flex-row justify-start items-center gap-3">
          <PiGenderIntersexBold className="w-6 h-6 text-yellow-400" />
          <h3 className="text-white font-semibold text-2xl ">
            {actor.gender === 1 ? "Female" : "Male"}
          </h3>
        </span>
        <span className="flex flex-row justify-start items-center gap-3">
          <FiMapPin className="w-6 h-6 text-yellow-400" />
          <h3 className="text-white font-semibold text-2xl ">
            {actor.place_of_birth}
          </h3>
        </span>
        <span className="flex flex-row justify-start items-center gap-3">
          <FiGlobe className="w-6 h-6 text-yellow-400" />
          <h3 className="text-white font-semibold text-2xl ">
            {actor.homepage ? actor.homepage : "/"}
          </h3>
        </span>
        <span className="flex flex-col items-start justify-center">
          <h3 className="text-YellowPotato font-semibold text-2xl ">
            Biography
          </h3>
          <p className="text-white font-normal text-lg border border-YellowPotato rounded-md p-2">
            {actor.biography}
          </p>
        </span>
      </div>
      <div className="row-start-2 col-start-1 col-span-2 ">
        <MoviesCarousel items={movies.cast} />
      </div>
    </main>
  )
}

export default SingleActor

export async function getStaticPaths() {
  const people = await fetcher("person/popular")

  const newArr = people.results.slice(0, 4)

  const paths = newArr.map((actor) => ({
    params: { id: actor.id.toString() },
  }))
  return {
    paths,
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }) {
  const url = "person/" + params.id
  const moviesURL = `person/${params.id}/movie_credits`

  const actor = await fetcher(url)
  const movies = await fetcher(moviesURL)

  return {
    props: {
      actor,
      movies,
    },
    revalidate: 60,
  }
}
/* 
{
  "cast": [
    {
      "adult": false,
      "backdrop_path": "/aoWNvT9b9tBd6em9NHfY73aJQnF.jpg",
      "genre_ids": [
        27,
        53
      ],
      "id": 121597,
      "original_language": "en",
      "original_title": "Comedown",
      "overview": "Six friends, who've known each other from childhood, break into the tower block they lived in as kids, now deserted and condemned, to rig-up a pirate radio station, get high and party. When one of the group goes missing, her friends begin to search the dark interior of the tower and soon realize that they are not alone: a resident psychopath lurks in the shadows and is hunting them down, taking them out, one-by-one.",
      "popularity": 9.124,
      "poster_path": "/zYAjYMFq41Cqg6vGoKWHJoZMuiw.jpg",
      "release_date": "2012-08-23",
      "title": "Comedown",
      "video": false,
      "vote_average": 4.814,
      "vote_count": 35,
      "character": "Jemma",
      "credit_id": "535cbca2c3a3682273000133",
      "order": 1
    },
    {
      "adult": false,
      "backdrop_path": "/dhr0q4eiRr8ltqPig32TwhPRdaD.jpg",
      "genre_ids": [
        27,
        53,
        9648
      ],
      "id": 17,
      "original_language": "en",
      "original_title": "The Dark",
      "overview": "In an attempt to pull her family together, Adèlle travels with her young daughter Sarah to Wales to visit her father. The morning after they arrive, Sarah mysteriously vanishes in the ocean. Not long after, a little girl bearing a striking resemblance to their missing daughter reveals that she has retuned from the dead  — and that Sarah has been taken to the Welsh underworld.",
      "popularity": 9.632,
      "poster_path": "/wZeBHVnCvaS2bwkb8jFQ0PwZwXq.jpg",
      "release_date": "2005-09-28",
      "title": "The Dark",
      "video": false,
      "vote_average": 5.773,
      "vote_count": 242,
      "character": "Sarah",
      "credit_id": "52fe420fc3a36847f8000aa3",
      "order": 5
    },
    {
      "adult": false,
      "backdrop_path": "/ahrY6isV4vfPUzpIF0CO96pjuMw.jpg",
      "genre_ids": [
        80,
        27,
        53,
        9648
      ],
      "id": 20321,
      "original_language": "en",
      "original_title": "Doctor Sleep",
      "overview": "While treating a policewoman for smoking, hypnotherapist Michael Strother has a telepathic vision of a young girl floating beneath the surface of a stream. The escaped victim of a ritualistic serial killer, the girl has become mute, and Michael is called upon by Scotland Yard to unlock the secrets she holds in order to catch a man who believes he has discovered the key to immortality.",
      "popularity": 5.844,
      "poster_path": "/eBRcmhQakzeYPU6AWLP1DtAoLtC.jpg",
      "release_date": "2002-02-01",
      "title": "Doctor Sleep",
      "video": false,
      "vote_average": 5.13,
      "vote_count": 53,
      "character": "Heather",
      "credit_id": "5554667d9251416ddb001e42",
      "order": 7
    },
    {
      "adult": false,
      "backdrop_path": "/4s0AurNfsPuC0M6RdPk12trhb6W.jpg",
      "genre_ids": [
        35,
        10749
      ],
      "id": 23049,
      "original_language": "en",
      "original_title": "My Life in Ruins",
      "overview": "A Greek tour guide named Georgia attempts to recapture her kefi (Greek for mojo) by guiding a ragtag group of tourists around Greece and showing them the beauty of her native land. Along the way, she manages to open their eyes to the wonders of an exotic foreign land while beginning to see the world through a new set of eyes in the process.",
      "popularity": 20.127,
      "poster_path": "/u9UXXbGeUlgBOvUVxASVnFdvuLD.jpg",
      "release_date": "2009-06-05",
      "title": "My Life in Ruins",
      "video": false,
      "vote_average": 6.124,
      "vote_count": 371,
      "character": "Caitlin",
      "credit_id": "52fe445cc3a368484e01e999",
      "order": 8
    },
    {
      "adult": false,
      "backdrop_path": "/3PdCHyC1WPAPhR9xaeP1IpLr2Un.jpg",
      "genre_ids": [
        18,
        10749
      ],
      "id": 17920,
      "original_language": "en",
      "original_title": "I Capture the Castle",
      "overview": "A love story set in 1930s England that follows 17-year-old Cassandra Mortmain, and the fortunes of her eccentric family, struggling to survive in a decaying English castle. Based on Dodie Smith's 1948 novel with the same name.",
      "popularity": 13.43,
      "poster_path": "/5RO42WahLGIT45sFQ1GiRpN1bJ8.jpg",
      "release_date": "2003-05-09",
      "title": "I Capture the Castle",
      "video": false,
      "vote_average": 6.76,
      "vote_count": 75,
      "character": "Cassandra (aged 7)",
      "credit_id": "56930c11c3a3684d01003712",
      "order": 9
    },
    {
      "adult": false,
      "backdrop_path": "/cTmXwkukwOgaSA6zRRe9wmMnTiQ.jpg",
      "genre_ids": [
        18,
        27,
        53
      ],
      "id": 65086,
      "original_language": "en",
      "original_title": "The Woman in Black",
      "overview": "The story follows a young lawyer, Arthur Kipps, who is ordered to travel to a remote village and sort out a recently deceased client’s papers. As he works alone in the client’s isolated house, Kipps begins to uncover tragic secrets, his unease growing when he glimpses a mysterious woman dressed only in black. Receiving only silence from the locals, Kipps is forced to uncover the true identity of the Woman in Black on his own, leading to a desperate race against time when he discovers her true identity.",
      "popularity": 18.275,
      "poster_path": "/aJbeDPUwDe9MLpseTFrNTBaQPzf.jpg",
      "release_date": "2012-02-03",
      "title": "The Woman in Black",
      "video": false,
      "vote_average": 6.124,
      "vote_count": 3264,
      "character": "Stella Kipps",
      "credit_id": "52fe46fcc3a368484e0aedf3",
      "order": 11
    }
  ],
  "crew": [],
  "id": 56
}
*/
