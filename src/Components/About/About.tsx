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
          <h3>About Me</h3>
          <p>Hello, I'm Umeh Wisdom, a first-year Computer Science student at the University of Prince Edward Island, Canada. My journey into the world of technology is a unique one. Originally, I was pursuing mechanical engineering at the University of Nigeria. However, during a lengthy strike in 2020, coinciding with the COVID-19 pandemic, I discovered my passion for coding. It all began with web development—learning HTML, CSS, and JavaScript. I soon realized my love for coding and decided to delve deeper.</p>
          <p>After extensive research, I made the life-changing decision to switch to computer science. In 2022, I successfully applied to UPEI, where I am currently honing my skills.</p>
          <br />
          <h3>Interests Beyond Code</h3>
          <p>In my free time, I indulge in various interests. I'm an avid chess player and enjoy both playing and watching chess streams. Additionally, I have a knack for table tennis, find solace in reading manga, and occasionally delve into the world of anime. When I'm not immersed in these activities, I'm keeping a close eye on the ever-evolving tech landscape. Discovering and dissecting new technologies, like the fascinating Bun v1.0, is something I find immensely engaging. What drew me into computer science was the incredible power it grants to bring imagination to life with minimal cost—time being the primary investment.</p>
          <br />
          <h3>Continuous learning and projects</h3>
          <p>In my coding journey, I make it a point to embrace new challenges. With each project, I strive to incorporate a fresh piece of technology, be it a library or framework, to broaden my skill set. While I've witnessed significant improvement, I also recognize that the more I learn, the more I discover how vast the world of technology truly is. The learning process, although at times frustrating, remains an enjoyable adventure.</p>
          <br />
          <h3>Notable Projects</h3>
          <p>A few projects have stood out in my journey. "Rock, Paper, Scissors" was a milestone as it introduced me to web sockets, shedding light on the mechanics behind the connections we often take for granted. "Matched" was another favorite, combining practicality and excitement.</p>
          <br />
          <h3>Teamwork and Future Goals</h3>
          <p>While most of my work has been individual projects, I eagerly anticipate expanding my experience by collaborating with others on larger-scale initiatives during my time at UPEI. My ultimate goal is to master the complexities of computer science, and I find great joy in the realm of mathematics.</p>
          <br />
          <h3>Gratitude and Contact</h3>
          <p>Thank you for taking the time to get to know me. If you'd like to connect or have any questions, please reach out through the contact information provided at the bottom of this page.</p>
          <br />
          <p>Don't forget to explore my projects, including "Guess the," a trivia game you'll surely enjoy.</p>
          <br />
          <br />
        </div>
      </div>

    </section>
  )
}

export default About