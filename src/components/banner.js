import React from 'react';
import PropTypes from 'prop-types';
import { withWidth, makeStyles, Paper, Typography, Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  banner: {
    width: '100%',
    minHeight: '200px',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    backgroundColor: '#333333',
    color: '#fff',
  },
  title: {
    margin: theme.spacing(2),
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  classifiers: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    marginRight: theme.spacing(1),
  },
  chipContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightMargin: {
    marginRight: theme.spacing(1),
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

function Banner(props) {
  const classes = useStyles()
  const { width, frontmatter } = props

  return (
    <Paper className={classes.banner}>
      <div className={classes.titleContainer}>
        <Typography variant='h3' className={classes.title}>{ frontmatter.title ? frontmatter.title : '' }</Typography>
        <Typography className={classes.title}>{ frontmatter.caption ? frontmatter.caption : '' }</Typography>
      </div>
      <div className={classes.classifiers}>
        <div className={classes.categoryContainer}>
          <Typography variant='h6' className={classes.rightMargin}>Category:</Typography>
          <Typography variant='h6' className={classes.rightMargin}>{ frontmatter.category ? frontmatter.category : '' }</Typography>
        </div>
        <div className={classes.categoryContainer}>
          <Typography className={classes.rightMargin}>Subcategory:</Typography>
          <Typography className={classes.rightMargin}>{ frontmatter.subcategory ? frontmatter.subcategory : '' }</Typography>
        </div>
        <div className={classes.chipContainer}>
          <Typography className={classes.rightMargin}>Tags:</Typography>
          { frontmatter.tags.map((tag) => 
            <Chip label={tag} color="primary" className={classes.rightMargin} />
          ) }
        </div>
      </div>
    </Paper>
  )
}

Banner.propTypes = {
  width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
}

export default withWidth()(Banner)