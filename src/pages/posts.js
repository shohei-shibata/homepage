import * as React from "react"
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'

const PostsPage = ({data}) => {
  const posts = data.post.allPosts.data
  return (
    <>
      <h1>Posts</h1>
      <ul>
        {posts.map(post => (
          <li>
            <Link to={`/post/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default PostsPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Posts"></Seo>
    </>
  )
}

export const query = graphql`
query {
  post {
    allPosts {
      data {
        slug
        title
      }
    }
  }
}
`