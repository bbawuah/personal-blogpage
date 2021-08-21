import React from 'react'
import classNames from 'classnames'
import styles from './Title.module.scss'

interface Props {
  className?: string
}

export const Title: React.FC<Props> = (props) => {
  const { children, className } = props
  const classes = classNames(styles.title, className)

  return <h1 className={classes}>{children}</h1>
}
