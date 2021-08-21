import React from 'react'
import loadable from '@loadable/component'
import { graphql } from 'gatsby'
import Layout, { Display } from '../components/Layout'
import { SEO } from '../components/seo'
import 'normalize.css'
import { Scene } from '../components/ThreeJS/Scene'
import { animated, config, useSpring } from 'react-spring'
import { Title } from '../components/Core/Typography/Title/Title'
import { TextContainer } from '../components/Domain/Landing/TextContainer/TextContainer'
import Center from '../components/Core/Center/Center'

const Trail = loadable(() => import('../components/Animations/Trail'))
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
    <Layout display={Display.flex}>
      <SEO title="Home" />

      <Center grow={true}>
        <TextContainer title={'Brian Bawuah'} />
      </Center>
      <div className="canvas">{/* <Scene /> */}</div>
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
