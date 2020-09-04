import addToMailchimp from "gatsby-plugin-mailchimp"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Typography } from "@material-ui/core"
import React from "react"

export default class MailChimpForm extends React.Component {
  constructor() {
    super()
    this.state = { email: "", result: null }
  }
  handleSubmit = async e => {
    e.preventDefault()
    const result = await addToMailchimp(this.state.email)
    this.setState({result: result})
  }
handleChange = event => {
    this.setState({ email: event.target.value })
  }
render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          label="Email"
          type="email"
          name="email"
          placeholder="Wpisz swój email..."
          autoComplete="email"
          onChange={this.handleChange}
        />
        <br />
        <button
          type="submit"
        >
          Zapisz się
        </button>
      </form>
    )
  }
}