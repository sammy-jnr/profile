import React, { useRef, useEffect } from 'react'
import "./Contact.css"
import lensterLogo from "../../Assets/Icons/lensterLogo.svg"
import gmailIcon from "../../Assets/Icons/gmailIcon.png"
import githubIconWhite from "../../Assets/Icons/githubIconWhite.svg"
interface ContactPropsInterface {
  setcurrentPage: React.Dispatch<React.SetStateAction<string>>
  pageRef: React.MutableRefObject<HTMLDivElement | null>

}
const Contact = (props: ContactPropsInterface) => {
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const messageRef = useRef<HTMLTextAreaElement | null>(null)
  const contactSectionRef = useRef<HTMLElement | null>(null)


  useEffect(() => {
    const contactObserver = new IntersectionObserver(intersectionCallback, basicObserverOptions)
    if (contactSectionRef.current)
      contactObserver.observe(contactSectionRef.current)
  }, []);

  const intersectionCallback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (props.setcurrentPage)
      if (entry.isIntersecting) {
        props.setcurrentPage("contact")
      }
  }

  const basicObserverOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.8
  }
  return (
    <section className='contactPage' ref={contactSectionRef}>
      <header ref={props.pageRef}>Get In Touch</header>
      <div className="contactPageInner">
        <div className="contactFormOuter">
          <div className="contactForm">
            <div className="contactFormInner">
              <input type="text" name='name' className='contactFormInputs' placeholder='Name' ref={nameRef} />
              <input type="text" name='email' className='contactFormInputs' placeholder='Email' ref={emailRef} />
              <textarea name="" id="contactFormTextarea" placeholder='Message...' ref={messageRef}></textarea>
              <button>Send message</button>
            </div>
          </div>
        </div>

        <div className="contactInfo">
          <div>
            <div className="contactInfoItems">
              <p>Email</p> <span>specialsammy12@gmail.com</span>
            </div>
            <div className="contactInfoItems">
              <p>Tel</p> <span>+2348080382240</span>
            </div>
            <div className="contactInfoItems">
              <p>Lenster</p> <span>webtoast.lens</span>
            </div>
            <div className="contactInfoLogos">
              <a href="https://lenster.xyz/u/webtoast.lens" className='hoverable' target='_blank' rel='noreferrer'>
                <img src={lensterLogo} alt="" />
              </a>
              <img src={gmailIcon} alt="" className='hoverable'
                onClick={() => { window.location.href = "mailto:specialsammy12@gmail.com" }}
              />
              <a href="https://github.com/sammy-jnr" className='hoverable' target='_blank' rel='noreferrer'>
                <img src={githubIconWhite} alt="" />
              </a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact