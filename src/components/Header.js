import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImage: file(relativePath: { eq: "images/portrait-brian-bawuah.jpg" }) {
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
        marginBottom: `1.45rem`,
      }}
    >
      <Link to="/">
        <Img
          style={{ width: 150, borderRadius: "50%", margin: "1rem" }}
          fluid={data.headerImage.childImageSharp.fluid}
        />
      </Link>

      <nav>
        <ul>
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
