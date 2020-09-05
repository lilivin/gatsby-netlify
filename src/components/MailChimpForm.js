import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import React from "react"
import '../styles/MailChimpForm.css'

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
    document.getElementById('email').value = "";
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }
render() {
    return (
      <>
        <h1 className="newsletterHeader">Newsletter</h1>
        <div className="newsletterContainer">
          <div className="newsletterInfo">
            <h3 className="newsletterInfo__header">Zapisz sie!</h3>
            <p className="newsletterInfo__description">
              Chce aby moi czytelnicy nie przegapili żadnego nowego artykułu i zawsze byli jako
              pierwsi poinformowaniu o moich nowych ruchach. Dlatego zapraszam Cię do zapisania się do newsletter'a.
            </p>
          </div>
          <form className="newsletterForm" onSubmit={this.handleSubmit}>
            <input
              label="Email"
              type="email"
              name="email"
              id="email"
              placeholder="Wpisz swój email..."
              autoComplete="email"
              onChange={this.handleChange}
              className="newsletterForm__input"
            />
            <br />
            <button
              className="newsletterForm__button"
              type="submit"
            >
              Zapisz się
            </button>
          </form>
        </div>
      </>
    )
  }
}