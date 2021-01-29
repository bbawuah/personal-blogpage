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
import { ProjectListItem } from '../ProjectListItem/ProjectListItem'

const projecten = [
  {
    url: 'https://apps.apple.com/in/app/adventist-melodies/id1530974313?ls=1',
    title: 'A digital hymnal with sound',
    desc: 'Fullstack mobile application.'
  },
  {
    url: 'https://www.tasksy.work/',
    title: 'Tasksy - A task management tool for achievers',
    desc: 'Fullstack taskmanagement web application.'
  },
  {
    url: 'https://hope-foundation.faith/',
    title: 'H.O.P.E. Foundation',
    desc: 'Website for the H.O.P.E. foundation.'
  },
  {
    url: 'https://bawuah-chatapp.herokuapp.com/',
    title: 'Chat app',
    desc:
      'Real time web application where users are able to chat to one another using the Socket library.'
  },
  {
    url: 'https://bawuah-bible-app.herokuapp.com/',
    title: 'ASV bible app',
    desc:
      'App that renders chapters and/or verses from the American Standard Version of the Bible.'
  }
]

interface DataType {
  name: string
  description: string
  css: string
  height: number
}

interface Props {
  shouldOpen: boolean
}

export const ListContainer: React.FC<Props> = ({ shouldOpen }) => {
  const [open, set] = useState<boolean>(shouldOpen)

  const springRef = useRef()
  const { size, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: {
      size: '20%'
    },
    to: {
      size: open ? '100%' : '20%'
    }
  })

  const transRef = useRef()
  const transitions = useTransition(open ? projecten : [], {
    ref: transRef,
    unique: true,
    trail: 400 / projecten.length,
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
      >
        {transitions((style, item) => {
          return (
            <animated.div className={ContainerStyles.item} style={style as any}>
              <p>{item.title}</p>
              <div>{item.desc}</div>
            </animated.div>
          )
        })}
      </animated.div>
    </>
  )
}
