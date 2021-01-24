import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { SEO } from '../components/seo'
import { Blockquote } from '../components/Blockquote/Blockquote'
import { Projects } from '../components/Project/Projects'

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
  <Layout>
    <SEO title="Home" />
    <section>
      <h1>Hi, I'm {data.site.siteMetadata.author}.</h1>
      <p className="description">{data.site.siteMetadata.description}</p>
      <Blockquote
        quote={
          '“When everyone else was thinking it was time for bed, his mind was telling him it’s time to get ahead of the competition.”'
        }
        auth={'Kobe Bryant, The Mamba Mentality'}
      />
    </section>
    <div className="canvas"></div>
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
