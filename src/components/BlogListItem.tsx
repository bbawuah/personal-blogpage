import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as BlogListStyle from './blogList.module.scss'

interface Props {
  allMarkdownRemark: {
    totalCount: number
    edges: {
      node: {
        id: number
        frontmatter: {
          title: string
          date: string
        }
        fields: {
          slug: any
        }
        excerpt: string
      }
    }[]
  }
}

export const BlogListItem: React.FC = () => {
  const data: Props = useStaticQuery(graphql`
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
          <Link to={node.fields.slug}>
            <div>
              <h2>{node.frontmatter.title}</h2>
              <h4>
                <span>— {node.frontmatter.date}</span>
              </h4>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default BlogListItem
