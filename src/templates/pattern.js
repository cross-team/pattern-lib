import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  content: {
    backgroundColor: '#fff',
    padding: '0 96px'
  }
})

export default ({data}) => {
  const classes = useStyles()
  const pattern = data.githubIssues
  return (
    <Layout >
      <div className={classes.content} dangerouslySetInnerHTML={{ __html: pattern.bodyHTML }} />
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