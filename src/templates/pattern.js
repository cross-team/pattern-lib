import React from 'react'
import { graphql } from 'gatsby'
import { markdown } from 'markdown'
import Content from '../components/content'
import Layout from '../components/layout'
import { makeStyles, Paper, Typography, Chip } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  banner: {
    width: '100%',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#333333',
    color: '#fff',
  },
  title: {
    margin: theme.spacing(2),
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  classifiers: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginRight: theme.spacing(1),
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightMargin: {
    marginRight: theme.spacing(1),
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between'
  },
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
        <>
          <img src={asset.asset.image} alt={asset.asset.caption} className={classes.img}/>
          <Typography>{asset.asset.caption}</Typography>
        </>
      ))
    }
    return result
  }

  const references = () => {
    let result
    if ( frontmatter.references ) {
      result = frontmatter.references.map((reference) => (
        <>
          <h2>{reference.reference.title}</h2>
          <Typography>{reference.reference.description}</Typography>
          <a href={reference.reference.url}><Typography>{reference.reference.url}</Typography></a>
        </>
      ))
    }
    return result
  }

  return (
    <Layout >
      <Paper className={classes.banner}>
        <div className={classes.titleContainer}>
          <Typography variant='h2' className={classes.title}>{ frontmatter.title ? frontmatter.title : '' }</Typography>
          <Typography className={classes.title}>{ frontmatter.caption ? frontmatter.caption : '' }</Typography>
        </div>
        <div className={classes.classifiers}>
          <div className={classes.categoryContainer}>
            <Typography variant='h6' className={classes.rightMargin}>Category:</Typography>
            <Typography variant='h6' className={classes.rightMargin}>{ frontmatter.category ? frontmatter.category : '' }</Typography>
          </div>
          <div className={classes.categoryContainer}>
            <Typography className={classes.rightMargin}>Subcategory:</Typography>
            <Typography className={classes.rightMargin}>{ frontmatter.subcategory ? frontmatter.subcategory : '' }</Typography>
          </div>
          <div className={classes.chipContainer}>
            <Typography className={classes.rightMargin}>Tags:</Typography>
            { frontmatter.tags.map((tag) => 
              <Chip label={tag} color="primary" className={classes.rightMargin} />
            ) }
          </div>
        </div>
      </Paper>
      <div className={classes.contentContainer}>
        <Content title='Problem'>
          {frontmatter.usage ? <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(frontmatter.problem) }}></div> : ''}
        </Content>
        <Content title='Solution'>
          {frontmatter.usage ? <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(frontmatter.solution) }}></div> : ''}
        </Content>
        <Content title='Usage'>
          {frontmatter.usage ? <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(frontmatter.usage) }}></div> : ''}
        </Content>
        <Content title='Accesibility'>
          {frontmatter.accessibility ? <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(frontmatter.accessibility) }}></div> : ''}
        </Content>
        <Content title='Assets'>{assets()}</Content>
        <Content title='References'>{references()}</Content>
      </div>
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