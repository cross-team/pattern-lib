import React from "react"
import ViewContextProvider from '../context/view'
import ThemeProvider from './theme-provider'

const WrapWithContext = ({ children }) => {
  return (
    <ViewContextProvider >
        <ThemeProvider>
        {children}
        </ThemeProvider>
    </ViewContextProvider>
  )
}
export default WrapWithContext
