import * as React from "react"
import Seo from '../components/seo'
import { Link, graphql } from "gatsby"

const PostsPage = ({ data }) => {
  const posts = data.allMdx.nodes

  return (
    <>
      <h1 className="page-title-heading">Posts</h1>
      <hr className="page-title-hr" />
      {posts.map(post => (
        <div key={post.id}>
          <Link to={post.frontmatter.slug}>
            {post.frontmatter.title}
          </Link>
        </div>
      ))}
    </>
  )
}


export const query = graphql`
  query IndexPageQuery {
    allMdx {
      nodes {
        id
        frontmatter {
          slug
          title
        }
      }
    }
  }
`

export default PostsPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Posts"></Seo>
    </>
  )
}