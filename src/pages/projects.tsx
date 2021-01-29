import React from 'react'
import Layout, { Display } from '../components/Layout'
import loadable from '@loadable/component'
const PostListItem = loadable(() =>
  import('../components/PostListItem/PostListItem')
)
import { SEO } from '../components/seo'

const Projects: React.FC = () => (
  <Layout display={Display.column}>
    <SEO title="Projects" />
    <section>
      <h2>Projects</h2>
      <p className="description">Some of the projects I’ve been working on</p>
      <div className="test">
        <PostListItem />
      </div>
    </section>
  </Layout>
)

export default Projects
