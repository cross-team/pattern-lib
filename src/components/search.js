import React, { useState } from 'react'
import Link from 'gatsby-link'
import {
  makeStyles,
  TextField,
  List,
  Divider,
  Typography,
  Chip,
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
    paddingLeft: '16px',
    paddingRight: '16px',
    width: '100%',
    position: 'relative',
    boxSizing: 'border-box',
    textAlign: 'left',
    alignItems: 'center',
    paddingTop: '8px',
    paddingBottom: '8px',
    textDecoration: 'none'
  },
  titleLine: {
    display: 'flex',
    alignItems: 'center'
  },
  listTitle: {
    marginRight: theme.spacing(2),
  },
  category: {
    fontWeight: 'bold',
    marginRight: theme.spacing(1),
  },
  rightMargin: {
    marginRight: theme.spacing(1),
  },
}))

const Search = ({ data, searchIndex }) => {
  const [query, setQuery] = useState(``)
  const [results, setResults] = useState([])
  let index

  const classes = useStyles()

  let patterns = data || []

  const searchItems = items => items.map(({ title, id, tags, slug, caption, category, subcategory }, pIndex) => {
    const chips = tags ? tags.map((tag) => 
      <Chip label={tag} color="primary" className={classes.rightMargin} />
    ) : []
    return (
      <li key={id}>
        <Link to={slug} className={classes.link}>
          <div className={classes.listItem}>
            <div>
              <div className={classes.titleLine}>
                <Typography variant='h6' className={classes.listTitle}>{title}</Typography>
                <Typography className={classes.category}>{category}:</Typography>
                <Typography >{subcategory}</Typography>
              </div>
              <Typography >{caption}</Typography>
            </div>
            <div>{chips}</div>
          </div>
          {pIndex < items.length - 1 && <Divider />}
        </Link>
      </li>
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
        id="search"
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
