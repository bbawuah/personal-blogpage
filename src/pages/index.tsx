import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { SEO } from '../components/seo'
import { Blockquote } from '../components/Blockquote/Blockquote'
import { Projects } from '../components/Project/Projects'
import { Box } from '../components/ThreeJS/Box'
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

const IndexPage: React.FC<Props> = ({
  data
}) => (
  <Layout>
    <SEO title="Home" />
    <section>
      <Trail
        title={`Hi, I'm ${data.site.siteMetadata.author}.`}
      />
      <p className="description">
        {
          data.site.siteMetadata
            .description
        }
      </p>
    </section>
    <div className="canvas">
      <Box />
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
