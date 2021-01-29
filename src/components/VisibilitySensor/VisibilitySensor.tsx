import React, { useEffect, useState } from 'react'
import VSensor from 'react-visibility-sensor'

interface Props {
  once: boolean
  partialVisibility: boolean
}

export const VisibilitySensor: React.FC<Props> = ({ once, children }) => {
  const [active, setActive] = useState<boolean>(true)

  useEffect(() => {
    console.log('active')
  }, [active])

  return (
    <VSensor
      active={active}
      onChange={(isVisible) => once && isVisible && setActive(false)}
      {...children}
    />
  )
}
