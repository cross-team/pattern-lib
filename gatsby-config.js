module.exports = {
  siteMetadata: {
    title: `Pattern Library`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    pathPrefix: `/pattern-lib`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/blog/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-github',
      options: {
        headers: {
          Authorization: `Bearer f2422ee381499ffed215fa941eb50d7250f12867`, // https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/
        },
        queries: [
          `{
            repository(owner: "cross-team", name: "pattern-lib") {
              issues(first: 20, states: OPEN) {
                edges {
                  node {
                    id
                    author {
                      avatarUrl
                      login
                      url
                    }
                    bodyHTML
                    title
                    labels(first: 20) {
                      nodes {
                        name
                        description
                        color
                        id
                        url
                      }
                    }
                    milestone {
                      title
                      description
                      id
                      url
                    }
                    url
                  }
                }
              }
            }
          }`,
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
