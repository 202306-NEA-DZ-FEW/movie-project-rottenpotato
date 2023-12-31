import axios from "axios"
export default async function fetcher(url) {
  const base = "https://api.themoviedb.org/3/"
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTUxNzZlZjFkOGQzYjY0N2RlY2ZhZTYxNjQ0NDU4MiIsInN1YiI6IjY1MDFkOWM1ZTBjYTdmMDBhZTNmZGFjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gi_Xlm_QchtOwRt_vMc-FtDEE8x2fOtsh_vmbdBPkgw",
    },
  }
  try {
    const res = await axios.get(base + url, options)
    return res.data
  } catch (err) {
    console.log(err)
    return null
  }

  // const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTUxNzZlZjFkOGQzYjY0N2RlY2ZhZTYxNjQ0NDU4MiIsInN1YiI6IjY1MDFkOWM1ZTBjYTdmMDBhZTNmZGFjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gi_Xlm_QchtOwRt_vMc-FtDEE8x2fOtsh_vmbdBPkgw'
  //   }
  // };
  // const res = await axios(url, options)
  // // const json = await res.json()
  // return res.data
}

export const fetchMovieGenres = async () => {
  const data = await fetcher("genre/movie/list?language=en")
  return data
}
export const fetchTvGenres = async () => {
  const data = await fetcher("genre/tv/list?language=en")
  return data
}
