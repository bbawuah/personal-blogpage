import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import {graphql} from "gatsby";

import Blockquote from "../components/Blockquote";
import BlogList from "../components/BlogList";

const BlogPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Find out what keeps me busy.</h1>
    <Blockquote
    quote={'"I write to discover what I know."'}
    auth={"Flannery O'Connor"}
    />
    <BlogList data={data}/>

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

export default BlogPage;