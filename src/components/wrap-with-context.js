import React from "react"
import ViewContextProvider from '../context/view'
import ThemeProvider from './theme-provider'

const WrapWithContext = ({ element }) => {
  return (
    <ViewContextProvider >
        <ThemeProvider>
        {element}
        </ThemeProvider>
    </ViewContextProvider>
  )
}
export default WrapWithContext
