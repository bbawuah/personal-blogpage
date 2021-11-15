import React from 'react'
import Layout from '../components/Layout'
import { SEO } from '../components/seo'

const NotFoundPage: React.FC = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h2>NOT FOUND</h2>

    <p>Go back.</p>
  </Layout>
)

export default NotFoundPage
