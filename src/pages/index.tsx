import React, { useEffect, useRef } from 'react'
import loadable from '@loadable/component'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { SEO } from '../components/seo'
import { animated, config, useSpring } from 'react-spring'

const ScrollContainer = loadable(() =>
  import('../components/Page-one/ScrollContainer/ScrollContainer')
)

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

const IndexPage: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <ScrollContainer
        data={{
          role: data.site.siteMetadata.description
        }}
      />
    </Layout>
  )
}

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
