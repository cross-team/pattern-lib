/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles } from '@material-ui/core'
import Header from "./header"
import WrapWithContexts from './wrap-with-contexts'

const useStyles = makeStyles({
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '72%',
    marginTop: '64px',
  },
})

const Layout = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <WrapWithContexts>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={classes.main}>{children}</main>
    </WrapWithContexts>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
