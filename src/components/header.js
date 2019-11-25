import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  
  return (
    <AppBar>
      <Toolbar>
        <Link to='/' className={classes.link}>
          <Typography variant='h6'>{ siteTitle }</Typography>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
