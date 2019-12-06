import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import Switch from '@material-ui/core/Switch';
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
  const handleChange = () => event => {
    setCardView(event.target.checked);
  };
  const { cardView, setCardView } = useContext(ViewContext)
  return (
    <AppBar className={classes.header}>
      <div className={classes.linkContainer}>
        <Toolbar className={classes.toolbar}>
          <Link to='/' className={classes.link}>
            <HomeIcon className={classes.title} />
            <Typography variant='h6' component='h1' className={classes.title}>{ siteTitle }</Typography>
          </Link>
          <ViewList color='disabled'/>
          <Switch
            checked={cardView}
            onChange={handleChange()}
            color="primary"
            inputProps={{ 'aria-label': 'List or Card View' }}
          />
          <ViewModule style={{ color: 'white' }}/>
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
