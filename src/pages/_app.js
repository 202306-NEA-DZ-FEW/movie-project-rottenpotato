import SideBar from "@/components/SideBar/SideBar"
import NavBar from "../components/NavBar"
import { useRouter } from "next/router"

// import "@/styles/globals.css"
import "@/styles/globals.css"
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log("Router", router)
  const fullSideBar = router.pathname === "/"
  return (
    <div className="bg-black h-fit text-white">
      <NavBar />
      <div className=" flex flex-row-reverse justify-between bg-black">
        <div className="w-full ml-12">
          <Component {...pageProps} />
        </div>

        <SideBar fullSideBar={fullSideBar} />
      </div>
    </div>
  )
}

export default MyApp
