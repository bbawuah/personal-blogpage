/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../styles/style.scss'
import { Header } from './Core/Header/Header'
import { Footer } from './Core/Footer/Footer'

export enum Display {
  flex = 'flex',
  column = 'column'
}
interface Props {
  children: JSX.Element[] | JSX.Element
  display?: Display
}

export const Layout: React.FC<Props> = ({ children, display }) => {
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
    <main
      style={{
        display,
        alignItems: 'center'
      }}
    >
      {children}
    </main>
  )
}

export default Layout
