import SideBar from "@/components/SideBar/SideBar"
import NavBar from "../components/NavBar"
import { ThemeProvider } from "next-themes"

// import "@/styles/globals.css"
import "@/styles/globals.css"
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="bg-white dark:bg-black text-black dark:text-white">
        <NavBar />
        <Component {...pageProps} />
        <SideBar />
      </div>
    </ThemeProvider>
  )
}

export default MyApp
