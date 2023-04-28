import React, { useEffect, useRef } from 'react'
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import "./FirstPage.css"
interface HomePropsInterface {
  setcurrentPage: React.Dispatch<React.SetStateAction<string>>
  pageRef: React.MutableRefObject<HTMLDivElement | null>
  contactHeaderRef: React.MutableRefObject<HTMLDivElement | null>
}

const Firstpage = (props: HomePropsInterface) => {

  const hiRef = useRef<HTMLDivElement | null>(null)
  const welcomeRef = useRef<HTMLDivElement | null>(null)
  const typewriterRef = useRef<HTMLDivElement | null>(null)
  const extraInfoRef = useRef<HTMLDivElement | null>(null)
  const CTARef = useRef<HTMLDivElement | null>(null)

  const homeSectionRef = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    setTimeout(() => {
      if (hiRef.current)
        hiRef.current.style.opacity = "0"
    }, 2500);
    setTimeout(() => {
      if (hiRef.current)
        hiRef.current.style.display = "none"
      if (welcomeRef.current)
        welcomeRef.current.style.opacity = "1"
    }, 3000);
    // 
    setTimeout(() => {
      if (welcomeRef.current)
        welcomeRef.current.style.opacity = "0"
    }, 5500);
    setTimeout(() => {
      if (welcomeRef.current)
        welcomeRef.current.style.display = "none"
      if (typewriterRef.current)
        typewriterRef.current.style.display = "block"
    }, 6000);
    // 
    setTimeout(() => {
      if (extraInfoRef.current)
        extraInfoRef.current.style.transform = "translateY(0)"
    }, 16000);
    setTimeout(() => {
      if (CTARef.current)
        CTARef.current.style.transform = "translateY(0)"
    }, 17000);

    let elements: HTMLCollectionOf<Element> = document.getElementsByClassName("Typewriter__cursor")
    setTimeout(() => {
      (elements[0] as HTMLSpanElement).style.display = "none"
    }, 18000);
  }, []);

  const typewriterFunc = (typewriter: TypewriterClass) => {
    typewriter
      .pauseFor(6000)
      .typeString("<span> My name is <span style='font-weight: 600; ' > Umeh Wisdom </span> </span>")
      .pauseFor(1000)
      .typeString("<br />")
      .typeString("<span class='typewriterSecondLine' style='' > I am a fullstack web developer. </span>")
      .start()
  }
  // 

  useEffect(() => {
    const homeObserver = new IntersectionObserver(intersectionCallback, basicObserverOptions)
    if (homeSectionRef.current)
      homeObserver.observe(homeSectionRef.current)
  }, []);

  const basicObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  }

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting) {
      props.setcurrentPage("home")
    }
  }


  return (
    <section className='firstPage' ref={homeSectionRef}>
      <div ref={props.pageRef}
        style={{
          position: "absolute",
          top: 0
        }}
      ></div>
      <div className="firstPageInner">
        <div className="hi" ref={hiRef}>Hey there</div>
        <div className="welcomeText" ref={welcomeRef}>Welcome to my personal website</div>
        <div className='typewriterRef' ref={typewriterRef}>
          <Typewriter onInit={(typewriter) => typewriterFunc(typewriter)} />
        </div>
        <div className="extraInfo" ref={extraInfoRef}> I build awesome web applications using the latest technologies and tools. <br />

          Take a look at my projects below to see some of the amazing things I've created. <br /> If you're interested in working with me, feel free to get in touch
        </div>
        <div className="ctaDiv" ref={CTARef}>
          <button
            onClick={() => {
              props.contactHeaderRef.current?.scrollIntoView({ behavior: "smooth" })
            }}
          >Contact me</button>
        </div>

      </div>
    </section>
  )
}

export default Firstpage