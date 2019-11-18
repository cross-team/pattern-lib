import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export default ({data}) => {
  const pattern = data.githubIssues
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: pattern.html }} />
    </Layout>
  )
}

export const query = graphql`
  query PatternQuery($slug: String!) {
    githubIssues(fields: { slug: { eq: $slug } }) {
      id
      title
      bodyHTML
      url
      labels {
        nodes {
          color
          description
          name
        }
      }
      milestone {
        title
      }
    }
  }
`