import React from "react"

const ProjectListItem = ({ url, cls, title, desc }) => (
  <a href={url} target="__blank">
    <div className={cls}>
      <p>{title}</p>
      <div>{desc}</div>
    </div>
  </a>
)

export default ProjectListItem
