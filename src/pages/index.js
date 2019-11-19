import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import {
  makeStyles,
  TextField,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@cross.team/core'

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
    margin: theme.spacing(4),
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.grey[200]
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

export default ({ data }) => {
  console.log(data)
  const classes = useStyles()
  let patterns = []
  if (data.allGithubIssues.edges) {
    patterns = data.allGithubIssues.edges
  }
  const listItems = patterns.map((pattern, index) => (
    <Link to={pattern.node.fields.slug} key={pattern.node.id} className={classes.link}>
      <ListItem>
        <ListItemText primary={pattern.node.title} />
      </ListItem>
      {index < patterns.length - 1 && <Divider />}
    </Link>
  ))

  return (
    <Layout>
      <TextField
        className={classes.textField}
        label='Search'
        variant="filled"
      />
      <List className={classes.list}>{listItems}</List>
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