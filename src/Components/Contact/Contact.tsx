import React, { useRef, useEffect, useState } from 'react'
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

  const [showEmailError, setshowEmailError] = useState<boolean>(false);
  const [showMessageSent, setshowMessageSent] = useState<boolean>(false);
  const [showSubmitError, setshowSubmitError] = useState(false);


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

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!nameRef.current?.value || !emailRef.current?.value || !messageRef.current?.value) {
      setshowEmailError(true);
      return;
    }
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mwkjargp", {
      method: "POST",
      body: data,
      headers: {
        "Accept": "application/json",
      },
    })
      .then(() => {
        setshowMessageSent(true)
        setTimeout(() => {
          setshowMessageSent(false)
        }, 5000);
        if (!nameRef.current?.value || !emailRef.current?.value || !messageRef.current?.value) return
        nameRef.current.value = ""
        emailRef.current.value = ""
        messageRef.current.value = ""
      })
      .catch(() => {
        setshowSubmitError(true)
      })

  }

  return (
    <section className='contactPage' ref={contactSectionRef}>
      <header ref={props.pageRef}>Get In Touch</header>
      <div className="contactPageInner">
        <div className="contactFormOuter">
          <form action="" onSubmit={submit}>
            <div className="contactForm">
              {showMessageSent ? <p className='emailSubmittedText'>Message sent!</p> : null}
              <div className="contactFormInner">
                <input type="text" name='name' className='contactFormInputs' placeholder='Name' ref={nameRef} onFocus={() => setshowEmailError(false)} />
                <input type="text" name='email' className='contactFormInputs' placeholder='Email' ref={emailRef} onFocus={() => setshowEmailError(false)} />
                <textarea name="message" id="contactFormTextarea" placeholder='Message...' ref={messageRef} onFocus={() => setshowEmailError(false)}></textarea>
                <button type='submit'>Send message</button>
                {showEmailError ? <p className='emailError'>Some fields are empty</p> : null}
                {showSubmitError ? <p className='emailError'>An unknown error occurred</p> : null}
              </div>
            </div>
          </form>
        </div>

        <div className="contactInfo">
          <div>
            <div className="contactInfoItems">
              <p>Email</p> <span>umehwisdom9@gmail.com</span>
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