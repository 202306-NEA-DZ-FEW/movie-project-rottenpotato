import SideBar from "@/components/SideBar/SideBar"
import NavBar from "../components/NavBar"
import { useRouter } from "next/router"
import { ThemeProvider } from "next-themes"
import Footer from "../components/Footer"
import "@/styles/globals.css"
// import url'https://fonts.googleapis.com/css2?family=Amiri&family=Caprasimo&family=Jomhuria&family=Open+Sans:wght@300&display=swap';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log("Router", router)
  const fullSideBar = router.pathname === "/"
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className=" h-fit bg-white dark:bg-black text-black dark:text-white">
        <NavBar />
        <div className=" flex flex-row-reverse justify-between bg-black">
          <div className="w-full ml-12">
            <Component {...pageProps} />
          </div>

          <SideBar fullSideBar={fullSideBar} />
          {/* <Footer /> */}
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
