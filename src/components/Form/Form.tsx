import React, { useState } from 'react'
import swal from 'sweetalert'
import FormStyles from './Form.module.scss'

const encode = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export const Form: React.FC = () => {
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [subject, setSubject] = useState<string>()
  const [message, setMessage] = useState<string>()

  const formData = {
    name,
    email,
    subject,
    message
  }

  function handleInputChange(event: any) {
    const target = event.name
    const value = target.value

    switch (target) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      case 'subject':
        setSubject(value)
        break
      case 'message':
        setMessage(value)
        break
    }
  }

  function handleSubmit(e: any) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData })
    })
      .then(() => {
        setName('')
        setEmail('')
        setSubject('')
        setMessage('')

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
    <form name="contact" className={FormStyles.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          id="name"
          required={true}
          onChange={handleInputChange}
          value={name}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          id="email"
          required={true}
          onChange={handleInputChange}
          value={email}
        />
      </label>
      <label>
        Subject
        <input
          type="text"
          name="subject"
          id="subject"
          onChange={handleInputChange}
          value={subject}
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          id="message"
          rows={5}
          required={true}
          onChange={handleInputChange}
          value={message}
        />
      </label>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  )
}
