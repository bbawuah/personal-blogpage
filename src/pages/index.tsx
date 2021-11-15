import React, { useEffect, useRef } from 'react'
import loadable from '@loadable/component'
import { graphql } from 'gatsby'
import Layout, { Display } from '../components/Layout'
import { SEO } from '../components/seo'
import { Scene } from '../components/ThreeJS/Scene'
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
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const props = useSpring({
    config: config.stiff,
    delay: 750,
    from: {
      opacity: 0,
      transform: 'translateY(50px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  })

  return (
    <Layout>
      <SEO title="Home" />
      <ScrollContainer />
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
