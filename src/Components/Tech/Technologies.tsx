import React, { useEffect, useRef, useState } from 'react'
import "./Tech.css"
import jsLogo from "../../Assets/Images/jsLogo.png"
import tsLogo from "../../Assets/Images/tsLogo.png"
import htmlLogo from "../../Assets/Images/htmlLogo.webp"
import expressLogo from "../../Assets/Images/expressLogo.webp"
import reduxLogo from "../../Assets/Images/reduxLogo.webp"
import reactLogo from "../../Assets/Images/reactLogo.webp"
import cssLogo from "../../Assets/Images/cssLogo.webp"
import NodeLogo from "../../Assets/Images/NodeLogo.webp"
import mongoDbLogo from "../../Assets/Images/mongoDbLogo.webp"
import sassLogo from "../../Assets/Images/sassLogo.webp"
import firebaseLogo from "../../Assets/Images/firebaseLogo.webp"


interface Props {
  // techRef: React.MutableRefObject<HTMLElement | null>
}
const Technologies = (props: Props) => {

  const techRef = useRef<HTMLDivElement | null>(null)

  const [inView, setinView] = useState<boolean>(true);

  // useEffect(() => {
  //   if (!techRef.current) return
  //   const ref = techRef.current
  //   const observer = new IntersectionObserver(intersectionCallback, basicObserverOptions)
  //   observer.observe(ref)

  //   return () => {
  //     observer.unobserve(ref)
  //   }
  // }, []);

  // const basicObserverOptions = {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.2
  // }

  // const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
  //   const [entry] = entries
  //   setinView(entry.isIntersecting)
  // }

  const inViewStyle = {
    transform: "translateX(0)"
  }

  const outOfViewStyle = {
    transform: "translateX(-100vw)"
  }

  return (
    <section className='technologies'>
      <div className="technologiesInner" ref={techRef}>
        <header>My Tech Stack</header>
        <div className="techItemsContainer">
          <div className="techItems techitem1"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={htmlLogo} alt="" className="techImgs" />
            <p className="technames">HTML</p>
          </div>
          <div className="techItems techitem2"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={cssLogo} alt="" className="techImgs" />
            <p className="technames">CSS</p>
          </div>
          <div className="techItems techitem3"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={jsLogo} alt="" className="techImgs" />
            <p className="technames">JavaScript</p>
          </div>
          <div className="techItems techitem4"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={reactLogo} alt="" className="techImgs" />
            <p className="technames">React</p>
          </div>
          <div className="techItems techitem5"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={reduxLogo} alt="" className="techImgs" />
            <p className="technames">Redux</p>
          </div>
          <div className="techItems techitem6"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={tsLogo} alt="" className="techImgs" />
            <p className="technames">TypeScript</p>
          </div>
          <div className="techItems techitem7"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={firebaseLogo} alt="" className="techImgs" />
            <p className="technames">Firebase</p>
          </div>
          <div className="techItems techitem8"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={sassLogo} alt="" className="techImgs" />
            <p className="technames">Sass</p>
          </div>
          <div className="techItems techitem9"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={NodeLogo} alt="" className="techImgs" />
            <p className="technames">Node Js</p>
          </div>
          <div className="techItems techitem10"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={expressLogo} alt="" className="techImgs" />
            <p className="technames">Express Js</p>
          </div>
          <div className="techItems techitem11"
            style={inView ? inViewStyle : outOfViewStyle}
          >
            <img src={mongoDbLogo} alt="" className="techImgs" />
            <p className="technames">MongoDB</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Technologies