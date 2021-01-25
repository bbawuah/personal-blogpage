import React from 'react'
import { Trail } from '../components/Animations/Trail'
import { Blockquote } from '../components/Blockquote/Blockquote'
import Layout from '../components/Layout'
import { SEO } from '../components/seo'

const Projects: React.FC = () => (
  <Layout>
    <SEO title="Projects" />
    <section>
      <Trail title={`Projects`} />
      <p className="description">
        Check out what I’ve been working
        on
      </p>
    </section>
  </Layout>
)

export default Projects
