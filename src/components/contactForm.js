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
          <form name="contact-form" method="POST" data-netlify="true">
            <p>
              <label>Your Name: <input type="text" name="name" /></label>   
            </p>
            <p>
              <label>Your Email: <input type="email" name="email" /></label>
            </p>
            <p>
              <label>Your Role: <select name="role[]" multiple>
                <option value="leader">Leader</option>
                <option value="follower">Follower</option>
              </select></label>
            </p>
            <p>
              <label>Message: <textarea name="message"></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
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
