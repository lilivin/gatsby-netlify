import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faEnvelopeOpenText} from '@fortawesome/free-solid-svg-icons'
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import '../styles/contactForm.css'

const Bio = () => {
  return (
    <>
      <h1 className="header">Kontakt</h1>
      <div className="contactContainer">  
          <form
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <label>Email</label>
            <input name="name" placeholder="Your Name" type="text" />
            <input name="email" placeholder="name@name.com" type="email" />
            <label>Wiadomosc</label>
            <textarea name="message" />
            <button name="submitButton">Send</button>
          </form>
          <div className="contactAlternatives">
            <div className="contactWay">
              <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x"/>
              <p>k.liwinski@gmail.com</p>
            </div>
            <div className="contactWay">
              <FontAwesomeIcon icon={faInstagram} size="2x"/>
              <p>@k.liwinski</p>
            </div>
            <div className="contactWay">
              <FontAwesomeIcon icon={faFacebook} size="2x"/>
              <p>@karol.liwinski.7</p>
            </div>
          </div>
      </div>
    </>
  )
}

export default Bio
