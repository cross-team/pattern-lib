import React from 'react'
import { graphql } from 'gatsby'
import { markdown } from 'markdown'
import Content from '../components/content'
import Banner from '../components/banner'
import Layout from '../components/layout'
import { makeStyles, Typography, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  img: {
    width: '100%',
    marginTop: theme.spacing(2),
  }
}))

export default ({data}) => {
  const classes = useStyles()
  const { frontmatter } = data.markdownRemark // data.markdownRemark holds your post data
  console.log(frontmatter)

  const assets = () => {
    let result
    if ( frontmatter.assets ) {
      result = frontmatter.assets.map((asset) => (
        <Content title='Assets'>
          <img src={asset.asset.image} alt={asset.asset.caption} className={classes.img}/>
          <Typography>{asset.asset.caption}</Typography>
        </Content>
      ))
    }
    return result
  }

  const references = () => {
    let result
    if ( frontmatter.references ) {
      result = frontmatter.references.map((reference) => (
        <Content title='References'>
          <h2>{reference.reference.title}</h2>
          <Typography>{reference.reference.description}</Typography>
          <a href={reference.reference.url}><Typography>{reference.reference.url}</Typography></a>
        </Content>
      ))
    }
    return result
  }

  return (
    <Layout >
      <Banner frontmatter={frontmatter} />
      <Grid container spacing={4}> 
        <Grid item xs={12} md={6}>
          {frontmatter.problem ? (
            <Content title='Problem'>
              <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(frontmatter.problem) }}></div>
            </Content>
          ) : ''}
        </Grid>
        <Grid item xs={12} md={6}>
          {frontmatter.solution ? (
            <Content title='Solution'>
              <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(frontmatter.solution) }}></div>
            </Content>
          ) : ''}
        </Grid>
        <Grid item xs={12} md={6}>
          {frontmatter.usage ? (
            <Content title='Usage'>
              <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(frontmatter.usage) }}></div>
            </Content>
          ) : ''}
        </Grid>
        <Grid item xs={12} md={6}>
          {frontmatter.accessibility ? (
            <Content title='Accessibility'>
              <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(frontmatter.accessibility) }}></div>
            </Content>
          ) : ''}
        </Grid>
        <Grid item xs={12} md={6}>
          {assets()}
        </Grid>
        <Grid item xs={12} md={6}>
          {references()}
        </Grid>
      </Grid>
    </Layout>
  )
}

export const query = graphql`
query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      html
      frontmatter {
        title
        caption
        category
        subcategory
        tags
        problem
        solution
        usage
        accessibility
        assets {
          asset {
            caption
            image
          }
        }
        references {
          reference {
            description
            title
            url
          }
        }
      }
      fields {
        slug
      }
    }
  }
`
