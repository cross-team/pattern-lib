import React from 'react'
import { graphql } from 'gatsby'

export default ({data}) => {
  const pattern = data.githubIssues
  return (
    <div dangerouslySetInnerHTML={{ __html: pattern.html }} />
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
        description
        title
      }
    }
  }
`