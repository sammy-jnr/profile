import React, { useState, useRef, useEffect } from 'react'
import "./Projects.css"
import { projects } from '../../utils/ProjectInfo'
import Swiper from './components/Swiper'
import downArrow from "../../Assets/Icons/downArrow.svg"
import arrowUp from "../../Assets/Icons/arrowUp.svg"
import githubIcon from "../../Assets/Icons/githubIcon.svg"
import webIcon from "../../Assets/Icons/webIcon.svg"

interface ProjectPropsInterface {
  setcurrentPage: React.Dispatch<React.SetStateAction<string>>
  pageRef: React.MutableRefObject<HTMLDivElement | null>
}

const Projects = (props: ProjectPropsInterface) => {

  const projectSectionRef = useRef<HTMLElement | null>(null)

  const [showImages, setshowImages] = useState([false, false, false, false, false, false,]);

  useEffect(() => {
    const projectsObserver = new IntersectionObserver(intersectionCallback, basicObserverOptions)
    if (projectSectionRef.current)
      projectsObserver.observe(projectSectionRef.current)
  }, []);

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (props.setcurrentPage)
      if (entry.isIntersecting) {
        props.setcurrentPage("projects")
      }
  }

  const basicObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  }



  const toggleImages = (index: number) => {
    setshowImages(prev => {
      const newArray = [...prev]
      newArray[index] = !newArray[index]
      return newArray
    })
  }

  if (!projects) return <></>
  return (
    <section className='projects' ref={projectSectionRef}>
      <header ref={props.pageRef}>Featured Projects</header>
      <div className="projectsInner">
        {
          projects.map((project, index) => {
            return <div className='projectItems'>
              <div className="projectItemsMainSection">
                <div className="projectItemsImgSection">
                  <img src={require(`../../Assets/Images/Thumbnails/${project.thumbnail}.png`)} alt="" />
                </div>
                <div className="projectItemsTextSection">
                  <header>{project.name}</header>
                  <p>{project.description}</p>
                  <p className='moreInfoBigScreens'>{project.extraDetails}</p>
                  <div className="projectButtons">
                    <a href={project.githubLink} target='_blank' rel='noreferrer'><img src={githubIcon} alt="" className="githubIcon hoverable" /></a>
                    <a href={project.websiteLink} target='_blank' rel='noreferrer'>
                      <button>VISIT  <img src={webIcon} alt="" className="webIcon" /></button>
                    </a>
                  </div>
                </div>
                <img src={showImages[index] ? arrowUp : downArrow} alt="" className="moreInfoIcon hoverable"
                  onClick={() => { toggleImages(index) }}
                />
              </div>
              <div className="projectImagesDiv bigScreen">
                <p className="moreInfoSmallerDevices smallScreen">{project.extraDetails}</p>
                <Swiper images={project.images} />
              </div>
              <div className='smallScreen'>
                <div className="projectImagesDiv" style={showImages[index] ? { display: "block" } : { display: "none" }}>
                  <p className="moreInfoSmallerDevices">{project.extraDetails}</p>
                  <Swiper images={project.images} />
                </div>
              </div>
            </div>
          })
        }
      </div>
    </section>
  )
}

export default Projects