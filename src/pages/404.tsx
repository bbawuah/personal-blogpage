import React from 'react'
import { Blockquote } from '../components/Blockquote'
import Layout from '../components/Layout'
import { SEO } from '../components/seo'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <Blockquote
      quote={"There's no use running if you're on the wrong road."}
      auth={'Warren Buffett'}
    />
    <p>Go back.</p>
  </Layout>
)

export default NotFoundPage
