import React, { useState } from 'react'
import swal from 'sweetalert'
import FormStyles from './Form.module.scss'

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

enum formDataValues {
  name = 'name',
  email = 'email',
  subject = 'subject',
  message = 'message'
}

export const Form: React.FC = () => {
  const [name, setName] = useState<string | undefined>()
  const [email, setEmail] = useState<string | undefined>()
  const [subject, setSubject] = useState<string>()
  const [message, setMessage] = useState<string>()

  const formData = {
    name,
    email,
    subject,
    message
  }

  function handleSubmit(e: any) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData })
    })
      .then(() => {
        swal(
          'Success!',
          'I would get back to you as early as possible😁',
          'success'
        )
      })
      .catch((error) => console.log(error))

    e.preventDefault()
  }

  return (
    <form
      name="contact"
      className={FormStyles.form}
      onSubmit={(e) => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
        handleSubmit(e)
        return
      }}
    >
      <label>
        Name
        <input
          type="text"
          name={formDataValues.name}
          id="name"
          required={true}
          onChange={({ target }) => setName(target.value)}
          value={name}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name={formDataValues.email}
          id="email"
          required={true}
          onChange={({ target }) => setEmail(target.value)}
          value={email}
        />
      </label>
      <label>
        Subject
        <input
          type="text"
          name={formDataValues.subject}
          id="subject"
          onChange={({ target }) => setSubject(target.value)}
          value={subject}
        />
      </label>
      <label>
        Message
        <textarea
          name={formDataValues.message}
          id="message"
          rows={5}
          required={true}
          onChange={({ target }) => setMessage(target.value)}
          value={message}
        />
      </label>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}
