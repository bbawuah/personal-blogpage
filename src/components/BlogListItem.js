import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import BlogListStyle from "./BlogList.module.scss"

const BlogListItem = () => {
  const data = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            fields {
              slug
             
            }
            excerpt
          }
        }
      }
    }
  `)
  return (
    <>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={BlogListStyle.listItem}>
          <div >
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title}</h2>
            </Link>
            <h4>
              <span>— {node.frontmatter.date}</span>
            </h4>
            <p>{node.excerpt}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default BlogListItem
