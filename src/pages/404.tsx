import React from 'react'
import { Blockquote } from '../components/Blockquote/Blockquote'
import Layout from '../components/Layout'
import { SEO } from '../components/seo'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>NOT FOUND</h2>
    <Blockquote
      quote={"There's no use running if you're on the wrong road."}
      auth={'Warren Buffett'}
    />
    <p>Go back.</p>
  </Layout>
)

export default NotFoundPage
