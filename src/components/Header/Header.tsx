import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styles from './Header.module.scss'
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
    <header className={styles.container}>
      <Link to="/">
        <h1>Brian Bawuah</h1>
      </Link>

      <p className={styles.timep}>23:55PM, NL AMSTERDAM</p>

      <nav>
        <ul>
          <Link to="/projects">
            <li>Progress</li>
          </Link>
          {/* <Link to="/blog">
            <li>Blog</li>
          </Link> */}
          {/* <Link to="/contact">
            <li>Contact</li>
          </Link> */}
        </ul>
      </nav>
    </header>
  )
}
