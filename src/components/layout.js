import React from "react"
import { Link } from "gatsby"
import '../styles/layout.css'
import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1>
        <Link className="mainSite__header-link" to={`/`}>
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h1>
        <Link className="mainSite__header-link" to={`/`}>
          {title}
        </Link>
      </h1>
    )
  }
  return (
    <div className="mainSite">
      <header className="mainSite__header">{header}</header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
