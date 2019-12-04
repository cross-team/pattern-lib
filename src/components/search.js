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

  let patterns = data || []

  const searchItems = items => items.map(({title, id, tags, slug}, pIndex) => {
    const uppercaseTags = tags.map(tag => `${tag.toUpperCase()} `)
    return (
    <Link to={slug} key={id} className={classes.link}>
      <ListItem className={classes.listItem}>
        <Typography>{title}</Typography>
        <Typography variant='caption'>{uppercaseTags}</Typography>
      </ListItem>
      {pIndex < items.length - 1 && <Divider />}
    </Link>
  )})

  const getOrCreateIndex = () => {
    return index ? index : Index.load(searchIndex)
  }

  const search = query => index.search(`${query}`, { expand: true })
  const mapResults = results => results.map(({ ref }) => index.documentStore.getDoc(ref))
  const handleSearch = evt => {
    const query = evt.target.value
    index = getOrCreateIndex()
    setQuery(query)
    const mappedResults = mapResults(search(query))
    setResults(mappedResults)
  }

  return (
    <>
      <TextField
        className={classes.textField}
        label='Search'
        placeholder='Search'
        variant="outlined"
        value={query}
        onChange={handleSearch}
      />
      <List className={classes.list}>
        { query ? searchItems(results) : searchItems(patterns) }
      </List>
    </>
  )
}

export default Search
