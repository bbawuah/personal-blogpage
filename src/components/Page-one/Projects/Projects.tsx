import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styles from './Projects.module.scss'

interface Props {}

export const Projects: React.FC<Props> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      project: file(relativePath: { eq: "images/render7.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={styles.container} data-scroll-section={true}>
      <section className={styles.contentContainer}>
        <h2>Projects</h2>
        <section className={styles.projects}>
          <h3>The Next Gallery</h3>
          <a href="https://www.thenext.gallery/" target="_blank">
            <img
              className={styles.image}
              src={data.project.childImageSharp.fluid.src}
            />
          </a>
        </section>
      </section>
    </section>
  )
}
