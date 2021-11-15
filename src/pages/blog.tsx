import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'
import { SEO } from '../components/seo'
import { BlogList } from '../components/BlogList/BlogList'

interface Props {
  data: {
    allMarkdownRemark: any
  }
}

const BlogPage: React.FC<Props> = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h2>Find out what keeps me busy.</h2>
    <section className="blog-contact-container">
      <BlogList data={data.allMarkdownRemark} />
    </section>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
