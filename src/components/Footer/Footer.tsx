import React from 'react'
import styles from './Footer.module.scss'

interface Props {}

export const Footer: React.FC<Props> = (props) => {
  return (
    <footer className={styles.container} data-scroll-section={true}>
      <ul>
        <li>LINKEDIN</li>
        <li>INSTAGRAM</li>
        <li>GITHUB</li>
        <li>TWITTER</li>
      </ul>

      <p>Contact me</p>
    </footer>
  )
}
