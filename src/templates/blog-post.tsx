import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

interface Props {
  data: {
    markdownRemark: {
      html: string
      timeToRead: number
      frontmatter: {
        title: string
        date: string
      }
    }
  }
}

const BlogPost: React.FC<Props> = ({ data }) => {
  return (
    <Layout>
      <section className="blog-contact-container">
        <div>
          <h2>{data.markdownRemark.frontmatter.title}</h2>
          <h4>{data.markdownRemark.frontmatter.date}</h4>
          <p>{`It will probably take you ${data.markdownRemark.timeToRead} minutes to read this.`}</p>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
export default BlogPost
