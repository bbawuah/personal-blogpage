import classNames from 'classnames'
import React from 'react'
import { Title } from '../../../Core/Typography/Title/Title'
import styles from './TextContainer.module.scss'

interface Props {
  className?: string
  title: string
}

export const TextContainer: React.FC<Props> = (props) => {
  const { className, title } = props
  const classes = classNames(styles.container, className)

  return (
    <div className={classes}>
      <Title>{title}</Title>
    </div>
  )
}
