import React, { useState, useContext } from 'react'
import Link from 'gatsby-link'
import {
  makeStyles,
  TextField,
  List,
  Divider,
  Typography,
  Chip,
  Hidden,
} from '@material-ui/core'
import { Index } from 'elasticlunr'
import { ViewContext } from '../context/view'
import CardView from '../components/card-view'
import Grid from '@material-ui/core/Grid';

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
    flexWrap: 'wrap',
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
    alignItems: 'center',
    flexWrap: 'wrap',
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
  const { cardView } = useContext(ViewContext)
  let index

  const classes = useStyles()

  let patterns = data || []

  const listItems = items => items.map(({ title, id, tags, slug, caption, category, subcategory }, pIndex) => {
    const chips = tags ? tags.map((tag) =>
      <Chip label={tag} color="primary" className={classes.rightMargin} />
    ) : []
    return (
      <li key={id}>
        <Link to={slug} className={classes.link}>
          <div className={classes.listItem}>
            <div>
              <div className={classes.titleLine}>
                <Typography className={classes.listTitle}>{title}</Typography>
                <div>
                  <Typography variant='caption' className={classes.category}>{category}:</Typography>
                  <Typography variant='caption' >{subcategory}</Typography>
                </div>
              </div>
              <Typography variant='caption'>{caption}</Typography>
            </div>
            <Hidden xsDown><div>{chips}</div></Hidden>
          </div>
          {pIndex < items.length - 1 && <Divider />}
        </Link>
      </li>
  )})

  const cards = items => items.map((cardData, pIndex) => {
    return (
      <Grid item key={cardData.id} xs={6}>
        <Link to={cardData.slug} className={classes.link}>
          <CardView cardData={cardData}/>
        </Link>
      </Grid>
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
      {!cardView
        ? (<List className={classes.list}>
              { query ? listItems(results) : listItems(patterns) }
            </List>)
          : (<Grid container justify="center" align='center' spacing={1}>
          { query ? cards(results) : cards(patterns) }
        </Grid>)
      }
    </>
  )
}

export default Search
