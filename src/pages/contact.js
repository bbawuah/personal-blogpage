import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Form from "../components/Form";

import Blockquote from "../components/Blockquote"


const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Let's get in contact!</h1>
    <Blockquote
      quote={
        "“It goes down in the DM.”"
      }
      auth={"Yo Gotti"}
    />

    <Form/>
  </Layout>
)

export default ContactPage
