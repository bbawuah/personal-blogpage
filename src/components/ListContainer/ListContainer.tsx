import { useStaticQuery, graphql, Link } from 'gatsby'
import React, { useState, useRef } from 'react'
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated
} from 'react-spring'
import ContainerStyles from './ListContainer.module.scss'

interface QueryProps {
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

export const ListContainer: React.FC = () => {
  const data: QueryProps = useStaticQuery(graphql`
    query PostQuery {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { type: { eq: "project" } } }
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

  const springRef = useRef()
  const { size, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: {
      size: '20%'
    },
    to: {
      size: '100%'
    }
  })

  const transRef = useRef()
  const transitions = useTransition(data.allMarkdownRemark.edges, {
    ref: transRef,
    unique: true,
    trail: 400 / data.allMarkdownRemark.edges.length,
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' }
  })

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain([springRef, transRef] as any, [0, 0.1])

  return (
    <>
      <animated.div
        className={ContainerStyles.container}
        style={{
          ...rest,
          width: size,
          height: size
        }}
      >
        {transitions((style, { node }) => {
          return (
            <animated.div className={ContainerStyles.item} style={style as any}>
              <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
                <span>{node.frontmatter.date}</span>
                <p>{node.excerpt}</p>
              </Link>
            </animated.div>
          )
        })}
      </animated.div>
    </>
  )
}
