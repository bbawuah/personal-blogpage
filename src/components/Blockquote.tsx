import React from "react"
import * as blockquoteStyles from "./blockquote.module.scss"

interface Props {
  quote: string
  auth: string
}

export const Blockquote: React.FC<Props> = ({quote, auth}) => (
  <div>
    <div className={blockquoteStyles.container}>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
    </div>
<small className={blockquoteStyles.auth}>{auth}</small>
  </div>
)
