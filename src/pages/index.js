import React from "react"

export default ({ data }) => {
  // displays an object of the query data in console
  // simply access what you need using a map function
  // data.allFile.edges.map()
  console.log(data)
  return <div>Hello world</div>
}

export const query = graphql`
  query MyFilesQuery {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`