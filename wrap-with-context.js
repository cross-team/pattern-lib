const React = require("react")
const ViewContextProvider = require('./src/context/view').default


exports.wrapRootElement = ({ element }) => {
  return (
    <ViewContextProvider >
      {element}
    </ViewContextProvider>
  )
}
