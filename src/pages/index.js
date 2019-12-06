import React from 'react'
import '../styles/index.css'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SearchWrapper from '../components/search-wrapper'
import SEO from "../components/seo"

export default ({ data }) => {
  const mapMarkdown = ({allMarkdownRemark}) => allMarkdownRemark.edges.map(({node}) => ({
    id: node.id,
    title: node.frontmatter.title,
    tags: node.frontmatter.tags,
    slug: node.fields.slug,
    assets: node.frontmatter.assets,
    caption: node.frontmatter.caption,
    category: node.frontmatter.category,
    subcategory: node.frontmatter.subcategory
  }))
  return (
    <Layout>
      <SEO title="Pattern Library" />
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
            caption
            category
            subcategory
            assets {
              asset {
                image,
                caption
              }
            }
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
