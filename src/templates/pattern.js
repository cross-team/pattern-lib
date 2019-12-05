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
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { html } = markdownRemark
  return (
    <Layout >
      <div className={classes.content} dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const query = graphql`
query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
