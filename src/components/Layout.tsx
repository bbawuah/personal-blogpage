/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import 'normalize.css'
import './layout.scss'
import { Header } from './Header/Header'
import { Footer } from './Footer/Footer'

interface Props {
  children: JSX.Element[] | JSX.Element
}

export const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
