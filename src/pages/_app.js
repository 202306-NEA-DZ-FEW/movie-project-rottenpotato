import SideBar from "@/components/SideBar/SideBar"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import "@/styles/globals.css"
// import url'https://fonts.googleapis.com/css2?family=Amiri&family=Caprasimo&family=Jomhuria&family=Open+Sans:wght@300&display=swap';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavBar />
      <Component {...pageProps} />
      <SideBar />
      <Footer />
    </div>
  )
}

export default MyApp
