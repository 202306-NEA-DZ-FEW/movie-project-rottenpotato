import SideBar from "@/components/SideBar/SideBar"
import NavBar from "../components/NavBar"
import { useRouter } from "next/router"
import { ThemeProvider } from "next-themes"
import React, { useEffect } from "react"
import DarkModeToggle from "@/components/DarkModeToggle"

// import "@/styles/globals.css"
import "@/styles/globals.css"
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  console.log("Router", router)
  const fullSideBar = router.pathname === "/"

  useEffect(() => {
    // Access localStorage only on the client side
    const isDarkMode = localStorage.getItem("darkMode") === "true"
    document.documentElement.classList.toggle("dark", isDarkMode)
  }, [])
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className=" h-fit bg-DarkWhite dark:bg-black text-black dark:text-white">
        <NavBar />
        <div className=" flex flex-row-reverse justify-between bg-DarkWhite dark:bg-black">
          <div className="w-full ml-12">
            <Component {...pageProps} />
          </div>
          <div className=" h-fit bg-DarkWhite dark:bg-black text-black dark:text-white">
            <SideBar fullSideBar={fullSideBar} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
