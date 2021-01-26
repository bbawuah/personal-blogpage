import React, { useState, useRef } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated
} from 'react-spring'
import ContainerStyles from './ListContainer.module.scss'
import data from './data'

const projecten: number[] = [1, 2, 3, 4, 5]

interface DataType {
  name: string
  description: string
  css: string
  height: number
}

export const ListContainer: React.FC = () => {
  const [open, set] = useState(false)

  const springRef = useRef()
  const { size, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: {
      size: '20%',
      background: 'hotpink'
    },
    to: {
      size: open ? '100%' : '20%',
      background: open ? 'white' : 'hotpink'
    }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? data : [], {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(
    open ? ([springRef, transRef] as any) : ([transRef, springRef] as any),
    [0, open ? 0.1 : 0.6]
  )

  return (
    <>
      <animated.div
        className={ContainerStyles.container}
        style={{
          ...rest,
          width: size,
          height: size
        }}
        onClick={() => set((open) => !open)}
      >
        {transitions((style, item) => {
          console.log(style)
          console.log(item)
          return (
            <animated.div className={ContainerStyles.item} style={style as any}>
              {item.name}
            </animated.div>
          )
        })}
      </animated.div>
    </>
  )
}
