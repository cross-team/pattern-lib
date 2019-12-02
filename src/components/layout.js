/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core'

import Header from "./header"

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'KnowledgeLight',
      'Raleway',
      'Helvetica',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#ff8001'
    },
  }
})

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
    <ThemeProvider theme={theme}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main className={classes.main}>{children}</main>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
