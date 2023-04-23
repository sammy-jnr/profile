import React, { useRef, useEffect, useState } from 'react'
import "./About.css"
import profileImg from "../../Assets/Images/profileImg.png"

interface AboutPropsInterface {
  setcurrentPage: React.Dispatch<React.SetStateAction<string>>
  pageRef: React.MutableRefObject<HTMLDivElement | null>
}

const About = (props: AboutPropsInterface) => {
  const aboutSectionRef = useRef<HTMLElement | null>(null)


  useEffect(() => {
    const aboutObserver = new IntersectionObserver(intersectionCallback, basicObserverOptions)
    if (aboutSectionRef.current)
      aboutObserver.observe(aboutSectionRef.current)
  }, []);

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (props.setcurrentPage)
      if (entry.isIntersecting) {
        props.setcurrentPage("about")
      }
  }

  const basicObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5
  }
  return (
    <section className='about' ref={aboutSectionRef}>
      <div ref={props.pageRef} className='aboutScrollTo'></div>
      <header >Behind the code</header>
      <div className='aboutInner'>
        <div className="aboutImg">
          <img src={profileImg} alt="" className='profileImg' />
        </div>
        <div className="aboutText">
          <p>
            Hi, I am Umeh Wisdom, a self-taught full-stack web developer based in Nigeria, currently moving to canada to study Computer Science. <br /> I started coding in 2020 during the COVID-19 pandemic and quickly fell in love with the process of creating websites and web applications. Since then, I have been passionate about improving my skills and knowledge in the field.
          </p>
          <br />
          <p>Over time, I have found a deep passion for web development and the limitless possibilities it presents. Beyond coding, I enjoy a variety of activities that challenge my mind, including gaming, puzzles, and chess. In fact, my Elo rating of 1650 on chess.com places me in the top 2% of players on the platform. As a web3 and crypto enthusiast, I am constantly researching new projects and ideas in the crypto space, as well as staying up-to-date with the latest technological developments such as Artificial Intelligence. <br /> Above all, I value meaningful conversations with new people, learning from them and exchanging ideas in a collaborative manner.</p>
          <br />
          <p>
            As a developer, I am a great communicator and team player. I believe in the power of collaboration and am always open to feedback and constructive criticism. I am also highly motivated and committed to delivering quality work on time. With my skills and interests, I believe I would be a great fit for any team looking to build innovative solutions in the web development and tech space.
          </p>
        </div>
      </div>

    </section>
  )
}

export default About