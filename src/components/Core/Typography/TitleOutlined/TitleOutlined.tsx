import React from 'react'
import classNames from 'classnames'
import styles from './TitleOutlined.module.scss'

interface Props {
  className?: string
  text: string
}

export const TitleOutlined: React.FC<Props> = (props) => {
  const { className, text } = props
  const classes = classNames(styles.title, className)

  return <h2 className={classes}>{text}</h2>
}
