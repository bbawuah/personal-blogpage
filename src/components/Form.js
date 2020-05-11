import React from "react"

import FormStyles from "./Form.module.scss"

const Form = () => (
  <form method="post" netlify-honeypot="bot-field" data-netlify="true" className={FormStyles.form}>
    <label>
      Name
      <input type="text" name="name" id="name" required />
    </label>
    <label>
      Email
      <input type="email" name="email" id="email" required />
    </label>
    <label>
      Subject
      <input type="text" name="subject" id="subject" />
    </label>
    <label>
      Message
      <textarea name="message" id="message" rows="5" required />
    </label>
    <div>
      <button type="submit">Send</button>
    </div>
  </form>
)

export default Form
