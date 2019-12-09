/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const ViewContextProvider = require('./src/context/view').default


exports.wrapRootElement = ({ element }) => {
  return (
    <ViewContextProvider >
      {element}
    </ViewContextProvider>
  )
}
