import React from 'react'
import styles from './Center.module.scss'
import classNames from 'classnames'

interface Props {
  className?: string
  grow?: boolean
}

const Center: React.FunctionComponent<Props> = (props) => {
  const { className, children, grow } = props
  return (
    <div
      className={classNames(styles.container, className, {
        [styles.grow]: grow
      })}
    >
      {children}
    </div>
  )
}

export default Center
