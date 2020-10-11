import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

interface Props {
  data: {
    html: string
    frontmatter: {
      title: string
      date: string
    }
  }
}

export const BlogPost: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>{data.frontmatter.title}</h1>
        <h4>{data.frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: data.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
