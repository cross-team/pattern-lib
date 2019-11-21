import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Search from '../components/search'

const SearchWrapper = ({ data }) => {
  return (
    <StaticQuery
      query={graphql`
        query SearchIndexQuery {
          siteSearchIndex {
            index
          }
        }
      `}
      render={ indexData => (
        <Search data={ data } searchIndex={indexData.siteSearchIndex.index} />
      )}
    />
  )
}

export default SearchWrapper