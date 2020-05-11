import React from "react"
import blockquoteStyles from "./Blockquote.module.scss"

const Blockquote = ({quote, auth}) => (
  <div>
    <div className={blockquoteStyles.container}>
      <blockquote>
        <p>{quote}</p>
      </blockquote>
    </div>
<small className={blockquoteStyles.auth}>{auth}</small>
  </div>
)

export default Blockquote
