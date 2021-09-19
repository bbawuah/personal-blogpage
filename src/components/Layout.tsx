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
import classNames from 'classnames'
import styles from './Layout.module.scss'

export enum Display {
  flex = 'flex',
  column = 'column'
}
interface Props {
  children: JSX.Element[] | JSX.Element
  display?: Display
  justifyContent?: 'start' | 'spaceBetween'
}

export const Layout: React.FC<Props> = ({
  children,
  display,
  justifyContent
}) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const classes = classNames('container', {
    [styles.spaceBetween]: justifyContent === 'spaceBetween',
    [styles.start]: justifyContent === 'start'
  })

  return (
    <div className={classes}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main
        style={{
          display,
          alignItems: 'center'
        }}
      >
        {children}
      </main>

      <Footer />
    </div>
  )
}

export default Layout
