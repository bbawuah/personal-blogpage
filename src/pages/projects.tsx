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
      <h2>Learning goals</h2>
      <p className="description">
        My end goal for this semester is to create XR experiences on the web
        using WebGL. Although we are not using Webgl in this minor, there are
        still alot of things that overlap.
      </p>
      <ul>
        <li>
          By the end of this semester I want to able to create beautifull and
          optimized 3D models that I can use on the web.
        </li>
        <li>
          By the end of this semester I want to be able to create complex
          shaders that I can use on the web.
        </li>
        <li>
          By the end of this semester I want to be able to create human centered
          XR products.
        </li>
      </ul>
      <h2>Projects</h2>
      <p className="description">
        Here you can find a list of projects that I have worked on.
      </p>
      <div className="test">
        <PostListItem />
      </div>
    </section>
  </Layout>
)

export default Projects
