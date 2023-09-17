import SideBar from "@/components/SideBar/SideBar"
import NavBar from "../components/NavBar"

// import "@/styles/globals.css"
import "@/styles/globals.css"
function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <NavBar /> */}
      <Component {...pageProps} />
      {/* <SideBar /> */}
    </div>
  )
}

export default MyApp
