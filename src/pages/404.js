import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/seo"

import Blockquote from "../components/Blockquote";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Blockquote
    quote={'Hier komt een hele inspirerende quote'}
    auth={'Hier komt de naam van de auteur'}
    />
  </Layout>
)

export default NotFoundPage
