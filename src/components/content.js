import PropTypes from 'prop-types'
import React from 'react'
import { Paper, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#fff',
    borderTop: 'solid 4px #ff8001',
    width: '48%',
    marginTop: theme.spacing(4),
  },
  header: {
    backgroundColor: '#333333',
    color: '#fff',
    padding: theme.spacing(2),
  },
  children: {
    padding: theme.spacing(2),
  }
}))

const Content = ({ title, children }) => {
  const classes = useStyles()
  
  return (
    <Paper className={classes.container}>
      <div className={classes.header}>
        <Typography variant='h5'>{title}</Typography>
      </div>
      <div className={classes.children}>{children}</div>
    </Paper>
  )
}

Content.propTypes = {
  title: PropTypes.string,
}

Content.defaultProps = {
  title: ``,
}

export default Content
