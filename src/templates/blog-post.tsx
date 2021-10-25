import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'

interface Props {
  data: {
    markdownRemark: {
      html: string
      timeToRead: number
      frontmatter: {
        title: string
        assignment: string
        date: string
      }
    }
  }
}

const BlogPost: React.FC<Props> = ({ data }) => {
  const baseUrl = data.markdownRemark.frontmatter.assignment
  console.log(data.markdownRemark.frontmatter.assignment)

  return (
    <Layout justifyContent={'start'}>
      <div className="blog-navigation">
        <nav>
          <ul>
            <Link
              to={`/${baseUrl}/intro`}
              activeClassName={'blog-navigation-active'}
            >
              <li>Intro</li>
            </Link>

            <Link
              to={`/${baseUrl}/concepting`}
              activeClassName={'blog-navigation-active'}
            >
              <li>XR Concepting & Design</li>
            </Link>

            <Link
              to={`/${baseUrl}/assets`}
              activeClassName={'blog-navigation-active'}
            >
              <li>XR Assets</li>
            </Link>

            <Link
              to={`/${baseUrl}/development`}
              activeClassName={'blog-navigation-active'}
            >
              <li>XR Development</li>
            </Link>

            <Link
              to={`/${baseUrl}/testing`}
              activeClassName={'blog-navigation-active'}
            >
              <li>XR Testing</li>
            </Link>
          </ul>
        </nav>
      </div>
      <section className="blog-content-container">
        <div>
          <h2>{data.markdownRemark.frontmatter.title}</h2>
          <h4>{data.markdownRemark.frontmatter.date}</h4>
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
        assignment
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
export default BlogPost
