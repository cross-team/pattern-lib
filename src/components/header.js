import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';
import { ViewContext } from '../context/view'
import { ViewList, ViewModule } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1
  },
  header: {
    backgroundColor: '#333333',
    borderTop: 'solid 2px #ff8001',
    position: 'fixed',
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
    width: '80%'
  }
}))

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  const handleChange = (cardView) => () => {
    setCardView(cardView);
  };
  const { cardView, setCardView } = useContext(ViewContext)
  const path = '/' // temp
  const onHomePage = path === '/'
  const ViewListIcon = (cardView) => !cardView ? <ViewList color='primary'/> : <ViewList style={{ color: 'white' }} />
  const ViewModuleIcon = (cardView) => cardView ? <ViewModule color='primary'/> : <ViewModule style={{ color: 'white' }}/>
  return (
    <AppBar className={classes.header}>
      <div className={classes.linkContainer}>
        <Toolbar className={classes.toolbar}>
          <Link to='/' className={classes.link}>
            <HomeIcon className={classes.title} />
            <Typography variant='h6' component='h1' className={classes.title}>{ siteTitle }</Typography>
          </Link>
          { onHomePage
          ? (<><IconButton onClick={handleChange(false)} aria-label="List View">{ViewListIcon(cardView)}</IconButton>
          <IconButton onClick={handleChange(true)} aria-label="Grid View">{ViewModuleIcon(cardView)}</IconButton></>)
          : null}

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
