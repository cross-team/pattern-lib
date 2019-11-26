import React, { useState } from 'react'
import Link from 'gatsby-link'
import {
  makeStyles,
  TextField,
  List,
  ListItem,
  Divider,
  Typography
} from '@material-ui/core'
import { Index } from 'elasticlunr'

const useStyles = makeStyles(theme => ({
  textField: {
    width: '100%',
    margin: theme.spacing(4),
    backgroundColor: '#fff',
  },
  list: {
    width: '100%',
    backgroundColor: '#fff',
    border: '1px solid rgba(0, 0, 0, 0.12)',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

const Search = ({ data, searchIndex }) => {
  const [query, setQuery] = useState(``)
  const [results, setResults] = useState([])
  let index

  const classes = useStyles()

  
  let patterns = []
  if (data.allGithubIssues.edges) {
    patterns = data.allGithubIssues.edges
  }
  const listItems = patterns.map((pattern, index) => (
    <Link to={pattern.node.fields.slug} key={pattern.node.id} className={classes.link}>
      <ListItem className={classes.listItem}>
        <Typography>{pattern.node.title}</Typography>
        <Typography variant='caption'>{pattern.node.milestone.title.toUpperCase()}</Typography>
      </ListItem>
      {index < patterns.length - 1 && <Divider />}
    </Link>
  ))

  const searchItems = results.map((pattern, pIndex) => {
    console.log(pattern)
    return (
    <Link to={pattern.title} key={pattern.id} className={classes.link}>
      <ListItem className={classes.listItem}>
        <Typography>{pattern.title}</Typography>
        <Typography variant='caption'>{pattern.milestone.toUpperCase()}</Typography>
      </ListItem>
      {pIndex < results.length - 1 && <Divider />}
    </Link>
  )})

  const getOrCreateIndex = () => {
    return index ? index : Index.load(searchIndex)
  }

  const search = evt => {
    const query = evt.target.value
    index = getOrCreateIndex()
    setQuery(query)
    setResults(index.search(query, { expand: true }).map(({ ref }) => index.documentStore.getDoc(ref)))
  }

  return (
    <>
      <TextField
        className={classes.textField}
        label='Search'
        variant="outlined"
        value={query}
        onChange={search}
      />
      <List className={classes.list}>
        { query ? searchItems : listItems }
      </List>
    </>
  )
}

export default Search