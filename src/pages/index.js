import React from 'react'
import '../styles/index.css'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SearchWrapper from '../components/searchWrapper'

export default ({ data }) => {
  const mapMarkdown = ({allMarkdownRemark}) => allMarkdownRemark.edges.map(({node}) => ({
    id: node.id,
    title: node.frontmatter.title,
    tags: node.frontmatter.tags,
    slug: node.fields.slug
  }))
  return (
    <Layout>
      <SearchWrapper data={ mapMarkdown(data) } />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            tags
            category
            subcategory
          }
          id
          fields {
            slug
          }
          html
        }
      }
    }
  }
`
