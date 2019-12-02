import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#333333',
    borderTop: 'solid 2px #ff8001',
  },
  title: {
    margin: theme.spacing(1),
    color: '#fff',
  },
  linkContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  toolbar: {
    width: '72%'
  }
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  
  return (
    <AppBar className={classes.header}>
      <div className={classes.linkContainer}>
        <Toolbar className={classes.toolbar}>
          <Link to='/' className={classes.link}>
            <HomeIcon className={classes.title} />
            <Typography variant='h6' className={classes.title}>{ siteTitle }</Typography>
          </Link>
        </Toolbar>
      </div>
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
