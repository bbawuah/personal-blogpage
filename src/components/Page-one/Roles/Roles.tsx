import React from 'react'
import styles from './Roles.module.scss'

interface Props {}

export const Roles: React.FC<Props> = (props) => {
  return (
    <section className={styles.container} data-scroll-section={true}>
      <section className={styles.contentContainer}>
        <p className={styles.roles}>Some Text</p>
        <p className={styles.roles}>Some Text</p>
        <p className={styles.roles}>Some Text</p>
      </section>
    </section>
  )
}
