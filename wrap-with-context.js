const React = require("react")
const ViewContextProvider = require('./src/context/view').default
const ThemeProvider = require('./src/components/theme-provider').default

exports.wrapRootElement = ({ element }) => {
  return (
    <ViewContextProvider >
        <ThemeProvider>
        {element}
        </ThemeProvider>
    </ViewContextProvider>
  )
}
