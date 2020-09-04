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
          <form method="POST" data-netlify="true" data-netlify-honeypot="bot-field" name="contact-form" className="contactForm">
            <label className="contactForm__label">Email</label>
            <input type="text" name="name" id="name" placeholder="Name"/>
            <input type="email" name="email" id="email" placeholder="Email"/>
            <label className="contactForm__label">Wiadomość</label>
            <textarea name="message" id="message" placeholder="Message"></textarea>
            <input type="submit" value="Sned Message" className="contactForm__button"/>
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
