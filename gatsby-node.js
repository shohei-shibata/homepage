const path = require(`path`)

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`src/templates/post-single.js`)
  const result = await graphql(`
    query {
      post {
        allPosts {
          data {
            slug
            title
            content
          }
        }
      }
    }
  `)
  result.data.post.allPosts.data.forEach(post => {
    createPage({
      path: `post/${post.slug}`,
      component: postTemplate,
      context: {
        title: post.title,
        body: post.content
      },
    })
  })
}