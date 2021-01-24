import React from 'react'
import { useTrail, animated } from 'react-spring'

interface Props {
  title: string
}

export const Trail: React.FC<Props> = ({ title }) => {
  const items = title.split(' ')
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: 1,
    x: 0,
    height: 110,
    from: { opacity: 0, x: 20, height: 0 },
    letterSpacing: 1
  })
  return (
    <div className="trails-main">
      <div className="trails-main-text-container">
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: (x as any).interpolate(
                (x: number) => `translate3d(0,${x}px,0)`
              )
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}
