import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as BlogListStyle from './BlogList.module.scss'
import BlogListItem from './BlogListItem'

interface Props {
  data: any
}

export const BlogList: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query PostCountQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
      }
    }
  `)

  return (
    <div className={BlogListStyle.list}>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <BlogListItem />
    </div>
  )
}
