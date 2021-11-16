import React, { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import styles from './ScrollContainer.module.scss'
import { Landing } from '../Landing/Landing'
import { Roles } from '../Roles/Roles'
import { Projects } from '../Projects/Projects'

const ScrollContainer: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (scrollRef) {
      const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
      })
    }
  })

  return (
    <div
      data-scroll-container={true}
      ref={scrollRef}
      className={styles.container}
    >
      <Landing title={'Creative Engineer'} />
      <Roles />
      <Projects />
    </div>
  )
}

export default ScrollContainer
