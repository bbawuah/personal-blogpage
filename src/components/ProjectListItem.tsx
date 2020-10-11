import React from "react"

interface Props {
  url: string
  cls: string
  title: string
  desc: string
}

export const ProjectListItem: React.FC<Props> = ({ url, cls, title, desc }) => (
  <a href={url} target="__blank">
    <div className={cls}>
      <p>{title}</p>
      <div>{desc}</div>
    </div>
  </a>
)

