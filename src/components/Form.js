import React from "react"
import swal from 'sweetalert';
import FormStyles from "./Form.module.scss"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleSubmit = e => {
    console.log(e.target)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => {
        this.setState({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        swal("Success!", "I would get back to you as early as possible😁", "success")
        console.log("email is send!")
      })
      .catch(error => console.log(error))

    e.preventDefault()
  }

  render() {
    return (
      <form
        name="contact"
        className={FormStyles.form}
        onSubmit={this.handleSubmit}
      >
        <label>
          Name
          <input
            type="text"
            name="name"
            id="name"
            required
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            id="email"
            required
            onChange={this.handleInputChange}
            value={this.state.email}
          />
        </label>
        <label>
          Subject
          <input
            type="text"
            name="subject"
            id="subject"
            onChange={this.handleInputChange}
            value={this.state.subject}
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            id="message"
            rows="5"
            required
            onChange={this.handleInputChange}
            value={this.state.message}
          />
        </label>
        <div>
          <button type="submit">Send</button>
        </div>
      </form>
    )
  }
}

export default Form
