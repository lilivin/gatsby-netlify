import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import '../styles/bio.css'

const Bio = () => {
  return (
    <>
        <form
            name="contact-form"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >
            <input name="name" placeholder="Your name" type="text" />
            <input name="email" placeholder="name@name.com" type="email" />
            <textarea name="message" />
            <button>Send</button>
        </form>
    </>
  )
}

export default Bio
