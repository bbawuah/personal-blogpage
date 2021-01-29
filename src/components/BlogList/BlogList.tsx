import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as BlogListStyle from './BlogList.module.scss'
import { PostListItem } from '../BlogListItem/BlogListItem'

interface Props {
  data: any
}

export const BlogList: React.FC<Props> = () => {
  const data = useStaticQuery(graphql`
    query PostCountQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
        totalCount
      }
    }
  `)

  return (
    <div className={BlogListStyle.list}>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      <PostListItem type="blog" />
    </div>
  )
}
