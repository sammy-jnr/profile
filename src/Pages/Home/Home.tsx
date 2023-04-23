import React, { useEffect, useRef, useState } from 'react'
import "./Home.css"
import Firstpage from '../../Components/FirstPage/Firstpage'
import Navigation from '../../Components/Navigation/Navigation'
import Technologies from '../../Components/Tech/Technologies'
import Projects from '../../Components/Projects/Projects'
import Contact from '../../Components/Contact/Contact'
import About from '../../Components/About/About'
import wave1 from "../Assets/Images/wave1.svg"

const Home = () => {

  const navRef = useRef<HTMLDivElement | null>(null)

  const homeHeaderRef = useRef<HTMLDivElement | null>(null)
  const projectHeaderRef = useRef<HTMLDivElement | null>(null)
  const aboutHeaderRef = useRef<HTMLDivElement | null>(null)
  const contactHeaderRef = useRef<HTMLDivElement | null>(null)


  const [showNav, setshowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollToTop = document.documentElement.scrollTop
      if (scrollToTop <= 5) {
        setshowNav(false)
      } else {
        setshowNav(true)
      }
    })
  }, []);

  const [currentPage, setcurrentPage] = useState("home");


  const scrollToFunction = (section: string) => {
    if (section === "home") {
      homeHeaderRef.current!.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (section === "projects") {
      projectHeaderRef.current!.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (section === "about") {
      aboutHeaderRef.current!.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else if (section === "contact") {
      contactHeaderRef.current!.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else { return }
  }

  return (
    <div className='homeContainer'>
      <Navigation showNav={showNav} navRef={navRef} currentPage={currentPage} scrollToFunction={scrollToFunction} />
      <Firstpage setcurrentPage={setcurrentPage} pageRef={homeHeaderRef} />
      <Technologies />
      <Projects setcurrentPage={setcurrentPage} pageRef={projectHeaderRef} />
      <div id="wave1Container">

      </div>
      {/* <img src={wave1} alt="" id='wave1'/> */}
      <About setcurrentPage={setcurrentPage} pageRef={aboutHeaderRef} />
      <Contact setcurrentPage={setcurrentPage} pageRef={contactHeaderRef} />
    </div>
  )
}

export default Home