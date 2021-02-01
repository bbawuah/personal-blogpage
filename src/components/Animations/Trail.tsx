import React from 'react'
import { useTrail, animated, SpringValue } from 'react-spring'
import * as TrailStyle from './Trail.module.scss'

interface Props {
  title: string
}

const Trail: React.FC<Props> = ({ title }) => {
  const items = title.split(' ')
  const trail = useTrail(items.length, {
    config: {
      mass: 5,
      tension: 2000,
      friction: 200
    },
    opacity: 1 as any,
    x: 0 as any,
    height: 110,
    from: {
      opacity: 0 as any,
      x: 110 as any,
      height: 0
    },
    letterSpacing: 1
  })
  return (
    <div className={TrailStyle.container}>
      <div className={TrailStyle.trailsMainTextContainer}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            className={TrailStyle.trailMainText}
            style={{
              ...rest,
              transform: x.interpolate((x: any) => `translate3d(0,${x}px,0)`)
            }}
          >
            <animated.h1>{items[index]}</animated.h1>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default Trail
