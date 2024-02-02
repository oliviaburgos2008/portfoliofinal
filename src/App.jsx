import { useEffect, useState } from "react"
import About from "./Components/About"
import Banner from "./Components/Banner"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import Nav from "./Components/Nav"
import Projects from "./Components/Projects"
import Services from "./Components/Services"
import { ScaleLoader } from "react-spinners"
import ThemeSwitcher from "./Components/ThemeSwitcher"



function App() {

const [loading, setLoading] = useState(false)

useEffect(() => {
setLoading(true)
setTimeout(() => {
  setLoading(false)
}, 1000)
},[])


  return (
    <>

      {
        loading ?
        <div className="bg-slate-900 h-[100vh] flex justify-center items-center">
<ScaleLoader color="#d946ef" />
        </div>

        :
<div className="dark:bg-slate-900">
  
   <div className="grid grid-cols-1 grid-rows-1 gap-4 px-2 py-2">
  <button className="col-start-5">
   {/* <svg width="30" height="30" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          </svg>  */}
          <ThemeSwitcher />
  </button>
  </div> 
        
        <Nav />
        <Banner />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>

      }
    </>
  )
}

export default App
