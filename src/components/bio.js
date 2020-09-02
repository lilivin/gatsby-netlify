/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"
import '../styles/bio.css'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 150, height: 150) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div className="bio">
      <div className="imageContainer">
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          className="bio__image"
        />
      </div>
      <div>
        <h1 className="bio__header">Jestem Karol</h1>
        <p className="bio__description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at dapibus orci. Donec a ante efficitur, pulvinar nunc eget, 
          tincidunt velit. Quisque quis risus lectus. Duis nec facilisis arcu. Duis ipsum urna, pellentesque et lorem eget, 
          dignissim posuere dui. Fusce imperdiet vulputate nulla sed maximus. Donec sit amet hendrerit erat, id molestie lectus.
          Vivamus non mauris in diam consectetur elementum sed vel lacus. Duis pretium rutrum arcu et congue. Aliquam ac lorem 
          et libero ornare volutpat quis a sapien.
        </p>
      </div>
    </div>
  )
}

export default Bio
