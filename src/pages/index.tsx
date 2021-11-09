import React from 'react'
import loadable from '@loadable/component'
import { graphql } from 'gatsby'
import Layout, { Display } from '../components/Layout'
import { SEO } from '../components/seo'
import { Scene } from '../components/ThreeJS/Scene'
import { animated, config, useSpring } from 'react-spring'
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
    <Layout display={Display.flex} justifyContent={'spaceBetween'}>
      <SEO title="Home" />
      <section className="landing-hero">
        <Trail title={`Hi, I'm ${data.site.siteMetadata.author}`} />

        <animated.div style={props as any}>
          <p className="description">{data.site.siteMetadata.description}</p>
        </animated.div>
      </section>
      {/* <div className="canvas">
        <Scene />
      </div> */}
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
