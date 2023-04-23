import React, { useEffect } from 'react'
import "./Navigation.css"
interface NavProps {
  showNav: boolean,
  navRef: React.MutableRefObject<HTMLDivElement | null>
  currentPage: string,
  scrollToFunction: (section: string) => void
}

const unstableNavStyle = {
  backgroundColor: "#00059",
  backdropFilter: "blur(10px)",
  transition: "all 200ms"
}
const stableNavStyle = {
  transition: "all 400ms",
}

const Navigation = (props: NavProps) => {

  const activePageStyle ={
    color: "grey"
  }

  useEffect(() => {
    setTimeout(() => {
      if (props.navRef.current) {
        props.navRef.current.style.transform = "translateY(0px)"
      }

    }, 15000);
  }, [props.navRef.current]);

  return (
    <nav className='navbar'
    ref={props.navRef}
      style={props.showNav ? unstableNavStyle : stableNavStyle}
    >
      <ul>
        <li style={props.currentPage === "home" ? activePageStyle : {}}
        onClick={()=> {props.scrollToFunction("home")}}
        >Home</li>
        <li style={props.currentPage === "projects" ? activePageStyle : {}}
        onClick={()=> {props.scrollToFunction("projects")}}
        >Projects</li>
        <li style={props.currentPage === "about" ? activePageStyle : {}}
        onClick={()=> {props.scrollToFunction("about")}}
        >About</li>
        <li style={props.currentPage === "contact" ? activePageStyle : {}}
        onClick={()=> {props.scrollToFunction("contact")}}
        >Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation