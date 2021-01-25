import React from 'react'
import {
  useTrail,
  animated
} from 'react-spring'
import * as TrailStyle from './Trail.module.scss'

interface Props {
  title: string
}

export const Trail: React.FC<Props> = ({
  title
}) => {
  const items = title.split(' ')
  const trail = useTrail(items.length, {
    config: {
      mass: 5,
      tension: 2000,
      friction: 200
    },
    opacity: 1,
    x: 0,
    height: 50,
    from: {
      opacity: 0,
      x: 20,
      height: 0
    },
    letterSpacing: 1
  })
  return (
    <div
      className={TrailStyle.container}
    >
      <div
        className={
          TrailStyle.trailsMainTextContainer
        }
      >
        {trail.map(
          (
            { x, height, ...rest },
            index
          ) => (
            <animated.div
              key={index}
              className={
                TrailStyle.trailMainText
              }
              style={{
                ...rest,
                transform: (x as any).interpolate(
                  (x: number) =>
                    `translate3d(0,${x}px,0)`
                )
              }}
            >
              <animated.h1
                style={{ height }}
              >
                {items[index]}
              </animated.h1>
            </animated.div>
          )
        )}
      </div>
    </div>
  )
}
