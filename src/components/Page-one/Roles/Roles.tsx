import React from 'react'
import styles from './Roles.module.scss'

interface Props {}

export const Roles: React.FC<Props> = (props) => {
  return (
    <section className={styles.container} data-scroll-section={true}>
      <section className={styles.contentContainer}>
        <div className={styles.rolesContainer}>
          <p
            className={styles.roles}
            data-scroll={true}
            data-scroll-direction={'horizontal'}
            data-scroll-speed="1.45"
          >
            UI/UX DESIGN - DEVELOPMENT{' '}
          </p>
        </div>
        <div className={styles.rolesContainer}>
          <p
            className={styles.roles}
            data-scroll-speed="2.75"
            data-scroll={true}
            data-scroll-direction={'horizontal'}
          >
            CLEAN & MINIMALISTIC APPROACH
          </p>
        </div>

        <div className={styles.rolesContainer}>
          <p
            className={styles.roles}
            data-scroll-speed="2"
            data-scroll={true}
            data-scroll-direction={'horizontal'}
          >
            EXCEPTIONAL EXPERIENCES
          </p>
        </div>
      </section>
    </section>
  )
}
