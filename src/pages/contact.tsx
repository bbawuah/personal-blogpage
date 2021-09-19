import React from 'react'
import { Blockquote } from '../components/Blockquote/Blockquote'
import { Form } from '../components/Form/Form'
import Layout from '../components/Layout'
import { SEO } from '../components/seo'

const ContactPage: React.FC = () => (
  <Layout>
    <SEO title="Contact" />
    <h2>Let's get in contact!</h2>
    <Blockquote quote={'“It goes down in the DM.”'} auth={'Yo Gotti'} />
    <section className="blog-content-container">
      <Form />
    </section>
  </Layout>
)

export default ContactPage
