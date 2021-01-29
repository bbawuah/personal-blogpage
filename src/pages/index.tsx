import React from 'react'
import { graphql } from 'gatsby'
import Layout, { Display } from '../components/Layout'
import { SEO } from '../components/seo'
import { Scene } from '../components/ThreeJS/Scene'
import { Trail } from '../components/Animations/Trail'

interface Props {
  data: {
    site: {
      siteMetadata: {
        description: string
        author: string
      }
    }
  }
}

const IndexPage: React.FC<Props> = ({ data }) => (
  <Layout display={Display.flex}>
    <SEO title="Home" />
    <section className="landing-hero">
      <Trail title={`Hi, I'm ${data.site.siteMetadata.author}.`} />
      <p className="description">{data.site.siteMetadata.description}</p>
    </section>
    <div className="canvas">
      <Scene />
    </div>
  </Layout>
)

export const query = graphql`
  query SiteDescriptionQuery {
    site {
      siteMetadata {
        description
        author
      }
    }
  }
`
export default IndexPage
