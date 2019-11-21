import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SearchWrapper from '../components/searchWrapper'

export default ({ data }) => {
  return (
    <Layout>
      <SearchWrapper data={ data } />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allGithubIssues {
      edges {
        node {
          id
          title
          fields {
            slug
          }
        }
      }
    }
  }
`