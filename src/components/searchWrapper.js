import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Search from '../components/search'

export const mapGithubIssues = ({allGithubIssues}) => allGithubIssues.edges.map(({ node }) => {
  return {
    id: node.id,
    title: node.title,
    tags: [node.milestone.title],
    slug: node.fields.slug
  }
}
  )
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
        <Search data={ mapGithubIssues(data) } searchIndex={indexData.siteSearchIndex.index} />
      )}
    />
  )
}

export default SearchWrapper
