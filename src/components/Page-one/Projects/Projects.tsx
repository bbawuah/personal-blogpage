import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styles from './Projects.module.scss'

interface Props {}

export const Projects: React.FC<Props> = (props) => {
  return (
    <section className={styles.container} data-scroll-section={true}>
      <section className={styles.contentContainer}>
        <h2>Projects</h2>
        <section className={styles.projects}>
          <h3>The Next Gallery</h3>
          <a href="https://www.thenext.gallery/" target="_blank">
            <img className={styles.image} src={'/images/render7.png'} />
          </a>
        </section>
      </section>
    </section>
  )
}
