import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as BlogListStyle from '../BlogList.module.scss'

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

interface PostListProps {
  type: string
}

export const PostListItem: React.FC<PostListProps> = ({ type }) => {
  const data: Props = useStaticQuery(graphql`
    query BlogQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "blog" } } }
      ) {
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
              <h3>{node.frontmatter.title}</h3>
              <span>{node.frontmatter.date}</span>
              <p>{node.excerpt}</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}

export default PostListItem
