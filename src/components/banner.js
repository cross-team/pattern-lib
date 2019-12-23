import React from 'react';
import PropTypes from 'prop-types';
import { withWidth, makeStyles, Paper, Typography, Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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
  mobileContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  banner: props => ({
    width: '100%',
    minHeight: '200px',
    display: 'flex',
    justifyContent: props.justify,
    flexWrap: 'wrap',
    backgroundColor: '#333333',
    color: '#fff',
  }),
}))

function Banner(props) {
  const { width, frontmatter } = props
  let styleProps = {}
  if (width === 'xs' || width === 'sm') {
    styleProps.justify = 'center'
  } else {
    styleProps.justify = 'space-between'
  }
  const classes = useStyles(styleProps)

  return (
    <Paper className={classes.banner}>
      { (width === 'xs' || width === 'sm') ? (
        <div className={classes.mobileContainer}>
          <Typography variant='h3' className={classes.title}>{ frontmatter.title ? frontmatter.title : '' }</Typography>
          <Typography className={classes.title}>{ frontmatter.caption ? frontmatter.caption : '' }</Typography>
          <div className={classes.categoryContainer}>
            <Typography variant='caption' className={classes.rightMargin}>{ frontmatter.category ? frontmatter.category : '' }:</Typography>
            <Typography variant='caption' className={classes.rightMargin}>{ frontmatter.subcategory ? frontmatter.subcategory : '' }</Typography>
          </div>
          <div className={classes.chipContainer}>
            <Typography className={classes.rightMargin}>Tags:</Typography>
            { frontmatter.tags ? frontmatter.tags.map((tag) =>
              <Chip label={tag} color="primary" className={classes.rightMargin} />
            ) }
          </div>
        </div>
      ) : (
        <>
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
        </>
      )}
    </Paper>
  )
}

Banner.propTypes = {
  width: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,
}

export default withWidth()(Banner)
