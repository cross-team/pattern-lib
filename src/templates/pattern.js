import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { makeStyles, Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  banner: {
    width: '100%',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderTop: 'solid 1px #ff8001',
  },
  title: {
    color: '#fff',
    margin: theme.spacing(2),
  },
}))

export default ({data}) => {
  const classes = useStyles()
  const { frontmatter } = data.markdownRemark // data.markdownRemark holds your post data
  console.log(frontmatter)
  return (
    <Layout >
      <Paper className={classes.banner}>
        <Typography variant='h2' className={classes.title}>{ frontmatter.title ? frontmatter.title : '' }</Typography>
      </Paper>
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
