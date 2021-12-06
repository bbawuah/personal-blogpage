import React from 'react'
import styles from './Landing.module.scss'

interface Props {
  title: string
}

export const Landing: React.FC<Props> = (props) => {
  const { title } = props
  const date = new Date()

  return (
    <section className={styles.container} data-scroll-section={true}>
      <h2 data-scroll={true} data-scroll-speed="1" className={styles.title}>
        {title}
      </h2>
      <img src={'images/IMG_3069.png'} className={styles.image} />
      <p className={styles.location}>NL, AMSTERDAM</p>
    </section>
  )
}
