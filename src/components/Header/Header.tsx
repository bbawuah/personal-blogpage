import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql, Link } from 'gatsby'

interface Props {
  siteTitle: string
}

export const Header: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(
        relativePath: { eq: "images/portrait-brian-bawuah.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <header
      style={{
        marginBottom: `1.45rem`
      }}
    >
      <Link to="/">
        <Img
          style={{ width: 50, borderRadius: '50%', margin: '1rem' }}
          fluid={data.headerImage.childImageSharp.fluid}
        />
      </Link>

      <nav>
        <ul>
          <Link to="/blog">
            <li>Projects</li>
          </Link>
          <Link to="/blog">
            <li>Blog</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
