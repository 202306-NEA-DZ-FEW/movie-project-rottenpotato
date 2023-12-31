import SideBar from "@/components/SideBar/SideBar"
import NavBar from "../components/NavBar/NavBar"
import { useRouter } from "next/router"
import { ThemeProvider } from "next-themes"
import React, { useEffect } from "react"
import Head from "next/head"
import Footer from "../components/Footer/Footer"
import "@/styles/globals.css"
import DarkModeToggle from "@/components/DarkMode/DarkModeToggle"
import MobileNavBar from "@/components/NavBar/MobileNavBar"
import DarkModeToggleMobile from "@/components/DarkMode/DarkModeToggleMobile"
// import url'https://fonts.googleapis.com/css2?family=Amiri&family=Caprasimo&family=Jomhuria&family=Open+Sans:wght@300&display=swap';

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
        <Head>
          <title>Rotten Potato</title>
        </Head>
        <NavBar />
        <MobileNavBar />
        <DarkModeToggleMobile />
        <div className=" flex flex-row-reverse justify-end bg-DarkWhite dark:bg-black">
          <div className="w-3/4 grow ">
            <Component {...pageProps} />
          </div>
          <div className=" h-auto rounded-l bg-DarkWhite dark:bg-black text-black dark:text-white pt-8">
            <SideBar fullSideBar={fullSideBar} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
