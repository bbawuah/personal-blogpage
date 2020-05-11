import React from "react";
import {useStaticQuery, graphql} from "gatsby";

import BlogListStyle from "./BlogList.module.scss"

import BlogListItem from "../components/BlogListItem"

const BlogList = () => {
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

export default BlogList
