import React from 'react'
import { Form } from '../components/Form/Form'
import Layout from '../components/Layout'
import { SEO } from '../components/seo'

const ContactPage: React.FC = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Let's get in contact!</h2>
    <section className="blog-content-container">
      <Form />
    </section>
  </Layout>
)

export default ContactPage
