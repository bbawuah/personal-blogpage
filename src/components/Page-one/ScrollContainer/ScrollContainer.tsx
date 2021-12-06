import React, { useEffect, useRef } from 'react'
import LocomotiveScroll from 'locomotive-scroll'
import styles from './ScrollContainer.module.scss'
import { Landing } from '../Landing/Landing'
import { Roles } from '../Roles/Roles'
import { Projects } from '../Projects/Projects'
import { Footer } from '../../Footer/Footer'

interface Props {
  data: {
    role: string
  }
}

const ScrollContainer: React.FC<Props> = (props) => {
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
      data-scroll-offset={'35%,50%'}
      ref={scrollRef}
      className={styles.container}
    >
      <Landing title={'Creative Engineer'} />
      <Roles />
      <Projects />
      <Footer />
    </div>
  )
}

export default ScrollContainer
