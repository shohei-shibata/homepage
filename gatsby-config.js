/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Shohei Shibata`,
    siteUrl: `https://shoheishibata.com`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },{
    resolve: 'gatsby-source-graphql',
    options: {
      typeName: 'Post',
      fieldName: 'post',
      url: 'https://graphql.us.fauna.com/graphql',
      headers: {
        // Learn about environment variables: https://gatsby.dev/env-vars
        Authorization: `Bearer ${process.env.FAUNADB_SECRET}`,
      },
    }
  }
]
};