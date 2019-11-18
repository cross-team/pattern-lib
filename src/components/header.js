import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { AppBar, Toolbar, Typography } from '@cross.team/core'

const Header = ({ siteTitle }) => (
  <AppBar>
    <Toolbar>
      <Typography variant='h6'>{ siteTitle }</Typography>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
