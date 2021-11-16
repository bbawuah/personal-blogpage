import React from 'react'
import Img from 'gatsby-image'
import styles from './Landing.module.scss'
import { graphql, useStaticQuery } from 'gatsby'

interface Props {
  title: string
}

export const Landing: React.FC<Props> = (props) => {
  const { title } = props

  const data = useStaticQuery(graphql`
    query {
      landingImage: file(relativePath: { eq: "images/IMG_3069.png" }) {
        childImageSharp {
          fluid(maxWidth: 900) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={styles.container} data-scroll-section={true}>
      <h2 data-scroll={true} data-scroll-speed="1" className={styles.title}>
        {title}
      </h2>
      <img
        src={data.landingImage.childImageSharp.fluid.src}
        className={styles.image}
      />
    </section>
  )
}
