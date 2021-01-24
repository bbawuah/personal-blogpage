import React from 'react'
import { Blockquote } from '../components/Blockquote/Blockquote'
import { Form } from '../components/Form/Form'
import Layout from '../components/Layout'
import { SEO } from '../components/seo'

const ContactPage: React.FC = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Let's get in contact!</h1>
    <Blockquote quote={'“It goes down in the DM.”'} auth={'Yo Gotti'} />
    <Form />
  </Layout>
)

export default ContactPage
