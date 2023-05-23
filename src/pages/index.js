import * as React from "react"
import Seo from '../components/seo'
import { graphql, Link } from 'gatsby'

const IndexPage = ({data}) => {
  const posts = data.post.allPosts.data
  return (
    <>
      <h1>Under Construction</h1>
      <p>My new website is still a work in progress... Please check back soon for more content!</p>
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

export default IndexPage

export const Head = () => {
  return (
    <>
      <Seo pageTitle="Home"></Seo>
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